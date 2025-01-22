import styles from './AboutUs.module.scss'
import gerard from '../../assets/img/team/gerard.png'
import pedro from '../../assets/img/team/pedro.png'
import lucas from '../../assets/img/team/lucas.png'
import mf_icon from '../../assets/img/logo/mf-icon.png'
import mf_logo from '../../assets/img/logo/mf-logo.png'

const AboutUs = (props: {translation: any}) => {
    return (
        <>
            <section className={styles.aboutus__container}>

                <h1>{props.translation('About_Us.Title')}</h1>
                
                <div className={styles.aboutus__text}>
                    <div>
                        <h4>{props.translation('About_Us.Mission.Title')}</h4>
                        
                        <p>{props.translation('About_Us.Mission.Description')}</p>
                    </div>
                    
                    <div>
                        <h4>{props.translation('About_Us.Trip.Title')}</h4>
                        
                        <p>{props.translation('About_Us.Trip.Description')}</p>
                    </div>
                </div>
            </section>

            <section className={styles.team__container}>
                <h4>{props.translation('About_Us.Team.Title')}</h4>
                        
                <p>{props.translation('About_Us.Team.Description')}</p>

                <div className={styles.team__pics}>
                    <div className={styles.team__card}>
                        <img src={gerard} alt="Gerard Manos" />

                        <h4>{props.translation('About_Us.Team.Gerard.Name')}</h4>
                        
                        <p>{props.translation('About_Us.Team.Gerard.Ocupation')}</p>
                    </div>
                    
                    <div className={styles.team__card}>
                        <img src={pedro} alt="Pedro Fernandes" />

                        <h4>{props.translation('About_Us.Team.Pedro.Name')}</h4>

                        <p>{props.translation('About_Us.Team.Pedro.Ocupation')}</p>
                    </div>

                    <div className={styles.team__card}>
                        <img src={lucas} alt="Lucas Casco" />

                        <h4>{props.translation('About_Us.Team.Lucas.Name')}</h4>

                        <p>{props.translation('About_Us.Team.Lucas.Ocupation')}</p>
                    </div>
                </div>
            </section>

            <section className={styles.mf}>
                <img src={mf_icon} alt="Icon MF" />
                <img src={mf_logo} alt="Logo MF" />
            </section>
        </>
    )
}
export default AboutUs;