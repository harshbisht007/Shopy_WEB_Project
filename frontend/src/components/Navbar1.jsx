
import { Badge } from "@material-ui/core"
import {Person, Search, ShoppingCartOutlined} from "@material-ui/icons"
import React from 'react'
import styled from "styled-components"
import { mobile } from "../responsive";
import { useSelector} from "react-redux"
import {Link} from "react-router-dom"
//import { logout } from "../redux/userRedux";

const Container =  styled.div`
      height: 60px;
      margin-top:1px;
      ${mobile({ height: "50px" })}
      
`;
const Wrapper = styled.div`
     padding :10px 20px;
     display:flex;
     align-items:center;
     justify-content:space-between;
     ${mobile({ padding: "10px 0px" })}
`
const Left = styled.div`
     flex:1;
     display:flex;
     align-items:center;
`;

const Language = styled.span`
           font-size:14px;
           cursor:pointer; 
           ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
     border:0.5px solid lightgray;
     display:flex;
     align-items:center;
     margin-left:25px;
     padding:4px;
`;

const Input  = styled.input`
     border:none; 
     ${mobile({ width: "50px" })}   
`;


const Center = styled.div`
     flex:1;
     text-align:center;
`;

const Logo = styled.h1`
     font-weight:bold;
     ${mobile({ fontSize: "24px" })}

`;

const MenuItem = styled.div`
     font-size:14px;
     cursor:pointer;
     margin-left: 25px;
     ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Right = styled.div`
     flex:1;
     display:flex;
     align-items:center;
     justify-content:flex-end;
     ${mobile({ flex: 2, justifyContent: "center" })}

`;
const User = styled.div`
   display:flex;
   flex-direction:column;
   padding:2px;
   margin:2px
`;
const Name = styled.p`
    font-weight:20px;
    color:black;
    position:absolute;
    right:14rem;
`;




function Navbar1() {

     const quantity =useSelector(state=>state.cart.quantity)
    
     
      
  return (
    <Container >
        <Wrapper>
             <Left>
                 <Language>EN</Language>
                 <SearchContainer>
                     <Input/>
                     <Search style={{color:"black",fontSize:16}}/>
                 </SearchContainer>
             </Left>
             <Center><Logo>SHOPY</Logo></Center>
             <Right>
                    <User>
                    <Person></Person> 
                    <Name></Name>    
                    </User>
                <Link to="/login">
                   <MenuItem>Sign in</MenuItem>
                </Link>
                <Link to ='/cart'>

                <MenuItem>
                <Badge badgeContent={quantity} color="primary">
                  <ShoppingCartOutlined/>
                  </Badge>
                </MenuItem>


                
                </Link>
               

             </Right>
        </Wrapper>
        
    </Container>
  )
}

export default Navbar1