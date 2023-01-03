import React, { useEffect, useState } from 'react'
import InfiniteScroll from "react-infinite-scroll-component";

import NewsItem from './newsItem'
import Spinner from './Spinner';

const _=require("lodash")

const  News=(props)=> {
const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true) 
  const [page, setPage] = useState(2)
  const [totalresults, setTotalresults] = useState(0)
  
    
    
    const  UpdateNews=async()=>{
     props.setPro(10)
        let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`

       setLoading(false)
         let data=await fetch(url);
         let parsedData=await data.json()
        setArticles(parsedData.articles)
        setTotalresults(parsedData.totalresults)
            setLoading(false)
        props.setPro(100)

    }
    useEffect(() => {
      document.title=`${_.capitalize(props.category)}-News monkey`
      UpdateNews()
    }, [])
//    handlenextclick= async ()=> {
//    setState({page:this.state.page+1})
//    UpdateNews()
//     }
//     handlepreviousclick=async ()=>{
        
//        setState({page:this.state.page-1})
//        UpdateNews()

//     }
    const fetchMoreData = async () => {
        // a fake async api call like which sends
        // 20 more records in 1.5 secs
       let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pageSize=${props.pageSize}`
       setPage(page+1)
       setLoading(true)

         let data=await fetch(url);
         let parsedData=await data.json()
         setArticles(articles.concat(parsedData.articles))
         setTotalresults(parsedData.totalresults)
         setLoading(false)
        
      };
    
   
    
    return (
      <><div>
        <h1 className='text-center' style={{margin:"30px",marginTop:"90px"}}>Read the interesting news:- {_.capitalize(props.category)}</h1>
        {loading &&<Spinner/>}
        <InfiniteScroll 
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !==totalresults}
          loader={<Spinner/>}>
       <div className="container">
    <div className='row'>
    {articles.map((element)=>{
       return    <div className="col-md-4" key={element.url}>
     <NewsItem  title={element.title} description={element.description} imageURL={!element.urlToImage?"https://c.ndtvimg.com/2022-12/3h5bfsp8_rosette_625x300_24_December_22.jpg":element.urlToImage} newsURL={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
     </div>
     
    })}
    </div>
    </div>
    </InfiniteScroll>
    </div>
    </>
    )
  }

// News.proptypes={

// }

export default News