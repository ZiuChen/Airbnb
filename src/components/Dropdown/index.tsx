import { MouseEvent, memo } from 'react'
import { DropdownWrapper } from './style'

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
        <div className="item" key={item.id} onClick={(e) => item?.onClick && item.onClick(e)}>
          {item.name}
        </div>
      ))}
    </DropdownWrapper>
  )
})

export default Dropdown
