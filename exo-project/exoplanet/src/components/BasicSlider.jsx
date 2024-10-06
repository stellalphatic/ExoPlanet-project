import React from 'react'
import HeroSlider,{Slide} from 'hero-slider';

const image1="https://plus.unsplash.com/premium_photo-1679756099005-18998ce9ebc9?q=80&w=1602&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const image2="https://images.unsplash.com/photo-1545156521-77bd85671d30?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const image3="https://images.unsplash.com/photo-1590388143860-6594f1fbc1f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBsYW5ldHxlbnwwfHwwfHx8MA%3D%3D";
const image4="https://images.unsplash.com/photo-1632395627760-72e6eca7f9c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBsYW5ldHxlbnwwfHwwfHx8MA%3D%3D";

function BasicSlider() {
  return (
    <HeroSlider orientation="horizontal" onBeforeChange>
           <Slide background={{backgroundImage:image2,
                               backgroundAttachment:"fixed"
                              }}
            />
            <Slide background={{backgroundImage:image1,
                               backgroundAttachment:"fixed"
                              }}
            />
            <Slide background={{backgroundImage:image3,
                               backgroundAttachment:"fixed"
                              }}
            />
            <Slide background={{backgroundImage:image4,
                               backgroundAttachment:"fixed"
                              }}
            />
    </HeroSlider>

  )
}

export default BasicSlider