import "./Services.css";
import {
  FaServer,
  FaCode,
  FaExchangeAlt,
  FaFileInvoice
} from "react-icons/fa";

function Services() {
  const services = [
  {
    icon: <FaServer size={40} />,
    title: "Logo ERP Çözümleri",
    description:
      "Logo Go3, Tiger3 ve Wings danışmanlığı"
  },
  {
    icon: <FaCode size={40} />,
    title: "Özel Yazılım",
    description:
      "Web, Masaüstü ve Mobil uygulamalar"
  },
  {
    icon: <FaExchangeAlt size={40} />,
    title: "Entegrasyon Çözümleri",
    description:
      "API ve Web Servis entegrasyonları"
  },
  {
    icon: <FaFileInvoice size={40} />,
    title: "E-Dönüşüm",
    description:
      "E-Fatura, E-Arşiv ve E-İrsaliye"
  }
];

  return (
    <section id="services" className="services-section">

      <div className="container">

        <div className="text-center mb-5">
          <h2>Hizmetlerimiz</h2>
          <p>
            İşletmenizin dijital dönüşümüne
            katkı sağlıyoruz
          </p>
        </div>

        <div className="row">

          {services.map((service, index) => (

            <div
              key={index}
              className="col-md-6 col-lg-3 mb-4"
            >
              <div className="service-card">
                  <div className="service-icon">
                    {service.icon}
                  </div>
                <h4>{service.title}</h4>

                <p>{service.description}</p>

              </div>
            </div>

          ))} 
        </div>

      </div>

    </section>
  );
}

export default Services;