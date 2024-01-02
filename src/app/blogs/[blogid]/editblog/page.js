"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import "./page.css";
import { BASE_API_URL } from "@/lib/mongodb";
export default function EditBlog({ params }) {
  const router = useRouter();
  let id = params.blogid;
  let dateData = new Date();
  let currentDate =
    dateData.getDate() +
    "/" +
    (dateData.getMonth() + 1).toString() +
    "/" +
    dateData.getFullYear();

    const getSingleBlog = async () => {
    // const API = process.env.API
    let item = await fetch(`${BASE_API_URL}/api/blogs/${id}` , {
      cache: "no-cache",
    });
    item = await item.json();
    // console.log(item.success);
    if (item.success) {
      let data = item.result;
      setName(data.name);
      setTitle(data.title);
      setSubtitle(data.subtitle);
      setInfo(data.info);
      setDate(data.date);
      setLastedit(data.lastedit);
      setEditdate(currentDate);
    } else {
      alert("Error! data not fetch ! ");
    }
  };
  useEffect(() => {
    getSingleBlog();
  }, []);
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [info, setInfo] = useState("");
  const [date, setDate] = useState("");
  const [lastedit, setLastedit] = useState("");
  const [editdate, setEditdate] = useState("");
  // const API = process.env.API
  const updateBlog = async () => {
    let data = await fetch(`${BASE_API_URL}/api/blogs/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        name,
        title,
        subtitle,
        info,
        date,
        lastedit,
        editdate,
      }),
    });
    data = await data.json();
    // console.log("update");
    // console.log(data);
    if (data.success) {
      alert("Blog Updated Successfuly.");
      console.log(id);
      router.push("/blogs/"+id);
    } else {
      alert("Error! please try after few minutes.");
    }
  };

  return (
    <div>
      <div className="container edit-container">
        <div id="contact" className="form">
          <h3>EDIT BLOG </h3>
          <h4>Please edit only when necessary :- </h4>

          <input
            id="title"
            placeholder="Your Blog Title"
            type="text"
            // autoFocus
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            //   required
            readOnly
          />
          <input
            id="subtitle"
            placeholder="Your Blog Subtitle"
            type="text"
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
            //   required
            readOnly
          />
          <textarea
            style={{ minHeight: "200px" }}
            id="info"
            autoFocus
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
            // value={lastedit}
            onChange={(e) => setLastedit(e.target.value)}
            required
            autoFocus
          />
          <button
            style={{
              backgroundColor: "rgba(0, 242, 42, 0.7)",
              marginTop: "10px",
            }}
            onClick={updateBlog}
          >
            Update
          </button>
          <Link href={"/blogs/"+id}>
          <button style={{backgroundColor:"rgba(233, 242, 42, 0.7)",   marginLeft:"30px"}} >Back</button>  
          </Link>
        </div>
      </div>
    </div>
  );
}
