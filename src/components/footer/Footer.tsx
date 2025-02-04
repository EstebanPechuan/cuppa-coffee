import styles from './Footer.module.scss'
import logoFooter from '../../assets/img/logo/white-logo.svg'

import { useTranslation } from 'react-i18next';
import '../../modules/i18n';


const Footer=()=>{
    const { t } = useTranslation();

    return (
        <footer>
            <section className={styles.footer__container}>
                <div className={styles.footer__logo}>
                    <img src={logoFooter} alt="Logo Cuppa" />
                </div>
        
                <div className={styles.footer__contact}>
                    <div className={styles.footer__info}>
                        <h4>{t('Footer.Contacts.Title')}</h4>
            
                        <ul className={styles.footer__phone}>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 28 28"><path fill="currentColor" d="M7 4.75A2.75 2.75 0 0 1 9.75 2h8.5A2.75 2.75 0 0 1 21 4.75v18.5A2.75 2.75 0 0 1 18.25 26h-8.5A2.75 2.75 0 0 1 7 23.25zM12.25 21a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5z"/></svg>
            
                                {t('Footer.Contacts.Photocall')}
                            </li>
            
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="currentColor" d="M128 24a104 104 0 0 0 0 208c21.51 0 44.1-6.48 60.43-17.33a8 8 0 0 0-8.86-13.33C166 210.38 146.21 216 128 216a88 88 0 1 1 88-88c0 26.45-10.88 32-20 32s-20-5.55-20-32V88a8 8 0 0 0-16 0v4.26a48 48 0 1 0 5.93 65.1c6 12 16.35 18.64 30.07 18.64c22.54 0 36-17.94 36-48A104.11 104.11 0 0 0 128 24m0 136a32 32 0 1 1 32-32a32 32 0 0 1-32 32"/></svg>
            
                                {t('Footer.Contacts.Email')}
                            </li>
            
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="-2 -2 24 24"><path fill="currentColor" d="M2.252 8A8.014 8.014 0 0 0 2 10c0 .69.088 1.36.252 2H5.1a19.83 19.83 0 0 1 0-4zm.818-2h2.346c.266-1.217.65-2.307 1.121-3.214A8.035 8.035 0 0 0 3.07 6m14.678 2H14.9a19.83 19.83 0 0 1 0 4h2.848a8.047 8.047 0 0 0 0-4m-.818-2a8.035 8.035 0 0 0-3.467-3.214c.472.907.855 1.997 1.121 3.214zM7.112 8A17.763 17.763 0 0 0 7 10c0 .685.038 1.355.112 2h5.776a17.763 17.763 0 0 0 0-4zm.358-2h5.06a10.758 10.758 0 0 0-.783-2.177C11.119 2.568 10.447 2 10 2c-.448 0-1.119.568-1.747 1.823c-.315.632-.58 1.367-.783 2.177m-4.4 8a8.035 8.035 0 0 0 3.467 3.214c-.472-.907-.855-1.997-1.121-3.214zm13.86 0h-2.346c-.266 1.217-.65 2.307-1.121 3.214A8.035 8.035 0 0 0 16.93 14m-9.46 0c.203.81.468 1.545.783 2.177C8.881 17.432 9.553 18 10 18c.448 0 1.119-.568 1.747-1.823c.315-.632.58-1.367.783-2.177zM10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10"/></svg>
            
                                {t('Footer.Contacts.Url')}
                            </li>
                        </ul>
                    </div>
            
                    <div className={styles.footer__find_us}>
                        <h4>{t('Footer.Find_us.Title')}</h4>
            
                        <ul className={styles.footer__ubication}>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="m7.539 14.841l.003.003l.002.002a.755.755 0 0 0 .912 0l.002-.002l.003-.003l.012-.009a5.57 5.57 0 0 0 .19-.153a15.588 15.588 0 0 0 2.046-2.082C11.81 11.235 13 9.255 13 7A5 5 0 0 0 3 7c0 2.255 1.19 4.235 2.292 5.597a15.591 15.591 0 0 0 2.046 2.082a8.916 8.916 0 0 0 .189.153zM8 8.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3" clip-rule="evenodd"/></svg>
            
                                {t('Footer.Find_us.Adress')}
                            </li>
                        </ul>
                    </div>
                </div>
        
                <div className={styles.social_medias}>
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z"/></svg>
                    </a>
                    
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12.001 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6m0-2a5 5 0 1 1 0 10a5 5 0 0 1 0-10m6.5-.25a1.25 1.25 0 0 1-2.5 0a1.25 1.25 0 0 1 2.5 0M12.001 4c-2.474 0-2.878.007-4.029.058c-.784.037-1.31.142-1.798.332a2.886 2.886 0 0 0-1.08.703a2.89 2.89 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.007 9.075 4 9.461 4 12c0 2.475.007 2.878.058 4.029c.037.783.142 1.31.331 1.797c.17.435.37.748.702 1.08c.337.336.65.537 1.08.703c.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.475 0 2.878-.007 4.029-.058c.782-.037 1.308-.142 1.797-.331a2.91 2.91 0 0 0 1.08-.703c.337-.336.538-.649.704-1.08c.19-.492.296-1.018.332-1.8c.052-1.103.058-1.49.058-4.028c0-2.474-.007-2.878-.058-4.029c-.037-.782-.143-1.31-.332-1.798a2.912 2.912 0 0 0-.703-1.08a2.884 2.884 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.926 4.006 14.54 4 12 4m0-2c2.717 0 3.056.01 4.123.06c1.064.05 1.79.217 2.427.465c.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428c.047 1.066.06 1.405.06 4.122c0 2.717-.01 3.056-.06 4.122c-.05 1.065-.218 1.79-.465 2.428a4.884 4.884 0 0 1-1.153 1.772a4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.427.465c-1.067.047-1.406.06-4.123.06c-2.717 0-3.056-.01-4.123-.06c-1.064-.05-1.789-.218-2.427-.465a4.89 4.89 0 0 1-1.772-1.153a4.905 4.905 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.012 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122c.05-1.065.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.637-.248 1.362-.415 2.427-.465C8.945 2.013 9.284 2 12.001 2"/></svg>
                    </a>
        
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M9.429 8.969h3.714v1.85c.535-1.064 1.907-2.02 3.968-2.02c3.951 0 4.889 2.118 4.889 6.004V22h-4v-6.312c0-2.213-.535-3.461-1.897-3.461c-1.889 0-2.674 1.345-2.674 3.46V22h-4zM2.57 21.83h4V8.799h-4zM7.143 4.55a2.53 2.53 0 0 1-.753 1.802a2.573 2.573 0 0 1-1.82.748a2.59 2.59 0 0 1-1.818-.747A2.548 2.548 0 0 1 2 4.55c0-.677.27-1.325.753-1.803A2.583 2.583 0 0 1 4.571 2c.682 0 1.336.269 1.819.747c.482.478.753 1.126.753 1.803" clip-rule="evenodd"/></svg>
                    </a>
                </div>
        
                <div className={styles.arrow_up}>
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m17 14l-5-5m0 0l-5 5"/></svg>
                    </a>
                </div>
            </section>
        </footer>
    )
}
export default Footer;

