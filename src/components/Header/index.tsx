import React from "react";

import * as S from "./styles";
import logoStore from "../../assets/store-alt.svg";
import logoCart from "../../assets/shopping-cart.svg";

interface HeaderProps {
  cartLength?: number;
}

const Header: React.FC<HeaderProps> = (props) => {
  let { cartLength } = props;
  return (
    <S.Header>
      <S.LinkStyled to="/">
        <img src={logoStore} alt="Loja" />
      </S.LinkStyled>
      <S.LinkStyled to="/">Visualizar Produtos</S.LinkStyled>
      <S.LinkStyled to="/products/add">Cadastrar Produto</S.LinkStyled>
      <S.LinkStyled to="/customers/add">Cadastrar Cliente</S.LinkStyled>
      {cartLength ? (
        <S.LinkStyled to="/cart/">
          <img src={logoCart} alt="Carrinho" />
          {cartLength ? <div>{cartLength}</div> : ""}
        </S.LinkStyled>
      ) : (
        <p></p>
      )}
    </S.Header>
  );
};

export default Header;
