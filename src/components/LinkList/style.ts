import styled from 'styled-components'

export const LinkListWrapper = styled.div`
  & {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 5px;
  }

  & > div {
    font-weight: bold;
    margin-bottom: 20px;
  }

  & > a {
    font-size: ${(props) => props.theme.fontSize.small};
    color: ${(props) => props.theme.textColor.secondaryColor};
    text-decoration: none;
    margin-bottom: 10px;

    &:hover {
      text-decoration: underline;
    }
  }
`
