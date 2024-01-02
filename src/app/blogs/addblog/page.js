"use client";
import { useState } from "react";
import "./page.css";

export default function Addblog() {
  let dateData = new Date();
  let date =
    dateData.getDate() +
    "/" +
    (dateData.getMonth() + 1).toString() +
    "/" +
    dateData.getFullYear();
  // console.log(date);
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [info, setInfo] = useState("");
  // const [date, setDate] = useState("");
  const actionClear = () => {
    setName("");
    setTitle("");
    setSubtitle("");
    setInfo("");
  };
  const addBlog = async (request) => {
    let lastedit=null;
    const API = process.env.API
    let data = await fetch(API+"/api/blogs", {
      method: "POST",
      body: JSON.stringify({ name, title, subtitle, info, date ,lastedit}),
    });
    let response = await data.json();
    console.log(response);
    if (response.success) {
      actionClear();
      showAlert();
    } else {
      alert("Error!! Fail To Add Data, Fill All Details");
    }
  };
  const showAlert = () => {
    alert("Data Added");
  };
  return (
    <div>
      <div className="container add-container">
        <form id="contact" className="form">
          <h3>ADD BLOGS</h3>
          <h4>Write your blog below:- </h4>

          <input
            id="title"
            placeholder="Your Blog Title"
            type="text"
            autoFocus
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <input
            id="subtitle"
            placeholder="Your Blog Subtitle"
            type="text"
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
            required
          />
          <textarea style={{minHeight:"200px"}}
            id="info"
            placeholder="Type your Blog Here...."
            value={info}
            onChange={(e) => setInfo(e.target.value)}
            required
          ></textarea>
          <input
            id="name"
            autoComplete="true"
            placeholder="Your name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            autoFocus
          />
          <button
            style={{ backgroundColor: "rgba(0, 242, 42, 0.7)" }}
            onClick={addBlog}
          >
            Submit
          </button>
          <button
            style={{
              backgroundColor: "rgba(233, 42, 42, 0.7)",
              marginLeft: "30px",
            }}
            onClick={actionClear}
          >
            CLEAR
          </button>
        </form>
      </div>
    </div>
  );
}
