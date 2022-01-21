import './productList.css';
// import { DataGrid } from '@mui/x-data-grid';
// import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
// import { productRows } from "../../dummyData";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../../../JS/actions/adminActions';
import { useEffect } from 'react';
import Product from '../product/Product';
// import Loading from "../../../loading/Loading"

const ProductList = () => {
  const products = useSelector((state) => state.adminReducer.products);
  const loading = useSelector((state) => state.adminReducer.loading);

  console.log(products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  // const handleDelete = (id) =>{
  //     setData(orders.filter((item)=> item._id !== id))
  // }

  // const columns = [
  //     { field: '_id', headerName: 'ID', width: 90 },
  //     { field: 'product', headerName: 'Product', width: 200, renderCell: (params)=>{
  //         return(
  //             <div className="productListItem">
  //                 <img className="productListImg" src={params.row.img} alt=""/>
  //                 {params.row.article}
  //             </div>
  //         )
  //     } },
  //     { field: 'stock', headerName: 'Stock', width: 200 },
  //     {
  //       field: 'status',
  //       headerName: 'Status',
  //       width: 120,
  //     },
  //     {
  //         field: 'price',
  //         headerName: 'Price',
  //         width: 160,
  //     },
  //     {
  //         field: "action",
  //         headerName: "Action",
  //         width: 150,
  //         renderCell: (params)=>{
  //             return(
  //                 <>
  //                 <Link to={"/admin-dashboard-product/"+params.row._id}>
  //                 <button className="productListEdit"> Edit</button>
  //                 </Link>
  //                 <DeleteOutlineOutlinedIcon className="productListDelete"/>
  //                 </>
  //             )
  //         }
  //     },
  //   ];

  return loading ? (
    //   <Loading/>
    <h1> Please wait </h1>
  ) : (
    <div className="productList">
      <div className="productTitleContainer">
        <h1 className="productTitle"> Product</h1>
        <Link to="/admin-dashboard-newproduct">
          <button className="productAddButton"> Create</button>
        </Link>
      </div>

      {products && products.products.map((el) => <Product el={el} key={el.article} />)}

      {/* <DataGrid
            rows={products && products.orders}
         disableSelectionOnClick
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
      /> */}
    </div>
  );
};

export default ProductList;
