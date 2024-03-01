const Login = () => {
  return (
    <div className="account-column">
      <h2>Giriş Yap</h2>
      <form>
        <div>
          <label>
            <span>
              Kullanıcı Adı veya Eposta Adresi
              <span className="required">*</span>
            </span>
            <input type="text" />
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
        <p className="remember">
          <label>
            <input type="checkbox" />
            <span>Beni Hatırla</span>
          </label>
          <button className="btn btn-sm">GİRİŞ YAP</button>
        </p>
        <a href="#" className="form-link">
          şifremi unuttum?
        </a>
      </form>
    </div>
  );
};

export default Login;
