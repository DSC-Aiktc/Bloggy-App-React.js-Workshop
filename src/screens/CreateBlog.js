import React from 'react'

function CreateBlog() {
    return (
        <div className='container mx-auto mt-5'>
            <div className="row">
                <div className="col-12">
                    <h4>Image</h4>
                </div>
                <div className="col-12">
                    <input type="file" accept="image/*" className='form-control inputField'/>
                </div>
                <div className="col-12">
                    <h4>Title</h4>
                </div>
                <div className="col-12">
                    <input type="text" placeholder='Write Title here...' className='inputField'/>
                </div>
                <div className="col-12">
                    <h4>Content</h4>
                </div>
                <div className="col-12">
                   <textarea id='blog' placeholder='Write you content here...'>

                   </textarea>
                </div>
            </div>
        </div>
    )
}

export default CreateBlog
