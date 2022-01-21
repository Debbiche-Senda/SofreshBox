import {useDispatch, useSelector} from "react-redux"
import "./homePage.css"
import { Redirect } from "react-router-dom"
import NavBar from "../Navbar/NavBar"
import ProductCard from "../Product/ProductCard"
import { useEffect } from "react"
import { getProducts } from "../../JS/actions/adminActions"
import Button from '@mui/material/Button';



const HomePage = () => {

   

    const products = useSelector(state => state.adminReducer.products)
    // const loading = useSelector((state) => state.adminReducer.loading);

    console.log(products)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getProducts())
    }, [])

 const isAuth = useSelector(state => state.userReducer.isAuth)
//  const token = localStorage.getItem('token')

    return (


//  isAuth ? <Redirect to="/" /> :

     <div>

         <NavBar/>

         <div> 
             <h1 className="menuu"> Au menu cette semaine </h1>
             <h3 style={{paddingLeft:"270px"}}> Il n’a jamais été aussi simple de bien manger.</h3>
             <h4 style={{paddingLeft:"270px"}}> La box à cuisiner responsable et BIO livrée chez vous</h4>
             <p style={{paddingLeft:"100px", marginTop:"40px", marginBottom:"40px"}}> Chez So'Fresh box, nous planchons chaque semaine pour vous régaler avec de nouvelles recettes faciles à réaliser, variées et équilibrées.</p>

         </div>
         <span style={{paddingLeft:"100px"}}>  Nos recettes 100% BIO : </span>
        <div className='homePage'>
            
        {
        products&&products.products.map((el)=> <ProductCard el={el} key={el.article} />)
        }
     </div>  
     <Button className="homeBtn"
            style={{marginBottom:"20px", backgroundColor: "#E73700", 
            color: "white", 
            fontWeight: "bold", 
            borderRadius: "30px",
            border: "none"}} 
            variant="outlined"     
     >
      Je compose ma box
      </Button>
      </div>

    )
}

export default HomePage
