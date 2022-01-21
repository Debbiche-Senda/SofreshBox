import './productDetails.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProduct } from '../../JS/actions/adminActions';

function ProductDetails({el}) {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  return (
    <div>
      <div className="productTop">
        {/* <h1>Helooooooo</h1> */}

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
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
