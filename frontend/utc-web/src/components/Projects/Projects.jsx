import "./Projects.css";

function Projects() {

    const projects = [
        {
            title: "Otel Yönetim Sistemleri Entegrasyonu",
            description:
                "HotelRunner üzerinden oluşan faturaların kontrol edilmesi, gerekli düzenlemelerin yapılması ve Logo ERP sistemine otomatik olarak aktarılmasını sağlayan entegrasyon çözümü.",
            tags: ["Logo ERP","HotelRunner",".NET","SQL Server"]
        },
        {
            title: "Perakende ve POS Entegrasyonları",
            description:
                "RobotPos üzerinde oluşan sipariş, satış ve finansal işlemlerin Logo ERP sistemine otomatik aktarımını sağlayan entegrasyon çözümü.",
                tags: ["Logo ERP","RobotPos","REST API",".NET"]
        },
       {
            title: "Otomotiv ERP Entegrasyonları",
            description:
                "Toyota, BYD ve Honda sistemlerinden oluşan verilerin Logo ERP'ye aktarılması, ikinci el araç satış süreçleri ve araç kiralama operasyonlarının entegrasyonu.",
                tags: ["Logo ERP","Toyota","Honda","BYD","Araç Kiralama"]
        },
        {
            title: "Kurumsal Sistem Entegrasyonları",
            description:
                "ERP, e-ticaret, CRM ve üçüncü parti sistemler arasında güvenli ve sürdürülebilir veri alışverişi sağlayan özel entegrasyon çözümleri.",
            tags: ["ERP","CRM","REST API","SQL Server"]
        }
    ];

    return (
        <section id="projects" className="projects-section">

            <div className="container">

                <div className="text-center mb-5">

                    <span className="section-badge">
                        Öne Çıkan Projeler
                    </span>

                    <h2>
                        Farklı Sektörlerde Başarıyla Hayata Geçirdiğimiz Çözümler
                    </h2>

                    <p>
                        Logo ERP, entegrasyon ve özel yazılım projelerimizden örnekler
                    </p>

                </div>

                <div className="row">

                    {projects.map((project, index) => (

                        <div
                            key={index}
                            className="col-lg-4 mb-4"
                        >

                            <div className="project-card">

                                <h4>
                                    {project.title}
                                </h4>

                                <p>
                                    {project.description}
                                </p>

                                <div className="project-tags">
                                    {project.tags.map((tag, index) => (
                                        <span key={index} className="tech-badge">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default Projects;