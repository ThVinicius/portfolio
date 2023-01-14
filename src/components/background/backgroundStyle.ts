import styled from 'styled-components'

const Container = styled.ul`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  background: #4e54c8;
  overflow: hidden;

  @keyframes animate {
    0% {
      transform: translateY(0) rotate(0deg);
      opacity: 1;
      border-radius: 0;
    }
    100% {
      transform: translateY(-1000px) rotate(720deg);
      opacity: 0;
      border-radius: 50%;
    }
  }

  li {
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    background: rgba(255, 255, 255, 0.2);
    animation: animate 19s linear infinite;
  }

  li:nth-child(0) {
    left: 66%;
    width: 137px;
    height: 137px;
    bottom: -137px;
    animation-delay: 1s;
  }
  li:nth-child(1) {
    left: 69%;
    width: 184px;
    height: 184px;
    bottom: -184px;
    animation-delay: 1s;
  }
  li:nth-child(2) {
    left: 49%;
    width: 181px;
    height: 181px;
    bottom: -181px;
    animation-delay: 7s;
  }
  li:nth-child(3) {
    left: 16%;
    width: 183px;
    height: 183px;
    bottom: -183px;
    animation-delay: 12s;
  }
  li:nth-child(4) {
    left: 81%;
    width: 166px;
    height: 166px;
    bottom: -166px;
    animation-delay: 17s;
  }
  li:nth-child(5) {
    left: 47%;
    width: 140px;
    height: 140px;
    bottom: -140px;
    animation-delay: 25s;
  }
  li:nth-child(6) {
    left: 3%;
    width: 189px;
    height: 189px;
    bottom: -189px;
    animation-delay: 23s;
  }
  li:nth-child(7) {
    left: 75%;
    width: 123px;
    height: 123px;
    bottom: -123px;
    animation-delay: 25s;
  }
  li:nth-child(8) {
    left: 6%;
    width: 177px;
    height: 177px;
    bottom: -177px;
    animation-delay: 38s;
  }
  li:nth-child(9) {
    left: 45%;
    width: 174px;
    height: 174px;
    bottom: -174px;
    animation-delay: 8s;
  }
`

export { Container }
