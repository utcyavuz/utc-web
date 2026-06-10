import "./Stats.css";

function Stats() {
  return (
    <section className="stats-section">
      <div className="container">

        <div className="row text-center">

          <div className="col-md-3">
            <h2>13+</h2>
            <p>Yıllık Deneyim</p>
          </div>

          <div className="col-md-3">
            <h2>100+</h2>
            <p>Tamamlanan Proje</p>
          </div>

          <div className="col-md-3">
            <h2>7/24</h2>
            <p>Teknik Destek</p>
          </div>

          <div className="col-md-3">
            <h2>50+</h2>
            <p>Aktif Müşteri</p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Stats;