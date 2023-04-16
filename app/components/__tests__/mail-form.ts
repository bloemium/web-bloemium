import type {ReactHTMLElement} from 'react'
import {MailForm} from '../mail-form'

describe('Mail form', () => {
  test('Should return a mailto to info address', () => {
    const result = MailForm() as ReactHTMLElement<HTMLAnchorElement>

    expect(result.props.href).toBe('mailto:info@bloemium.com')
  })
})
