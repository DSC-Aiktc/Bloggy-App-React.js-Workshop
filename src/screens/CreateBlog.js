import React, { useState } from "react";

function CreateBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <div className="container mx-auto mt-5">
      <div className="row">
        <div className="col-12">
          <h4>Image</h4>
        </div>
        <div className="col-12">
          <input
            type="file"
            accept="image/*"
            className="form-control inputField"
            onChange={(e) => console.log(e.target.value)}
          />
        </div>
        <div className="col-12">
          <h4>Title</h4>
        </div>
        <div className="col-12">
          <input
            type="text"
            placeholder="Write Title here..."
            className="inputField"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="col-12">
          <h4>Content</h4>
        </div>
        <div className="col-12">
          <textarea
            id="blog"
            placeholder="Write you content here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default CreateBlog;
