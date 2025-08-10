import React, { useState } from "react";
import { Mail, Linkedin, Github, Code, Database, Cloud, Cpu } from "lucide-react";
import "./App.css";

function App() {
  const [language, setLanguage] = useState("fr");

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "fr" ? "en" : "fr"));
  };

  const content = {
    fr: {
      headerTitle: "Aldiouma Mbaye",
      headerSubtitle: "Data Engineer | Data Analyst",
      heroTitle: "Transformer la donnée en décisions stratégiques",
      heroText: [
        "Passionné par la donnée et son potentiel à transformer les décisions business, je combine expertise technique en Data Engineering et vision stratégique pour concevoir des systèmes scalables qui convertissent les données brutes en insights actionnables.",
        "Actuellement en Master 2 Data Engineering à l’École Centrale d’Électronique (ECE) à Paris, je développe des pipelines ETL fiables et performants, y compris en temps réel, déployés sur des environnements Cloud comme AWS et GCP.",
        "Diplômé d’une licence en informatique à l’Institut Mines-Télécom & SupdeCo Dakar (mention Très Bien), dans le cadre du campus franco-sénégalais, j’ai renforcé mes compétences en France en me focalisant sur les technologies Big Data et Cloud.",
        "Chez ShopMeAway, j’ai piloté des projets de prédiction des ventes avec Python et Scikit-learn, optimisé des KPI stratégiques et conçu des dashboards interactifs sous Power BI connectés à des bases Snowflake."
      ],
      softSkills: [
        "Communication claire et capacité à collaborer avec des équipes variées",
        "Esprit d’équipe et gestion efficace des projets",
        "Résolution de problèmes complexes avec approche analytique",
        "Adaptabilité et volonté d’apprendre de nouvelles technologies",
      ],
    },
    en: {
      headerTitle: "Aldiouma Mbaye",
      headerSubtitle: "Data Engineer | Data Analyst",
      heroTitle: "Transforming data into strategic decisions",
      heroText: [
        "Passionate about data and its potential to transform business decisions, I combine technical expertise in Data Engineering and strategic vision to design scalable systems that turn raw data into actionable insights.",
        "Currently pursuing a Master’s in Data Engineering at the École Centrale d’Électronique (ECE) in Paris, I develop reliable and efficient ETL pipelines, including real-time deployments on Cloud environments like AWS and GCP.",
        "Graduated with a degree in Computer Science from Institut Mines-Télécom & SupdeCo Dakar (with honors), I enhanced my skills in France by focusing on Big Data and Cloud technologies.",
        "At ShopMeAway, I led sales prediction projects using Python and Scikit-learn, optimized strategic KPIs, and designed interactive dashboards in Power BI connected to Snowflake databases."
      ],
      softSkills: [
        "Clear communication and ability to collaborate with diverse teams",
        "Team spirit and effective project management",
        "Solving complex problems with an analytical approach",
        "Adaptability and willingness to learn new technologies",
      ],
    },
  };

  const { headerTitle, headerSubtitle, heroTitle, heroText } = content[language];

  const projets = [
    {
      icon: "🚆",
      title: "Prédiction trafic SNCF",
      desc: "Modèles ML temps réel pour prédire les retards et améliorer la régulation ferroviaire.",
      link: "https://github.com/ebqydnjni/sncf-trafic-prediction",
    },
    {
      icon: "💳",
      title: "Détection de fraude",
      desc: "Streaming Spark/Kafka, détection en ligne des anomalies + dashboard Power BI en temps réel.",
      link: "https://github.com/ebqydnjni/fraude-temps-reel",
    },
    {
      icon: "❤️",
      title: "CardioMind",
      desc: "Projet IA santé : prédiction de maladies cardiaques avec visualisation personnalisée des risques.",
      link: "https://github.com/ebqydnjni/CardioMind",
    },
    {
      icon: "📊",
      title: "Pipeline Big Data",
      desc: "Architecture distribuée Hadoop + Spark avec ingestion, nettoyage, ML et export Power BI.",
      link: "https://github.com/ebqydnjni/PROJET-BIGDATA",
    },
    {
      icon: "🛍️",
      title: "Stage ShopMeAway",
      desc: "Analyse ventes e-commerce, forecast ARIMA, création de rapports Power BI et suivi KPI.",
      link: "https://github.com/ebqydnjni/Projet_StageShopmeaway",
    },
    {
      icon: "📈",
      title: "Valorisation des Données",
      desc: "Pipeline de valorisation des données avec ingestion, nettoyage, et visualisation avancée.",
      link: "https://github.com/ebqydnjni/valorisation_Des_Donnes.git",
    },
  ];

  return (
    <div className="app-container">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <h1 className="header-title">{headerTitle}</h1>
          <p className="header-subtitle">{headerSubtitle}</p>
          <a
            href="https://drive.google.com/file/d/1MFKGC48nbxJHaCXkQMHfNvUuPfp6QLNf/view?usp=sharing"
            className="cv-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Télécharger mon CV
          </a>
        </div>
        <button
          onClick={toggleLanguage}
          className="language-toggle"
          style={{
            position: 'absolute',
            bottom: '10px',
            right: '10px',
            backgroundColor: '#9dbf3d',
            color: '#FFFFFF',
            border: 'none',
            borderRadius: '5px',
            padding: '10px 15px',
            fontSize: '14px',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        >
          {language === "fr" ? "🇫🇷 Français" : "🇺🇸 English"}
        </button>
      </header>

      {/* Hero */}
      <section className="hero-section">
        <img
          src={`${import.meta.env.BASE_URL}aldiouma-hero.png`}
          alt="Aldiouma Mbaye portrait"
          className="hero-avatar"
        />
        <h2 className="hero-title">{heroTitle}</h2>
        {heroText.map((paragraph, index) => (
          <p key={index} className="hero-text">
            {paragraph}
          </p>
        ))}
      </section>

      {/* Projets */}
      <section className="projects-section">
        <h2 className="section-title">Projets phares</h2>
        <div className="projects-grid">
          {projets.map(({ icon, title, desc, link }) => (
            <a
              key={title}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
            >
              <div className="project-icon">{icon}</div>
              <h3 className="project-title">{title}</h3>
              <p className="project-desc">{desc}</p>
              <span className="project-link">Voir sur GitHub →</span>
            </a>
          ))}
        </div>
      </section>

      {/* Stack */}
      <section className="stack-section">
        <h2 className="section-title">Stack & outils</h2>
        <div className="stack-grid">
          <div className="stack-item">
            <Code size={32} className="stack-icon" />
            <h4>Langages</h4>
            <p>Python, R, Scala</p>
          </div>
          <div className="stack-item">
            <Database size={32} className="stack-icon" />
            <h4>Base de données</h4>
            <p>MySQL, PostgreSQL, MongoDB</p>
          </div>
          <div className="stack-item">
            <Cloud size={32} className="stack-icon" />
            <h4>Big Data</h4>
            <p>Apache Spark, Kafka, Hadoop, Airflow</p>
          </div>
          <div className="stack-item">
            <Cpu size={32} className="stack-icon" />
            <h4>ML & stats</h4>
            <p>Scikit-learn, Pandas, ARIMA, Random Forest</p>
          </div>
          <div className="stack-item">
            <Code size={32} className="stack-icon" />
            <h4>Visualisation</h4>
            <p>Power BI, Seaborn, Matplotlib</p>
          </div>
          <div className="stack-item">
            <Code size={32} className="stack-icon" />
            <h4>DevOps</h4>
            <p>Git, Docker, GitHub Actions</p>
          </div>
        </div>
      </section>

      {/* Compétences */}
      <section className="skills-section">
        <h2 className="section-title">Compétences</h2>
        <div className="badges-grid">
          <span className="badge">Python</span>
          <span className="badge">R</span>
          <span className="badge">Scala</span>
          <span className="badge">MySQL</span>
          <span className="badge">PostgreSQL</span>
          <span className="badge">MongoDB</span>
          <span className="badge">Cassandra</span>
          <span className="badge">Data Warehousing</span>
          <span className="badge">Hadoop</span>
          <span className="badge">Spark</span>
          <span className="badge">Kafka</span>
          <span className="badge">Apache Airflow</span>
          <span className="badge">TensorFlow</span>
          <span className="badge">PyTorch</span>
          <span className="badge">Matplotlib</span>
          <span className="badge">Seaborn</span>
          <span className="badge">Power BI</span>
          <span className="badge">Git</span>
          <span className="badge">Docker</span>
          <span className="badge">Kubernetes</span>
          <span className="badge">GitLab CI</span>
          <span className="badge">Azure</span>
          <span className="badge">AWS</span>
        </div>

        {/* Soft Skills */}
        <div className="softskills-list">
          <h3>Soft Skills</h3>
          <ul>
            {content[language].softSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact */}
      <footer className="footer">
        <div className="contact-links">
          <a href="mailto:aldioumambaye20@gmail.com" className="contact-link">
            <Mail size={20} /> <span>aldioumambaye20@gmail.com</span>
          </a>
          <a
            href="https://www.linkedin.com/in/aldiouma-mbaye-dataengineer/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <Linkedin size={20} /> <span>LinkedIn</span>
          </a>
          <p className="contact-phone">Téléphone : +33 7 84 73 16 64</p>
        </div>
        © {new Date().getFullYear()} Aldiouma Mbaye – Portfolio conçu avec React & Vite
      </footer>
    </div>
  );
}

export default App;
