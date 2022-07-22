
import React from 'react'
import { AspectRatio } from '@chakra-ui/react'

export const Body = () => {
  return (
    <div>
        <div className='body_subdiv1'>

          <div className='body_div1'>
            <div className='body_div1-div1'>
                <p>Get More Done with</p>
                <p>a Modern Support Stack</p>
            </div>
            <div><p style={{fontSize:"0.6rem",color:"#a4a2a9"}}>Deliver outstanding support and achieve new goals with HappyFox.</p></div>
            <div className='body_div1-div3'>
                <input className="search_bar" type="text" placeholder='Enter Your Work Email' />
                <button className='search_btn'>GET A DEMO</button>
            </div>
          </div>

          <div >
   
        <AspectRatio  sx={{margin:"auto",marginTop:"5%"}} maxW='700px' maxH="400px" ratio={1}>
            {/* <iframe className='container_video'
              title='naruto'
                 src='https://www.youtube.com/embed/QhBnZ6NPOY0'
                     allowFullScreen
                 /> */}
                 <iframe width="1110" height="624"
         src="https://www.youtube.com/embed/cD0FfdHdNis" 
         title="Meet the New HappyFox Help Desk Software" 
         frameborder="0" allow="accelerometer; autoplay; clipboard-write;
          encrypted-media; gyroscope; picture-in-picture" allowfullscreen
          
          >
            
          </iframe>
        </AspectRatio>
          </div>

        </div>
        
      
    </div>
  )
}
