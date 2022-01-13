import './App.css';
import Home from './components/Admin/pages/home/Home';
// import Sidebar from './components/Admin/sidebar/Sidebar';
// import TextField from '@mui/material/TextField';
// import Topbar from './components/Admin/topbar/Topbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import UserList from './components/Admin/pages/userList/UserList';
import User from './components/Admin/pages/user/User';
import NewUser from './components/Admin/pages/newUserPage/NewUser';
import ProductList from './components/Admin/pages/productList/ProductList';
import Product from './components/Admin/pages/product/Product';
import NewProduct from './components/Admin/pages/newProduct/NewProduct';
import Login from './components/LoginPage/Login';
import HomePage from './components/Home/HomePage';
import SignUp from './components/RegisterPage/SignUp';
import Admin from './Admin';
import Concept from './components/Concept/Concept';
import ProfileUser from './components/ProfilePage/ProfileUser';
import ProductDetails from './components/productDetails/ProductDetails';
import EditProduct from './components/Admin/pages/editProduct/EditProduct';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react'
import { getAuthUser } from './JS/actions/userActions';

function App() {

   const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.userReducer.isAuth);
   // const loggedIn = false;

   useEffect(() => {
      dispatch(getAuthUser());
    }, [isAuth]);

  return (
    <>
    <Router>
    <div className="App">
       {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}


       {/*************************ADMIN ROUTES*******************************/}
       
       <div className='container'>
         <Switch>
{/*          
           <Route exact path="/admin-dashboard-home"> 
              <div>
              <Topbar/>
              <div className='fixingPosition'>
              <Sidebar/>
              <Home/>
              </div>
              </div>
           </Route>
           <Route exact path="/admin-dashboard-users"> 
           <div>
              <Topbar/>
              <div className='fixingPosition'>
              <Sidebar/>
             <UserList/>
             </div>
              </div>
           </Route>
           <Route exact path="/admin-dashboard-user/:userId"> 
           <div>
              <Topbar/>
              <div className='fixingPosition'>
              <Sidebar/>
             <User/>
             </div>
              </div>
           </Route>
           <Route exact path="/admin-dashboard-newUser"> 
           <div>
              <Topbar/>
              <div className='fixingPosition'>
              <Sidebar/>
             <NewUser/>
             </div>
              </div>
           </Route>
           <Route exact path="/admin-dashboard-products"> 
           <div>
              <Topbar/>
              <div className='fixingPosition'>
              <Sidebar/>
             <ProductList/>
             </div>
              </div>
           </Route>
           <Route exact path="/admin-dashboard-product/:productId"> 
           <div>
              <Topbar/>
              <div className='fixingPosition'>
              <Sidebar/>
             <Product/>
             </div>
              </div>
           </Route>
           
           <Route exact path="/admin-dashboard-newProduct"> 
           <div>
              <Topbar/>
              <div className='fixingPosition'>
              <Sidebar/>
             <NewProduct/>
             </div>
              </div>
           </Route> */}

          <Admin exact path="/admin" component={Home} />
          <Admin exact  path="/admin-dashboard-users" component={UserList} />
          <Admin exact  path="/admin-dashboard-user/:userId" component={User} />
          <Admin exact path="/admin-dashboard-newUser" component={NewUser} />
          <Admin exact path="/admin-dashboard-products" component={ProductList} />
          <Admin exact path="/admin-dashboard-product/:productId" component={ProductDetails} />
          <Admin exact path="/admin-dashboard-editproduct/:productId" component={EditProduct} />
          <Admin exact path="/admin-dashboard-newProduct" component={NewProduct} />

{/********************************* USER REGISTER AND LOGIN ROUTES*********************** */}

            <Route exact path="/"> 
             <HomePage/>
           </Route>
           <Route exact path="/login"> 
           {isAuth ? <Redirect to="/"/> : <Login/>}
           </Route>
           <Route exact path="/signup"> 
             <SignUp/>
           </Route>
           <Route exact path="/concept"> 
             <Concept/>
           </Route>
           <Route exact path="/mes-informations-persos"> 
             <ProfileUser/>
           </Route>
           
         </Switch>
       </div>
    </div>
    </Router>
    </>
  );
}




export default App;


