import React, { useState } from "react";
import data from "./data.json"; // Ohh, so we need to import it also

function App() {
  //  const [search, setState] = useState("");
   const [chip, setChip] = useState([]);

   const updateChip = (e) => {
    const value = e.target.value;

    if (e.key === "Enter") {
      setChip(prevValue => {
        return [...prevValue, value];
      });
      e.target.value = "";
    }
  }

  return (
    <div>
      <header>
        <div className="tags-input">
          <ul>
            {chip.map((item, index) => {
              return (
                <li key={index}>
                  <span className="chip-content">{item}</span>
                  <span onClick={() => {
                    setChip(prevValue => {
                      return prevValue.filter((item, idx) => idx !== index)
                    })
                  }} className="remove-chip">&#10006;</span>
                </li>
              )
            })}
          </ul>
          <input type="text" onKeyUp={updateChip} placeholder="Press enter to add languages" />
          <p onClick={() => {
            setChip([]);
          }} className="clear-button">Clear</p>
        </div>
      </header>
      {data.filter(item => {
        {/* ! We are CHAINING array callback methods here. So what we filtered through the filter method are the only ones that gets rendered by the map method */}
        const lowerCaseLanguage = item.languages.map(language => language.toLowerCase()); // We just map through the array and return a lowercase version of it
        const lowerCaseChip = chip.map(item => item.toLowerCase());
        
        return !lowerCaseChip ? item : lowerCaseChip.every(chip => lowerCaseLanguage.includes(chip));
      }).map((item, index) => {
        return (
          <div className={`card ${item.featured && "featured-border"}`}>
            <div className="image-container">
              <img className="logo" src={item.logo} alt="" />
            </div>
            <div className="qualifications-container">
              <div className="title-container">
                <h5 className="title">{item.company}</h5>
                <h6 className={item.new ? "new condition title" : ""}>{item.new && "NEW!"}</h6>
                <h6 className={item.featured ? "featured condition title" : ""}>{item.featured && "FEATURED"}</h6>
              </div>
              <div>
                <h4>{item.position}</h4>
              </div>
              <div className="type-container">
                <p className="type">{item.postedAt}<span className="bullet">&bull;</span></p>
                <p className="type">{item.contract}<span className="bullet">&bull;</span></p>
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

{/* .filter(item => {
        const lowerCaseLanguage = item.languages.map(language => language.toLowerCase()); // We just map through the array and return a lowercase version of it
        const lowerCaseChip = chip.map(item => item.toLowerCase());
        // ! if it returns true, it will keep the data. False will remove it to the list
        return lowerCaseChip.length >= 2 ? lowerCaseChip.every(chip => {
          return lowerCaseLanguage.map(language => {
            return language.includes(chip)
          }) 
        }) : item;
      }) */}

// lowerCaseLanguage.filter(language => {
//   return lowerCaseChip.filter(item => {
//     return language === item;
//   })
// })

{/* return !lowerCaseChip  && item ; */}
{/* return lowerCaseChip ? item : lowerCaseLanguage.some(language => language.includes(search.toLowerCase())); */}

// item.languages.filter(language => {
//   return search.toLowerCase() === "" ? language : language.toLowerCase().includes(search);
// }
// ! start
{/* <input onChange={(e) => {
          const value = e.target.value;
          console.log(value)
          setState(value);
        }} value={search} name="search" type="text" /> */}
// ! end
{/* <header>
<input value={search} onChange={(e) => {
  const value = e.target.value;

  setSearch(value);
}} type="text" />
</header>
<div>
{data.filter(item => {
  {/* return item.languages.filter(languages => {
    return search.toLowerCase() === "" ? languages : languages.toLowerCase().includes(search);
  }) */}
//   return search.toLowerCase() === "" ? item : item.role.toLowerCase().includes(search);
// })
// .map(item => {
//   return (
//     <div>
//       <img src={item.logo} alt="" />
//       <p>{item.role}</p>
//       <p>{item.level}</p>
//     </div>
//   )
// })}
// </div> */}

export default App;
