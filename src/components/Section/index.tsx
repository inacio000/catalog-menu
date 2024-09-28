'use client'

import CartIcon from '@/assets/components/cartIcon'
import { SearchInput } from './SearchInput/SearchInput'
import styles from './styles.module.scss'
import RowDownIcon from '@/assets/components/rowDownIcon'
import ArrowRightIcon from '@/assets/components/arrowRightIcon'
import { useMediaQuery } from '@/hook/useMediaQuery'
import { useState } from 'react'
import { MobileSidebar } from '../Sidebar/MobileSidebar'
import { useMobileMenu } from '@/hook/useMobileMenu'

export const Section = () => {
    const {
        handleBurgerClick,
        isMobile,
        isMobileHeaderOpen,
        setIsMobileHeaderOpen
    } = useMobileMenu()

    return (
        <>
            <section className={styles.section_content}>
                <h1>Каталог</h1>
                <SearchInput />
                <div className={styles.price_cart_section}>
                    <div className={styles.price_section}>
                        <p>
                            Цена в ₽
                            <RowDownIcon />
                        </p>
                        <p>Курс $: <span>96,67</span></p>
                    </div>
                    <div className={styles.cart_section}>
                        <CartIcon />
                        <p>Корзина</p>
                    </div>
                </div>
            </section>
            <span
                className={styles.arrow}
                onClick={handleBurgerClick}
            >
                <ArrowRightIcon />
            </span>
            {isMobile && isMobileHeaderOpen && (
                <MobileSidebar onClick={() => handleBurgerClick()} />
            )}
        </>
    )
}
