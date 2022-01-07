import React from 'react';
import BlogCard from './component/BlogCard';
import Navbar from './component/Navbar';
import './css/App.css';
import BlogList from './screens/BlogList';
import CreateBlog from './screens/CreateBlog';

function App() {
  return (
    <div>
      <Navbar />
      <BlogList />
    </div>
  );
}

export default App;
