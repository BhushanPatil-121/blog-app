import Link from "next/link";
import "./page.css";
import { BASE_API_URL } from "@/lib/mongodb";
export default async function BlogId({ params }) {
  let id = params.blogid;
  // const API = process.env.API
  const getSingleBlog = async () => {
    let item = await fetch(`${BASE_API_URL}/api/blogs/${id}`, {
      cache: "no-cache",
    });
    item = await item.json();
    return item;
  };
  
  let data = await getSingleBlog();
  let item = data.result;
//   console.log(item);
//   console.log(item.lastedit==undefined);
  return (
    <div>
      <section className="title container">
        <div className="row ">
          <div className="col-md-12 row-blog ">
            {/* <h1 className="h1">Blog</h1> */}
          </div>
        </div>
      </section>
      <div className="container">
        <div
          className="row blog-row"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div className="col-md-6 item ">
            <div className="item-in blog-item">
              <h2>Title : {item.title}</h2>
              <h6>
                <i>Description : {item.subtitle}</i>
              </h6>
              <div className="seperator"></div>
              <h6>
                <u>Information :</u>
              </h6>
              <p className="blog-p">{item.info}</p>
              <p className="blog-p">
                <Link href={"/blogs/" + item._id + "/editblog"}>
                  ...edit blog{" "}
                </Link>
                <br />
                (pleas edit only when necessary)
                <br/>
                {item.lastedit==undefined ? (
                    <span></span>
                    ) : (
                  <span><i>last edit by <b>{item.lastedit}</b><br />on {item.editdate}</i> </span>
              )}
              </p>

             
              <p style={{ textAlign: "end" }}>Date:- {item.date}</p>
              <h6 style={{ textAlign: "end" }}>Publish By : {item.name}</h6>
            </div>
            <Link href={"/blogs"}>
              <button className="back">. . . Back</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
