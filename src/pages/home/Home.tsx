import styles from './Home.module.scss'
import Spline from '@splinetool/react-spline';
// import mockup1 from '../../assets/img/mockups/mockup1.png'
import mockup3 from '../../assets/img/mockups/mockup3.png'
import mockup4 from '../../assets/img/mockups/mockup4.png'
import people from '../../assets/img/mockups/people.png'
import people2 from '../../assets/img/mockups/people2.png'
import app_store from '../../assets/img/images/app_store.png'
import google_play from '../../assets/img/images/google_play.png'
import qr_app from '../../assets/img/mockups/qr_app.png'

const Home = (props: {translation: any}) => {
    return (
        <>
            <div className={styles.coming__container}>
                <div className={styles.section__wrapper}>
                    <div className={styles.coming__text}>
                        <h1>{props.translation('Home.Hero.Title')}</h1>
            
                        <strong>{props.translation('Home.Hero.Subtitle')}</strong>

                        <p>{props.translation('Home.Hero.Paragraph')}</p>
                    </div>
                    
                    <div className={styles.coming__image}>
                        {/* <img src={mockup1} alt="Mockup App" /> */}
                        <Spline scene="https://prod.spline.design/HxkNc1bgXqJg1HRV/scene.splinecode" />
                    </div>


                    {/* Timer */}
                    
                    <div className={styles.coming__time}>
                        <span className={styles.coming__days}>00</span>
                        <span className={styles.coming__hours}>00</span>
                        <span className={styles.coming__minutes}>00</span>
                        <span className={styles.coming__seconds}>00</span>
                        
                        <span className={styles.coming__text__days}>
                            {props.translation('Home.Hero.Coming_days')}
                        </span>
                        <span className={styles.coming__text__hours}>
                            {props.translation('Home.Hero.Coming_hours')}
                        </span>
                        <span className={styles.coming__text__minutes}>
                            {props.translation('Home.Hero.Coming_minutes')}
                        </span>
                        <span className={styles.coming__text__seconds}>
                            {props.translation('Home.Hero.Coming_seconds')}
                        </span>
                        
                        <span className={`${styles.coming__line} ${styles.line__1}`}></span>
                        <span className={`${styles.coming__line} ${styles.line__2}`}></span>
                        <span className={`${styles.coming__line} ${styles.line__3}`}></span>
                    </div>
                </div>
            </div>

            <section className={styles.about__model3d}>
                <Spline className={styles.model3d} scene="https://prod.spline.design/bHTG8cCSn6pxCAw8/scene.splinecode" />

                <div className={styles.layout__text}>
                    <p>
                        A brewvolutionary platform on a mission to unite coffee lovers!
                        <br />
                        <br />                                          
                        Your Cuppa journey begins with a personalized QR passport and a sprinkle of gamified excitement that goes beyond being just a coffee app.  
                        <br />                                          
                        <br />
                        Join us to explore, experience, and savor every sip in a lively community, connecting you with the best local coffee shops across Canada!
                    </p>
                </div>
                
                <div className={styles.about__container__desc}>
                    <h4>
                        {props.translation('Home.About.Title.1')}
                        <br />
                        {props.translation('Home.About.Title.2')}
                    </h4>

                    <p>
                        {props.translation('Home.About.Subtitle.1')}
                        <br />
                        <br />
                        {props.translation('Home.About.Subtitle.2')}
                    </p>
                </div>
            </section>

            <section className={styles.layout}>
                <div className={styles.layout__img}>
                    <img src={people} alt="Members of Cuppa" />
                </div>

                <div className={styles.layout__text}>
                    <h4>{props.translation('Home.About.Layout1.Title')}</h4>

                    <p>{props.translation('Home.About.Layout1.Description')}</p>

                    <strong>{props.translation('Home.About.Layout1.Strong')}</strong>
                </div>
            </section>

            <section className={styles.layout}>
                <div className={styles.layout__text}>
                    <h4>{props.translation('Home.About.Layout2.Title')}</h4>

                    <p>{props.translation('Home.About.Layout2.Description')}</p>
                </div>

                <div className={styles.layout__img}>
                    <img src={mockup3} alt="Members of Cuppa" />
                </div>
            </section>

            <section className={styles.layout}>
                <div className={styles.layout__img}>
                    <img src={people2} alt="Members of Cuppa" />
                </div>

                <div className={styles.layout__text}>
                    <h4>{props.translation('Home.About.Layout3.Title')}</h4>

                    <p>{props.translation('Home.About.Layout3.Description')}</p>
                </div>
            </section>

            <section className={styles.discover__cuppa}>
                <h4>{props.translation('Home.About.Discover.Title')}</h4>

                <h2>{props.translation('Home.About.Discover.Subtitle')}</h2>

                <p>{props.translation('Home.About.Discover.Paragraph')}</p>

                <div className={styles.cuppa__cards}>
                    <img src={mockup4} alt="Mockup Discover Cuppa" />
                </div>
            </section>

            <section className={styles.features}>
                <h4>{props.translation('Home.About.Features.Title')}</h4>

                <ul className={styles.features__list}>
                    <li>{props.translation('Home.About.Features.List.1')}</li>
                    
                    <li>{props.translation('Home.About.Features.List.2')}</li>
                    
                    <li>{props.translation('Home.About.Features.List.3')}</li>
                    
                    <li>{props.translation('Home.About.Features.List.4')}</li>
                    
                    <li>{props.translation('Home.About.Features.List.5')}</li>
                    
                    <li>{props.translation('Home.About.Features.List.6')}</li>
                    
                    <li>{props.translation('Home.About.Features.List.7')}</li>
                    
                    <li>{props.translation('Home.About.Features.List.8')}</li>
                </ul>
            </section>

            <section className={styles.cuppa__app}>
                <div className={styles.cuppa__app__text}>
                    <h2>{props.translation('Home.About.Download.Title')}</h2>

                    <p>{props.translation('Home.About.Download.Description')}</p>

                    <div className={styles.download__app}>
                        <a href="#">
                            <img src={app_store} alt="App Store Logo" />
                        </a>

                        <a href="#">
                            <img src={google_play} alt="Google Play Logo" />
                        </a>
                    </div>
                </div>

                <div className={styles.cuppa__app__img}>
                    <img src={qr_app} alt="Qr App Cuppa" />
                </div>
            </section>
        </>
    )
}
export default Home;