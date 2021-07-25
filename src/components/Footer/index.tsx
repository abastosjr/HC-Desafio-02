import React from "react";
import * as S from "./styles";

import logoLinkedIn from "../../assets/linkedin.svg";
import logoGithub from "../../assets/github-square.svg";
import logoFacebook from "../../assets/facebook-square.svg";
import logoInstagram from "../../assets/instagram-square.svg";

const Footer: React.FC = () => {
  return (
    <S.Footer>
      <p>Developed by Antonio B Junior</p>
      <a
        href="https://www.linkedin.com/in/abastosjr/"
        title="LinkedIn de Antonio"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={logoLinkedIn} alt="LinkedIn" />
      </a>
      <a
        href="https://github.com/abastosjr"
        title="Github de Antonio"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={logoGithub} alt="Github" />
      </a>
      <a
        href="https://www.facebook.com/abastosjr"
        title="Facebook de Antonio"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={logoFacebook} alt="Github" />
      </a>
      <a
        href="https://www.instagram.com/abastosjr"
        title="Instagram de Antonio"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={logoInstagram} alt="Github" />
      </a>
    </S.Footer>
  );
};

export default Footer;
