import ProductCard from "../productCard/productCard";
import './Area.css'

const Area = ({ itens }) => {
    const secoesLoja = [
        { nome: 'Computadores', corPrimaria: '#13506e', corSecundaria: '#adc5d1' },
        { nome: 'Acessórios', corPrimaria: '#e9d286', corSecundaria: '#212121' },
        { nome: 'Impressoras', corPrimaria: '#252b2e', corSecundaria: '#263238' },
        { nome: 'Games', corPrimaria: '#7b3bc4', corSecundaria: '#1a1a1a' },
        { nome: 'Gadgets', corPrimaria: '#be6646', corSecundaria: '#2d2d2d' }
    ];

    const marcas = [
        { nome: 'HP', corPrimaria: '#0099ff', corSecundaria: '#37474f' },
        { nome: 'Dell', corPrimaria: '#81d4fa', corSecundaria: '#263238' },
        { nome: 'Positivo', corPrimaria: '#148550', corSecundaria: '#3e2723' },
        { nome: 'Asus', corPrimaria: '#3f7da7', corSecundaria: '#424242' },
        { nome: 'Marca Chinesa', corPrimaria: '#ff8a80', corSecundaria: '#6b4f4f' }
    ];

    if (itens.length === 0) {
        return <h2 style={{ textAlign: 'center', marginTop: '20px' }}>Sem produtos ainda</h2>;
    }

    // Agrupar produtos por categoria
    const productByCategory = secoesLoja.map(sec => ({
        ...sec,
        produtos: itens.filter(item => item.section === sec.nome)
    })).filter(sec => sec.produtos.length > 0);

    return (
        <div className="area-container">
            {productByCategory.map((categoria, catIndex) => (
                <div key={catIndex} className="categoria-section">
                    <div 
                        className="categoria-header"
                        style={{
                            borderBottomColor: categoria.corPrimaria
                        }}
                    >
                        <h2>{categoria.nome}</h2>
                    </div>
                    <div className="area">
                        {categoria.produtos.map((item, index) => {
                            const brandInfo = marcas.find(m => m.nome === item.brand) || {};
                            return (
                                <ProductCard 
                                    key={index} 
                                    name={item.name} 
                                    price={item.price} 
                                    status={item.status} 
                                    brand={item.brand}
                                    categoryColor={categoria.corPrimaria}
                                    categorySecondaryColor={categoria.corSecundaria}
                                    brandColor={brandInfo.corPrimaria}
                                />
                            );
                        })}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Area;