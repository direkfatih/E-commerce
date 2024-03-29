import { useContext } from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import { CartContext } from "../../context/CartProvider";
import "./Header.css";

const Header = ({ setIsSearchShow }) => {
  const { cartItems } = useContext(CartContext);
  const user = localStorage.getItem("user");
  const { pathname } = useLocation();

  const cartItemTotals = cartItems.map((item) => {
    const itemTotal = item.quantity;

    return itemTotal;
  });

  const subQuantity = cartItemTotals.reduce((currentValue, previousValue) => {
    return previousValue + currentValue;
  }, 0);

  return (
    <header>
      <div className="global-notification">
        <div className="container">
          <p>
            TÜM ÜRÜNLERDE İNDİRİMLER VE ÜCRETSİZ KARGO
            <a href="shop.html"> ŞİMDİ ALIŞVERİŞ YAP</a>
          </p>
        </div>
      </div>
      <div className="header-row">
        <div className="container">
          <div className="header-wrapper">
            <div className="header-mobile">
              <i className="bi bi-list" id="btn-menu"></i>
            </div>
            <div className="header-left">
              <Link to={"/"} className="logo">
                <img src="/img/logo.png" alt="" />
              </Link>
            </div>
            <div className="header-center" id="sidebar">
              <nav className="navigation">
                <ul className="menu-list">
                  <li className="menu-list-item">
                    <Link
                      to={"/"}
                      className={`menu-link ${
                        pathname === "/anasayfa" && "active"
                      }`}
                    >
                      ANASAYFA
                    </Link>
                  </li>
                  <li className="menu-list-item megamenu-wrapper">
                    <Link
                      to={"/kategoriler"}
                      className={`menu-link ${
                        pathname === "/kategoriler" && "active"
                      }`}
                    >
                      KATEGORİLER
                      <i
                        className="bi bi-chevron-down"
                        style={{ marginLeft: 3 }}
                      ></i>
                    </Link>
                    <div className="menu-dropdown-wrapper">
                      <div className="menu-dropdown-megamenu">
                        <div className="megamenu-links">
                          <div className="megamenu-products">
                            <h3 className="megamenu-products-title">En Çok Tercih Edilenler</h3>
                            <ul className="megamenu-menu-list">
                              <li>
                                <a href="#">T-Shirt</a>
                              </li>
                              <li>
                                <a href="#">Akıllı Telefon</a>
                              </li>
                              <li>
                                <a href="#">Bilgisayar</a>
                              </li>
                              <li>
                                <a href="#">Televizyon</a>
                              </li>
                              <li>
                                <a href="#">Elektronik Aksesuarlar</a>
                              </li>
                              <li>
                                <a href="#">Akıllı Saat</a>
                              </li>
                              <li>
                                <a href="#">Kulaklık</a>
                              </li>
                            </ul>
                          </div>
                          <div className="megamenu-products">
                            <h3 className="megamenu-products-title">
                              Ev & Yaşam
                            </h3>
                            <ul className="megamenu-menu-list">
                              <li>
                                <a href="#">Ev Temizliği</a>
                              </li>
                              <li>
                                <a href="#">Ev Koleksiyonları</a>
                              </li>
                              <li>
                                <a href="#">Mini Ev Aletleri</a>
                              </li>
                              <li>
                                <a href="#">Modern Ev Ürünleri</a>
                              </li>
                              <li>
                                <a href="#">Ev Stili</a>
                              </li>
                              <li>
                                <a href="#">Eşsiz Ev Ürünleri</a>
                              </li>
                            </ul>
                          </div>
                          <div className="megamenu-products">
                            <h3 className="megamenu-products-title">
                              Kozmetik
                            </h3>
                            <ul className="megamenu-menu-list">
                              <li>
                                <a href="#">Makyaj</a>
                              </li>
                              <li>
                                <a href="#">Cilt Bakımı</a>
                              </li>
                              <li>
                                <a href="#">Saç Bakımı</a>
                              </li>
                              <li>
                                <a href="#">Kişisel Bakım</a>
                              </li>
                              <li>
                                <a href="#">Parfüm & Deodorant</a>
                              </li>
                              <li>
                                <a href="#">Genel Bakım</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="megamenu-single">
                          <a href="#">
                            <img
                              src="img/mega-menu.jpg"
                              alt=""
                              style={{ height: "280px" }}
                            />
                          </a>
                          <br />
                          <a
                            href="#"
                            className="megamenu-single-button btn btn-sm"
                          >
                            Şimdi Alışveriş Yap
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="menu-list-item">
                    <Link
                      to={"/blog"}
                      className={`menu-link ${
                        pathname === "/blog" && "active"
                      }`}
                    >
                      Blog
                    </Link>
                  </li>
                  <li className="menu-list-item">
                    <Link
                      to={"/iletişim"}
                      className={`menu-link ${
                        pathname === "/iletişim" && "active"
                      }`}
                    >
                      İletişim
                    </Link>
                  </li>
                </ul>
              </nav>
              <i className="bi-x-circle" id="close-sidebar"></i>
            </div>
            <div className="header-right">
              <div className="header-right-links">
                <Link to={"/hesap"} className="header-account">
                  <i className="bi bi-person"></i>
                </Link>
                <button
                  className="search-button"
                  onClick={() => setIsSearchShow(true)}
                >
                  <i className="bi bi-search"></i>
                </button>
                <Link to={"/favoriler"}>
                  <i className="bi bi-heart"></i>
                </Link>
                <div className="header-cart">
                  <Link to={"/sepet"} className="header-cart-link">
                    <i className="bi bi-cart"></i>
                    <span className="header-cart-count">{subQuantity}</span>
                  </Link>
                </div>
                {user && (
                  <button
                    className="search-button"
                    onClick={() => {
                      if (
                        window.confirm(
                          "Çıkış yapmak istediğinize emin misiniz?"
                        )
                      ) {
                        {
                          localStorage.removeItem("user");
                          window.location.href = "/";
                        }
                      }
                    }}
                  >
                    <i className="bi bi-box-arrow-right"></i>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

Header.propTypes = {
  setIsSearchShow: PropTypes.func,
};
