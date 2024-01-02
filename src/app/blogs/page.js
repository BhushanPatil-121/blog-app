import Link from "next/link";
import "./page.css";
const getData = async () => {
  const API = process.env.API
  let data = await fetch(API+"/api/blogs", {
    cache: "no-cache",
  });
  data = await data.json();
  return data;
};
export default async function Blog() {
  let data = await getData();
  return (
    <div className="blog-list-container">
      <div className="container">
        <section className="title container section-list">
          <div className="row ">
            <div className="col-md-12 row-blog-list ">
              <h1 className="blog-h1">The Only Guide You Need</h1>
              <div className="seperator"></div>
            </div>
          </div>
        </section>
        {data.result.length > 0 ? (
          <div
            className="row blog-row"
            // style={{ display: "flex", justifyContent: "center" }}
          >
            {data.result.map((item) => (
              <div className="col-md-6 item" key={item._id}>
                <div className="item-in blog-item-list">
                  <h2>Title : {item.title}</h2>
                  <h6>Description : {item.subtitle}</h6>
                  <p>Pulish Date : {item.date}</p>

                  {/* <div className="seperator"></div> */}
                  <p
                    className="blog-p"
                    style={{
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                    }}
                  >
                    <span>
                      <u>Information :</u>{" "}
                    </span>
                    {item.info}
                  </p>
                  <div className="button-div">
                    <button className="list-btn-link">
                    <Link href={"/blogs/" + item._id}>Read More</Link>
                    </button>
                    {/* <button className="list-btn">
                      <Link href={"/blogs/" + item._id}> edit blog</Link>
                    </button> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div
            className="row blog-row"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div className="col-md-6 item ">
              <div className="item-in blog-item">
                <h2 style={{ textAlign: "center" }}>NO DATA</h2>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
