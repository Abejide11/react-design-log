import style from '../App.module.css'
import home from '../Images/1.jpg'

const Header = () => {
    return (
        <div className={style.container}>
            <div className={style.welcome}>
                <p>WELCOME BACK</p>
                <p>Don't have a account, <a href="">Sign up</a></p>
            </div>
            <div className={style.p} >
                <p>Help</p>
                <p>Contact us</p>
                <p>English <select name="language" id=""></select></p>
                <p>Sign up</p>
                <img src={home} alt="" />
            </div>
        </div>
    )
}
export default Header