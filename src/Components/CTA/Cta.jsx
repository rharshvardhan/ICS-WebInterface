import React from 'react'
import "./Cta.css"
const Cta = () => {
  return (
    <div>
      <section className="cta" id="cta">
      <div className="container cta-content">
        <div>
          <h2>Ready to transform your enterprise with AI?</h2>
          <p>Let’s collaborate on a roadmap, co-create solutions, and deliver measurable business outcomes.</p>
        </div>
        <form className="cta-form">
          <label className="sr-only" htmlFor="name">Name</label>
          <input id="name" type="text" placeholder="Name"/>
          <label className="sr-only" for="email">Work Email</label>
          <input id="email" type="email" placeholder="Work Email"/>
          <button type="submit">Request Workshop</button>
        </form>
      </div>
    </section>
    </div>
  )
}

export default Cta
