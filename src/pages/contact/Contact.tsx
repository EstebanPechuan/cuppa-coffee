import styles from './Contact.module.scss'
import take_away from '../../assets/img/images/take_away.png'

const Contact = (props: {translation: any}) => {
    return (
        <>
            <section className={styles.contact__container}>
                <div className={styles.contact__text}>
                    <h1>{props.translation('Contact.Title')}</h1>

                    <strong>{props.translation('Contact.Subtitle')}</strong>
                    <p>{props.translation('Contact.Paragraph')}</p>

                    <img src={take_away} alt="Take Away Image" />
                </div>
                
                <form action="" className={styles.contact__form}>
                    <div className={styles.form__group}>
                        <input id="name" type="text" placeholder="" />
                        <label htmlFor="name">
                            {props.translation('Contact.Form.Name')}
                        </label>
                        <p className={styles.input__required}>
                            {props.translation('Contact.Form.Obligatory')}
                        </p>
                        <p className={styles.input__error}>
                            {props.translation('Contact.Form.Empty_field')}
                        </p>
                    </div>
                    <div className={styles.form__group}>
                        <input id="number" type="text" placeholder="" />
                        <label htmlFor="number">
                            {props.translation('Contact.Form.Phone')}
                        </label>
                        <p className={styles.input__required}>
                            {props.translation('Contact.Form.Obligatory')}
                        </p>
                        <p className={styles.input__error}>
                            {props.translation('Contact.Form.Empty_field')}
                        </p>
                    </div>
                    <div className={styles.form__group}>
                        <input id="email" type="text" placeholder="" />
                        <label htmlFor="email">
                            {props.translation('Contact.Form.Email')}
                        </label>
                        <p className={styles.input__required}>
                            {props.translation('Contact.Form.Obligatory')}
                        </p>
                        <p className={styles.input__error}>
                            {props.translation('Contact.Form.Empty_field')}
                        </p>
                    </div>
                    <div className={styles.form__group}>
                        <input id="assunto" type="text" placeholder="" />
                        <label htmlFor="assunto">
                            {props.translation('Contact.Form.Assunto')}
                        </label>
                        <p className={styles.input__required}>
                            {props.translation('Contact.Form.Obligatory')}
                        </p>
                        <p className={styles.input__error}>
                            {props.translation('Contact.Form.Empty_field')}
                        </p>
                    </div>
                    <div className={styles.form__group}>
                        <textarea id="message" rows={5} placeholder=""></textarea>
                        <label htmlFor="message">
                            {props.translation('Contact.Form.Message')}
                        </label>
                        <p className={styles.input__required}>
                            {props.translation('Contact.Form.Obligatory')}
                        </p>
                        <p className={styles.input__error}>
                            {props.translation('Contact.Form.Empty_field')}
                        </p>
                    </div>
                    <input type="submit" value={props.translation('Contact.Form.Submit')} />
                </form>
            </section>
        </>
    )
}
export default Contact;