import styled from 'styled-components'

export const HeaderRightWrapper = styled.div`
  & {
    display: flex;
    align-items: center;
  }

  & > * {
    padding: 15px;
    cursor: pointer;
  }

  .tip,
  .locale {
    &:hover {
      background-color: ${(props) => props.theme.color.hoverBgColor};
    }
  }

  .tip {
    border-radius: 50px;
  }

  .locale {
    height: 16px !important;
    width: 16px !important;
    border-radius: 50%;
  }

  .user-bar {
    display: flex;
    align-items: center;
    border: 1px solid ${(props) => props.theme.color.borderColor};
    border-radius: 50px;
    padding: 10px;
    ${(props) => props.theme.mixin.boxShadow}
  }

  .user-bar > * {
    padding: 0 5px;
  }

  .user {
    height: 25px !important;
    width: 25px !important;
    color: ${(props) => props.theme.textColor.secondaryColor};
  }

  .dropdown {
    position: absolute;
    right: 0;
    top: 55px;
  }
`
