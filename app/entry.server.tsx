import {PassThrough} from 'stream'
import type {EntryContext} from '@remix-run/node'
import {Response} from '@remix-run/node'
import {RemixServer} from '@remix-run/react'
import {renderToPipeableStream} from 'react-dom/server'

const ABORT_DELAY = 5000

// eslint-disable-next-line max-params
export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
) {
  return new Promise((resolve, reject) => {
    let didError = false

    // eslint-disable-next-line @typescript-eslint/unbound-method
    const {pipe, abort} = renderToPipeableStream(
      <RemixServer context={remixContext} url={request.url} />,
      {
        onShellReady: () => {
          const body = new PassThrough()

          responseHeaders.set('Content-Type', 'text/html')

          resolve(
            new Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode,
            }),
          )

          pipe(body)
        },
        onShellError: err => {
          reject(err)
        },
        onError: error => {
          didError = true

          console.error(error)
        },
      },
    )

    setTimeout(abort, ABORT_DELAY)
  })
}
