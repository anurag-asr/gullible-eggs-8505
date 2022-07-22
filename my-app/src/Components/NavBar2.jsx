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
    <div className="div">tere bin</div> 
    </MenuList>
  </Menu>
  <Menu >
    <MenuButton sx={{color:"#888b8d",fontFamily:"hero-new,sans-sarif",fontSize:"0.7rem"}} _hover={{ bg: 'transparent' }}  bg='transparent'  _expanded={{ color: 'black' }} className="navbar_1menu" as={Button} rightIcon={<ChevronDownIcon />}>
    Solving
    </MenuButton>
    <MenuList>
    <div className="div">tere bin</div> 
    </MenuList>
  </Menu>
  <Menu >
    <MenuButton sx={{color:"#888b8d",fontFamily:"hero-new,sans-sarif",fontSize:"0.7rem"}} _hover={{ bg: 'transparent' }}  bg='transparent'  _expanded={{ color: 'black' }} className="navbar_1menu" as={Button} rightIcon={<ChevronDownIcon />}>
  Pricing
    </MenuButton>
    <MenuList>
    <div className="div">tere bin</div> 
    </MenuList>
  </Menu>
  <Menu >
    <MenuButton sx={{color:"#888b8d",fontFamily:"hero-new,sans-sarif",fontSize:"0.7rem"}} _hover={{ bg: 'transparent' }}  bg='transparent'  _expanded={{ color: 'black' }} className="navbar_1menu" as={Button} rightIcon={<ChevronDownIcon />}>
  Resources
    </MenuButton>
    <MenuList>
    <div className="div">tere bin</div> 
    </MenuList>
  </Menu>
  </div>
  
   </div>

   <div>
  <Button  sx={{backgroundColor:"#ff8d00"}} _hover={{backgroundColor:"#ff8d00"}}  >Get Demo</Button>
  </div>
   </div>
    )
  }