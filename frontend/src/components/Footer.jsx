import React from 'react'
import styled from 'styled-components'
import { mobile } from "../responsive";
import { Facebook, Instagram , MailOutline, Phone, Pinterest, Room, Twitter } from '@material-ui/icons';


const Container = styled.div`
  display:flex;
  ${mobile({ flexDirection: "column" })}
`;
const Left = styled.div`
   flex:1;
   display:flex;
   flex-direction:column;
   padding:20;
`;

const Logo = styled.h1``;
const Desc = styled.p`
   margin:20px;
`;
const SocialContainer = styled.div`
    display:flex;
`;
const SocialIcon = styled.div`
     width:40px;
     height:40px;
     border-radius:50%;
     color:white;
     background-color: #${props=>props.color};
     display:flex;
     align-items:center;
     justify-content:center;
     margin-right:20px;
`;


const Center= styled.div`
flex:1;
padding:20px;
${mobile({ display: "none" })}
`;

const Title = styled.h3`
   margin-bottom:30px; 
`;

const List = styled.ul`
    margin:0;
    padding:0;
    list-style:none;
    display:flex;
    flex-wrap:wrap;
`;

const ListItem = styled.li`
      width:50%;
      margin-bottom:10px;
`;

const ContactItem= styled.div`
         margin-bottom:20px;
         display:flex;
         align-item:center;
`;

const Payment = styled.img`
       width:50%;
`;
const Right = styled.div`
flex:1;
padding:20px;
${mobile({ backgroundColor: "#fff8f8" })}
`;

function Footer() {
  return (
    <Container>
        <Left>
            <Logo>SHOPY</Logo>
            <Desc>No Coding Needed, just Pick Features. We make Building Software as Easy as Ordering Pizza.
                 Build your Ecommerce Online with No Coding. Get Inspired by Popular Apps & Make yours. 
                 Software Shipped On Time. Make 3x More Sales Now.
                 </Desc>
                 <SocialContainer>
                     <SocialIcon color='3B5999'>
                         <Facebook/>
                     </SocialIcon>
                     <SocialIcon color='E4405F'>
                         <Instagram/>
                     </SocialIcon>
                     <SocialIcon color='55ACEE'>
                         <Twitter/>
                     </SocialIcon>
                     <SocialIcon color='560023'>
                         <Pinterest/>
                     </SocialIcon>
                 </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashon</ListItem>
                <ListItem>Women Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact Us</Title>
            <ContactItem>
               <Room style={{marginRight:"10px"}}/> 446778 Gurgaon , 76509
            </ContactItem>
            <ContactItem>
              <Phone style={{marginRight:"10px"}}/>  + 9865780987
            </ContactItem>
            <ContactItem>
               <MailOutline style={{marginRight:"10px"}}/> contact@gmail.com
            </ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
        </Right>
    </Container>
    
  )
}

export default Footer