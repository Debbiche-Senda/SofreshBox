import "./newProduct.css"
import {useState} from 'react';
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import { addProduct } from "../../../../JS/actions/adminActions";

const NewProduct = () => {
    const [photo, setPhoto] = useState("")
    const [name , setName] = useState("")   
    const [stock , setStock] = useState("")
    const [ingredients , setIngredients] = useState("")
    const [categorie , setCategorie] = useState("")  
    const [famille , setFamille] = useState("")
    const [description , setDescription] = useState("")
    const [ustensiles , setUstensiles] = useState("")
    const [valnutri , setValnutri] = useState("")
    const [prix , setPrix] = useState("") 
    

    const dispatch = useDispatch()
    const history = useHistory()


    const addProd = ()=>{
        const newProd = {
            photo: photo,
            article : name,
            quantité : stock,
            ingrédients : ingredients,
            catégorie: categorie,
            famille: famille,
            description: description,
            ustensiles: ustensiles,
            valeur_nutritionnelle: valnutri,
            prix: prix,
        }
       
        dispatch(addProduct(newProd))

        history.push("/admin-dashboard-products")
        setPhoto("")
        setName("")
        setStock("")
        setIngredients("")
        setCategorie("")
        setFamille("")
        setDescription("")
        setUstensiles("")
        setValnutri("")
        setPrix("")
    }


    return (
        <div className="newProduct">
            <h1 className="addProductTitle"> New Product</h1>
            <form className="addProductForm">
                <div className="addProductItem">
                    <label> Image</label>
                    <input type="url" id="url" value={photo} onChange={(e)=>setPhoto(e.target.value)}/>

                    {/* <input type="file" id="file" value={photo} onChange={(e)=>setPhoto(e.target.value)}/> */}
                </div>
                <div className="addProductItem">
                    <label>Nom du produit</label>
                    <input type="text" placeholder="Nom" value={name} onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className="addProductItem">
                    <label>Stock</label>
                    <input type="text" placeholder="123" value={stock} onChange={(e)=>setStock(e.target.value)}/>
                </div>
                <div className="addProductItem">
                    <label>Ingredients</label>
                    <input type="text" placeholder="Ingredients" value={ingredients} onChange={(e)=>setIngredients(e.target.value)}/>
                </div>
                <div className="addProductItem">
                    <label>Catégorie</label>
                    <input type="text" placeholder="Catégorie" value={categorie} onChange={(e)=>setCategorie(e.target.value)}/>
                </div>
                <div className="addProductItem">
                    <label>Famille</label>
                    <input type="text" placeholder="Famille" value={famille} onChange={(e)=>setFamille(e.target.value)}/>
                </div>
                <div className="addProductItem">
                    <label>Description</label>
                    <input type="text" placeholder="Description" value={description} onChange={(e)=>setDescription(e.target.value)}/>
                </div>
                <div className="addProductItem">
                    <label>Ustensiles</label>
                    <input type="text" placeholder="Ustensiles" value={ustensiles} onChange={(e)=>setUstensiles(e.target.value)}/>
                </div>
                <div className="addProductItem">
                    <label>Valeur nutritionnelle</label>
                    <input type="text" placeholder="Valeur nutritionnelle" value={valnutri} onChange={(e)=>setValnutri(e.target.value)}/>
                </div>
                <div className="addProductItem">
                    <label>Prix</label>
                    <input type="text" placeholder="Prix" value={prix} onChange={(e)=>setPrix(e.target.value)}/>
                </div>
                <div className="addProductItem">
                    <label>Active</label>
                    <select name="active" id="active">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                </div>
                <button className="addProductButton" onClick={()=>addProd()} >Create</button>
            </form>
        </div>
    )
}

export default NewProduct
