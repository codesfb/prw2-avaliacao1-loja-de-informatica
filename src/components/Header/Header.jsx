import React, { useState, useEffect } from "react";
import './Header.css'
import Button from "../Button/Button";

export function Header (props) {

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return(
    <div>
      <header>
      
        <h1>Loja de informática do Fabião</h1>
        <div className="buttons">
          <Button onClick={toggleTheme}>
            {isDarkMode ? 'Claro' : 'Escuro'}
          </Button>
          <Button onClick={props.onAddClick}>Adicionar Produtos</Button>
        </div>
      </header>

    </div>
  );
}

export default Header;