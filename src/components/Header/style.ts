import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  & {
    display: flex;
    align-items: center;
    height: 80px;
    font-size: ${(props) => props.theme.fontSize.smaller};
  }

  .left,
  .right {
    flex: 1;
    display: flex;
  }

  .left {
    justify-content: flex-start;
    margin-left: 25px;
  }

  .right {
    justify-content: flex-end;
    margin-right: 25px;
  }
`
