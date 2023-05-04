import { memo } from 'react'
import { LinkListWrapper } from './style'
import { LinkListProps } from './props'

const LinkList = memo((props: LinkListProps) => {
  console.log(props.links)
  return (
    <LinkListWrapper>
      <div>{props.title}</div>
      {props.links.map((linkItem) => (
        <a key={linkItem.title} href={linkItem.link} target="_blank" rel="noreferrer">
          {linkItem.title}
        </a>
      ))}
    </LinkListWrapper>
  )
})

export default LinkList
export * from './props'
