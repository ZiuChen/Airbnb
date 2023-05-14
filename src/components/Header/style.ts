import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  font-size: ${(props) => props.theme.fontSize.smaller};
`
export const LeftWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  margin-left: 25px;
`
export const CenterWrapper = styled.div``
export const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  margin-right: 25px;
`
