import CommentForm from "./CommentForm";
import CommentItem from "./CommentItem";
import PropTypes from "prop-types";
import "./Comments.css";
import { useEffect, useState } from "react";
import { message } from "antd";

const Comments = ({ active, singleProduct, setSingleProduct }) => {
  const [users, setUsers] = useState([]);
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const thisComment = [];

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/users`);

        if (response.ok) {
          const data = await response.json();
          setUsers(data);
        } else {
          message.error("Veri getirme başarısız.");
        }
      } catch (error) {
        console.log("Veri hatası:", error);
      }
    };
    fetchUsers();
  }, [apiUrl]);

  singleProduct.comments.forEach((comment) => {
    const matchingUsers = users?.filter((user) => user._id === comment.user);

    matchingUsers.forEach((matchingUser) => {
      thisComment.push({
        comment: comment,
        user: matchingUser,
      });
    });
  });

  return (
    <div className={`tab-panel-reviews ${active}`}>
      {singleProduct.comments.lenght > 0 ? (
        <>
          <h3>2 Yorum</h3>
          <div className="comments">
            <ol className="comment-list">
              {singleProduct.comments.map((item, index) => (
                <CommentItem key={index} item={item} commentItem={item} />
              ))}
            </ol>
          </div>
        </>
      ) : (
        <h3>Hiç yorum yok...</h3>
      )}
      <div className="review-form-wrapper">
        <h2>Yorum Ekle</h2>
        <CommentForm
          singleProduct={singleProduct}
          setSingleProduct={setSingleProduct}
        />
      </div>
    </div>
  );
};

export default Comments;

Comments.propTypes = {
  active: PropTypes.string,
  singleProduct: PropTypes.object,
  setSingleProduct: PropTypes.func,
};
