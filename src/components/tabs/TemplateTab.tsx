'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC, useMemo } from 'react'

import S from './tabsStyles.module.scss'

interface Props {
  name: string
  path: string
}

export const TemplateTab: FC<Props> = ({ name, path }) => {
  const pathname = usePathname()

  const selected = useMemo(() => {
    if (path === pathname) return true

    return false
  }, [pathname])

  return (
    <Link
      href={path}
      className={`${S.content} ${selected ? S.selected : ''}`}
      data-replace={name}
    >
      <p className={S.text}>{name}</p>
    </Link>
  )
}
