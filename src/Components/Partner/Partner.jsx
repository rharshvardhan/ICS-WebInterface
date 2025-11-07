import React from 'react'
import "./Partner.css"
const Partner = () => {
    const partnerLogo = [
        { name: "Microsoft",src: "", alt: "Microsoft Logo" },
        { name: "Google",src: "", alt: "Google Logo" },
        { name: "AWS",src: "", alt: "AWS Logo" },
        { name: "ServiceNow",src: "", alt: "ServiceNow Logo" },
        { name: "SnkowFlakes",src: "", alt: "Snowflakes Logo" },
        { name: "UiPath",src: "", alt: "UiPath Logo" }
        ]

  return (
    <div>
      <section className="partners" id="partners">
      <div className="container partners-content">
        <div className="partners-copy">
          <h2>Partner Ecosystem</h2>
          <p>Infinite brings together trusted industry experts and technology providers to deliver production-ready AI outcomes.</p>
          <ul>
            <li>Strategic alliances with Microsoft, AWS, Google Cloud</li>
            <li>Certified delivery partners across data, automation, and security</li>
            <li>Enterprise onboarding, co-selling, and success playbooks</li>
          </ul>
          <a href="#" className="btn">Meet the Partners</a>
        </div>
        <div className="partners-showcase" aria-label="Partner logos">
            {partnerLogo.map((item, idx)=>(
                <div key={idx} className="logo-tile">{item.alt}</div>
            ))}
        </div>
      </div>
    </section>
    </div>
  )
}

export default Partner
