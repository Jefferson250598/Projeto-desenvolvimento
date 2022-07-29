import React, { useState } from "react"
import styled from "styled-components"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import { createGlobalStyle } from "styled-components"
import Logo from "./img/bandeira.jpg"
import Home from "./pages/Home.js"
import Desenvolvimento from "./pages/Desenvolvimento.js"




const GlobalStyle = createGlobalStyle`
  *
{
    margin: 0;
    box-sizing: border-box;
    padding: 0;
  }
  body{background-color: white;}
  `

const Header = styled.div`
background-color: red;
display: flex;
align-items: center;
height: 28vh;
`
const Bairro = styled.div`
display:flex;
font-size: 36px;
padding-left: 2vw;
`
const Lista = styled.div`
  width: 60vw;
  align-items: center;
  display:flex;
  justify-content: space-evenly;
  font-size: Hurme Geometric Sans 1, Regular;
  padding-left: 15vw;

  `

  const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
  font-size: 20px;  

`;


export default function App() {


  return (
    <Router>
      <GlobalStyle />

      <Header>
        <img src={Logo} />
        <Bairro>Jardim Catarina SG</Bairro>
        <Lista>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/Desenvolvimento">Desenvolvimento</StyledLink>

        </Lista>
      </Header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Desenvolvimento" element={<Desenvolvimento />} />
      </Routes>

      

    </Router>

  );
}


