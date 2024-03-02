import CommentForm from "./CommentForm";
import CommentItem from "./CommentItem";
import PropTypes from "prop-types";
import "./Comments.css";

const Comments = ({ active }) => {
  return (
    <div className={`tab-panel-reviews ${active}`}>
      <h3>Baharlık ceket için 2 yorum</h3>
      <div className="comments">
        <ol className="comment-list">
          <CommentItem />
          <CommentItem />
          <CommentItem />
        </ol>
      </div>
      <div className="review-form-wrapper">
        <h2>Yorum Ekle</h2>
        <CommentForm />
      </div>
    </div>
  );
};

export default Comments;

Comments.propTypes = {
  active: PropTypes.string,
};
