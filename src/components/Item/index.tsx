'use client'

import styles from "./styles.module.scss"

import { usePathname, useRouter } from "next/navigation"
import { useMemo } from "react"

export interface SidebarItemsProps {
  name: string
  path: string
}

export const SidebarItem = ({ item }: { item: SidebarItemsProps }) => {
  const { name, path } = item
  const router = useRouter()
  const pathName = usePathname()


  const handlePage = () => {
    router.push(path)
  }

  const isActive = useMemo(() => {
    return path === pathName
  }, [path, pathName])

  return (
    <>
      <nav
        className={`${styles.sidebar_content}`}
        onClick={handlePage}
      >
        <p className={`${isActive && `${styles.sidebar_active}`}`}>
          {name}
        </p>
      </nav>
    </>
  )
}
