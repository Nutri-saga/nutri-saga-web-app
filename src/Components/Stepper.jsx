import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { Box } from '@mui/system';

const slideImages = [
  {
    url: 'https://1.bp.blogspot.com/-RfX0V19bQOw/XzrRxL-N57I/AAAAAAAACSQ/fN0-js3taJsWM7pTwqk4KInBL_eNCN7dgCLcBGAsYHQ/s1000/Healthy%2BFood%2Band%2BNutrition%2B3.jpg',
    caption: 'Balanced Diet'
  },
  {
    url: 'https://www.communitydoctor.com.ng/wp-content/uploads/2020/11/p3_MedDiet_W1806_gi667751254.jpg',
    caption: 'Slide 2'
  },
  {
    url: 'https://www.starhealth.in/blog/wp-content/uploads/2022/01/Importance-of-nutrition.jpg',
    caption: 'Slide 3'
  },
  { url: 'https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/blogs/33996/images/Fe2A4oIS0aQnFu98xveA_Blog_Posts.png', }
];

export default function Slideshow() {
  return (
    <Box sx={{ maxWidth: "76vw", margin: "auto", marginTop: "-15px" }}>
      <div className="slide-container">
        <Slide>
          {slideImages.map((slideImage, index) => (
            <div className="each-slide" key={index}>
              <div style={{ 'backgroundImage': `url(${slideImage.url})`, backgroundRepeat: "no-repeat", backgroundSize: "76vw 72vh", height: "72vh", borderRadius: "4px" }}>
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </Box>
  )
}
    // import React, { useLayoutEffect, useState } from 'react'
    // import { Box } from '@mui/material';

    // const images = [
    //   {
    //     label: 'Balanced Diet',
    //     imgPath:
    //       'https://1.bp.blogspot.com/-RfX0V19bQOw/XzrRxL-N57I/AAAAAAAACSQ/fN0-js3taJsWM7pTwqk4KInBL_eNCN7dgCLcBGAsYHQ/s1000/Healthy%2BFood%2Band%2BNutrition%2B3.jpg',
    //   },
    //   {
    //     label: 'Body mind spirit',
    //     imgPath:
    //       'https://www.communitydoctor.com.ng/wp-content/uploads/2020/11/p3_MedDiet_W1806_gi667751254.jpg',
    //   },
    //   {
    //     label: 'Importance of Nutrition',
    //     imgPath:
    //       'https://www.starhealth.in/blog/wp-content/uploads/2022/01/Importance-of-nutrition.jpg',
    //   },
    //   {
    //     label: '',
    //     imgPath:
    //       'https://www.ift.org/-/media/news-and-publications/by-topic/foodhealthnutrition.jfif',
    //   },
    // ];