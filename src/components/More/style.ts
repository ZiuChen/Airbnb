import styled from 'styled-components'

export const MoreWrapper = styled.div<{
  withColor?: boolean
}>`
  font-weight: bold;
  color: ${({ withColor, theme }) => (withColor ? theme.color.secondaryColor : '')};
  span {
    display: flex;
    align-items: center;
    width: fit-content;
    margin-left: 5px;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }

  svg {
    fill: ${({ withColor, theme }) => (withColor ? theme.color.secondaryColor : '')} !important;
  }
`
