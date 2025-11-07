import React from 'react'
import "./Story.css"
const Story = () => {
    const storyDetails=[
        { Name :"Global Bank Reduces Fraud Losses by 42%", 
          Description : "Deployed AI-driven risk and anomaly detection across payment rails, enabling real-time interdiction and compliance reporting."
          ,link :"#", Desc_A : "Read the Case Study" 
        },
        { Name :"Healthcare Network Cuts Intake Time by 30%", 
          Description : "Automated patient onboarding with multilingual voice assistants and secure document intelligence."
          ,link :"#", Desc_A : "Read the Case Study" 
        },
        { Name :"Retailer Scales Personalization Across 15 Markets", 
          Description : "Unified customer profiles with predictive merchandising to unlock hyper-localized campaigns."
          ,link :"#", Desc_A : "Read the Case Study" 
        },
    ]
  return (
    <div>
      <section className="stories" id="stories">
      <div className="container stories-grid">
        
            {storyDetails.map((item, idx)=>(
                <article key={idx} className="story">
            <h3>{item.Name}</h3>
            <p>{item.Description}</p>
            <a href={item.link} className="link">{item.Desc_A}</a>
            </article>
            ))}
      </div>
    </section>
    </div>
  )
}
export default Story
