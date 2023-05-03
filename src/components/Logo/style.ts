import styled from 'styled-components'
import { LogoProps } from './props'

export const LogoWrapper = styled.div<LogoProps>`
  svg {
    color: ${(props) =>
      props.color === 'white' ? props.theme.color.bgColor : props.theme.color.primaryColor};
  }
`
