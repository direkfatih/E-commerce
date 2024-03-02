import { useState } from "react";
import Comments from "../../Comments/Comments";
import "./Tabs.css";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("desc");

  const handleTabClick = (e, tab) => {
    e.preventDefault();
    setActiveTab(tab);
  };

  return (
    <div className="single-tabs">
      <ul className="tab-list">
        <li>
          <a
            href="Açıklama"
            className={`tab-button ${activeTab === "desc" ? "active" : ""}`}
            onClick={(e) => handleTabClick(e, "desc")}
          >
            Açıklama
          </a>
        </li>
        <li>
          <a
            href="Ürün Bilgileri"
            className={`tab-button ${activeTab === "info" ? "active" : ""}`}
            onClick={(e) => handleTabClick(e, "info")}
          >
            Ürün Bilgileri
          </a>
        </li>
        <li>
          <a
            href="Yorumlar"
            className={`tab-button ${activeTab === "reviews" ? "active" : ""}`}
            onClick={(e) => handleTabClick(e, "reviews")}
          >
            Yorumlar
          </a>
        </li>
      </ul>
      <div className="tab-panel">
        <div
          className={`tab-panel-descriptions content ${
            activeTab === "desc" ? "active" : ""
          }`}
        >
          <p>
            Quisque varius diam vel metus mattis, id aliquam diam rhoncus. Proin
            vitae magna in dui finibus malesuada et at nulla. Morbi elit ex,
            viverra vitae ante vel, blandit feugiat ligula. Fusce fermentum
            iaculis nibh, at sodales leo maximus a. Nullam ultricies sodales
            nunc, in pellentesque lorem mattis quis. Cras imperdiet est in nunc
            tristique lacinia. Nullam aliquam mauris eu accumsan tincidunt.
            Suspendisse velit ex, aliquet vel ornare vel, dignissim a tortor.
          </p>
          <br />
          <p>
            Quisque varius diam vel metus mattis, id aliquam diam rhoncus. Proin
            vitae magna in dui finibus malesuada et at nulla. Morbi elit ex,
            viverra vitae ante vel, blandit feugiat ligula. Fusce fermentum
            iaculis nibh, at sodales leo maximus a. Nullam ultricies sodales
            nunc, in pellentesque lorem mattis quis. Cras imperdiet est in nunc
            tristique lacinia. Nullam aliquam mauris eu accumsan tincidunt.
            Suspendisse velit ex, aliquet vel ornare vel, dignissim a tortor.
          </p>
        </div>
        <div
          className={`tab-panel-information content ${
            activeTab === "info" ? "active" : ""
          }`}
          id="info"
        >
          <h3>Ürün Bilgileri</h3>
          <table>
            <tbody>
              <tr>
                <th>Renk</th>
                <td>
                  <p>
                    Elma Kırmızısı, Turuncu, Mavi, Yeşil, Pembe, Siyah, Beyaz
                  </p>
                </td>
              </tr>
              <tr>
                <th>Beden</th>
                <td>
                  <p>XXS, XS, S, M, L, XL, XXL</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Comments
          active={activeTab === "reviews" ? "content active" : "content"}
        />
      </div>
    </div>
  );
};

export default Tabs;
