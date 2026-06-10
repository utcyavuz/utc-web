import "./Header.css";
import logo from "../../assets/images/logo.png";

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
            <div className="container">
                <a className="navbar-brand d-flex align-items-center" href="/">
                <img
                  src={logo}
                  alt="UTC"
                  className="utc-logo"
                />
                <div className="ms-2">
                    <h5 className="mb-0">UTC</h5>
                    <small>Yazılım & Danışmanlık</small>
                </div>
                </a>
                <ul className="navbar-nav ms-auto d-flex flex-row gap-4">
                    <li><a href="#home">Ana Sayfa</a></li>
                    <li><a href="#about">Hakkımızda</a></li>
                    <li><a href="#services">Hizmetler</a></li>
                    <li><a href="#projects">Referanslar</a></li>
                    <li><a href="#contact">İletişim</a></li>
                </ul>
            </div>
        </nav>
    );
}
export default Header;