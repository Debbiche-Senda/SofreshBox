import "./newUser.css"
// import {useState} from 'react';
// import {useDispatch} from "react-redux";
// import {useHistory} from "react-router-dom";

function NewUser() {

    // const [userName , setUserName] = useState("")
    // const [fullName , setFullName] = useState("")
    // const [email , setEmail] = useState("")
    // const [password , setPassword] = useState("")


    // const dispatch = useDispatch()
    // const history = useHistory()


    // const Userr = ()=> {

    //     const newUse = {
    //         userName,
    //         fullName,
    //         password,
    //         email,
    //     }
    
    //     dispatch((newUse))
    
    //     history.push("/admin-dashboard-users")

    //     setUserName("")
    //     setFullName("")
    //     setEmail("")
    //     setPassword("")
        
    
    //  }



    return (
        <div className="newUser">
            <h1 className="newUserTitle"> New User</h1>
            <form className="newUserForm">
                <div className="newUserItem">
                    <label> Username</label>
                    <input type="text" placeholder="User name"
                    //  value={userName} onChange={(e)=>setUserName(e.target.value)} 
                     />
                </div>
                <div className="newUserItem">
                    <label> Full Name</label>
                    <input type="text" placeholder="Full name"
                    //  value={fullName} onChange={(e)=>setFullName(e.target.value)}
                     />
                </div>
                <div className="newUserItem">
                    <label> Email</label>
                    <input type="email" placeholder="ex@gmail.com" 
                    // value={email} onChange={(e)=>setEmail(e.target.value)}
                    />
                </div>
                <div className="newUserItem">
                    <label> Password</label>
                    <input type="password" placeholder="password" 
                    // value={password} onChange={(e)=>setPassword(e.target.value)}
                    />
                </div>
                <div className="newUserItem">
                    <label> Phone</label>
                    <input type="text" placeholder="Enter your phone number"/>
                </div>
                <div className="newUserItem">
                    <label> Adress</label>
                    <input type="text" placeholder="Enter your adress"/>
                </div>
                <div className="newUserItem">
                    <label> Gender</label>
                    <div className="newUserGender">
                      <input type="radio" name="gender" id="male" value="male"/>
                      <label for="male"> Male</label>
                      <input type="radio" name="gender" id="female" value="female"/>
                      <label for="female"> Female</label>
                      <input type="radio" name="gender" id="other" value="other"/>
                      <label for="other">Other</label>
                    </div>
                </div>
                <div className="newUserItem">
                    <label> Active</label>
                    <select name="active" id="active" className="newUserSelect">
                        <option value="yes"> Yes</option>
                        <option value="no"> No</option>
                    </select>
                </div>
                <button className="newUserButton"
                //  onClick={()=>Userr()}
                 >Create</button>
            </form>
        </div>
    )
}

export default NewUser
