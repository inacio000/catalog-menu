import styles from './styles.module.scss'

import BurgerMenu from '@/assets/components/burger'
import Logo from '@/assets/components/logo'
import SearchIcon from '@/assets/components/searchIcon'
import { Button } from '../../Button'

interface MobileHeaderProps {
    onClose: () => void;
}

export const MobileHeader = ({ onClose }: MobileHeaderProps) => {
    return (
        <div className={styles.mobileHeader}>
            <div className={styles.head}>
                <Logo />
                <div className={styles.closeButton} onClick={onClose}>
                    ✕
                </div>
            </div>

            <div className={styles.info}>
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
        </div>
    )
}