import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../button/Button';
import styles from './Header.module.scss'
import flagCA from '../../assets/img/flags/flag-ca.svg'
import flagFR from '../../assets/img/flags/flag-fr.svg'
import logoHeader from '../../assets/img/logo/logo.svg'

import { useTranslation } from 'react-i18next';
import '../../modules/i18n';

const Header = () => {
    const [openFlag, setOpenFlag] = useState(false)
    const [language, setLanguage] = useState('canada')
    const [submenu, setSubmenu] = useState(false)

    const { t } = useTranslation();
    
    return (
        <header className={`${submenu ? styles.responsive_menu : ''}`}>
            <div className={styles.header_container}>
                <div className={styles.header_logo}>
                    <img src={logoHeader} alt="Header Logo Cuppa" />
                </div>
                
                <nav>
                    <ul className={styles.nav_menu}>

                        <Link to='/'>{t('Header.Home')}</Link>
                        <Link to='/aboutUs'>{t('Header.About_us')}</Link>
                        <Link to='/contact'>{t('Header.Contact')}</Link>
                    
                        <Button text={t('Header.Portal')} />
                        
                        <Button text={t('Header.Demo')} />
                    </ul>
                </nav>
                    
                <div className={styles.languages} onClick={() => setOpenFlag(!openFlag)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="non-zero" d="M13.069 5.157L8.384 9.768a.546.546 0 0 1-.768 0L2.93 5.158a.552.552 0 0 0-.771 0a.53.53 0 0 0 0 .759l4.684 4.61a1.65 1.65 0 0 0 2.312 0l4.684-4.61a.53.53 0 0 0 0-.76a.552.552 0 0 0-.771 0"/></svg>
        
                    <div className={styles.active_flag}>
                        {
                            language == 'canada' ? (
                                <img src={flagCA} alt="Canada Flag" />
                            ) : (
                                <img src={flagFR} alt="France Flag" />
                            )
                        }

                        {
                            openFlag && language == 'canada' ?
                            (
                                <div className={styles.submenu_flag} onClick={() => setLanguage('france')}>
                                    <img src={flagFR} alt="France Flag" />
                                </div>
                            ) : openFlag && language == 'france' ?
                            (
                                <div className={styles.submenu_flag} onClick={() => setLanguage('canada')}>
                                    <img src={flagCA} alt="Canada Flag" />
                                </div>
                            ) : ('')
                        }
                    </div>
                </div>
        
                <div className={styles.open_menu} onClick={() => setSubmenu(!submenu)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6.001h18m-18 6h18m-18 6h18"/></svg>
                </div>
            </div>
        </header>
    )
}
export default Header;