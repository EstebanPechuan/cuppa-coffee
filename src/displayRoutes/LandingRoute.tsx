import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import styles from './LandingRoute.module.scss'

type Props = {
    children: React.ReactNode
}

const LandingRoute = ({ children }: Props) => {
    return <div className={styles.container}>
        <Header />
        {children}
        <Footer />
    </div>
}
export default LandingRoute;