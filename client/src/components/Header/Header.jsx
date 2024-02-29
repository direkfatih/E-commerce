import "./Header.css"

const Header = () => {
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
              <a href="index.html" className="logo">
                <img src="/img/logo.png" alt="" />
              </a>
            </div>
            <div className="header-center" id="sidebar">
              <nav className="navigation">
                <ul className="menu-list">
                  <li className="menu-list-item">
                    <a href="index.html" className="menu-link active">
                      ANASAYFA
                      <i className="bi bi-chevron-down"></i>
                    </a>
                    <div className="menu-dropdown-wrapper">
                      <ul className="menu-dropdown-content">
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
                  </li>
                  <li className="menu-list-item megamenu-wrapper">
                    <a href="shop.html" className="menu-link">
                      KATEGORİLER
                      <i className="bi bi-chevron-down"></i>
                    </a>
                    <div className="menu-dropdown-wrapper">
                      <div className="menu-dropdown-megamenu">
                        <div className="megamenu-links">
                          <div className="megamenu-products">
                            <h3 className="megamenu-products-title">Giyim</h3>
                            <ul className="megamenu-menu-list">
                              <li>
                                <a href="#">T-Shirt</a>
                              </li>
                              <li>
                                <a href="#">Sweatshirt</a>
                              </li>
                              <li>
                                <a href="#">Dış Giyim</a>
                              </li>
                              <li>
                                <a href="#">Takım Elbise</a>
                              </li>
                              <li>
                                <a href="#">Elbise</a>
                              </li>
                              <li>
                                <a href="#">Eşofman</a>
                              </li>
                              <li>
                                <a href="#">Pantolon</a>
                              </li>
                              <li>
                                <a href="#">Ayakkabı</a>
                              </li>
                              <li>
                                <a href="#">Aksesuar</a>
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
                            <img src="img/mega-menu.jpg" alt=""  style={{height: '280px'}}/>
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
                    <a href="blog.html" className="menu-link">
                      Blog
                    </a>
                  </li>
                  <li className="menu-list-item">
                    <a href="contact.html" className="menu-link">
                      İletişim
                    </a>
                  </li>
                </ul>
              </nav>
              <i className="bi-x-circle" id="close-sidebar"></i>
            </div>
            <div className="header-right">
              <div className="header-right-links">
                <a href="account.html" className="header-account">
                  <i className="bi bi-person"></i>
                </a>
                <button className="search-button">
                  <i className="bi bi-search"></i>
                </button>
                <a href="#">
                  <i className="bi bi-heart"></i>
                </a>
                <div className="header-cart">
                  <a href="cart.html" className="header-cart-link">
                    <i className="bi bi-bag"></i>
                    <span className="header-cart-count">0</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;