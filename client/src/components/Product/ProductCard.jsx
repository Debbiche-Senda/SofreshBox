import './card.css';
import { Card, Button } from 'react-bootstrap';
import React, { useState } from 'react';
import Modal from "../Home/MyModal"
import { GlobalStyles } from '../Home/GlobalStyles';
import MyModal from '../Home/MyModal';


const ProductCard = ({ el }) => {
  

  const [showModal, setShowModal] = useState(false)

  const openModal = () => {
      setShowModal(prev => !prev)
  }


  return (
    <div className="mycard">
      <Card style={{ width: '18rem' }}>
        <Card.Img
          variant="top"
          src=
          {el.photo}
        />
        <Card.Body>
          <Card.Title>{el.article}</Card.Title>
          <Card.Text
            style={{
              backgroundColor: '#FFEDDF',
              width:'120px',
              borderRadius: '30px',
              fontWeight: 'lighter',
              paddingLeft: '10px'
            }}
          >
            {el.famille}
          </Card.Text>
          <Card.Text
            style={{
              backgroundColor: '#FFEDDF',
              width: '35%',
              borderRadius: '30px',
              fontWeight: 'lighter',
              paddingLeft: '10px'
            }}
          >
            {el.catégorie}
          </Card.Text>
          
          <MyModal el={el}/>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;
