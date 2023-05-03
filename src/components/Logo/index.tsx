import { memo } from 'react'
// @ts-ignore
import { ReactComponent as LogoMini } from '@/assets/svg/logo.svg'
// @ts-ignore
import { ReactComponent as LogoFull } from '@/assets/svg/logo-full.svg'
import { LogoProps, defaultProps } from './props'
import { LogoWrapper } from './style'

const Logo = memo((props: LogoProps = defaultProps) => {
  return (
    <LogoWrapper {...props}>
      {props?.mode === 'mini' ? <LogoMini></LogoMini> : <LogoFull></LogoFull>}
    </LogoWrapper>
  )
})

export default Logo
