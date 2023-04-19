import React from "react";
import data from "./data.json"; // Ohh, so we need to import it also

function App() {
  // const jsonData = JSON.parse(data);

  return (
    <div>
      <header></header>
      {data.map((item, index) => {
        return (
          <div className="card">
            <div className="image-container">
              <img className="logo" src={item.logo} alt="" />
            </div>
            <div className="qualifications-container">
              <div>
                <h5>{item.company}</h5>
                <h6 className={item.new ? "new condition" : ""}>{item.new && "NEW!"}</h6>
                <h6 className={item.featured ? "featured condition" : ""}>{item.featured && "FEATURED"}</h6>
              </div>
              <div>
                <h4>{item.position}</h4>
              </div>
              <div className="type-container">
                <p className="type">{item.postedAt} &middot;</p>
                <p className="type">{item.contract} &middot;</p>
                <p className="type">{item.location}</p>
              </div>
            </div>
            <div className="skills-container">
              <p className="skills">{item.role}</p>
              <p className="skills">{item.level}</p>
              {item.languages.map(language => {
                return (
                  <div>
                    <p className="skills">{language}</p>
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  );
}

export default App;
