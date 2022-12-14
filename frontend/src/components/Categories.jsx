import React from 'react'
import styled from 'styled-components'
import CategoryItem from './CategoryItem';
import { categoies } from '../data';
import { mobile } from "../responsive";


const Container = styled.div`
display:flex;
padding:20px;
justify-content: space-between;
${mobile({ padding: "0px", flexDirection:"column" })}
`;
function Categories() {
  return (
    <Container>
         {categoies.map(item=>(
             <CategoryItem item={item} key={item.id}/>
         ))}
    </Container>
  )
}

export default Categories