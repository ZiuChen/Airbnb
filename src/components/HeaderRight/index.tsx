import { memo, useState } from 'react'
import Dropdown, { DropdownItem } from '../Dropdown'

import {
  HeaderRightWrapper,
  UserBarWrapper,
  DropdownWrapper,
  EarthWrapper,
  MenuWrapper,
  UserWrapper,
  TipWrapper
} from './style'
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
      <UserBarWrapper onClick={() => handleUserBarClick()}>
        <MenuWrapper />
        <UserWrapper />
      </UserBarWrapper>
      {dropdownVisible && (
        <DropdownWrapper>
          <Dropdown list={dropdownList} />
        </DropdownWrapper>
      )}
    </>
  )
})

const HeaderRight = memo(() => {
  return (
    <HeaderRightWrapper>
      <TipWrapper>来爱彼迎发布房源</TipWrapper>
      <EarthWrapper />
      <UserBar />
    </HeaderRightWrapper>
  )
})

export default HeaderRight
