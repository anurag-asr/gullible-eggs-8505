
import React from 'react'
import { AspectRatio, Box, Button, Spacer } from '@chakra-ui/react'
import SliderBox from './SliderBox'
import SliderBox1 from './SliderBox1'
import { useNavigate } from 'react-router-dom'



export const Body = () => {
    
// const navigate=useNavigate()

const handleClick=()=>{
    // navigate=("")
}
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
                
                <button onClick={handleClick} className='search_btn'>GET A DEMO</button>
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
                <a href="">
                <Button  sx={{marginTop:"5%",width:"130px",height:"30px",fontSize:"0.7rem",fontWeight:"200"}} colorScheme='#2a2a2a' variant='outline'>
             take a tour
            </Button>
                </a>
           
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

            <SliderBox/>
            
            <div className='sliderbox'>
                <button className="sliderbox_btn1"> View all customer story </button>
                <button className='sliderbox_btn2'> Get a demo </button>
            </div>

            <div style={{backgroundColor:"#292d39",paddingTop:"30px", color:"#fff"}}>
                <p> Align your goals.</p>
                <h3>    Improve your ROI</h3>
           
        
            </div>
            
            <div><img src="https://i.im.ge/2022/07/23/F7iLI6.png" alt="" />
            </div>
            {/* <br /> */}

            {/* <div className='btn1'>View Al Features</div> */}
            {/* <div className='btn2'>Get a Demo</div> */}
              <Box sx={{backgroundColor:"#292d39",paddingBottom:"3rem", justifyContent:"space-between",fontsize:"1px"}}>
                <a href="https://www.happyfox.com/ticket-support-system/"><Button sx={{color:"gray", marginRight:"20px",marginTop:"20px",backgroundColor:"#fff",width:"150px",height:"27px",fontsize:"1px"}}>View All Features</Button></a>
                
                {/* <Spacer/> */}
               <a href=""><Button sx={{color:"#fff",marginLeft:"20px",marginTop:"20px", backgroundColor:"orange",width:"150px",height:"27px",fontsize:"1%"}}>Get a Demo</Button> </a>  
              </Box>  
          </div>

        </div>

        <div className='body_div6'>
            <div className='body_div6_div1'>Help Desk Software for today's</div>
            <div className='body_div6_div2'>fast-changing global businesses</div>
            <div className='body_div6_div3' style={{marginTop:"5rem"}}> <img src="https://i.im.ge/2022/07/23/F7mnEW.png" alt="" /></div>
            <div className='body_div6_div4'><button className='body_div6_div4_btn'>Get a demo</button></div>
            {/* <div className='grid'>
 
                <div style={{backgroundColor:"yellow"}}>bixb</div>
                <div style={{backgroundColor:"green"}}>boxs</div>
                <div style={{backgroundColor:"white"}}>box4</div>
            </div> */}
           <div style={{marginTop:"3rem"}}>
           <SliderBox1/>
           </div>
          

        </div>
        
      
    </div>
  )
}
