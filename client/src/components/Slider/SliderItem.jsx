const SliderItem = () => {
  return (
    <div className="slider-item fade">
      <div className="slider-image">
        <img src="img/slider/slider1.jpg" className="img-fluid" alt="" />
      </div>
      <div className="container">
        <p className="slider-title">Bahar 2024</p>
        <h2 className="slider-heading">%70`e kadar indirim</h2>
        <a href="#" className="btn btn-lg btn-primary">
          Şimdi Keşfet
        </a>
      </div>
    </div>
  );
};

export default SliderItem;
