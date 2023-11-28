import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {

  global: props => ({
    body: {
      bg: mode('#F8F8F8','#1c1c1c')(props),
      color: mode('#1E1E1E', '#F8F8F8')(props),
    },
  })
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        fontWeight: "800",
        lineHeight: "1.2",
        letterSpacing: "-2px",
        textTransform:"uppercase"
      }
    }
  },
  Container: {
    variants: {
      'grain-bg':{
        bgImage: " url('http://assets.iceable.com/img/noise-transparent.png')",
      },
      'main':{
        py:{
         base: "40px", md: "160px", xl:"200px"
        },
        px:{
         base: "24px", md: "30px", xl:"40px"
        },
        maxW:"1444px",
       },
      'content':{
       py:{
        base: "40px", md: "160px", xl:"140px"
       },
       px:{
        base: "24px", md: "30px", xl:"40px"
       },
       maxW:"1444px",
      },

    },
    baseStyle: {
      px:{
        base: "0px", md: "0px", xl:"0px"
       },
      maxW:"full",
    }
  },
  Box: {
    variants: {
      'grain-bg': {
        bgImage: " url('http://assets.iceable.com/img/noise-transparent.png')",
      }
    },
  },
  Text: {
    baseStyle: {
      fontSize: "18px",
    },
  },
  Button: {
    variants: {
      'btn-fill': props => ({
        bg: mode('transparent')(props),
        borderRadius: "0px",
        textTransform:"uppercase",
        px: 10,
        transition: "0.3s",
        border: '2px solid',
        borderColor: mode('black', 'white')(props),
        color: mode('black', 'white')(props),
        _hover: {
          px: 10,
          bg: mode("black", "white")(props),
          color: mode('white', 'black')(props),
        }
      }),
      'btn-green': {
        borderRadius: "0px",
        textTransform:"uppercase",
        px: 10,
        transition: "0.3s",
        border: '2px solid',
        borderColor: 'black',
        color: 'black',
        bg: 'transparent',
        _hover: {
          color: 'white',
          bg: 'black',
        }
      },
      'link': props => ({
        color: mode("black", "white")(props),
        textUnderlineOffset: 3,
        textDecorationThickness: 2,
        _hover: {
          color: mode("black", "white")(props),
          textDecorationThickness: 2,
        }
      }),
    },
  },
  Link: {
    variants: {
      'menu-link': props => ({
        _hover: {
          textDecorationThickness: 0,
          color: mode('black', 'white')(props),
        }
      })
    },
    baseStyle: props => ({
      color: mode('#888', '#9f9f9f')(props),
      _hover: {
        color: mode('#000', '#fff')(props),
      },
      textUnderlineOffset: 6,
      textDecorationThickness: 2,

    })
  },
  Divider:{
    baseStyle: props =>({
      borderColor: mode ('#bdbdbd', '#727272')(props),
      pb:"30px,"

    })
  }

}

const fonts = {
  heading: "Inter",
  body: "Inter"
}

const colors = {
  grassTeal: '#88ccca',
  deepPurple: '#7209b7',
  codeGreen: '#AAFF3F',
  pineGreen: '#29bf12',
  sunnyYellow: '#ffd000',
  mediumBlack: "888",
}

const config = {
  useSystemColorMode: true
}

const HoverConfig = {
  center: {
      width: '15px',
      height: '15px',
      transition: '150ms',
      backgroundColor: 'red',
  },
  ring: {
      width: '30px',
      height: '30px',
      transition: '150ms',
      borderColor: 'gray',
      borderWidth: '2px',
      borderStyle: 'dotted',
  },
  click: {
      center: {
          width: '10px',
          height: '10px',
          transition: '150ms',
          backgroundColor: 'red',
      },
      ring: {
          width: '45px',
          height: '45px',
          transition: '150ms',
          borderColor: 'gray',
          borderWidth: '2px',
          borderStyle: 'solid',
      },
  },
};

const theme = extendTheme({ config, styles, components, fonts, colors, HoverConfig })
export default theme
