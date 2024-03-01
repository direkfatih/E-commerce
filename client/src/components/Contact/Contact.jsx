import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-top">
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.9633698339308!2d28.929441087738052!3d41.04793012296828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab1d021adf417%3A0xba3a3fdfdbb5f5d!2sEy%C3%BCp%20Sultan%20Camii!5e0!3m2!1str!2str!4v1665091191675!5m2!1str!2str"
            width="100%"
            height="500"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="contact-bottom">
        <div className="container">
          <div className="contact-titles">
            <h4>Bizimle iletişime geç</h4>
            <h2>İLETİŞİM KURMAK İÇİN</h2>
            <p>
              <strong>
                Aşağıda bulunan formu mesajınız ile birlikte doldurun ve bize
                iletin.{" "}
              </strong>
              <br />
              Destek, Öneri ve Şikayetleriniz için bizimle iletişime
              geçebilirsiniz. <br /> Sorunlarınıza destek olmak ve Mağazamızı
              iyileştirmek için mesajlarınıza ihtiyacımız var.
            </p>
          </div>
          <div className="contact-elements">
            <form className="contact-form">
              <div className="">
                <label>
                  İsim
                  <span>*</span>
                </label>
                <input type="text" required />
              </div>
              <div className="">
                <label>
                  E-mail
                  <span>*</span>
                </label>
                <input type="text" required />
              </div>
              <div className="">
                <label>
                  Konu
                  <span>*</span>
                </label>
                <input type="text" required />
              </div>
              <div className="">
                <label>
                  Mesajınız
                  <span>*</span>
                </label>
                <textarea
                  id="author"
                  name="author"
                  type="text"
                  defaultValue=""
                  size="30"
                  required=""
                  placeholder="Mesajınızı buraya yazınız"
                ></textarea>
              </div>
              <button className="btn btn-sm form-button">Mesajı Gönder</button>
            </form>
            <div className="contact-info">
              <div className="contact-info-item">
                <div className="contact-info-texts">
                  <strong> SHOPPING</strong>
                  <p className="contact-street">
                    Feyzullah, Maltepe Merkez Camii, Bağdat Cad. 346A, Maltepe
                  </p>
                  <a href="tel:Phone: +0216 111 11 11">Telefon: +0216 111 11 11</a>
                  <a href="mailto:Email: contact@example.com">
                    Email: contact@example.com
                  </a>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-texts">
                  <strong> Açılış saatleri</strong>
                  <p className="contact-date">
                    Pazartesi - Cuma : 09.00 - 21.00
                  </p>
                  <p>Hafta sonu kapalı</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
