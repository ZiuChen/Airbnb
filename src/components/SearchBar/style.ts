import styled from 'styled-components'
// @ts-ignore
import { ReactComponent as Search } from '@/assets/svg/search.svg'

export const SearchBarWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 10px;
  width: 300px;
  border: 1px solid ${(props) => props.theme.color.borderColor};
  border-radius: 20px;
`

export const SearchInputWrapper = styled.input`
  width: 100%;
  height: 100%;
  // reset input style
  border: none;
  margin: 0;
  padding: 0;
  background: none;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  color: inherit;
  box-shadow: none;
  outline: none;
  appearance: none;
  -webkit-appearance: none;
`

export const SearchPlaceholderWrapper = styled.span`
  position: absolute;
  pointer-events: none;
  height: 16px;
  color: ${(props) => props.theme.textColor.secondaryColor};
  top: 0;
  bottom: 0;
  left: 10px;
  margin: auto;
`

export const SearchBtnWrapper = styled(Search)`
  position: absolute;
  padding: 5px;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
  color: ${(props) => props.theme.color.bgColor};
  background-color: ${(props) => props.theme.color.primaryColor};
  border-radius: 50%;
  cursor: pointer;
`
