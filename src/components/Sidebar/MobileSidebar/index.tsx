'use client'

import { SidebarItem } from '../../Item';
import styles from './styles.module.scss'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface SidebarItemsProps {
    name: string
    path: string
}

interface MobileSidebarProps {
    onClick: () => void
}

export const MobileSidebar = ({ onClick }: MobileSidebarProps) => {
    const router = useRouter()
    const [lastPath, setLastPath] = useState<string>("");
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth <= 767);
        };
        checkIsMobile();
        window.addEventListener('resize', checkIsMobile);
        return () => window.removeEventListener('resize', checkIsMobile);
    }, []);

    const items: SidebarItemsProps[] = [
        { name: "Бытовая техника", path: "/" },
        { name: "Гаджеты, приставки и носимая электроника", path: "/gadgets" },
        { name: "Инструменты", path: "/tools-page" },
        { name: "Кабели, разъёмы, переходники", path: "/cables" },
        { name: "Комплектующие для ПК", path: "/pc-components" },
        { name: "Майнинг", path: "/mining" },
        { name: "Мебель", path: "/furniture" },
        { name: "Микрокомпьютеры и комплектующие", path: "/microcomputers" },
        { name: "Аудиотехника", path: "/audiotech" },
        { name: "Мобильная связь", path: "/mobile-communications" },
        { name: "Мониторы и аксессуары", path: "/monitors-accessories" },
        { name: "Настольные ПК и моноблоки", path: "/desktop-pcs-monoblocks" }
    ];

    const handleMouseLeave = () => {
        if (lastPath && !isMobile) {
            router.push(lastPath);
        }
    };

    return (
        <aside className={styles.mobileSidebar} onMouseLeave={handleMouseLeave}>
            <div className={styles.sidebarContent}>
                {items.map((item) => (
                    <SidebarItem key={item.path} item={item} setLastPath={setLastPath} onClick={onClick} />
                ))}
            </div>
        </aside>
    );
}
