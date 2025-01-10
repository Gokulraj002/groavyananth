import React from 'react'

function YoutubeVideo() {
  return (
    <div>
              <iframe
                src="https://www.youtube.com/embed/HG9Ig4i7zFM?si=0P9_4y_YTjN0-308" 
                title="Best Farmland Near Chikkaballapur"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="img-fluid rounded"
                loading="lazy" // Lazy loading attribute
                style={{ width: "100%", height: "560px" }}
              ></iframe>
      
    </div>
  )
}

export default YoutubeVideo
