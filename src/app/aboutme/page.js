import Link from "next/link";
import "./page.css";
export default function AboutMe() {
  return (
    <div className="about-div">
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
              <h2>About Blogger Site</h2>
              <h4>Welcome !</h4>
              {/* <p style={{ marginLeft: "20px" }}>By ~ {item.name}</p> */}
              <div className="seperator"></div>
              <h6>Who We Are?</h6>
              <p className="blog-p">
                Blogger site is a technology blog dedicated to bringing you the
                latest and most exciting developments in the world of
                technology. Whether you're a tech enthusiast, a seasoned
                professional, or just curious about the latest gadgets and
                innovations, you've come to the right place.
              </p>
              <h6> Our Mission. </h6>
              <p className="blog-p">
                Our mission is to provide insightful and engaging content that
                demystifies the complexities of the tech world. We strive to
                make technology accessible to everyone, offering a blend of
                in-depth articles, how-to guides, and reviews to keep you
                informed and inspired. 
              </p>
              <h6 style={{ textAlign: "end" }}>Meet the Team </h6>
              <h6 style={{ textAlign: "end" ,color:"rgb(82, 76, 76)",lineHeight:"30px"}}>Bhushan Patil <br/>Founder & Lead
                Writer</h6>

              

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
