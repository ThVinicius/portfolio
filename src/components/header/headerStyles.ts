import styled from 'styled-components'

const Container = styled.header`
  width: 100vw;
  height: 80px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: end;
  background: #e6dada; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #274046,
    #e6dada
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #274046,
    #e6dada
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`

export { Container }
