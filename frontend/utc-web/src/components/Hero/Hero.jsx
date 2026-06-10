import "./Hero.css";
import heroImage from "../../assets/hero.png";

function Hero() {
    return(
        <section id="home" className="hero-section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <span className="hero-badge">
                            ERP • Entegrasyon • Yazılım 
                        </span>

                        <h1>
                            İşinizi Geleceğe
                            <br />
                            Taşıyan Çözümler
                        </h1>

                        <p>
                          Logo ERP entegrasyonları,özel yazılım geliştirme,web servis ve e-dönüşüm çözümleri sunuyoruz.  
                        </p>

                        <div className="d-flex gap-3 mt-4">
                            <a href="#services" className="btn btn-primary btn-lg">
                                Hizmetlerimiz
                            </a>

                            <a href="#contact" className="btn btn-outline-light btn-lg">
                                İletişime Geç
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-6 text-center">
                        <img
                          src={heroImage}
                          className="img-fluid hero-image"
                          alt="UTC"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Hero;