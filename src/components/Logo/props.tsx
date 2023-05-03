export interface LogoProps {
  mode?: 'mini' | 'full'
  color?: 'primary' | 'white'
}

export const defaultProps = {
  mode: 'full',
  color: 'primary'
} as LogoProps
