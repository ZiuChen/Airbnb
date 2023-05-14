import styled from 'styled-components'
// @ts-ignore
import { ReactComponent as Earth } from '@/assets/svg/earth.svg'
// @ts-ignore
import { ReactComponent as Menu } from '@/assets/svg/menu.svg'
// @ts-ignore
import { ReactComponent as User } from '@/assets/svg/user.svg'

export const HeaderRightWrapper = styled.div`
  display: flex;
  align-items: center;

  > * {
    padding: 15px;
    cursor: pointer;
  }
`

export const UserBarWrapper = styled.span`
  display: flex;
  align-items: center;
  border: 1px solid ${(props) => props.theme.color.borderColor};
  border-radius: 50px;
  padding: 10px;
  ${(props) => props.theme.mixin.boxShadow}

  > * {
    padding: 0 5px;
  }
`

export const EarthWrapper = styled(Earth)`
  height: 16px !important;
  width: 16px !important;
  border-radius: 50%;

  :hover {
    background-color: ${(props) => props.theme.color.hoverBgColor};
  }
`

export const MenuWrapper = styled(Menu)``

export const UserWrapper = styled(User)`
  height: 25px !important;
  width: 25px !important;
  color: ${(props) => props.theme.textColor.secondaryColor};
`

export const DropdownWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 55px;
`

export const TipWrapper = styled.span`
  border-radius: 50px;

  :hover {
    background-color: ${(props) => props.theme.color.hoverBgColor};
  }
`
