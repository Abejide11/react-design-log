import style from '../App.module.css'
import picture from '../Images/pic.jpg'
import logo from '../Images/2.jpg'
import facebook from '../Images/3.jpg'
import apple from '../Images/4.jpg'
import google from '../Images/5.jpg'

const Content = () => {
    return (
        <div>
            <div className={style.con}>

                <div className={style.form}>
                    <form action="">
                        <div className={style.log}>
                            <label htmlFor="">Username</label>
                            <input type="text" placeholder="daniel123@gmail.com" />
                        </div>

                        <div className={style.log}>
                            <label htmlFor="">password</label>
                            <input type="text" placeholder="**********" />
                        </div>
                        <div className={style.login}>
                            <input type="radio" />
                            <p>Remember me  </p>
                            <p>forget password?</p>
                        </div>
                        <div className={style.button}>
                            <button> <p>Sign in</p> </button>
                        </div>
                    </form>

                    <div className={style.w}>
                        <div className={style.with}></div>
                        <p>or continue with</p>
                        <div className={style.with}> </div>
                    </div>
                </div>

                <div className={style.pict}>
                    <img src={picture} alt="" />
                </div>
            </div>




            <div className={style.wpl}>
                <div className={style.wp}>

                    <div className={style.image}>
                        <img src={google} alt="" />
                        <img src={facebook} alt="" />
                        <img src={apple} alt="" />
                    </div>
                </div>

                <div className={style.logo}>

                    <img src={logo} alt="" />
                </div>
            </div>
        </div >


    )
}
export default Content  