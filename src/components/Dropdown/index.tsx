import { MouseEvent, memo } from 'react'
import { DropdownWrapper, DropdownItemWrapper } from './style'

export interface DropdownProps {
  list: DropdownItem[]
}

export interface DropdownItem {
  id: number
  name: string
  onClick?: (event: MouseEvent<HTMLDivElement>) => void
}

const Dropdown = memo((props: DropdownProps) => {
  const list = props.list || []
  return (
    <DropdownWrapper>
      {list.map((item) => (
        <DropdownItemWrapper key={item.id} onClick={(e) => item?.onClick && item.onClick(e)}>
          {item.name}
        </DropdownItemWrapper>
      ))}
    </DropdownWrapper>
  )
})

export default Dropdown
