import React, { useEffect, useState } from 'react'
import './Banner.css'
import { API_KEY ,imageUrl} from '../../constants/constants'
import axios from '../../axios'
function Banner() {
      const [movie, setMovie] = useState()
      useEffect(() => {
        axios.get(`trending/all/week?api_key=${API_KEY }&language=en-US`).then((response)=>{
            console.log(response.data.results);
            setMovie(response.data.results.sort(function (a, b) { return 0.5 - Math.random() })[0])
                })
      }, [])
  return <div
      style={{backgroundImage:`url(${movie?imageUrl+movie.backdrop_path:""})`}}
   className='banner'>
      <div className="content">
          <h1 className="tittle">{movie? movie.original_title:"" }</h1>
          <div className="banner-buttons">
              <button className="button">Play</button>
              <button className="button">My list</button>
          </div>
          <h1 className="discription">{movie?movie.overview:""}</h1>
      </div>
      <div className="fade-bottom"></div>
  </div>;
}

export default Banner;
