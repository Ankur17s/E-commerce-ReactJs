// functional component

function LoginPage() {
    return(
        <div className= "login"> 

        <div className="login_box">
            <h1>LOGIN</h1>
            <h5>Please enter your login and password</h5>

            <div className="username">
                <input type= "text" placeholder="Username"/>
            </div>

            <div className="password">
            <input type= "password" placeholder="Password"/>
            </div>

            <div className="signin">
                <input type="Submit"/>
            </div>
        </div>

     
        </div>
    )
}
export default LoginPage;