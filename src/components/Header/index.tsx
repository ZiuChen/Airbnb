import { memo, ReactElement } from 'react'
import { HeaderWrapper, LeftWrapper, CenterWrapper, RightWrapper } from './style'

export interface HeaderProps {
  left?: ReactElement
  center?: ReactElement
  right?: ReactElement
}

const Header = memo((props: HeaderProps) => {
  return (
    <HeaderWrapper>
      <LeftWrapper>{props?.left}</LeftWrapper>
      <CenterWrapper>{props?.center}</CenterWrapper>
      <RightWrapper>{props?.right}</RightWrapper>
    </HeaderWrapper>
  )
})

export default Header
