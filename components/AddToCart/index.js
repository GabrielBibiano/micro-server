import React from 'react'

const AddToCart = (props) => {
  return (
    <button {...props} data-add-to-cart>
      Adicionar ao Carrinho
    </button>
  )
};

export default AddToCart;
