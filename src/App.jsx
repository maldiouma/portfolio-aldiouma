import React from "react";
import { Mail, Linkedin, Github, Code, Database, Cloud, Cpu } from "lucide-react";
import "./App.css";

function App() {
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
  ];

  return (
    <div className="app-container">
      {/* Header */}
      <header className="header">
        <h1 className="header-title">Aldiouma Mbaye</h1>
        <p className="header-subtitle">Data Engineer |Data Analyst</p>
        <a
          href="https://drive.google.com/file/d/1MFKGC48nbxJHaCXkQMHfNvUuPfp6QLNf/view?usp=sharing"
          className="cv-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Télécharger mon CV
        </a>
      </header>

      {/* Hero */}
      <section className="hero-section">
        <img
          src="/aldiouma-hero.png"
          alt="Aldiouma Mbaye portrait"
          className="hero-avatar"
        />
        <h2 className="hero-title">Donner du sens à la donnée</h2>
        <p className="hero-text">
           Après un an d’expérience en tant que Data Analyst, j’ai choisi de me spécialiser en Data Engineering pour approfondir mon expertise dans le traitement et l’impact des données. Actuellement en Master 2 Data Engineering à l’École Centrale d’Électronique à Paris, je conçois des pipelines fiables, en temps réel et orientés performance. Mon objectif : développer des systèmes de données utiles, robustes et tournés vers l’action.
        </p>

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
        <div className="softskills-list">
          <h3>Soft Skills</h3>
          <ul>
            <li>Communication claire et capacité à collaborer avec des équipes variées</li>
            <li>Esprit d’équipe et gestion efficace des projets</li>
            <li>Résolution de problèmes complexes avec approche analytique</li>
            <li>Adaptabilité et volonté d’apprendre de nouvelles technologies</li>
          </ul>
        </div>
      </section>

      {/* À propos */}
      <section className="about-section">
        <h2 className="section-title">À propos</h2>
        <p className="about-text">
          Après un baccalauréat scientifique obtenu en 2021, j’ai intégré une licence en informatique à l’Institut Mines-Télécom & SupdeCo Dakar dans le cadre du campus franco-sénégalais, que j’ai validée en 2024 avec la mention Très Bien.
          Désireux d’approfondir mes compétences, j’ai choisi de venir en France pour me spécialiser en Data Engineering et je suis actuellement en Master 2 à l’École Centrale d’Électronique (ECE) à Paris.
          Parallèlement, j’ai acquis une expérience concrète en travaillant comme Data Analyst chez ShopMeAway, où j’ai piloté des projets de prédiction des ventes, optimisé des KPIs, et développé des dashboards interactifs sous Power BI.
        </p>
      </section>

      {/* Contact */}
      <section className="contact-section">
        <h2 className="section-title light">Me contacter</h2>
        <p className="contact-text">Discutons de vos projets, ou simplement faites connaissance !</p>
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
        </div>
        <p className="contact-phone">Téléphone : +33 7 84 73 16 64</p>
      </section>

      {/* Footer */}
      <footer className="footer">
        © {new Date().getFullYear()} Aldiouma Mbaye – Portfolio conçu avec React & Vite
      </footer>
    </div>
  );
}

export default App;