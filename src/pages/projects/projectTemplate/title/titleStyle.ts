import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  h1 {
    font-family: 'Grotesque Black', sans-serif;
    font-size: 30px;
  }

  span {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 15px;
  }

  h6 {
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
  }
`

const Badge = styled.div`
  width: fit-content;
  padding: 10px 20px;
  border-radius: 5px;
  background-color: red;
  color: #fff;
`

export { Container, Badge }
