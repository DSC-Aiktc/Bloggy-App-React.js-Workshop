import React from 'react'
import bg from "../img/scenary.jpg"

function LatestBlog() {
    return (
        <div className='row'>
            <div className="col-lg-8">
                <img className='blogCardImg' src={bg} alt="bg" />
            </div>
            <div className="col-lg-4">
                <div className="row">
                    <div className="col-12">
                        <h1>
                            Blog title
                        </h1>
                    </div>
                    <div className="col-12">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum delectus natus voluptatum dignissimos tempora distinctio. Ex architecto hic facere similique sapiente odio, autem suscipit excepturi eius consequatur reprehenderit ducimus! Est?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LatestBlog
