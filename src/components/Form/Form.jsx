import { useState } from 'react';
import './Form.css'
import TextField from '../TextField/TextField'

function Form (props) {

    const [name, setName] = useState('')
    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
    const [area, setArea] = useState('Progr. Básica')

  return(
    <section className='form'>
        <form >
            <h2>Dados do produto</h2>
            <TextField
            label="Nome"
            placeholder="Digite o nome do produto"
            value={name}
            changed={value => setName(value)}
            
            />

        </form>        
    </section>
  );
}

export default Form;