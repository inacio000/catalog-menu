'use client'

import styles from './styles.module.scss'

import BurgerMenu from '@/assets/components/burger'
import Logo from '@/assets/components/logo'
import SearchIcon from '@/assets/components/searchIcon'
import { Button } from '../Button'
import { useState } from 'react'
import { MobileHeader } from './MobileHeader'
import { useMediaQuery } from '@/hook/useMediaQuery'
import { useMobileMenu } from '@/hook/useMobileMenu'

export const Header = () => {
    const {
        handleBurgerClick,
        isMobile,
        isMobileHeaderOpen,
        setIsMobileHeaderOpen
    } = useMobileMenu()

    return (
        <header className={styles.header_section}>
            <Logo />
            <div className={styles.info}>
                <div>
                    <nav>
                        <ul>
                            <li>каталог</li>
                            <li>дистрибьюция</li>
                            <li>сервисы</li>
                            <li>производство</li>
                            <li>разработка</li>
                        </ul>
                    </nav>
                    <div>
                        <p>8 (800) 551 75 75</p>
                        <SearchIcon />
                        <Button
                            label="ВОЙТИ В B2B"
                            variant="outlined"
                        />
                        <Button
                            label="СТАТЬ ПАРТНЕРОМ"
                            variant="filled"
                        />
                        <img src="" alt="" />
                    </div>
                </div>
                <span onClick={handleBurgerClick}>
                    <BurgerMenu />
                </span>
            </div>
            {isMobile && isMobileHeaderOpen && (
                <MobileHeader onClose={() => setIsMobileHeaderOpen(false)} />
            )}
        </header>
    )
}
