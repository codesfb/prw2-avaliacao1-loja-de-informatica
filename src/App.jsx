import React, { useState } from "react";
import './App.css'
import Header from './components/Header/Header'
import Form from './components/Form/Form'
import Area from './components/Area/Area'
import Notification from './components/Notification/Notification'

function App () {
    const [products, setProducts] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [notification, setNotification] = useState(null);

    const toNewSignedItens = (item) => {
        setProducts([...products, item]);
        
        setNotification({
            id: Date.now(),
            message: `${item.name} adicionado com sucesso! ✓`
        });
    }

    const removeNotification = (id) => {
        setNotification(null);
    }

    const secoesLoja = [
    {
        nome: 'Computadores',
        corPrimaria: '#39a7df', 
        corSecundaria: '#263238' 
    },
    {
        nome: 'Acessórios',
        corPrimaria: '#465963', 
        corSecundaria: '#212121' 
    },
    {
        nome: 'Impressoras',
        corPrimaria: '#4fc2a5', 
        corSecundaria: '#263238' 
    },
    {
        nome: 'Games',
        corPrimaria: '#7a43b9', 
        corSecundaria: '#1a1a1a' 
    },
    {
        nome: 'Gadgets',
        corPrimaria: '#eb7e56',
        corSecundaria: '#2d2d2d' 
    }
];


const marcas = [
    {
        nome: 'HP',
        corPrimaria: '#2ba1f0', 
        corSecundaria: '#37474f' 
    },
    {
        nome: 'Dell',
        corPrimaria: '#81d4fa', 
        corSecundaria: '#263238'
    },
    {
        nome: 'Positivo',
        corPrimaria: '#4ad83d', 
        corSecundaria: '#3e2723' 
    },
    {
        nome: 'Asus',
        corPrimaria: '#00c3ff', 
        corSecundaria: '#424242' 
    },
    {
        nome: 'Marca Chinesa',
        corPrimaria: '#ff8a80', 
        corSecundaria: '#312a2a' 
    }
];

    const listaSecoes = secoesLoja.map( section => section.nome );
    const listaMarcas = marcas.map( brand => brand.nome );


  return(
    <div>
      <Header 
        onAddClick={() => setShowModal(true)} 
      />
      <main>
        <Area itens={products} />
        {showModal && (
          <div className="modal-overlay" onClick={() => setShowModal(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <Form 
                sections={listaSecoes}
                brands={listaMarcas}
                toRegister={(item) => { toNewSignedItens(item); setShowModal(false); }}
              />
              <button onClick={() => setShowModal(false)}>Fechar</button>
            </div>
          </div>
        )}
      </main>
      
      {notification && (
        <Notification 
          message={notification.message}
          duration={3000}
          onClose={() => removeNotification(notification.id)}
        />
      )}
    </div>
  );
}

export default App;