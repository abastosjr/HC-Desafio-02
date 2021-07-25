import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header";
import * as S from "./styles";

interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  photo: string;
}

const ProductAdd: React.FC = () => {
  const history = useHistory();
  const [products, setProducts] = useState<IProduct[]>([]);
  const [name, setName] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [price, setPrice] = useState<number>();
  const [photo, setPhoto] = useState<string>();

  useEffect(() => {
    let productsRecover = JSON.parse(localStorage.getItem("@products")!);
    setProducts(productsRecover);
  }, []);

  const handleSave = () => {
    let newProduct: IProduct = {
      id: products.length + 1,
      name: name!,
      description: description!,
      price: price!,
      photo: photo!,
    };

    let productsMount = [...products, newProduct];

    setProducts(productsMount);
    localStorage.setItem("@products", JSON.stringify(productsMount));

    alert("Produto Cadastrado!");
    history.push("/");
  };

  return (
    <>
      <Header />
      <S.Container>
        <S.FormContent>
          <h2>Cadastrar produto</h2>
          <label htmlFor="input-name">Nome:</label>
          <input
            type="text"
            id="input-name"
            placeholder="Nome do produto"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="input-description">Descrição:</label>
          <input
            type="text"
            id="input-description"
            placeholder="Descrição do produto"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <label htmlFor="input-price">Preço:</label>
          <input
            type="number"
            id="input-price"
            placeholder="Preço do produto"
            required
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />
          <label htmlFor="input-photo">Foto:</label>
          <input
            type="url"
            id="input-photo"
            placeholder="Link da foto do produto"
            required
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
          />
          <button type="button" onClick={handleSave}>
            Cadastrar
          </button>
        </S.FormContent>
      </S.Container>
    </>
  );
};

export default ProductAdd;
