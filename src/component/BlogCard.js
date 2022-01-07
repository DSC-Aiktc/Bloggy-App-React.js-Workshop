import React from 'react'
import bg from '../img/scenary.jpg'

function BlogCard() {
    return (
        <div className="col-lg-4 col-md-6 col-12">
            <div className="card">
                <img src={bg} className="card-img-top" alt="bg" />
                <div className="card-body row">
                    <div className="col-12">
                        <h1 className="card-title">Blog Title 3</h1>
                    </div>
                    <div className="col-12">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default BlogCard
