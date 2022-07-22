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
    <div className="div">tere bin</div> 
    </MenuList>
  </Menu>

  <Menu >
    <MenuButton sx={{color:"#888b8d",fontFamily:"hero-new,sans-sarif",fontSize:"0.7rem"}} _hover={{ bg: 'transparent' }} bg='transparent'  _expanded={{ color: 'black' }} className="navbar_1menu" as={Button} rightIcon={<ChevronDownIcon />}>
    It Support
    </MenuButton>
    <MenuList>
    <div className="div">tere bin</div> 
    </MenuList>
  </Menu>

  <Menu >
    <MenuButton sx={{color:"#888b8d",fontFamily:"hero-new,sans-sarif",fontSize:"0.7rem"}} _hover={{ bg: 'transparent' }} bg='transparent'  _expanded={{ color: 'black' }} className="navbar_1menu" as={Button} rightIcon={<ChevronDownIcon />}>
  Operation Support
    </MenuButton>
    <MenuList>
    <div className="div">tere bin</div> 
    </MenuList>
  </Menu>
  
  <Button  _hover={{ bg: 'white' }} className="navbar_1btn" sx={{fontSize:"0.7rem",background:"tranparent"}}>Login</Button>

  
  
  
   </div>
    {/* <div className='main_div_div2'>
     </div> */}
</div>
    )
  }