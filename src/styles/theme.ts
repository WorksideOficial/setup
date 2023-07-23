import { extendTheme } from "@chakra-ui/react"
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: 'normal'
})

export const theme = extendTheme({
  colors: {
    black: {
      "500": "#000000"
    },
    white: {
      "100": "#FFF"
    },
    gray: {
      "500": "#47585B",
      "400": "#999999",
      "300": "#DADADA",
      "100": "#F5F8FA"
    },
    green: {
      "500": "#1bbc81"
    }
  },
  fonts: {
    headeing: poppins.style.fontFamily,
    body: poppins.style.fontFamily
  },
  styles: {
    global: {
      body: {
        bg: 'gray.100',
        color: 'gray.500'
      }
    }
  },
});