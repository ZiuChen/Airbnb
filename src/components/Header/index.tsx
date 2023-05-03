import { memo, ReactElement } from 'react'
import { HeaderWrapper } from './style'

export interface HeaderProps {
  left?: ReactElement
  center?: ReactElement
  right?: ReactElement
}

const Header = memo((props: HeaderProps) => {
  return (
    <HeaderWrapper>
      <div className="left">{props?.left}</div>
      <div className="center">{props?.center}</div>
      <div className="right">{props?.right}</div>
    </HeaderWrapper>
  )
})

export default Header
