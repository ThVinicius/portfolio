import styled from 'styled-components'

const Container = styled.form`
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 7px;

  input {
    height: 35px;
    font: normal 400 18px 'Roboto', sans-serif;
    padding-left: 9px;
  }
`

const Box = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
`

const Input = styled.input`
  width: 100%;
`

const TextArea = styled.textarea`
  resize: none;
  width: 100%;
  height: 200px;
  font: normal 400 18px 'Roboto', sans-serif;
  padding-left: 9px;
`

const BtnSend = styled.button`
  width: 100%;
  height: 50px;
  border: none;
  font: normal 400 18px 'Roboto', sans-serif;
  background-color: green;
  color: #fff;
`

const Title = styled.h1`
  font: normal 700 22px 'Roboto', sans-serif;
  color: #fff;
  text-align: center;
  margin-bottom: 30px;
`

export { Container, Box, TextArea, BtnSend, Input, Title }
