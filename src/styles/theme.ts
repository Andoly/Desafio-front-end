export default {
  grid: {
    container: '128rem',
    gutter: '3.1rem'
  },
  font: {
    family:
      "Open Sans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif",
    light: 300,
    normal: 400,
    bold: 600,
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '4.8rem',
      huge: '5.2rem'
    }
  },
  colors: {
    black: '#363636',
    lightGray: '#EEEEEE',
    darkGray: '#746A6A',
    gray: '#7F7575',
    borderGray: '#E1E1E1',
    blue: '#3486E6',
    lightBlue: '#54A3FF',
    white: '#FFFFFF'
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.2rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  }
} as const
