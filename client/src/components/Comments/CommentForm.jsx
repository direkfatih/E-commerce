const CommentForm = () => {
  return (
    <form className="comment-form">
      <p className="comment-notes">
        E-mail adresiniz yayınlanmayacaktır. Lütfen gerekli alanları doldurunuz.
        <span className="required">*</span>
      </p>
      <div className="comment-form-rating">
        <label>
          Puanlamanız
          <span className="required">*</span>
        </label>
        <div className="stars">
          <a href="#" className="star">
            <i className="bi bi-star-fill"></i>
          </a>
          <a href="#" className="star">
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
          </a>
          <a href="#" className="star">
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
          </a>
          <a href="#" className="star">
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
          </a>
          <a href="#" className="star">
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
          </a>
        </div>
      </div>
      <div className="comment-form-comment form-comment">
        <label htmlFor="comment">
          Yorumunuz
          <span className="required">*</span>
        </label>
        <textarea id="comment" cols="50" rows="10"></textarea>
      </div>
      <div className="comment-form-author form-comment">
        <label htmlFor="name">
          İsim
          <span className="required">*</span>
        </label>
        <input id="name" type="text" />
      </div>
      <div className="comment-form-email form-comment">
        <label htmlFor="email">
          E-mail
          <span className="required">*</span>
        </label>
        <input id="email" type="email" />
      </div>
      <div className="comment-form-cookies">
        <input id="cookies" type="checkbox" />
        <label htmlFor="cookies">
          Bir dahaki sefere yorum yaptığımda kullanılmak üzere adımı, e-posta
          adresimi bu tarayıcıya kaydet.
          <span className="required">*</span>
        </label>
      </div>
      <div className="form-submit">
        <input type="submit" className="btn submit" />
      </div>
    </form>
  );
};

export default CommentForm;
