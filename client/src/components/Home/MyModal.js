// import React, { useRef, useEffect, useCallback } from 'react';
// import { useSpring, animated } from 'react-spring';
// import styled from 'styled-components';
// import { MdClose } from 'react-icons/md';

// const Background = styled.div`
//   width: 100%;
//   height: 100%;
//   background: #FFEDDF;
//   position: fixed;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const ModalWrapper = styled.div`
//   width: 800px;
//   height: 500px;
//   box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
//   background: #fff;
//   color: #000;
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   position: relative;
//   z-index: 10;
//   border-radius: 10px;
// `;

// const ModalImg = styled.img`
//   width: 100%;
//   height: 100%;
//   border-radius: 10px 0 0 10px;
//   background: #000;
// `;

// const ModalContent = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   line-height: 1.8;
//   color: #141414;
//   p {
//     margin-bottom: 1rem;
//   }
//   button {
//     padding: 10px 24px;
//     background: #E73700;
//     color: #fff;
//     border: none;
//   }
// `;

// const CloseModalButton = styled(MdClose)`
//   cursor: pointer;
//   position: absolute;
//   top: 20px;
//   right: 20px;
//   width: 32px;
//   height: 32px;
//   padding: 0;
//   z-index: 10;
// `;

// function Modal({showModal, setShowModal, el}) {
//     const modalRef = useRef();

//     const animation = useSpring({
//         config: {
//           duration: 250
//         },
//         opacity: showModal ? 1 : 0,
//         transform: showModal ? `translateY(0%)` : `translateY(-100%)`
//       });

//       const closeModal = e => {
//         if (modalRef.current === e.target) {
//           setShowModal(false);
//         }
//       };

//       const keyPress = useCallback(
//         e => {
//           if (e.key === 'Escape' && showModal) {
//             setShowModal(false);
//             console.log('I pressed');
//           }
//         },
//         [setShowModal, showModal]
//       );

//       useEffect(
//         () => {
//           document.addEventListener('keydown', keyPress);
//           return () => document.removeEventListener('keydown', keyPress);
//         },
//         [keyPress]
//       );

//   return (
//   <>
//   {showModal?(
//     <Background onClick={closeModal} ref={modalRef}>
//     <animated.div style={animation}>
//         <ModalWrapper showModal={showModal}>
//             <ModalImg src={el.photo} alt=''/>
//             <ModalContent>
//                 <h1> {el.article} </h1>
//                 <p> {el.ingrédients}</p>
//                 <p> {el.description}</p>
//                 <p>{el.ustensiles}</p>
//                 <span>{el.valeur_nutritionnelle}</span>
//                 <span>{el.prix}</span>
//                 <button> Commander </button>
//             </ModalContent>
//             <CloseModalButton aria-label='Close modal' onClick={() => setShowModal(prev => !prev)}/>
//         </ModalWrapper>
//         </animated.div>
//     </Background>
//   )
//   : null}
//   </>)
// }

// export default Modal;

import Modal from 'react-modal';
import React, { Fragment, useState } from 'react';
import { Card, Button } from 'react-bootstrap';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

const MyModal = ({el}) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <Fragment>
        <Button
          className="signUpBtn"
          style={{
            marginBottom: '20px',
            backgroundColor: '#E73700',
            color: 'white',
            fontWeight: 'bold',
            borderRadius: '30px',
            border: 'none'
          }}
          variant="outlined"
          onClick={openModal}
        >
          Détails
        </Button>

        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}>
          <form>

            <h1> {el.article} </h1>
            <p> {el.ingrédients}</p>
            <p> {el.description}</p>
            <p>{el.ustensiles}</p>
            <span>{el.valeur_nutritionnelle}</span>
            <span>{el.prix}</span>
            <button> Commander </button>
          </form>
        </Modal>
      </Fragment>
    </div>
  );
};

export default MyModal;
