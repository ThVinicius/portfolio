import styled from 'styled-components'
import { Container as Face } from '../face/faceStyle'

const Container = styled(Face)`
  transform: rotateY(180deg);
`

const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;
`

const Return = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;

  button {
    padding: 1px 10px;
    border: none;
    border-radius: 5px;
    background-color: #288ba8;
    color: #fff;
    font-family: 'Roboto', sans-serif;
    font-size: 19px;
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

const Build = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;

  h2 {
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    font-weight: 700;
  }

  span {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 5px;
  }

  img {
    width: fit-content;
    height: 30px;
  }
`

const DeployBadge = styled.a`
  padding: 5px;
  border-radius: 7px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #007acc;

  cursor: pointer;

  p {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    color: #fff;
  }

  img {
    width: 40px;
  }
`

const GithubBadge = styled(DeployBadge)`
  background-color: #404d59;
`

export { Container, Content, Return, Build, DeployBadge, GithubBadge }
