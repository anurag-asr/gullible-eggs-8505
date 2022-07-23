import {
    Menu, MenuButton, MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,Button
  } from '@chakra-ui/react'
  import {ChevronDownIcon} from "@chakra-ui/icons"
  
  
  export default function Navbar2(){
    return (
  
      <div className="main_div1">
      <div className="navbar_2">
        
 <div style={{marginRight:"20px"}}>
 <img className="navbar_1img" width="85px" src="https://assets.www.happyfox.com/v2/images/site-nav/helpdesk-logo.svg" alt="error"/>
 </div>

<div style={{marginLeft:"60px"}}>
  <Menu >
    <MenuButton sx={{color:"#888b8d",fontFamily:"hero-new,sans-sarif",fontSize:"0.7rem"}} _hover={{ bg: 'transparent' }}  bg='transparent'  _expanded={{ color: 'black' }} className="navbar_1menu" as={Button} rightIcon={<ChevronDownIcon />}>
    Feature
    </MenuButton>
    <MenuList>
    <div className="div">
        <div className='div1'>

            <h6>FOR IT TEAMS</h6>
            <br />
            <br />
            <p>Adopt advanced, modern</p>
            <p>and unified support</p>
            <p>solutions for your IT team</p>

        </div>
        <div className='div2'>
            <img src="https://assets.www.happyfox.com/v2/images/site-nav/menu-show-item-1.png" alt="" />
        </div>
        <div className='div3'>
       
                <p>FEATURED</p>
                <img src="https://assets.www.happyfox.com/v2/images/site-nav/menu-show-item-2.jpg" alt="" />
                <p >Top 7 HappyFox Feaures to </p>
                <p>Step Up Your IT Support Game</p>
          
        </div>
     </div> 
    </MenuList>
  </Menu>
  <Menu >
    <MenuButton sx={{color:"#888b8d",fontFamily:"hero-new,sans-sarif",fontSize:"0.7rem"}} _hover={{ bg: 'transparent' }}  bg='transparent'  _expanded={{ color: 'black' }} className="navbar_1menu" as={Button} rightIcon={<ChevronDownIcon />}>
    Solving
    </MenuButton>
    <MenuList>
    <div className="div">
        <div className='div1'>

            <h6>FOR IT TEAMS</h6>
            <br />
            <br />
            <p>Adopt advanced, modern</p>
            <p>and unified support</p>
            <p>solutions for your IT team</p>

        </div>
        <div className='div2'>
            <img src="https://assets.www.happyfox.com/v2/images/site-nav/menu-show-item-1.png" alt="" />
        </div>
        <div className='div3'>
       
                <p>FEATURED</p>
                <img src="https://assets.www.happyfox.com/v2/images/site-nav/menu-show-item-2.jpg" alt="" />
                <p >Top 7 HappyFox Feaures to </p>
                <p>Step Up Your IT Support Game</p>
          
        </div>
     </div> 
    </MenuList>
  </Menu>
  <Menu >
    <MenuButton sx={{color:"#888b8d",fontFamily:"hero-new,sans-sarif",fontSize:"0.7rem"}} _hover={{ bg: 'transparent' }}  bg='transparent'  _expanded={{ color: 'black' }} className="navbar_1menu" as={Button} rightIcon={<ChevronDownIcon />}>
  Pricing
    </MenuButton>
    <MenuList>
    <div className="div">
        <div className='div1'>

            <h6>FOR IT TEAMS</h6>
            <br />
            <br />
            <p>Adopt advanced, modern</p>
            <p>and unified support</p>
            <p>solutions for your IT team</p>

        </div>
        <div className='div2'>
            <img src="https://assets.www.happyfox.com/v2/images/site-nav/menu-show-item-1.png" alt="" />
        </div>
        <div className='div3'>
       
                <p>FEATURED</p>
                <img src="https://assets.www.happyfox.com/v2/images/site-nav/menu-show-item-2.jpg" alt="" />
                <p >Top 7 HappyFox Feaures to </p>
                <p>Step Up Your IT Support Game</p>
          
        </div>
     </div> 
    </MenuList>
  </Menu>
  <Menu >
    <MenuButton sx={{color:"#888b8d",fontFamily:"hero-new,sans-sarif",fontSize:"0.7rem"}} _hover={{ bg: 'transparent' }}  bg='transparent'  _expanded={{ color: 'black' }} className="navbar_1menu" as={Button} rightIcon={<ChevronDownIcon />}>
  Resources
    </MenuButton>
    <MenuList>
    <div className="div">
        <div className='div1'>

            <h6>FOR IT TEAMS</h6>
            <br />
            <br />
            <p>Adopt advanced, modern</p>
            <p>and unified support</p>
            <p>solutions for your IT team</p>

        </div>
        <div className='div2'>
            <img src="https://assets.www.happyfox.com/v2/images/site-nav/menu-show-item-1.png" alt="" />
        </div>
        <div className='div3'>
       
                <p>FEATURED</p>
                <img src="https://assets.www.happyfox.com/v2/images/site-nav/menu-show-item-2.jpg" alt="" />
                <p >Top 7 HappyFox Feaures to </p>
                <p>Step Up Your IT Support Game</p>
          
        </div>
     </div> 
    </MenuList>
  </Menu>
  </div>
  
   </div>

   <div>
    <a href="https://www.happyfox.com/help-desk-software-demo/"> <Button  sx={{backgroundColor:"#ff8d00",height:"29px",color:"#fff",marginTop:'5px'}} _hover={{backgroundColor:"#ff8d00"}}  >Get Demo</Button></a>
 
  </div>
   </div>
    )
  }