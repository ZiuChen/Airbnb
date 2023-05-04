import { memo, useState } from 'react'
import Dropdown, { DropdownItem } from '../Dropdown'
// @ts-ignore
import { ReactComponent as Earth } from '@/assets/svg/earth.svg'
// @ts-ignore
import { ReactComponent as Menu } from '@/assets/svg/menu.svg'
// @ts-ignore
import { ReactComponent as User } from '@/assets/svg/user.svg'
import { HeaderRightWrapper } from './style'
import { useEventListener } from '@/hooks'

const UserBar = memo(() => {
  const [dropdownVisible, setDropdownVisible] = useState(false)
  const dropdownList: DropdownItem[] = [
    { id: 0, name: '注册' },
    { id: 1, name: '登录' },
    { id: 2, name: '来爱彼迎发布房源' },
    { id: 3, name: '帮助' }
  ]

  useEventListener('click', () => setDropdownVisible(false), window, {
    capture: true
  })

  function handleUserBarClick() {
    setDropdownVisible(true)
  }

  return (
    <>
      <span className="user-bar" onClick={() => handleUserBarClick()}>
        <Menu className="menu" />
        <User className="user" />
      </span>
      {dropdownVisible && (
        <div className="dropdown">
          <Dropdown list={dropdownList} />
        </div>
      )}
    </>
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
