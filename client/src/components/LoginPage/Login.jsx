import "./login.css"
import {useState} from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import {useDispatch} from "react-redux"
import {useHistory} from "react-router-dom"
import { userLogin } from "../../JS/actions/userActions";



const Login = () => {

    const [password , setPassword] = useState("")   
    const [email , setEmail] = useState("")   

    const dispatch = useDispatch()
    // const history = useHistory()

 const log = ()=> {

    const userCred = {
        password,
        email
    }

    dispatch(userLogin(userCred))

    // history.push("/")

    setPassword("")
    setEmail("")

 }

    return (
        <div className="loginPage">
            <h1 className="loginTitle"> Choisir une methode de connexion</h1>
            <div className="loginWrapper">
                <div className="loginLeft">
                    <div className="loginButton google">
                        <GoogleIcon className="loginIcon"/>
                        Google
                    </div>
                    <div className="loginButton facebook">
                        <FacebookOutlinedIcon className="loginIcon"/>
                        Facebook
                    </div>
                </div>
                <div className="center">
                    <div className="line"/>
                    <div className="or">OU</div>
                </div>
                <div className="loginRight">
                    <TextField style={{marginBottom:"20px"}}
                    id="outlined-basic" 
                    label="E-mail"
                    variant="outlined" 
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                       />
                    <TextField style={{marginBottom:"20px"}} 
                    id="outlined-basic" 
                    label="Mot de passe" 
                    type="password"
                    variant="outlined"  
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    
                    />


                    <Button style={{marginBottom:"20px", 
                    // width:"100px", 
                    // padding: "8px 10px", 
                    backgroundColor: "#E93B04", 
                    color: "white", 
                    fontWeight: "bold", 
                    borderRadius: "10px", 
                    border: "none"}}
                     variant="outlined" 
                     size="large" 
                     onClick={()=>log()}
                     >
                         Me connecter
                     </Button>
                     <Link to="/signup">
                    <span> Crèer un compte </span>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Login
