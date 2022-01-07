import React from 'react';
import BlogCard from './component/BlogCard';
import Navbar from './component/Navbar';
import './css/App.css';
import BlogDetail from './screens/BlogDetail';
import BlogList from './screens/BlogList';
import CreateBlog from './screens/CreateBlog';

function App() {
  return (
    <div>
      <Navbar />
      <CreateBlog />
      {/* <BlogDetail /> */}
      {/* <BlogList /> */}
    </div>
  );
}

export default App;
