import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <section className="policy">
        <div className="container">
          <ul className="policy-list">
            <li className="policy-item">
              <i className="bi bi-truck"></i>
              <div className="policy-texts">
                <strong>ÜCRETSİZ KARGO</strong>
                <span>250 ₺ ÜZERİNE</span>
              </div>
            </li>
            <li className="policy-item">
              <i className="bi bi-headset"></i>
              <div className="policy-texts">
                <strong>7/24 DESTEK</strong>
                <span>24 SAAT ONLİNE</span>
              </div>
            </li>
            <li className="policy-item">
              <i className="bi bi-arrow-clockwise"></i>
              <div className="policy-texts">
                <strong> 30 GÜN İADE</strong>
                <span>30 gün içinde şartsız iade</span>
              </div>
            </li>
            <li className="policy-item">
              <i className="bi bi-credit-card"></i>
              <div className="policy-texts">
                <strong> ÖDEME YÖNTEMİ</strong>
                <span>Güvenli ödeme</span>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <div className="subscribe-row">
        <div className="container">
          <div className="footer-row-wrapper">
            <div className="footer-subscribe-wrapper">
              <div className="footer-subscribe">
                <div className="footer-subscribe-top">
                  <h3 className="subscribe-title">
                    Yeni ürünler, indirimler ve daha fazlası hakkında bilgi
                    almak için e-posta adresinizi girin.
                  </h3>
                  <p className="subscribe-desc">
                    500₺ ve üzeri ilk alışverişinizde 250₺ değerinde bir indirim
                    kuponu göndereceğiz.
                  </p>
                </div>
                <div className="footer-subscribe-bottom">
                  <form>
                    <input
                      type="text"
                      placeholder="E-mail adresinizi giriniz"
                    />
                    <button className="btn">Abone Ol</button>
                  </form>
                  <p className="privacy-text">
                    Abone olarak şunları kabul etmiş olursunuz{" "}
                    <a href="#">
                      Şartlar ve Koşullar ve Gizlilik ve Çerez Politikası.
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="footer-contact-wrapper">
              <div className="footer-contact-top">
                <h3 className="contact-title">
                  İletişim için <br />
                  (+90) 123 456 78 90
                </h3>
                <p className="contact-desc">
                  08.00 - 19.00 Saatleri arasında ulaşabilirsiniz.
                </p>
              </div>
              <div className="footer-contact-bottom">
                <p className="privacy-text">
                  <strong>Mobil Uygulamalar</strong>
                </p>
                <br />
                <div className="download-app">
                  <a href="#">
                    <img src="img/footer/app-store.png" alt="" />
                  </a>
                  <a href="#">
                    <img src="img/footer/google-play.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="widgets-row">
        <div className="container">
          <div className="footer-widgets">
            <div className="brand-info">
              <div className="footer-logo">
                <a href="index.html" className="logo">
                  <img src="/img/logo.png" alt="" />
                </a>
              </div>
              <div className="footer-desc">
                <p>
                  Bütün siparişleriniz özenle hazırlanır ve titizlikle tarafınıza iletilir.
                  <br />
                  7 / 24 Online destek için
                </p>
              </div>
              <div className="footer-contact">
                <p>
                  <a href="tel:+901111111111">(+90) 111 111 11 11</a> -
                  <a href="mailto:info@example.com"> info@example.com</a>
                </p>
              </div>
            </div>
            <div className="widget-nav-menu">
              <h4>İletişim</h4>
              <ul className="menu-list">
                <li>
                  <a href="#">Hakkımızda</a>
                </li>
                <li>
                  <a href="#">Gizlilik Politikası</a>
                </li>
                <li>
                  <a href="#">İade Politikası</a>
                </li>
                <li>
                  <a href="#">Nakliye Politikası</a>
                </li>
              </ul>
            </div>
            <div className="widget-nav-menu">
              <h4>Hesabım</h4>
              <ul className="menu-list">
                <li>
                  <a href="#">kontrol paneli</a>
                </li>
                <li>
                  <a href="#">Siparişlerim</a>
                </li>
                <li>
                  <a href="#">Favorilerim</a>
                </li>
                <li>
                  <a href="#">Hesap detayları</a>
                </li>
                <li>
                  <a href="#">Siparişlerimi Takip Et</a>
                </li>
              </ul>
            </div>
            <div className="widget-nav-menu">
              <h4>Alışveriş</h4>
              <ul className="menu-list">
                <li>
                  <a href="#">En çok satanlar</a>
                </li>
                <li>
                  <a href="#">İndirim</a>
                </li>
                <li>
                  <a href="#">En son eklenen ürünler</a>
                </li>
                <li>
                  <a href="#">İndirimli Ürünler</a>
                </li>
              </ul>
            </div>
            <div className="widget-nav-menu">
              <h4>Kategoriler</h4>
              <ul className="menu-list">
                <li>
                  <a href="#">Kadın</a>
                </li>
                <li>
                  <a href="#">Erkek</a>
                </li>
                <li>
                  <a href="#">Çantalar</a>
                </li>
                <li>
                  <a href="#">Dış Giyim</a>
                </li>
                <li>
                  <a href="#">Ayakkabılar</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-row">
        <div className="container">
          <div className="footer-copyright">
            <div className="site-copyright">
              <p>Bütün hakları saklıdır.</p>
            </div>
            <a href="#">
              <img src="img/footer/cards.png" alt="" />
            </a>
            <div className="footer-menu">
              <ul className="footer-menu-list">
                <li className="list-item">
                  <a href="#">Gizlilik Politikası</a>
                </li>
                <li className="list-item">
                  <a href="#">Şartlar ve koşullar</a>
                </li>
                <li className="list-item">
                  <a href="#">İade Politikası</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
