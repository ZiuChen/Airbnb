import { memo } from 'react'
import { MoreWrapper } from './style'
// @ts-ignore
import { ReactComponent as ChevronRight } from '@/assets/svg/chevron-right.svg'

export interface MoreProps {
  name?: string
}

const More = memo((props?: MoreProps) => {
  const info = props?.name ? `显示更多${props.name}` : '显示更多'
  return (
    <MoreWrapper withColor={!!props?.name}>
      <span title={info}>
        {info}
        <ChevronRight />
      </span>
    </MoreWrapper>
  )
})

export default More
