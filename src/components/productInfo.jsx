import React, { useState, useEffect, useRef } from "react";
import Accordion from 'react-bootstrap/Accordion';

export default function ProductInfo({ product }) {
  const [dropdownState, setDropdownState] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const languages = ["English", "Hindi", "Gujrati", "Marathi"];
  const dropdownRef = useRef(null);

  const handleDropdownClick = () => {
    setDropdownState(!dropdownState);
  };

  const handleSetLanguage = (language) => {
    setSelectedLanguage(language);
    setDropdownState(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownState(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Filter questions based on the selected language
  const languageQuestions = product.languages.find(
    (lang) => lang.name === selectedLanguage
  )?.questions;

  return (
    <>
      <div className="container" ref={dropdownRef}>
      <div className="div3">
            <div className="div4">
              <div className="div5">Medicine Info</div>
              <div className="div6" />
              <div className="div7" />
            </div>
            <div className="div8">
              <div onClick={handleDropdownClick} className="div9">English </div>
              <div className="div10">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/204ea1dd7b69153d39b28c3f8d65ef4b484722a80c0de28f42ea44b8ec793aaa?apiKey=e9e73932d1d043a5944dc9de17a91a79&"
                  className="img1"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/204ea1dd7b69153d39b28c3f8d65ef4b484722a80c0de28f42ea44b8ec793aaa?apiKey=e9e73932d1d043a5944dc9de17a91a79&"
                  className="img2"
                />
              </div>
            </div>
          </div>
          <div
            className={`dropdown-items ${
              dropdownState ? "isVisible" : "isHidden"
            }`}
          >
            {languages.map((language, index) => (
              <div
                key={index}
                className="dropdown-item"
                onClick={() => handleSetLanguage(language)}
              >
                {language}
              </div>
            ))}
          </div>
         
          
        </div>
        <Accordion defaultActiveKey="0">
        {languageQuestions &&
          languageQuestions.map((qa, index) => (
            <Accordion.Item eventKey={index}>
            <Accordion.Header>{qa.question}</Accordion.Header>
            <Accordion.Body>
             {qa.answer}
            </Accordion.Body>
          </Accordion.Item>
    
          ))}
    </Accordion>
    
      <style jsx>
        {" "}
        {`
          .container {
            max-width: 1024px;
            margin: auto;
            padding: 10px 5px 10px;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .dropdown {
            width: 50%;
            padding: 5px;
          }
          .dropdown-btn {
            font-size: 16px;
            background: white;
            border: 1px solid black;
            border-radius: 4px;
            height: 40px;
            width: 100%;
            padding: 0 30px;
            cursor: pointer;
          }
          .dropdown-btn:hover,
          .dropdown-btn:focus {
            background: #f2f2f2;
          }

          .dropdown-items {
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
              0 6px 6px rgba(0, 0, 0, 0.23);
            width: 200px;
            position: absolute;
            margin-top: 280px;
            margin-left: 160px;
            z-index: 1;
            display: flex;
            flex-direction: column;
            border: 1px solid black;
            border: 1px solid black;
            padding: 2px 0px;
            border-radius: 4px;
            background: white;
          }
          .dropdown-item {
            padding-top: 0px;
            padding-bottom: 0px;
            cursor: pointer;
            padding: 2px 5px;
            transition: color 0.3s ease;
          }
          .dropdown-item:hover {
            background-color: #f2f2f2;
          }

          .dropdown-item:not(first-child) {
            padding-top: 15px;
            padding-bottom: 15px;
          }
          .dropdown-item:not(last-child) {
            padding-top: 15px;
            padding-bottom: 15px;
          }
          .dropdown-item: hover {
            color: #ff6600;
          }
          .isVisible {
            visibility: visible;
          }
          .isHidden {
            visibility: hidden;
          }
          .div3 {
            background-color: #fff;
            display: flex;
            width: 100%;
            justify-content: space-between;
            gap: 20px;
            padding: 21px 19px 0;
          }
          .div4 {
            display: flex;
            flex-direction: column;
          }
          .div5 {
            color: #148eea;
            white-space: nowrap;
            font: 400 16px Inter, sans-serif;
          }
          .div6 {
            background-color: #148eea;
            margin-top: 15px;
            height: 3px;
          }
          .div7 {
            background-color: #148eea;
            z-index: 10;
            height: 3px;
          }
          .div8 {
            align-self: start;
            display: flex;
            gap: 11px;
          }
          .div9 {
            color: #148eea;
            font: 400 16px Inter, sans-serif;
          }
          .div10 {
            disply: flex;
            flex-direction: column;
            fill: #148eea;
            overflow: hidden;
            align-self: start;
            position: relative;
            display: flex;
            aspect-ratio: 1.71;
            width: 12px;
            justify-content: center;
            align-items: center;
          }
          .img1 {
            position: absolute;
            inset: 0;
            height: 100%;
            width: 100%;
            object-fit: cover;
            object-position: center;
          }
          .img2 {
            aspect-ratio: 1.72;
            object-fit: contain;
            object-position: center;
            width: 100%;
            fill: #148eea;
          }
         
        `}
      </style>
    </>
  );
}

// import React, { useState,useEffect, useRef } from "react";

// export default function ProductInfo() {
//   const [dropdownState, setDropdownState] = useState(false);
//   const [dropdownValue, setDropdownValue] = useState("Option 1");
//   const options = ["Option 1", "Option 2", "Option 3", "Option 4"];
//   const dropdownRef = useRef(null);

//   const handleDropdownClick = () => {
//     setDropdownState(!dropdownState);
//   };
//   const handleSetDropdownValue = (value) => {
//     setDropdownValue(value);
//     setDropdownState(!dropdownState);
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setDropdownState(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   return (
//     <div className="container" ref={dropdownRef}>
//       <div className={`dropdown`}>
//         <button onClick={handleDropdownClick} className="dropdown-btn">
//           {dropdownValue}
//         </button>

//         <div
//           className={`dropdown-items ${
//             dropdownState ? "isVisible" : "isHidden"
//           }`}
//         >
//           {options.map((option, index) => (
//             <div
//               className="dropdown-item"
//               onClick={() => handleSetDropdownValue(option)}
//             >
//               {option}
//             </div>
//           ))}
//         </div>
//       </div>
//       <style jsx>
//         {`
//           .container {
//             max-width: 1024px;
//             margin: auto;
//             height: 500px;
//             padding: 50px;
//             display: flex;
//             align-items: center;
//             justify-content: center;
//           }

//           .dropdown {
//             min-width: 100px;
//           }
//           .dropdown-btn {
//             font-size: 16px;
//             background: white;
//             border: 1px solid black;
//             border-radius: 4px;
//             height: 40px;
//             width: auto;
//             padding: 0 30px;
//             cursor: pointer;
//           }
//           .dropdown-btn:hover,
//           .dropdown-btn:focus {
//             background: #f2f2f2;
//           }

//           .dropdown-items {
//             box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
//               0 6px 6px rgba(0, 0, 0, 0.23);
//             width: 200px;
//             position: absolute;
//             margin-top: 5px;
//             display: flex;
//             flex-direction: column;
//             border: 1px solid black;
//             border: 1px solid black;
//             padding: 2px 0px;
//             border-radius: 4px;
//           }
//           .dropdown-item {
//             padding-top: 0px;
//             padding-bottom: 0px;
//             cursor: pointer;
//             padding : 2px 5px;
//             transition: color 0.3s ease;
//           }
//           .dropdown-item:hover {
//             background-color: #f2f2f2;
//           }

//           .dropdown-item:not(first-child) {
//             padding-top: 15px;
//             padding-bottom: 15px;
//           }
//           .dropdown-item:not(last-child) {
//             padding-top: 15px;
//             padding-bottom: 15px;
//           }
//           .dropdown-item: hover{
//             color: #ff6600;
//           }
//           .isVisible {
//             visibility: visible;
//           }
//           .isHidden {
//             visibility: hidden;
//           }
//         `}
//       </style>
//     </div>
//   );
// }
