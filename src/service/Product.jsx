import './Product.css'

export const Product = ({ product }) => {
  return (
    <div className="product">
      <div className="img">
        <img src={product.pic} alt={product.name} />
      </div>

      <div className="details">
        <h3>{product.name}</h3>
        <p>Price Rs: {product.amt}</p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};