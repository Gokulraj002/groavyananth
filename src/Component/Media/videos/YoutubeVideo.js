import React from 'react'

function YoutubeVideo() {
  return (
    <div>
              <iframe
                src="https://www.youtube.com/embed/DG0B2CXWoaY?autoplay=1&loop=1&mute=1&playlist=DG0B2CXWoaY"
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
