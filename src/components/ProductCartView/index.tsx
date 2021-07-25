import React from "react";
import * as S from "./styles";

interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  photo: string;
}

interface IProductCartViewProps {
  product: IProduct;
}

const ProductCartView: React.FC<IProductCartViewProps> = (props) => {
  const { product } = props;
  return (
    <S.ProductContent>
      <img src={product.photo} alt={product.name} />
      <h4>{product.name}</h4>
      <h5>R$ {product.price}</h5>
      <span>{product.description}</span>
    </S.ProductContent>
  );
};

export default ProductCartView;
