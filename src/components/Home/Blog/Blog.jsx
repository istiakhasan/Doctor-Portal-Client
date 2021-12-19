import React from 'react'
import { BlogData } from '../../../Data/Data'
import './Blogstyle.css'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Blog = () => {
    return (
        <section className='service-container mt-5 pt-5 container'>
            <div className='text-center'>
                <h4 style={{color:"#70CDCD"}}>OUR BLOG</h4>
                <h1 style={{color:"#203047"}}>From Our Blog News</h1>
            </div>

            <div className="row mt-5 pt-5 ">
                    {
                        BlogData.map(bldt=>(
                            <div className="col-md-4 mt-3 ">
                                <div style={{  boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.5)"}} className="card w-75 m-auto p-1 mb-5 containertwo h-100">
                                    <div className="card-body  mb-5">
                                        <div style={{display:"flex",justifyContent:"space-around",alignItems:"center"}}>
                                            <img style={{height:"6vh",width:"6vh"}} src={bldt.img} alt="" />
                                            <div>
                                                <h6>{bldt.name}</h6>
                                                <small className='text-secondary'>{bldt.date}</small>
                                            </div>

                                        </div>
                                        <div  className="card-title my-4">
                                            <h6 style={{fontWeight:"bold"}}>{bldt.title}</h6>
                                           
                                        </div>
                                        <div className="card-text">
                                            <small className="text-secondary">

                                            {bldt.desc}
                                            </small>
                                        </div>
                                        <div class="overlay">
                                        <div class="text">
                                            <h6 className="my-3">{bldt.name}</h6>
                                            <small >{bldt.date}</small>
                                            <h5 className="my-3">{bldt.title}</h5>
                                            <div className="my-3 pt-5">

                                            <FontAwesomeIcon className="blogicon" icon={faLongArrowAltRight}></FontAwesomeIcon>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
            </div>
            
        </section>
    )
}

export default Blog
