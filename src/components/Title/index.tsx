import { memo } from 'react'
import { TitleWrapper } from './style'

export interface TitleProps {
  title: string
  subTitle?: string
}

const Title = memo((props: TitleProps) => {
  return (
    <TitleWrapper>
      <h3 className="title">{props.title}</h3>
      <span className="sub-title">{props.subTitle}</span>
    </TitleWrapper>
  )
})

export default Title
