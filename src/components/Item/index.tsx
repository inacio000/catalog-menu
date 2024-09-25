'use client'

import styles from "./styles.module.scss"
import { usePathname, useRouter } from "next/navigation"
import { useMemo } from "react"

export interface SidebarItemsProps {
  name: string
  path: string
}

export const SidebarItem = ({ item, setLastPath }: { item: SidebarItemsProps, setLastPath: (path: string) => void }) => {
  const { name, path } = item
  const router = useRouter()
  const pathName = usePathname()

  const handlePage = () => {
    router.push(path)
    setLastPath(path)
  }

  const isActive = useMemo(() => {
    return path === pathName
  }, [path, pathName])

  return (
    <>
      <nav
        className={`${styles.sidebar_content}`}
        onMouseEnter={handlePage}
      >
        <p className={`${isActive && `${styles.sidebar_active}`}`}>
          {name}
        </p>
      </nav>
    </>
  )
}
