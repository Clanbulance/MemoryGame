import { useState } from "react";
import { useEffect } from "react";




function Card(
    {
    name,
    index,
    handleCardClick
})
{

const [gifUrl, setGifUrl] = useState(null);


  useEffect(() => {
    async function fetchGif() {
    console.log("Something has been fetched")
      const res = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=kKgdiiDPXTjXDJGMyzExRNkpKGcfWfKz&q=${name}&limit=1&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
      );
      const data = await res.json();
      if (data.data.length > 0) {
        setGifUrl(data.data[0].images.fixed_height_small.url);
      }
    }

    fetchGif();
  }, [name]); // never refetch


    return(
        <div className="card" id={index} onClick={() => handleCardClick(name)}>
            {(!gifUrl) ? <p>Loading...</p> :

               <img 
                        src={gifUrl} 
                        alt={name} 
                        />
        }
        </div>
    )
}

export default Card;