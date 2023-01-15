import styled from 'styled-components'

const Container = styled.div`
  width: 100vw;
  padding: 20px;
  height: calc(100vh - 80px);
  display: flex;
  justify-content: space-between;
`

const Label = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;

  h2 {
    font: normal 700 40px 'Lexend Deca', sans-serif;
  }

  h1 {
    font: normal 700 50px 'Exo 2', sans-serif;
    color: #fff;
    overflow: hidden;
    border-right: 0.15em solid orange;
    white-space: nowrap;
    margin: 0 auto;
    animation: typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite;
  }

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: orange;
    }
  }
`

const Box = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: flex-end;
  padding-bottom: 20px;
`

const Image = styled.img`
  width: 550px;
  height: 400px;
  border-radius: 86% 14% 50% 50% / 87% 72% 28% 13%;
  z-index: 1;
`

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  text-decoration: none;
  color: #333333;
  font-size: 18px;
  border-radius: 0px;
  width: 200px;
  height: 40px;
  font-weight: bold;
  border: 2px solid #333333;
  transition: 0.3s;
  box-shadow: 5px 5px 0px 0px rgba(51, 51, 51, 1);
  background-color: #ffffff;
  margin-top: 40px;

  :hover {
    box-shadow: 0 0 #333;
    color: #fff;
    background-color: #333;
  }
`

export { Container, Label, Image, Box, Button }