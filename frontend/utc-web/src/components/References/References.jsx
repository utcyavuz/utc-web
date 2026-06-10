import "./References.css";

function References() {
  const references = [
    "YAVUZ METAL",
    "PROSEL ALÜMİNYUM",
    "PROVAL ALÜMİNYUM",
    "AYSİM ALÜMİNYUM",
    "PROBOND ALÜMİNYUM" 
  ];

  return (
    <section className="references-section">
      <div className="container">

        <div className="text-center mb-5">
          <span className="section-badge">Referanslarımız</span>
          <h2>Birlikte Çalışmaktan Gurur Duyduğumuz Markalar</h2>
          <p>Farklı sektörlerde başarılı projeler geliştirdik.</p>
        </div>

        <div className="row justify-content-center">
          {references.map((item, index) => (
            <div className="col-md-4 col-lg-2 mb-4" key={index}>
              <div className="reference-card">
                {item}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default References;