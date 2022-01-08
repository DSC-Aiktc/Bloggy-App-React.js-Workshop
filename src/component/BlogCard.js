import React from "react";
// import bg from '../img/scenary.jpg'

function BlogCard(props) {
  return (
    <div className="col-lg-4 col-md-6 col-12">
      <div className="card">
        <img src={props.img} className="card-img-top" alt="bg" />
        <div className="card-body row">
          <div className="col-12">
            <h1 className="card-title">{props.title}</h1>
          </div>
          <div className="col-12">
            <p className="card-text">{props.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
