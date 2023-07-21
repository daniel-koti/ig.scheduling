import { styled, Heading, Text } from '@ignite-ui/react'

export const Container = styled('div', {
  height: '100vh',
  maxWidth: 'calc(100vw - (100vw - 1160px) / 2)',
  marginLeft: 'auto',
  display: 'flex',
  alignItems: 'center',
  gap: '$20',
})

export const Hero = styled('div', {
  maxWidth: 480,

  padding: '0 $10',

  '@media(max-width: 600px)': {
    width: '100%',
    margin: 'auto',
  },

  [`> ${Heading}`]: {
    '@media(max-width: 600px)': {
      fontSize: '$6xl',
    },
  },

  [`> ${Text}`]: {
    marginTop: '$2',
    color: '$gray200',
    fontSize: '$xl',
  },
})

export const Preview = styled('div', {
  overflow: 'hidden',
  paddingRight: '$8',

  '@media(max-width: 600px)': {
    display: 'none',
  },
})
