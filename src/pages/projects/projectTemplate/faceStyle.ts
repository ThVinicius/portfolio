import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  backface-visibility: hidden;
`

const Info = styled.div`
  width: 100%;
  height: 30%;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h6 {
    text-align: center;
  }
`

const Title = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 15px;

  h1 {
    font-family: 'Grotesque Black', sans-serif;
    font-size: 30px;
  }
`

const Details = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;

  button {
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    background-color: #288ba8;
    color: #fff;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    display: flex;
    gap: 7px;
    align-items: center;
    cursor: pointer;

    img {
      width: 30px;
      height: 30px;
    }
  }
`

const Badge = styled.div`
  width: fit-content;
  padding: 10px 20px;
  border-radius: 5px;
  background-color: red;
  color: #fff;
`

export { Container, Details, Info, Title, Badge }
