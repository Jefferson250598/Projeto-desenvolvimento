import React, { useState } from "react"
import styled from "styled-components"

const Main = styled.div`
background-color: #FFFACD;
margin-top: 0vh;
display: flex;
align-items: center;
flex-direction: column;
width: 100%;
padding-left: 19em;
padding-right: 19em;

`
const Titulo = styled.h3`
font-size: 24px;
margin-bottom: 30px;
margin-top: 25px;


`
const Texto = styled.div`
font-size: 20px;
`

export default function App() {



    return (

        <Main>
            <Titulo>Jardim Catarina</Titulo>
            <Texto>

                <p>A origem do Jardim Catarina remonta a antiga Fazenda Laranjal, cujo o seu proprietário foi o senhor Júlio Pedroso Lima que a comprou em 26 de junho de 1903 do Banco da Republica do Brasil S/A. Nesta fazenda ao lado da casa grande havia uma capela, quinze casas destinadas aos colonos da fazenda, o engenho e a Escola Rural (para os filhos dos colonos da fazenda) . Após a morte de seu proprietário em 1925, a escola foi doada a prefeitura. A partir de 1947, Júlio Pedroso Lima Júnior, filho do proprietário da Fazenda vendeu alguns lotes de terra ao Bispo D. João da Matta, na localidade hoje denominada Santa Luzia este doou uma parte da terra para construção de uma capela e outra parte para aumentar a área das terras da escola. As casas construídas na fazenda foram doadas aos seus moradores (colonos e posseiros). Em 1932, a fazenda passou a ser administrada pelo seu sobrinho Américo Lima. Foi loteada pelo seu neto Antônio de Barros Lima Filho. Suas partes deram origem aos atuais bairros Laranjal, Santa Luzia, Boa Vista e Jardim Catarina.</p>
                <p>Jardim Catarina é cortado pelo Rio Alcântara que possui uma extensão de 25km. A drenagem local é feita atualmente por valões que circundam o bairro, que por terem trechos estreitos comprometem a vazão das águas ocasionando freqüentes enchentes. Com a inexistência de obras de drenagem comprometem de forma direta com as instalações sanitárias existentes.</p><br></br>
                <p>Localizado no bairro o Valão Jardim Catarina possui uma area de drenagem de aproximadamente 1,7 Km2 despejando suas áreas no canal Isaura Santana, que por sua vez encaminha suas águas ate o Rio Guaxindiba que desemboca na Baia de Guanabara. O traçado atual do Valão Jardim Catarina se estende por cerca de 3 Km, atravessando áreas ocupadas do bairro, retornando residências e lotes, fazendo com que seu percurso seja bastante sinuoso, além de interceptar a BR 101.</p><br></br>
                <p> <a href="https://www.google.com.br/maps/place/Jardim+Catarina,+S%C3%A3o+Gon%C3%A7alo+-+RJ/@-22.7936575,-43.0177155,14z/data=!3m1!4b1!4m5!3m4!1s0x99974b812d9aa9:0xe5583209695d7991!8m2!3d-22.7921669!4d-42.9997977">Mapa do Jardim Catarina – Google Maps</a></p><br></br>
            </Texto>
        </Main>
    );
}