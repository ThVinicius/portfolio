import styled from 'styled-components'

const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 80px);
  padding: 50px;
  position: absolute;
  top: 80px;
  left: 0;
  display: flex;
  overflow-y: auto;

  @media (max-width: 420px) {
    flex-direction: column;
    align-items: center;
    gap: 50px;
  }
`

export { Container }
