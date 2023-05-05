import styled from 'styled-components'

export const TabsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

export const TabsItemWrapper = styled.div<{ isActive: boolean }>`
  color: ${({ isActive, theme }) => (isActive ? '#ffffff' : theme.color.textColor)};
  background-color: ${({ isActive, theme }) => (isActive ? theme.color.secondaryColor : '')};
  border: 1px solid ${({ theme }) => theme.color.borderColor};
  border-radius: 5px;
  padding: 10px 30px;
  margin: 5px;
  cursor: pointer;

  &:hover {
    ${({ theme }) => theme.mixin.boxShadow}
  }
`
