import { FC } from 'react'
import { ILinkDeploy } from '../../../../types/links'
import rocketIcon from '../../../../assets/images/rocket.svg'
import { DeployBadge } from './backFaceStyle'

interface IProps {
  link: ILinkDeploy
}

const LinkDeploy: FC<IProps> = ({ link }) => {
  const key = Object.keys(link)[0]
  const value = Object.values(link)[0] as string

  return (
    <DeployBadge href={value} target="_blank">
      <p>{key}</p>
      <img src={rocketIcon} alt="link deploy" style={{ height: '35px' }} />
    </DeployBadge>
  )
}

export default LinkDeploy
