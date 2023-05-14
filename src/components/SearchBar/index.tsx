import { ChangeEvent, memo, useState } from 'react'
import {
  SearchBarWrapper,
  SearchInputWrapper,
  SearchPlaceholderWrapper,
  SearchBtnWrapper
} from './style'

const SearchBar = memo(() => {
  const [searchValue, setSearchValue] = useState('')

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    setSearchValue(e.target.value)
  }

  return (
    <SearchBarWrapper>
      <SearchInputWrapper type="text" value={searchValue} onChange={(e) => handleInputChange(e)} />
      {!searchValue && <SearchPlaceholderWrapper>搜索房源和体验</SearchPlaceholderWrapper>}
      <SearchBtnWrapper />
    </SearchBarWrapper>
  )
})

export default SearchBar
