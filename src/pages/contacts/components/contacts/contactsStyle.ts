import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 35px;

  div {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  h1 {
    font: normal 700 22px 'Roboto', sans-serif;
    color: #fff;
  }

  h2 {
    font: normal 400 22px 'Roboto', sans-serif;
    color: #fff;
  }

  span {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 20px;
  }

  img {
    width: 35px;
    height: 35px;
  }
`

export { Container }
