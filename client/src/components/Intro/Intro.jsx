import React, { useContext, useEffect } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Portfolio from "components/Portfolio/Portfolio";
import { Typography, Modal, Box } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";

const Intro = () => {
  const [classes, setClasses] = useState([]);
  const [notes, setNotes] = useState([]);
  const token = useSelector((state) => state.token);
  useEffect(() => {
    fetchNotes();
  }, []);
  // useEffect(() => {
  //   console.log(classes["notes"]);
  // }, [classes]);
  const fetchNotes = async () => {
    const res = await fetch(`/api/note/getNotes`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      credentials: "include",
      method: "GET",
    });
    const notes = await res.json();
    // console.log(notes);
    setClasses(notes);
    console.log(notes);
  };
  // const renderNotes = () => {
  //   return classes.map(async (noteId) => {
  //     const res = await fetch(`/api/note/getNoteById/${noteId}`, {
  //       headers: {
  //         "Content-Type": "application/json",
  //         credentials: "include",
  //         Authorization: `Bearer ${token}`,
  //       },
  //       method: "GET",
  //     });
  //     const note = await res.json();

  //     return (
  //       <div key={note._id}>
  //         <h3>{note.details}</h3>
  //         <p>{note.createdDate}</p>
  //       </div>
  //     );
  //   });
  // };

  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const [modal, setModal] = useState(false);
  const [lesson, setLesson] = useState("");
  const [feedback, setFeedback] = useState("");
  const [modal2, setModel2] = useState(false);
  const [date, setDate] = useState(new Date());

  const navigate = useNavigate();

  const onChange = (date) => {
    setDate(date);
  };

  const toggleModal = () => {
    setModal(!modal);
  };

  const toggleModal2 = async () => {
    setModel2(!modal2);
    if (!modal2) {
      const promises = classes.map(async (classItem) => {
        const res = await fetch(`/api/note/getNoteById/${classItem._id}`, {
          headers: {
            "Content-Type": "application/json",
            credentials: "include",
            Authorization: `Bearer ${token}`,
          },
          method: "GET",
        });

        const note = await res.json();
        return { note, classItem };
      });

      const results = await Promise.all(promises);
      setNotes(results);
    }
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  if (modal2) {
    document.body.classList.add("active-modal2");
  } else {
    document.body.classList.remove("active-modal2");
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(feedback);
  };

  return (
    <>
      <div className="Intro" id="Intro">
        <div className="i-left">
          <div className="i-name">
            <span style={{ color: darkMode ? "white" : "" }}>
              Today's Popup
            </span>
          </div>
          {/* <Link to="contact" smooth={true} spy={true}>
            <button className="button i-button">Review</button>
          </Link> */}
          <div className="modals">
            <button onClick={toggleModal} className="button i-button">
              Review
            </button>
            <button onClick={toggleModal2} className="button i-button">
              My notes
            </button>
            <a
              href="https://forms.gle/8byKgwRBMM8oaKdGA"
              target="_blank"
              rel="noreferrer"
            >
              <button className="button i-button">Find interests</button>
            </a>
          </div>

          {modal && (
            <div className="modal">
              <div onClick={toggleModal} className="overlay"></div>
              <div className="modal-content">
                <h2>(name of today's class/lesson)</h2>
                <p>(date: 2/2/23)</p>
                <p>(today's class: ex. oil painting)</p>
                <div className="input-text">Write your feedback!</div>
                <form id="modal-form" onSubmit={handleSubmit}>
                  <div className="modal-container">
                    <textarea
                      id="modal-feedback"
                      onChange={(e) => setFeedback(e.target.value)}
                    ></textarea>
                  </div>
                  <button className="close-modal" onClick={toggleModal}>
                    CLOSE
                  </button>
                  <button id="modal-submit">Submit</button>
                </form>
              </div>
            </div>
          )}

          {modal2 && (
            <div className="modal">
              <div onClick={toggleModal2} className="overlay"></div>
              <div className="modal-content">
                <div className="test">loop through all of your notes here</div>
              </div>
            </div>
          )}

          {/* social icons */}
          {/* <div className="i-icons">
            <img src={Github} alt="" />
            <img src={LinkedIn} alt="" />
            <img src={Instagram} alt="" />
          </div> */}
        </div>
        {/* <div className="i-right">
          <Calendar showWeekNumbers onChange={onChange} value={date} />
        </div> */}
      </div>

      <Portfolio />
    </>
  );
};

export default Intro;
