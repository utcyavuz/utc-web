import "./WhyUs.css";
import { FaCheckCircle } from "react-icons/fa";

function WhyUs() {
  const items = [
    "13+ yıllık Logo ERP ve entegrasyon tecrübesi",
    "İşletmeye özel sürdürülebilir yazılım çözümleri",
    "Logo Go3, Tiger3, Wings ve e-Dönüşüm süreçlerinde uzmanlık",
    "Hızlı destek, doğru analiz ve güvenilir proje yönetimi"
  ];

  return (
    <section id="about" className="whyus-section">
      <div className="container">
        <div className="row align-items-center">

          <div className="col-lg-6 mb-4 mb-lg-0">
            <span className="section-badge">Neden UTC Yazılım?</span>

            <h2>
              Logo ERP ve özel yazılımda
              güvenilir çözüm ortağınız
            </h2>

            <p className="whyus-text">
              UTC Yazılım & Danışmanlık olarak işletmelerin dijital
              dönüşüm süreçlerinde ihtiyaç duyduğu Logo ERP desteği,
              özel yazılım geliştirme ve entegrasyon çözümlerini
              uçtan uca sunuyoruz.
            </p>
          </div>

          <div className="col-lg-6">
            <div className="whyus-card">
              {items.map((item, index) => (
                <div className="whyus-item" key={index}>
                  <FaCheckCircle className="whyus-icon" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default WhyUs;