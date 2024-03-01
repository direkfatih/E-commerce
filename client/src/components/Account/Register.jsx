const Register = () => {
  return (
    <div className="account-column">
      <h2>Üye Ol</h2>
      <form>
        <div>
          <label>
            <span>
              Kullanıcı Adı <span className="required">*</span>
            </span>
            <input type="text" />
          </label>
        </div>
        <div>
          <label>
            <span>
              E-mail <span className="required">*</span>
            </span>
            <input type="email" />
          </label>
        </div>
        <div>
          <label>
            <span>
              Şifre <span className="required">*</span>
            </span>
            <input type="password" />
          </label>
        </div>
        <div className="privacy-policy-text remember">
          <p>
            Kişisel verileriniz bu web sitesindeki deneyiminizi desteklemek,
            hesabınıza erişimi yönetmek ve{" "}
            <strong>
              <a href="#">gizlilik politimızda</a>{" "}
            </strong>
            açıklanan diğer amaçlar için kullanılacaktır.
          </p>
          <button className="btn btn-sm">ÜYE OL</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
