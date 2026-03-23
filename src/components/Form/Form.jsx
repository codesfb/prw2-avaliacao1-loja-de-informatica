import { useState } from 'react';
import './Form.css'
import TextField from '../TextField/TextField'
import Dropdown from '../Dropdown/Dropdown'
import RadioButton from '../RadioButton/RadioButton';
import Button from '../Button/Button'

function Form(props) {

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState('')
  const [section, setSec] = useState('Computadores')
  const [brand, setbrand] = useState('HP')
  const [prodState, setProdState] = useState('novo');

  const toSave = (evento) => {
    evento.preventDefault(); // Evita que a página recarregue

    if (!name || !price) {
      alert("Por favor, preencha o nome e o preço do produto antes de salvar!");
      return; 
    }

    props.toRegister({
      name: name,
      price: price,
      section: section,
      brand: brand,
      status: prodState
    });
    setName(''); 
    setPrice('');
  };

  return (
    <section className='form'>
      <form onSubmit={toSave}>
        <h2>Dados do produto</h2>
        <Dropdown
          label="Seção"
          itens={props.sections}
          value={section}
          Changed={value => setSec(value)}
        />

        <Dropdown
          label="Marca"
          itens={props.brands}
          value={brand}
          Changed={value => setbrand(value)}
        />
        <TextField
          label="Nome"
          placeholder="Digite o nome do produto"
          value={name}
          changed={value => setName(value)}
        />

        <TextField
          label="Preço"
          placeholder="Digite o preço do produto"
          value={price}
          changed={value => setPrice(value)}
        />
        <RadioButton
          label="Novo"
          name="condition"
          value="novo"
          checked={prodState === "novo"}
          onChange={(e) => setProdState(e.target.value)}
        />

        <RadioButton
          label="Usado"
          name="condition"
          value="usado"
          checked={prodState === "usado"}
          onChange={(e) => setProdState(e.target.value)}
        />
        <Button >inserir produto</Button>


      </form>
    </section>
  );
}

export default Form;