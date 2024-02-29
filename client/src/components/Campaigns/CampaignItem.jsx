import "./CampaignItem.css";

const CampaignItem = () => {
  return (
    <div className="campaign-item">
      <h3 className="campaign-title">
        Moda Dönemi <br />
        Şehir İçin Hazır
      </h3>
      <p className="campaign-desc">
        Tüm Ürünlerimizde büyük kampanyalar sizleri bekliyor
      </p>
      <a href="#" className="btn btn-primary">
        Hepsini Göster
        <i className="bi bi-arrow-right"></i>
      </a>
    </div>
  );
};

export default CampaignItem;
