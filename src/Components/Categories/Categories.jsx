import React from 'react'

const Categories = () => {
    const types = [
        "All",
        "Banking",
        "Healthcare",
        "Retail",
        "Manufacturing",
        "Customer Service",
        "Security",
        "RegTech",
        "Data Platform"
    ]
  return (
    <div>
      <section class="categories" aria-label="Capability categories">
      <div class="container category-strip">
        <button type="button" class="chip active">All</button>
        <button type="button" class="chip">Banking</button>
        <button type="button" class="chip">Healthcare</button>
        <button type="button" class="chip">Retail</button>
        <button type="button" class="chip">Manufacturing</button>
        <button type="button" class="chip">Customer Service</button>
        <button type="button" class="chip">Security</button>
        <button type="button" class="chip">RegTech</button>
        <button type="button" class="chip">Data Platforms</button>
      </div>
    </section>
    </div>
  )
}

export default Categories
