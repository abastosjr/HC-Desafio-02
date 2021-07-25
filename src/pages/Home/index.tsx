import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import ProductCard from "../../components/ProductCard";
import * as S from "./styles";
import db from "../../services/db";

interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  photo: string;
}

const Home: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [cart, setCart] = useState<IProduct[]>([]);

  useEffect(() => {
    if (localStorage.getItem("@products")) {
      let productsRecover = JSON.parse(localStorage.getItem("@products")!);
      setProducts(productsRecover);
    } else {
      setProducts(db);
      localStorage.setItem("@products", JSON.stringify(db));
    }

    if (localStorage.getItem("@cart")) {
      let cartRecover = JSON.parse(localStorage.getItem("@cart")!);
      setCart(cartRecover);
    }
  }, []);

  const handleCart = (id: number) => {
    let product = products.find((e) => e.id === id);
    let cartMount = [...cart, product!];

    setCart(cartMount);
    localStorage.setItem("@cart", JSON.stringify(cartMount));
  };

  return (
    <>
      <Header cartLength={cart.length} />
      <S.Container>
        <section>
          {products.map((product) => (
            <ProductCard
              product={product}
              handleCart={handleCart}
              key={product.id}
            />
          ))}
        </section>
      </S.Container>
    </>
  );
};

export default Home;
