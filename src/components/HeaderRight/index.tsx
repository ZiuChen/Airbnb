import { memo } from 'react'
// @ts-ignore
import { ReactComponent as Earth } from '@/assets/svg/earth.svg'
// @ts-ignore
import { ReactComponent as Menu } from '@/assets/svg/menu.svg'
// @ts-ignore
import { ReactComponent as User } from '@/assets/svg/user.svg'
import { HeaderRightWrapper } from './style'

const UserBar = memo(() => {
  return (
    <span className="user-bar">
      <Menu className="menu" />
      <User className="user" />
    </span>
  )
})

const HeaderRight = memo(() => {
  return (
    <HeaderRightWrapper>
      <span className="tip">来爱彼迎发布房源</span>
      <Earth className="locale" />
      <UserBar />
    </HeaderRightWrapper>
  )
})

export default HeaderRight
