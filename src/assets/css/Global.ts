import { createGlobalStyle } from 'styled-components'

const GlobalCSS = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  a{
    text-decoration: none;
  }

  @font-face {
  font-family: "Grotesque";
  src: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/397014/BrandonGrotesque-Regular.eot"), url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/397014/BrandonGrotesque-Regular.ttf"), url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/397014/BrandonGrotesque-Regular.woff");
  font-weight: normal;
}

@font-face {
  font-family: "Grotesque Black";
  src: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/397014/BrandonGrotesque-Black.eot"), url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/397014/BrandonGrotesque-Black.ttf"), url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/397014/BrandonGrotesque-Black.woff");
  font-weight: bold;
}

`

export default GlobalCSS
