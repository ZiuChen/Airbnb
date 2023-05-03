import { ChangeEvent, memo, useState } from 'react'
import { SearchBarWrapper } from './style'
// @ts-ignore
import { ReactComponent as Search } from '@/assets/svg/search.svg'

const SearchBar = memo(() => {
  const [searchValue, setSearchValue] = useState('')

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    setSearchValue(e.target.value)
  }

  return (
    <SearchBarWrapper>
      <input
        className="search-input"
        type="text"
        value={searchValue}
        onChange={(e) => handleInputChange(e)}
      />
      {!searchValue && <span className="search-placeholder">搜索房源和体验</span>}
      <Search className="search-btn" />
    </SearchBarWrapper>
  )
})

export default SearchBar
