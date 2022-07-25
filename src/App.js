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
// const Main = styled.div`
// background-color: #FFFACD;
// margin-top: 0vh;
// display: flex;
// align-items: center;
// flex-direction: column;
// width: 100%;
// padding-left: 19em;
// padding-right: 19em;

// `
// const Titulo = styled.h3`
// font-size: 24px;
// margin-bottom: 30px;
// margin-top: 25px;


// `
// const Texto = styled.div`
// font-size: 20px;
// `



// const Inicio = styled.div`
// margin-top: 2vh;
// margin-left: 8vw;
// margin-right: 8vw;
// background-color: #ffffff;
// display: flex;
// justify-content: center;
// align-items: center;
// flex-direction: column;
// height: 28vw;
// width: 80vw;
// `
// const Titulo = styled.h1`
// padding-left: 3vw;
// margin-left: 20px;
// margin-right: 15em;
// `
// const Paragrafo = styled.p`
// margin-left: 65px;
// margin-right: 15em;
// margin-top: 2vh;
// `







export default function App() {


  return (
    <Router>
      <GlobalStyle />

      <Header>
        <img src={Logo} />
        <Bairro>Jardim Catarina SG</Bairro>
        <Lista>
          <Link to="/">Home></Link>
          <Link to="/Desenvolvimento">Desenvolvimento></Link>

        </Lista>
      </Header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Desenvolvimento" element={<Desenvolvimento />} />
      </Routes>

      {/* <Main>
        <Titulo>Jardim Catarina</Titulo>
        <Texto>
        <p>Jardim Catarina é um bairro fluminense pertencente ao distrito de Monjolos, no município de São Gonçalo. Apesar de possuir uma faixa de terra menor do que outros bairros de São Gonçalo, Jardim Catarina é considerado o maior loteamento da América Latina. O bairro recebeu este título devido ao grande número de domicílios.</p><br></br>
        <p>A origem do Jardim Catarina remonta a antiga Fazenda Laranjal, cujo o seu proprietário foi o senhor Júlio Pedroso Lima que a comprou em 26 de junho de 1903 do Banco da Republica do Brasil S/A. Nesta fazenda ao lado da casa grande havia uma capela, quinze casas destinadas aos colonos da fazenda, o engenho e a Escola Rural (para os filhos dos colonos da fazenda) . Após a morte de seu proprietário em 1925, a escola foi doada a prefeitura. A partir de 1947, Júlio Pedroso Lima Júnior, filho do proprietário da Fazenda vendeu alguns lotes de terra ao Bispo D. João da Matta, na localidade hoje denominada Santa Luzia este doou uma parte da terra para construção de uma capela e outra parte para aumentar a área das terras da escola. As casas construídas na fazenda foram doadas aos seus moradores (colonos e posseiros). Em 1932, a fazenda passou a ser administrada pelo seu sobrinho Américo Lima. Foi loteada pelo seu neto Antônio de Barros Lima Filho. Suas partes deram origem aos atuais bairros Laranjal, Santa Luzia, Boa Vista e Jardim Catarina.</p>
        <p>Jardim Catarina é cortado pelo Rio Alcântara que possui uma extensão de 25km. A drenagem local é feita atualmente por valões que circundam o bairro, que por terem trechos estreitos comprometem a vazão das águas ocasionando freqüentes enchentes. Com a inexistência de obras de drenagem comprometem de forma direta com as instalações sanitárias existentes.</p><br></br>
        <p>Localizado no bairro o Valão Jardim Catarina possui uma area de drenagem de aproximadamente 1,7 Km2 despejando suas áreas no canal Isaura Santana, que por sua vez encaminha suas águas ate o Rio Guaxindiba que desemboca na Baia de Guanabara. O traçado atual do Valão Jardim Catarina se estende por cerca de 3 Km, atravessando áreas ocupadas do bairro, retornando residências e lotes, fazendo com que seu percurso seja bastante sinuoso, além de interceptar a BR 101.</p><br></br>
        </Texto>
      </Main> */}

      {/* <Inicio>
        <Titulo>Os Objetivos de Desenvolvimento sustentável no Jardim Catarina a começar em min</Titulo>
        <Paragrafo>Jardim Catarina é um bairro fluminense pertencente ao distrito de Monjolos, no município de São Gonçalo. Apesar de possuir uma faixa de terra menor do que outros bairros de São Gonçalo, Jardim Catarina é considerado o maior loteamento da América Latina. O bairro recebeu este título devido ao grande número de domicílios.
A origem do Jardim Catarina remonta a antiga Fazenda Laranjal, cujo o seu proprietário foi o senhor Júlio Pedroso Lima que a comprou em 26 de junho de 1903 do Banco da Republica do Brasil S/A. 
Com o passar do tempo muitas coisas começou a desejar dentro do Bairro, violência, índice baixo de educação, saneamento básico, falta de projetos sócias e infraestrutura, isso fez com que o bairro tem um índice baixo de perspectiva de vida. 
Hoje uma boa porcentagem de moradores do bairro tem em mente a oportunidade de querer sair do bairro para buscar um lugar melhor, sem ter a iniciativa para realizar a mudança e sabemos que toda mudança começa em si mesmo. 
</Paragrafo>
    
      </Inicio> */}

    </Router>

  );
}


