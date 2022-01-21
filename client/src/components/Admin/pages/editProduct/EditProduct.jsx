import './editProduct.css';
import PublishOutlinedIcon from '@mui/icons-material/PublishOutlined';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { editProduct } from '../../../../JS/actions/adminActions';
import { Link } from "react-router-dom"

function EditProduct({ match }) {
  console.log(match.params.productId);

  const [name, setName] = useState('');
  const [stock, setStock] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [categorie, setCategorie] = useState('');
  const [famille, setFamille] = useState('');
  const [description, setDescription] = useState('');
  const [ustensiles, setUstensiles] = useState('');
  const [valnutri, setValnutri] = useState('');
  const [prix, setPrix] = useState('');
  const [photo, setPhoto] = useState('');

  // const isAdmin = useSelector((state) => state.adminReducer.isAdmin);
  // const products = useSelector((state) => state.adminReducer.products);

  const dispatch = useDispatch();
  const history = useHistory();

  const edit = (e) => {

    e.preventDefault()
    const editProd = {
      article: name,
      quantité: stock,
      ingrédients: ingredients,
      catégorie: categorie,
      famille: famille,
      description: description,
      ustensiles: ustensiles,
      valeur_nutritionnelle: valnutri,
      prix: prix,
      photo: photo
    };

    dispatch(editProduct(match.params.productId, editProd));

    history.push('/admin-dashboard-products');

    setName('');
    setStock('');
    setIngredients('');
    setCategorie('');
    setFamille('');
    setDescription('');
    setUstensiles('');
    setValnutri('');
    setPrix('');
  };

  return (
    <div className="product">
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input type="text" placeholder="nom du produit" value={name} onChange={(e) => setName(e.target.value)} />
            <label>Stock</label>
            <input type="text" placeholder="stock" value={stock} onChange={(e) => setStock(e.target.value)} />
            <label>Ingrédients</label>
            <input
              type="text"
              placeholder="ingrédients"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
            />
            <label>Catégorie</label>
            <input
              type="text"
              placeholder="catégorie"
              value={categorie}
              onChange={(e) => setCategorie(e.target.value)}
            />
            <label>Famille</label>
            <input type="text" placeholder="famille" value={famille} onChange={(e) => setFamille(e.target.value)} />
            <label>Description</label>
            <input
              type="text"
              placeholder="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <label>Ustensiles</label>
            <input
              type="text"
              placeholder="ustensiles"
              value={ustensiles}
              onChange={(e) => setUstensiles(e.target.value)}
            />
            <label>Valeur nutritionnelle</label>
            <input
              type="text"
              placeholder="valeur nutritionnelle"
              value={valnutri}
              onChange={(e) => setValnutri(e.target.value)}
            />
            <label>Prix</label>
            <input type="text" placeholder="prix" value={prix} onChange={(e) => setPrix(e.target.value)} />
            <label>In Stock</label>
            <select name="inStock" id="inStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label>Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="addProductItem">
              <label> Image</label>
              <PublishOutlinedIcon />
              <input type="url" id="url" value={photo} onChange={(e) => setPhoto(e.target.value)} />
              {/* <input type="file" id="file"/> */}
            </div>
            <Link to="/admin-dashboard-products" className="link">
            <button className="productButton" onClick={(e) => edit(e)}>
              Update
            </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditProduct;
