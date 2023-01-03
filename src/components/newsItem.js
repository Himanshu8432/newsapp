// import { getByTitle } from '@testing-library/react'
import React from 'react'

const  NewsItem=(props)=>{
    let {title,description,imageURL,newsURL,author,date,source}=props;
    return (
       
      <div>
      <div className="my-3">
      <div className="card" >
      <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'10%',zIndex:1}}>
    {source}
    <span className="visually-hidden">unread messages</span>
  </span>
  <img src={imageURL}  className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}... </h5>

    <p className="card-text">{description}...</p>
    <p className="card-text"><small className="text-muted">by {!author?"unknown":author} on {new Date(date).toGMTString()}</small></p>
    <a rel="noreferrer" href={newsURL} target="_blank" className="btn btn-sm  btn-dark btn-primary">read more</a>
  </div>
</div></div>
</div>
    )
  }


export default NewsItem