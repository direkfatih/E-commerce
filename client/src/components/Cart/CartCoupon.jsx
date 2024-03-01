const CartCoupon = () => {
  return (
    <div className="actions-wrapper">
      <div className="coupon">
        <input type="text" className="input-text" placeholder="Kupon Kodu" />
        <button className="btn">Kupon Ekle</button>
        <div className="update-cart">
          <button className="btn">Sepeti Güncelle</button>
        </div>
      </div>
    </div>
  );
};

export default CartCoupon;
