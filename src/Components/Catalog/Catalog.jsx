import React, { useState } from 'react'
import "./Catalog.css"
const capabilities = [
  {
    name: "Conversational Care Assistant",
    tag: "Healthcare",
    description: "HIPAA-ready virtual care assistant...",
    features: ["Integrates Epic & Cerner", "24/7 triage workflows", "Secured with Azure Confidential Computing"],
    rating: 4.8,
    link: "#",
    linkText: "View Partner"
  },
  
  {
    name: "Predictive Maintenance Edge",
    tag: "Telecom",
    description: "Edge-native analytics for IoT fleets...",
    features: ["Industrial IoT ready", "Closed-loop automation", "OT security baseline"],
    rating: 4.6,
    link: "#",
    linkText: "View Partner"
  },
  {
    name: "Conversational Care Assistant",
    tag: "Healthcare",
    description: "HIPAA-ready virtual care assistant...",
    features: ["Integrates Epic & Cerner", "24/7 triage workflows", "Secured with Azure Confidential Computing"],
    rating: 4.8,
    link: "#",
    linkText: "View Partner"
  },
  {
    name: "Responsible AI Governance Hub",
    tag: "Media",
    description: "Policy-aware governance portal aligning AI deployments with regulatory and ethical guardrails",
    features: ["Mitigation playbooks", "Bias audit automation", "Executive reporting suite"],
    rating: 4.9,
    link: "#",
    linkText: "View Partner"
  },
  {
    name: "Conversational Care Assistant",
    tag: "Telecom",
    description: "HIPAA-ready virtual care assistant...",
    features: ["Integrates Epic & Cerner", "24/7 triage workflows", "Secured with Azure Confidential Computing"],
    rating: 4.8,
    link: "#",
    linkText: "View Partner"
  },
  {
    name: "Conversational Care Assistant",
    tag: "Healthcare",
    description: "HIPAA-ready virtual care assistant...",
    features: ["Integrates Epic & Cerner", "24/7 triage workflows", "Secured with Azure Confidential Computing"],
    rating: 4.8,
    link: "#",
    linkText: "View Partner"
  },
  {
    name: "Conversational Care Assistant",
    tag: "Banking & Financial Services",
    description: "HIPAA-ready virtual care assistant...",
    features: ["Integrates Epic & Cerner", "24/7 triage workflows", "Secured with Azure Confidential Computing"],
    rating: 4.8,
    link: "#",
    linkText: "View Partner"
  },
 
];

const filters = [
  { label: "Industry", options: ["All", "Banking & Financial Services", "Healthcare", "Telecom", "Media"] },
  { label: "Deployment", options: ["Any", "2-4 Weeks", "1-3 Months", "Custom"] },
  { label: "Value Driver", options: ["Any", "Cost Optimization", "Revenue Growth", "Operational Resilience"] },
];

const Catalog = () => {
  const [selectedIndustry, setSelectedIndustry] = useState("All")
  const [filteredCapabilities, setFilteredCapabilities] = useState(capabilities)
  const [visibleCount, setVisibleCount] = useState(3)

  function handleFilter(){
    const filtered = capabilities.filter((item)=> selectedIndustry ==="All" || item.tag === selectedIndustry)
    setFilteredCapabilities(filtered)
    console.log(filtered.length);
    
  }
  return (
    <div>
      <section className="catalog" id="catalog">
      <div className="container">
        <header className="section-header">           
          <h2>Explore the Catalog</h2>
          <p>Filter by industry, deployment speed, value drivers, and partner specialization.</p>
        </header>

        <div className="catalog-controls">
          {filters.map((item, idx)=>(
            <label key={idx} className="select">
              <span>{item.label}</span>
              <select onChange={(e)=> item.label === "Industry" && setSelectedIndustry(e.target.value)}>
                {item.options.map((opt, idx)=>(
                  <option key={idx}>{opt}</option>
              ))}
              </select>              
         </label>
          ))}
          <button onClick={handleFilter} className="filter-btn" type="button">Apply Filters</button>
        </div>


        <div className="catalog-grid">
          {filteredCapabilities.slice(0,visibleCount).map((item, idx)=>(
            <article key={idx} className="capability">
            <div className="capability-header">
              <h3>{item.name}</h3>
              <span className="tag">{item.tag}</span>
            </div>
            <p>{item.description}</p>
            <ul>
              {item.features.map((feature, id)=>(
                <li key={id}>{feature}</li>
              ))
              }
              
            </ul>
            <div className="capability-meta">
              <span className="rating" aria-label="Rated 4.8 out of 5">★★★★★ <span>{item.rating}</span></span>
              <a href={item.link} className="btn ghost">{item.linkText}</a>
            </div>
          </article>
          ))}
        </div>


        <div className="catalog-footer">
          <button type="button" onClick={(e)=> setVisibleCount(e=> Math.min(e + 3, filteredCapabilities.length))} className="ghost-btn">Load More Capabilities</button>
          <p className="note">
            Showing {filteredCapabilities.length} of {filteredCapabilities.length} capabilities
            </p>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Catalog
