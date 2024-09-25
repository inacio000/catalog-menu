import styles from './styles.module.scss'

import BurgerMenu from '@/assets/components/burger'
import Logo from '@/assets/components/logo'
import SearchIcon from '@/assets/components/searchIcon'
import { Button } from '../Button'

export const Header = () => {
    return (
        <header className={styles.header_section}>
            <Logo />
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
                <BurgerMenu />
            </div>
        </header>
    )
}
