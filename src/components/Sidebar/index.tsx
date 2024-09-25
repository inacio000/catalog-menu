'use client'

import { SidebarItem } from '../Item';
import styles from './styles.module.scss'
import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface SidebarItemsProps {
    name: string
    path: string
}

export function Sidebar() {
    const router = useRouter()
    const [lastPath, setLastPath] = useState<string>("");

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
        if (lastPath) {
            router.push(lastPath);
        }
    }

    return (
        <aside className={styles.sidebarContainer} onMouseLeave={handleMouseLeave}>
            <p>Главная <span> / Каталог</span></p>

            <div>
                {items.map((item) => (
                    <SidebarItem
                        key={item.path}
                        item={item}
                        setLastPath={setLastPath}
                    />
                ))}
            </div>
        </aside>
    );
}
