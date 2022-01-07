import React from 'react'
import BlogCard from '../component/BlogCard'
import LatestBlog from '../component/LatestBlog'

function BlogList() {
    return (
        <div className='container mx-auto mt-5'>
            <LatestBlog />
            <div className="row">
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
            </div>
        </div>
    )
}

export default BlogList
