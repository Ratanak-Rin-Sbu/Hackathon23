// import React from "react";
// import Toggle from "../Toggle/Toggle";
// import "./Navbar.css";
// import { Link } from "react-scroll";
// import { useDispatch } from "react-redux";
// import { setLogout } from "state";

// const Navbar = () => {
//   const dispatch = useDispatch();

//   return (
//     <div className="n-wrapper" id="Navbar">
//       {/* left */}
//       <div className="n-left">

//         <Toggle />
//       </div>
//       {/* right */}
//       <div className="n-right">
//         <div className="n-list">
//           <ul style={{ listStyleType: "none" }}>
//             {/*  <li>
//               <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
//                 Home
//               </Link>
//             </li> */}
//             {/* <li>
//               <Link to="services" spy={true} smooth={true}>
//                 Serivces
//               </Link>
//             </li> */}
//             {/* <li>
//               <Link to="works" spy={true} smooth={true}>
//                 Experience
//               </Link>
//             </li> */}
//             {/* <li>
//               <Link to="portfolio" spy={true} smooth={true}>
//                 Protfolio
//               </Link>
//             </li> */}
//             {/* <li>
//               <Link to="testimonial" spy={true} smooth={true}>
//                 Testimonial
//               </Link>
//             </li> */}
//           </ul>
//         </div>
//         <Link to="contact" spy={true} smooth={true}>
//           {/* <button className="button n-button">Contact</button> */}
//           <button className="btn-66" onMouseEnter={()=>set} >Provdier?</button>
//         </Link>
//         <button className="btn-66" onClick={() => dispatch(setLogout())}>Logout</button>
        
//       </div>
//     </div>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
import { useDispatch } from "react-redux";
import { setLogout } from "state";

const Navbar = () => {
  const dispatch = useDispatch();
  const [buttonText, setButtonText] = useState("Contact");

  function handleMouseOver() {
    setButtonText("Provider?");
  }

  function handleMouseOut() {
    setButtonText("Contact");
  }

  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <Toggle />
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            {/*  <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li> */}
            {/* <li>
              <Link to="services" spy={true} smooth={true}>
                Serivces
              </Link>
            </li> */}
            {/* <li>
              <Link to="works" spy={true} smooth={true}>
                Experience
              </Link>
            </li> */}
            {/* <li>
              <Link to="portfolio" spy={true} smooth={true}>
                Protfolio
              </Link>
            </li> */}
            {/* <li>
              <Link to="testimonial" spy={true} smooth={true}>
                Testimonial
              </Link>
            </li> */}
          </ul>
        </div>
        <Link to="contact" spy={true} smooth={true}>
          <button
            id="my-btn"
            className="btn-66 contact"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            {buttonText}
          </button>
        </Link>
        <button className="btn-66" onClick={() => dispatch(setLogout())}>
          Logout
        </button>
      </div>
      <script>
        {`
          const btn = document.getElementById("my-btn");
          btn.addEventListener("mouseover", function () {
            btn.innerText = "Provider?";
          });
          btn.addEventListener("mouseout", function () {
            btn.innerText = "Contact";
          });
        `}
      </script>
    </div>
  );
};

export default Navbar;
