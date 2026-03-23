import React from "react";
import './Header.css'
import Button from "../Button/Button";

export function Header (props) {

  return(
    <div>
      <header>
        
        <h1>Loja de informática do Fabião</h1>
        <div className="buttons">
          <Button onClick={props.onAddClick}>Adicionar Produtos</Button>
        </div>
      </header>

    </div>
  );
}

export default Header;