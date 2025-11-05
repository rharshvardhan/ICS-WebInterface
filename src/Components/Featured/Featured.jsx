import React from 'react'
import './Featured.css'
const Featured = () => {
    const featuredCards = [
  {
    badge: "New",
    title: "AI Risk Intelligence Suite",
    description: "Automated risk scoring, anomaly detection, and compliance workflows for regulated industries.",
    features: ["Model governance dashboard", "Continuous monitoring", "Audit ready reports"],
  },
  {
    badge: "Popular",
    title: "Customer360 CoPilot",
    description: "Unifies structured and unstructured data to surface next-best actions and personal recommendations.",
    features: ["Fine-tuned LLM orchestration", "Salesforce integration", "Real-time sentiment"],
  },
  {
    badge: "AI Labs",
    title: "GenAI Innovation Sprint",
    description: "Design sprint engagements to validate AI concepts with working prototypes in four weeks.",
    features: ["Discovery workshops", "Trusted partner network", "Executive playbacks"],
    badgeClass: "secondary"
  }
];

  return (
    <div>
       <section className="featured" id="featured">
  <div className="container">
    <header className="section-header">
      <h2>Featured Capabilities</h2>
      <p>Hand-picked AI offerings to accelerate high-impact use cases across the enterprise.</p>
    </header>

    <div className="card-grid">
      {featuredCards.map((card, index) => (
        <article key={index} className={`card ${card.badgeClass || ""}`}>
          <span className={`badge ${card.badgeClass || ""}`}>{card.badge}</span>
          <h3>{card.title}</h3>
          <p>{card.description}</p>
          <ul>
            {card.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>


          <div className="card-footer">
            {card.badge == "New" && (
              <a target = "_blank" href="https://agreeable-pebble-0a5f3850f.3.azurestaticapps.net/" className='btn' >
                  View Demo
              </a>
            )}
            <a href="#" className="btn">View Details</a> 
          </div>
        </article>
      ))}
    </div>
  </div>
</section>

    </div>
  )
}

export default Featured
