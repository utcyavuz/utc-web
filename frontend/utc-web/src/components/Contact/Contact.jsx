import "./Contact.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

function Contact() {
    return (
        <section id="contact" className="contact-section">

            <div className="container">

                <div className="text-center mb-5">

                    <span className="section-badge">
                        İletişim
                    </span>

                    <h2>
                        Projeleriniz İçin Bizimle İletişime Geçin
                    </h2>

                    <p>
                        İhtiyacınıza uygun çözümü birlikte belirleyelim.
                    </p>

                </div>

                <div className="row">

                    <div className="col-lg-7">

                        <form className="contact-form">

                            <div className="row">

                                <div className="col-md-6 mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Ad Soyad"
                                    />
                                </div>

                                <div className="col-md-6 mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Firma Adı"
                                    />
                                </div>

                            </div>

                            <div className="row">

                                <div className="col-md-6 mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Telefon"
                                    />
                                </div>

                                <div className="col-md-6 mb-3">
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="E-Posta"
                                    />
                                </div>

                            </div>

                            <div className="mb-3">

                                <textarea
                                    rows="5"
                                    className="form-control"
                                    placeholder="Mesajınız"
                                />

                            </div>

                            <button
                                className="btn btn-primary btn-lg"
                                type="button"
                            >
                                Ücretsiz Ön Görüşme Talep Et
                            </button>

                        </form>

                    </div>

                    <div className="col-lg-5">

                        <div className="contact-info">

                            <h4>İletişim Bilgileri</h4>

                            <p>
                                <FaPhone />
                                    <a href="tel:+905413299789">
                                        +90 541 329 97 89
                                    </a>
                            </p>

                            <p>
                                <FaEnvelope />
                                    <a href="mailto:destek@utcyazilim.com">
                                        destek@utcyazilim.com
                                    </a>
                            </p>

                            <p>
                                <FaMapMarkerAlt /> Türkiye
                            </p>

                            <a
                                href="https://wa.me/905413299789"
                                target="_blank"
                                rel="noreferrer"
                                className="btn btn-success w-100 mt-3">
                                <FaWhatsapp /> WhatsApp'tan Yazın
                            </a>
                            <hr />

                            <h5>Hizmet Alanlarımız</h5>

                            <ul>
                                <li>Logo ERP Danışmanlığı</li>
                                <li>Özel Yazılım Geliştirme</li>
                                <li>API ve Web Servis Entegrasyonları</li>
                                <li>E-Dönüşüm Çözümleri</li>
                            </ul>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Contact;