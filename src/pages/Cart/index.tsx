import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header";
import ProductCartView from "../../components/ProductCartView";
import * as S from "./styles";

interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  photo: string;
}

const Cart: React.FC = () => {
  const history = useHistory();
  const [cart, setCart] = useState<IProduct[]>([]);

  useEffect(() => {
    if (localStorage.getItem("@cart")) {
      let cartRecover = JSON.parse(localStorage.getItem("@cart")!);
      setCart(cartRecover);
    }
  }, []);

  const handleClearCart = () => {
    localStorage.removeItem("@cart");
    history.push("/");
  };

  return (
    <>
      <Header cartLength={cart.length} />
      <S.Container>
        <section>
          {cart.map((product) => (
            <ProductCartView product={product} key={product.id} />
          ))}
          <button title="Limpar carrinho" onClick={() => handleClearCart()}>
            Limpar Carrinho
          </button>
        </section>
      </S.Container>
    </>
  );
};

export default Cart;
