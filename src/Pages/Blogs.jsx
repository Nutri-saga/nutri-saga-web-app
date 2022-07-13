import React, {useEffect} from 'react'

import Timeline from '../Components/Timeline'

function Blogs() {
  useEffect(()=>{
    document.title = "Blogs"
  },[])
  return (
    <div>
         <Timeline/>
    </div>
  )
}

export default Blogs