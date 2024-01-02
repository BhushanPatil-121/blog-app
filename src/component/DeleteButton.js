"use client";

import { BASE_API_URL, PASS_DELETE } from "@/lib/mongodb";
import { useRouter } from "next/navigation";

export default function DeleteButton(props) {
  let id = props.id;
  const router = useRouter();
//   let API = process.env.API;

  const deleteBlog = async () => {
    const pass = prompt("ENTER PASSWORD");
    if (pass == PASS_DELETE) {
      let response = await fetch(`${BASE_API_URL}/api/blogs/${id}`, {
        method: "DELETE",
      });
      response = await response.json();
      if (response.success) {
        alert("Blog Deleted");
        router.push("/blogs");
      } else {
        alert("Error!");
      }
    } else {
      alert("Wrong Password ");
    }
  };

  return (
    <button className="delete-btn" onClick={deleteBlog}>
      X
    </button>
  );
}
