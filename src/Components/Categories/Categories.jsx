import React from 'react'
import { useState } from 'react'
import "./Categories.css"
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
  const [activeIndex, setActiveIndex] = useState(null);
  return (
    <div>
      <section className="categories" aria-label="Capability categories">
      <div className="container category-strip">
        {types.map((item, idx)=>(
           <button key={idx} type="button" className={activeIndex === idx ? "chip active" : "chip"} onClick={()=>(setActiveIndex(idx))}>{item}</button>
        ))}
      </div>
    </section>
    </div>
  )
}

export default Categories
