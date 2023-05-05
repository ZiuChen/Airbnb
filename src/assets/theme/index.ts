import { createTheme } from '@mui/material'

export const theme = {
  color: {
    primaryColor: '#eb4c60',
    secondaryColor: '#00848a',
    hoverBgColor: '#f7f7f7',
    borderColor: '#dddddd',
    bgColor: '#ffffff'
  },
  textColor: {
    primaryColor: '#222222',
    secondaryColor: '#717171'
  },
  fontSize: {
    primary: '16px',
    larger: '18px',
    smaller: '14px'
  },
  mixin: {
    boxShadow: `transition: box-shadow 0.2s ease;
      &:hover {
        box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.2);
      }`
  }
}

export const muiTheme = createTheme()
