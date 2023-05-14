import { memo } from 'react'
import { TitleWrapper, TitleContentWrapper, SubtitleWrapper } from './style'

export interface TitleProps {
  title: string
  subTitle?: string
}

const Title = memo((props: TitleProps) => {
  return (
    <TitleWrapper>
      <TitleContentWrapper>{props.title}</TitleContentWrapper>
      <SubtitleWrapper>{props.subTitle}</SubtitleWrapper>
    </TitleWrapper>
  )
})

export default Title
