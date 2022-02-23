import React from 'react'
import styled from 'styled-components'
import { render } from '@testing-library/react'
import 'jest-styled-components'


const FooterIconSocial = styled.a`
  color: white;
`

test('it works', () => {
  const container = render(<FooterIconSocial />)
  expect(container.firstChild).toMatchSnapshot()
  expect(container).toHaveStyleRule('color', 'white')
})



