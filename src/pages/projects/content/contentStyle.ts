import styled from 'styled-components'

const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 80px);
  padding: 30px;
  overflow-y: auto;
  position: absolute;
  top: 80px;
  left: 0;
  z-index: 2;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 75px 0;
`

export { Container }
