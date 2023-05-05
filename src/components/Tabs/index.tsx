import { memo, useState } from 'react'
import { TabsWrapper, TabsItemWrapper } from './style'

export interface TabsProps {
  list: string[]
  onTabChange?: (idx: number) => void
}

const Tabs = memo((props: TabsProps) => {
  const { list, onTabChange } = props
  const [activeIdx, setActiveIdx] = useState(0)

  function handleTabClick(idx: number) {
    setActiveIdx(idx)
    onTabChange && onTabChange(idx)
  }

  return (
    <TabsWrapper>
      {list.map((item, index) => (
        <TabsItemWrapper
          key={index}
          isActive={activeIdx === index}
          onClick={() => handleTabClick(index)}
        >
          {item}
        </TabsItemWrapper>
      ))}
    </TabsWrapper>
  )
})

export default Tabs
