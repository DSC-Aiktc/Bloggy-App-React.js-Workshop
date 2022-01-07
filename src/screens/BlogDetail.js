import React, { Component } from 'react'
import bg from '../img/scenary.jpg'

export class BlogDetail extends Component {
    render() {
        return (
            <div className='container mx-auto mt-5'>
                <div className="row">
                    <div className="col-12 text-center">
                        <h1 className='detailHeader' >
                            Mera phela blog
                        </h1>
                    </div>
                    <div className="col-12 text-center">
                        <img className='detailImg' src={bg} alt='bg hai yah' />
                    </div>
                    <div className="col-12">
                        <p className='detailParagraph'>
                            
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, voluptatum porro eveniet velit voluptate ab, esse sapiente dolorum consectetur placeat quibusdam? Magnam corrupti, cumque a aliquid inventore repellat suscipit amet.
                            
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus aliquid, ab nostrum ad iste natus qui voluptatum impedit quia maiores doloremque incidunt in saepe. Molestias, quisquam aliquid. Sequi, ipsum sit!

                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default BlogDetail
