
import React from 'react'
import { AspectRatio, Button } from '@chakra-ui/react'

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

          <div className='body_div3'>

            <div>
                <img src="https://assets.www.happyfox.com/v2/images/pcmag-new-2021.svg?r=1658320818654" alt="" />
            </div>
            <div className='body_div3_div2'>
            Best Help Desk Software for 6 years in a row.
            </div>
            <div className='body_div3_div3'>
            All-in-one help desk ticketing system that provides faster and better support for your customers.
            </div>
            <div>
            <Button sx={{marginTop:"5%",width:"130px",height:"30px",fontSize:"0.7rem",fontWeight:"200"}} colorScheme='#2a2a2a' variant='outline'>
             take a tour
            </Button>
            </div>
          </div>

          <div className='body_div4'>
                 <div className='body_div4_div1'><p>Trusted by Industry-Leading Companies</p></div>
                 <div className='body_div4_div2'>
                    <img  style={{height:"20px",width:"100px"}} src="https://assets.www.happyfox.com/v2/logo/owler-logo.png" alt="" />
                    <img width="100px" heiht="20px" src="https://assets.www.happyfox.com/v2/logo/whirlpool.svg" alt="" />
                    <img  width="100px" heiht="100px" src="https://assets.www.happyfox.com/v2/logo/jabra.svg" alt="" />
                    <img  width="100px" heiht="100px" src="https://assets.www.happyfox.com/v2/logo/leap-frog.svg" alt="" />
                    <img  width="100px" heiht="100px" src="https://assets.www.happyfox.com/v2/logo/harbour.svg" alt="" />
                 </div>
          </div>

          <div className='body_div5'>
            <div className='body_div5_div1'>
                <div className='body_div5_div1_div1'><p>Provide Exceptional</p></div>
                <div className='body_div5_div1_div2'><p>Customer Support.Evetday</p></div>
                <div className='body_div5_div1_div3'>
                    <p>
                    Meet HappyFox, a practical help desk and customer support software solution. Reduce chaos and bring order to your support process with a robust support ticket system, self-service knowledge base and community forums.
                    </p>
                </div>
                <div></div>
            </div>
            <br /><br /><br /><br /><br />
                
          </div>

        </div>
        
      
    </div>
  )
}
