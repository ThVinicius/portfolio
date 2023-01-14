import styled from 'styled-components'

interface TabsProps {
  selected: boolean
}

const Container = styled.div<TabsProps>`
  overflow: hidden;
  position: relative;
  display: inline-block;
  padding-bottom: 5px;
  font: normal 400 22px 'Roboto', sans-serif;
  border-bottom: ${props => (props.selected ? 'solid 3px green' : 'none')};
  color: #fff;

  :hover {
    border-bottom: none;
  }

  ::before,
  ::after {
    content: '';
    position: absolute;
    width: 100%;
    left: 0;
  }

  ::before {
    background-color: #54b3d6;
    height: 2px;
    bottom: 0;
    transform-origin: 100% 50%;
    transform: scaleX(0);
    transition: transform 0.3s cubic-bezier(0.76, 0, 0.24, 1);
  }

  ::after {
    content: attr(data-replace);
    height: 100%;
    top: 0;
    transform-origin: 100% 50%;
    transform: translate3d(200%, 0, 0);
    transition: transform 0.3s cubic-bezier(0.76, 0, 0.24, 1);
    color: #54b3d6;
  }

  :hover::before {
    transform-origin: 0% 50%;
    transform: scaleX(1);
  }

  :hover::after {
    transform: translate3d(0, 0, 0);
  }

  p {
    display: inline-block;
    transition: transform 0.3s cubic-bezier(0.76, 0, 0.24, 1);
    padding-bottom: 5px;
  }

  :hover p {
    transform: translate3d(-200%, 0, 0);
  }
`

const TabsContainer = styled.div`
  display: flex;
  gap: 47px;
`

export { Container, TabsContainer }
