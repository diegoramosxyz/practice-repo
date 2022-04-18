import Layout from '../components/Layout'
import {
  gray,
  blue,
  red,
  green,
  grayDark,
  blueDark,
  redDark,
  greenDark,
} from '@radix-ui/colors'

// Spread the scales in your light and dark themes
import { createStitches } from '@stitches/react'

const { styled, createTheme } = createStitches({
  theme: {
    colors: {
      ...gray,
      ...blue,
      ...red,
      ...green,
    },
  },
})

const darkTheme = createTheme({
  colors: {
    ...grayDark,
    ...blueDark,
    ...redDark,
    ...greenDark,
  },
})

// Use the colors in your styles
const Button = styled('button', {
  backgroundColor: '$blue4',
  color: '$blue11',
  borderColor: '$blue7',
  '&:hover': {
    backgroundColor: '$blue5',
    borderColor: '$blue8',
  },
})

export default function Home() {
  return (
    <Layout>
      <h1 className="reservoir-h1 text-center">Hello world!</h1>
      <p className="text-2xl font-bold underline text-center">Lorem ipsum</p>
      <Button>light theme button</Button>
      <br />
      <Button className={darkTheme}>dark theme button</Button>
    </Layout>
  )
}
