import React from "react";

import * as S from "./styles";

interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  photo: string;
}

interface ProductCardProps {
  product: IProduct;
  handleCart: Function;
}

const ProductCard: React.FC<ProductCardProps> = (props) => {
  let { product, handleCart } = props;

  return (
    <S.ProductContent>
      <img src={product.photo} alt={product.name} />
      <h4>{product.name}</h4>
      <span>{product.description}</span>
      <h5>R$ {product.price}</h5>
      <button
        title="Adicionar ao carrinho"
        onClick={() => handleCart(product.id)}
      >
        Adicionar ao Carrinho
      </button>
    </S.ProductContent>
  );
};

export default ProductCard;
