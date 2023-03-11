import styled from 'styled-components'

interface ContainerProps {
  flip: 'rotateY(0deg)' | 'rotateY(180deg)'
}

const Container = styled.div<ContainerProps>`
  width: 500px;
  height: 500px;
  transition: all 0.5s;
  transform-style: preserve-3d;
  position: relative;
  transform: ${props => props.flip};
  box-shadow: 3px 1px 10px 0px rgba(0, 0, 0, 0.75);
  border: 3px solid #2e0854;
  border-radius: 5px;

  img {
    width: 100%;
    height: 70%;
  }
`

export { Container }
