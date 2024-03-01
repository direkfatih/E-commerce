const CartTotals = () => {
  return (
    <div className="cart-totals">
      <h2>Sepet</h2>
      <table>
        <tbody>
          <tr className="cart-subtotal">
            <th>Ürün Fiyat Toplamı</th>
            <td>
              <span id="subtotal">2400.00₺</span>
            </td>
          </tr>
          <tr>
            <th>Kargo</th>
            <td>
              <ul>
                <li>
                  <label>
                    Hızlı Kargo: 75.00₺
                    <input type="checkbox" id="fast-cargo" />
                  </label>
                </li>
                <li>
                  <a href="#">Adresi Değiştir</a>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <th>Toplam</th>
            <td>
              <strong id="cart-total">2400.00₺</strong>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="checkout">
        <button className="btn btn-lg">Alışverişi Tamamla</button>
      </div>
    </div>
  );
};

export default CartTotals;
