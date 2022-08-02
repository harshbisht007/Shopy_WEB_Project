import React from 'react'
import styled from "styled-components"
import { mobile } from "../responsive";

const Constructor = styled.div``;
const Signout = styled.div`
          font-size:14px;
          cursor:pointer;
          margin-left: 25px;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

function Logout() {

  return (
    <Constructor>
        <Signout>SIGN OUT</Signout>
    </Constructor>
  )
}

export default Logout