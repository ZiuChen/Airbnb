import { memo } from 'react'
import { FooterWrapper } from './style'
import LinkList from '@/components/LinkList'
import footer from '@/assets/data/footer.json'

const Footer = memo(() => {
  return (
    <FooterWrapper>
      {footer.map((linkList) => (
        // @ts-ignore
        <LinkList key={linkList.title} title={linkList.title} links={linkList.links} />
      ))}
    </FooterWrapper>
  )
})

export default Footer
