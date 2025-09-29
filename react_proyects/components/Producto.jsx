const Producto = ({ name, price, discount = 0, category }) => {
  
  const finalPrice = discount > 0 ? price - (price * discount) / 100 : price;

  return (
    <div className="product">
      <h2>{name}</h2>
      <span className="category">{category}</span>

      <div>
        {discount > 0 ? (
          <>
            <span className="original-price">${price}</span>
            <span className="discounted-price">${finalPrice}</span>
            <span className="discount-badge">-{discount}%</span>
          </>
        ) : (
          <span className="discounted-price">${price}</span>
        )}
      </div>
    </div>
  );
};

export default Producto;
