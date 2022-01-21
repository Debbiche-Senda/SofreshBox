import './product.css';
import { Link } from 'react-router-dom';
import Chart from '../../chart/Chart';
import { productData } from '../../dummyData';
// import PublishOutlinedIcon from '@mui/icons-material/PublishOutlined';
import { deleteProduct } from '../../../../JS/actions/adminActions';
import { useDispatch } from 'react-redux';

const Product = ({ el }) => {
  
  const dispatch = useDispatch();

  return (
    <>
      <div className="product">
        <div className="productTop">
          <div className="productTopLeft">
            <Chart data={productData} dataKey="Sales" title="Sales Performance" />
          </div>
          <div className="productTopRight">
            <div className="productInfoTop">
              <img src={el.photo} alt="" className="productInfoImg" />
              <span className="productName">{el.name}</span>
            </div>
            <div className="productInfoBottom">
              <div className="productInfoItem">
                <span className="productInfoKey">{el.article}</span>
                <span className="productInfoValue">{el.quantité}</span>
              </div>
              <div className="productInfoItem">
                <span className="productInfoKey"> prix :</span>
                <span className="productInfoValue">{el.prix}</span>
              </div>
              <div className="productInfoItem">
                <span className="productInfoKey"> active :</span>
                <span className="productInfoValue"> yes</span>
              </div>
              <div className="productInfoItem">
                <span className="productInfoKey"> in stock :</span>
                <span className="productInfoValue"> no</span>
              </div>
              <div className='buttonss'>
              <Link to={`/admin-dashboard-editproduct/${el._id}`}>
                <button className="productAddButton"
                 >
                  Edit
                </button>
              </Link>
              <Link to={`/admin-dashboard-product/${el._id}`} className="link">
                <button className="productAddButton" >Details</button>
              </Link>
              <button className="productAddButton" onClick={() => dispatch(deleteProduct(el._id))}>
                Delete
              </button>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="productBottom">
                <form className="productForm">
                <div className="productFormLeft">
                <label>Product Name</label>
                <input type="text" placeholder="nom du produit"
                //  value={name} onChange={(e)=>setName(e.target.value)}
                />
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
                <div className="productUpload">
                <img src="data:image/jpeg;base64,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" alt="" className="productUploadImg" />
                <label for="file">
                <PublishOutlinedIcon/>
                </label>
                <input type="file" id="file" style={{display:"none"}}/>
                </div>
                <button className="productButton">Update</button>
                </div>
                </form>
            </div> */}
      </div>
    </>
  );
};

export default Product;
