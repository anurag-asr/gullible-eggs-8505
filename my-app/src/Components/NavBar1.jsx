import {
    Menu, MenuButton, MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,Button
  } from '@chakra-ui/react'
  import {ChevronDownIcon} from "@chakra-ui/icons"
  
  import "./Module.css"
  
  export default function Navbar1(){
    return (
  
  <div className="main_div">
      <div className="navbar_1">
        <div  className="navbar_1img">
        <img width="85px" src="https://assets.www.happyfox.com/v2/images/site-nav/topbar-logo-black.svg" alt="error"/>
        </div>
{/* 
        color: #888b8d; 
   font-family: hero-new, sans-serif;  */}
  <Menu >
    <MenuButton sx={{color:"#888b8d",fontFamily:"hero-new,sans-sarif",fontSize:"0.7rem"}} _hover={{ bg: 'transparent' }} bg='transparent'  _expanded={{ color: 'black' }} className="navbar_1menu" as={Button} rightIcon={<ChevronDownIcon />}>
    Customer Service
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
    <MenuButton sx={{color:"#888b8d",fontFamily:"hero-new,sans-sarif",fontSize:"0.7rem"}} _hover={{ bg: 'transparent' }} bg='transparent'  _expanded={{ color: 'black' }} className="navbar_1menu" as={Button} rightIcon={<ChevronDownIcon />}>
    It Support
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
    <MenuButton sx={{color:"#888b8d",fontFamily:"hero-new,sans-sarif",fontSize:"0.7rem"}} _hover={{ bg: 'transparent' }} bg='transparent'  _expanded={{ color: 'black' }} className="navbar_1menu" as={Button} rightIcon={<ChevronDownIcon />}>
  Operation Support
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
  
  <a href="https://www.happyfox.com/login/"> <Button   _hover={{ bg: 'white' }} className="navbar_1btn" sx={{fontSize:"0.7rem",background:"tranparent"}}>Login</Button></a>
 

  
  
  
   </div>
    {/* <div className='main_div_div2'>
     </div> */}
</div>
    )
  }