import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header";
import * as S from "./styles";

interface ICustomer {
  id: number;
  name: string;
  cpf: string;
  email: string;
  phone: string;
  address: string;
}

const CustomerAdd: React.FC = () => {
  const history = useHistory();
  const [customers, setCustomers] = useState<ICustomer[]>([]);
  const [name, setName] = useState<string>();
  const [cpf, setCpf] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [phone, setPhone] = useState<string>();
  const [address, setAddress] = useState<string>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    let customersRecover = JSON.parse(localStorage.getItem("@customers")!);
    if (customersRecover) setCustomers(customersRecover);
    else setCustomers([]);
  }, []);

  useEffect(() => {
    if (name && cpf && email && phone && address) setError("");
  }, [name, cpf, email, phone, address]);

  const handleSave = () => {
    if (!name || !cpf || !email || !phone || !address)
      return setError("Preencha todos os campos para cadastrar o cliente");

    let newCustomer: ICustomer = {
      id: customers.length + 1,
      name: name,
      cpf: cpf,
      email: email,
      phone: phone,
      address: address,
    };

    let customersMount = [...customers, newCustomer];

    setCustomers(customersMount);
    localStorage.setItem("@customers", JSON.stringify(customersMount));

    alert("Cliente Cadastrado!");
    history.push("/");
  };

  return (
    <>
      <Header />
      <S.Container>
        <S.FormContent>
          <h2>Cadastrar cliente</h2>
          {error ? <p>{error}</p> : ""}
          <label htmlFor="input-name">Nome completo:</label>
          <input
            type="text"
            id="input-name"
            placeholder="Nome completo do cliente"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="input-cpf">CPF:</label>
          <S.InputMask
            mask="999.999.999-99"
            type="text"
            id="input-cpf"
            placeholder="CPF do cliente"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
          <label htmlFor="input-email">E-mail:</label>
          <input
            type="email"
            id="input-email"
            placeholder="E-mail do cliente"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="input-phone">Telefone:</label>
          <S.InputMask
            mask="(99) 99999-9999"
            type="text"
            id="input-phone"
            placeholder="Telefone do cliente"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <label htmlFor="input-address">Endereço:</label>
          <input
            type="text"
            id="input-address"
            placeholder="Endereço do cliente"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <button type="button" onClick={handleSave}>
            Cadastrar
          </button>
        </S.FormContent>
      </S.Container>
    </>
  );
};

export default CustomerAdd;
