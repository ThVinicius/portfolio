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

  img {
    width: 100%;
    height: 70%;
    border-radius: 5px 5px 0 0;
  }
`

export { Container }
