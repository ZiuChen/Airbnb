import styled from 'styled-components'

export const DropdownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  border: 1px solid #ccc;
  border-radius: 15px;
  overflow: hidden;

  :hover {
    ${(props) => props.theme.mixin.boxShadow}
  }
`
export const DropdownItemWrapper = styled.div`
  padding: 15px 20px;

  :hover {
    background-color: ${(props) => props.theme.color.hoverBgColor};
  }
`
