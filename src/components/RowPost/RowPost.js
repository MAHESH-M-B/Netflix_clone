import axios from '../../axios';
import React, { useEffect, useState } from 'react';
import './RowPost.css'
import { API_KEY ,imageUrl} from '../../constants/constants';
import { original } from '../../url';
import YouTube from 'react-youtube';
function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [url,seturl]=useState('')
  useEffect(() => {
    axios.get(props.url).then((Response)=>{
      console.log(Response.data.results)
      setMovies(Response.data.results)
    })
  }, []);
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const movietrailer=(id)=>{
            console.log(id);
            axios.get(`/movie/${id}/videos?api_key=${API_KEY}`).then((response)=>{
              console.log(response.data);
              if(Array.length!=0){
                seturl(response.data.results[0])
              }
              else{
                alert('trailer not found')
              }
             
            })
                 
  }
   return <div className='row'>
      <h2>{props.tittle}</h2>
      <div className="posters">
        {
          movies.map((obj)=>
            <img  onClick={()=>{
                      movietrailer(obj.id)
            }}  className={props.issmall ? 'smallposters':'poster'} src={`${imageUrl+obj.backdrop_path}`} />
           )}   
      </div>
     {  url  &&   <YouTube opts={opts} videoId={url.key} > </YouTube>}
  </div>;
}

export default RowPost;
