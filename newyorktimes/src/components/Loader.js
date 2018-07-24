import React from 'react'
import LoaderGif from '../assets/images/loader.gif'
import '../assets/css/Loader.css'

const Loader = () => {
  return (
    <div className="Loader">
      <img className="loaderIcon" src={LoaderGif} alt="Loading" />
    </div>
  )
}

export default Loader
