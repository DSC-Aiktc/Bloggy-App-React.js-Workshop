import axios from "axios";
import React, { useState } from "react";
import BlogCard from "../component/BlogCard";
import LatestBlog from "../component/LatestBlog";

function BlogList() {

  const [blog,setBlog] = useState("")

  
  // const articles = [
  //   {
  //     title: "My First Dynamic Card",
  //     content:
  //       "hbfhwbfhwf whebfwhebfw efwhbefhwebefwe fwhebfhwebfw efwebfhwef wefyuwfhwbefw ef",
  //     img: "https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg",
  //   },
  //   {
  //     title: "My Second Dynamic Card",
  //     content: "Naya Card aaya hai",
  //     img: "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_720,f_auto/w_80,x_15,y_15,g_south_west,l_klook_water/activities/t9ur9cc1khkup1dmcbzd/Upto55Off%7CIMGWorldsofAdventure-KlookIndia.jpg",
  //   },
  // ];

  const BASE_URL = "https://floran-blog-api.herokuapp.com/"
  React.useEffect(() => {
    axios.get(BASE_URL).then(
      (res) => {
        console.log(res.data)
        setBlog(res.data)
      }
    ).catch(
      err => console.log(err)
    )
  },[])

  
  console.log("Blog ki value",blog)
  
  if(blog){
    return (
      <div className="container mx-auto mt-5">
        <LatestBlog />
        <div className="row">
         {
           blog.map((value,index) => (
             <BlogCard title={value.title} content={value.description} img={value.image}/>
           ))
         }
        </div>
      </div>)
  } else {
    return "Loading"
  }
}




export default BlogList;
