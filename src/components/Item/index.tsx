// SidebarItem.tsx
import React, { useMemo } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import styles from './styles.module.scss';
import ArrowRightIcon from '@/assets/components/arrowRightIcon';

export interface SidebarItemsProps {
  name: string;
  path: string;
}

export const SidebarItem = ({
  item,
  setLastPath,
  onClick
}: {
  item: SidebarItemsProps;
  setLastPath: (path: string) => void
  onClick?: () => void;
}) => {
  const { name, path } = item;
  const router = useRouter();
  const pathName = usePathname();

  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 767;

  const handlePage = () => {
    router.push(path);
    setLastPath(path);
    onClick
  };

  const isActive = useMemo(() => path === pathName, [path, pathName]);

  return (
    <nav
      className={`${styles.sidebar_content} ${isActive && styles.sidebar_active}`}
      onClick={isMobile ? handlePage : undefined}
      onMouseEnter={!isMobile ? handlePage : undefined}
    >
      <div className={styles.item}>
        <span>{name}</span>
      </div>
    </nav>
  );
};
