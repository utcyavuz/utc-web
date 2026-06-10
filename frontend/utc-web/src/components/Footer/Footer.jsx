import "./Footer.css";
import logo from "../../assets/images/logo.png";

function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row">

          <div className="col-lg-4 mb-4">
            <div className="footer-brand">
              <img src={logo} alt="UTC Yazılım" />
              <div>
                <h4>UTC Yazılım</h4>
                <p>Yazılım & Danışmanlık</p>
              </div>
            </div>

            <p className="footer-text">
              Logo ERP danışmanlığı, özel yazılım geliştirme ve entegrasyon
              çözümleriyle işletmenizin dijital dönüşümüne katkı sağlıyoruz.
            </p>
          </div>

          <div className="col-lg-2 mb-4">
            <h5>Hızlı Menü</h5>
            <ul className="footer-menu">
              <li><a href="#home">Ana Sayfa</a></li>
              <li><a href="#about">Hakkımızda</a></li>
              <li><a href="#services">Hizmetler</a></li>
              <li><a href="#projects">Projeler</a></li>
              <li><a href="#contact">İletişim</a></li>
            </ul>
          </div>

          <div className="col-lg-3 mb-4">
            <h5>Hizmetler</h5>
            <ul className="footer-menu">
              <li><a href="#services">Logo ERP Danışmanlığı</a></li>
              <li><a href="#services">Özel Yazılım Geliştirme</a></li>
              <li><a href="#services">API Entegrasyonları</a></li>
              <li><a href="#services">E-Dönüşüm Çözümleri</a></li>
            </ul>
          </div>

          <div className="col-lg-3 mb-4">
            <h5>İletişim</h5>
            <ul>
              <li>+90 541 329 97 89</li>
              <li>umutcan.yavuz@utcyazilim.com</li>
              <li>Türkiye</li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© 2026 UTC Yazılım & Danışmanlık. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;