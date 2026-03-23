import './ProductCard.css'
const ProductCard = ({ ...props }) => {
    const logoMap = {
        'HP': '/logos/HP-Logo.png',
        'Dell': '/logos/Dell.png',
        'Positivo': '/logos/Positivo.png',
        'Asus': '/logos/Asus.png',
        'Marca Chinesa': '/logos/Marca-chinesa.png'
    };
    const logoSrc = logoMap[props.brand] || '/FabiaoTech.png';

    return (

        <div
            className="product"
            style={{
                borderTop: `4px solid ${props.brandColor || '#7ebdfc'}`
            }}
        >
            <div
                className="image"
                style={{
                    background: `linear-gradient(135deg, ${props.brandColor}33 0%, ${props.brandColor}11 100%)`
                }}
            >
                <img

                    src={logoSrc}
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/FabiaoTech.png';
                    }}
                    alt={`Logo da marca ${props.brand}`}
                />
            </div>
            <div className="foot">

                <h5>Marca: {props.brand}</h5>
                <h5>Status: {props.status}</h5>
                <h5>Preço: {props.price}</h5>

                <p>Modelo</p>
                <p> {props.name}</p>

            </div>

        </div >

    )

}

export default ProductCard;