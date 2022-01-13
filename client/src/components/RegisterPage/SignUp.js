import "./signUp.css";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { userRegister } from "../../JS/actions/userActions";
import {useState} from 'react';
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import { Link } from "react-router-dom";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
// import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';



const SignUp = () =>{

    const [firstName , setFirstName] = useState("")   
    const [lastName , setLastName] = useState("")
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")   
    

    const dispatch = useDispatch()
    const history = useHistory()


    const addUser = ()=>{
        const newUser = {
            firstName,
            lastName,
            email,
            password,
        }
        if (firstName === "" || lastName ===""|| email ===""|| password === "")
        return alert("Missing input")
        dispatch(userRegister(newUser))

        history.push("/login")

        setFirstName("")
        setLastName("")
        setEmail("")
        setPassword("")
    }

    return(
        
          <div className="signup">
              <form className="signUpForm">
                  <h1> Créez un compte pour recevoir votre box !</h1>
            <div className="forms-input">    
            <span><PersonOutlineOutlinedIcon className="icoon"/></span>
            <TextField className="signUpInput"
             style={{marginBottom:"20px"}}
             id="outlined-basic"
             label="Nom" 
             variant="outlined" 
             value={lastName}
             onChange={(e)=>setLastName(e.target.value)}
             />
             </div>  
            <div className="forms-input">
            <span><PersonOutlineOutlinedIcon className="icoon"/></span>
            <TextField className="signUpInput"
            style={{marginBottom:"20px"}} 
            id="outlined-basic" 
            label="Prénom" 
            variant="outlined"
            value={firstName}
            onChange={(e)=>setFirstName(e.target.value)}
             />
            </div> 
            <div className="forms-input">
            <span><EmailOutlinedIcon className="icoon"/></span>
            <TextField className="signUpInput"
            style={{marginBottom:"20px"}} 
            id="outlined-basic" 
            label="E-mail"
            variant="outlined"
            value={email}
            onChange={(e)=>setEmail(e.target.value)} 
            />
            </div> 
            <div className="forms-input">
           <span> <LockOpenOutlinedIcon className="icoon"/></span>
            <TextField className="signUpInput"
            style={{marginBottom:"20px"}} 
            id="outlined-basic" 
            label="Mot de passe (5 caractères min)" 
            variant="outlined" 
            type="password"
            hintText="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
            </div>
            {/* <span className="inputIcon"> <VisibilityOutlinedIcon/> </span> */}

            
            <Button className="signUpBtn"
            style={{marginBottom:"20px", backgroundColor: "#E73700", 
            color: "white", 
            fontWeight: "bold", 
            borderRadius: "30px",
            border: "none"}} 
            variant="outlined" 
            onClick={()=>addUser()}>
                Valider
            </Button>
            <p className="signUpP"> J'ai déjà un compte ? </p> 
            <Link to="/login">
            <span> Sign in </span>
            </Link>
            </form>
          </div>
        
    )
}

export default SignUp;

