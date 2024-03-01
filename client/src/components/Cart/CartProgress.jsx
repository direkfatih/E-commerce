const CartProgress = () => {
  return (
    <div className="free-progress-bar">
      <p className="progress-bar-title">
        Sepetine <strong>200₺</strong> veya üzerinde, ürün veya ürünler ekle kargo ücretsiz olsun!
      </p>
      <div className="progress-bar">
        <span className="progress"></span>
      </div>
    </div>
  );
};

export default CartProgress;
