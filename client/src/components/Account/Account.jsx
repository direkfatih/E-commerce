import Login from "./Login";
import Register from "./Register";
import "./Account.css";

const Account = () => {
  return (
    <section className="account-page">
      <div className="container">
        <div className="account-wrapper">
          <Login />
          <Register />
        </div>
      </div>
    </section>
  );
};

export default Account;
