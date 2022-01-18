import "./profileUser.css"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import NavBar from "../Navbar/NavBar"
import { editUser, getProfile, logOut } from "../../JS/actions/userActions"
import { useDispatch, useSelector } from "react-redux";
import {useHistory} from "react-router-dom"
import { useEffect } from "react";
import ProfilePageHeader from "../ProfilePageHeader/ProfilePageHeader";
import { Link } from "react-router-dom"
import { useState } from "react";


const ProfileUser = () => {


  const [firstName , setFirstName] = useState("")   
  const [lastName , setLastName] = useState("")
  const [password , setPassword] = useState("")   

  const user = useSelector((state) => state.userReducer.user);
  console.log("user :" , user)

  const dispatch = useDispatch();
  const history = useHistory()


    useEffect(() => {
        dispatch(getProfile())
    }, [])

    // setPassword("")

    history.push("/mes-informations-persos")

    return (

      
      <>
      <NavBar/>
        <div className='profile'>
          <h1 className='profileTitle'> Infos Personnelles</h1>
          
        <div className='profileWrapper'>
                
             <form className="profile-form">
                <h3> Mes coordonnées</h3>
                <ProfilePageHeader 
          style={{top:"0", display:"flex"}}
           user={user}/>
              <div className="profileContainer">    
                <span><PersonOutlineOutlinedIcon className="profile-icon"/></span>
                <TextField className="profile-input"
                  style={{marginBottom:"20px"}}
                  id="outlined-basic"
                  label="Nom" 
                  variant="outlined" 
                  value={lastName}
                  onChange={(e)=>setLastName(e.target.value)}
                />
               </div>  

               <div className="">
            <span><PersonOutlineOutlinedIcon className="profile-icon"/></span>
            <TextField className="profile-input"
            style={{marginBottom:"20px"}} 
            id="outlined-basic" 
            label="Prénom" 
            variant="outlined"
            value={firstName}
            onChange={(e)=>setFirstName(e.target.value)}
             />
            </div> 
            {/* <div className="">
            <span><EmailOutlinedIcon className="profile-icon"/></span>
            <TextField className="profile-input"
            style={{marginBottom:"20px"}} 
            id="outlined-basic" 
            label="E-mail"
            variant="outlined" 
            />
            </div>  */}
      
            <div>
            <span> <LockOpenOutlinedIcon className="profile-icon"/></span>
            <TextField className="profile-input"
            style={{marginBottom:"20px"}} 
            id="outlined-basic" 
            label="Mot de passe (5 caractères min)" 
            variant="outlined" 
            type="password"
            hintText="Password"
            // value={password}
            // onChange={(e)=>setPassword(e.target.value)}
            />
            </div>

            <div>
            <span> <LockOpenOutlinedIcon className="profile-icon"/></span>
            <TextField className="profile-input"
            style={{marginBottom:"20px"}} 
            id="outlined-basic" 
            label=" Nouveau mot de passe (5 caractères min)" 
            variant="outlined" 
            type="password"
            hintText="Password"
            // value={password}
            // onChange={(e)=>setPassword(e.target.value)}
            />
            </div>
<div className="btns">
            <Button className="signUpBtn"
            style={{marginBottom:"20px", backgroundColor: "#E73700", 
            color: "white", 
            fontWeight: "bold", 
            borderRadius: "30px",
            left: "40px",
            border: "none"}} 
            variant="outlined"
            onClick={() => dispatch(editUser(user._id,{ password, firstName, lastName
            }))}
            >
                Mettre à jour
            </Button>
            <br/>
            <Link className="link" to="/login">
            <Button className="signUpBtn"
            style={{marginBottom:"20px", backgroundColor: "#E73700", 
            color: "white", 
            fontWeight: "bold", 
            borderRadius: "30px",
            left: "40px",
            border: "none"}} 
            variant="outlined"
            onClick={() => dispatch(logOut)}>
            Deconnexion
            </Button>
            </Link>
            </div>
            
              </form> 
            </div>
        </div>
        </>
    )
}

export default ProfileUser
