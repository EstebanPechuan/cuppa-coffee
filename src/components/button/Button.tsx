import styles from './Button.module.scss'
const Button = ({text}) => {
    return (
        <button className={styles.btn_gradient}>
            {text}
        </button>
    )
}
export default Button;