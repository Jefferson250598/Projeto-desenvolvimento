import React, { useState } from "react"
import styled from "styled-components"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
*
{
    margin: 0;
    box-sizing: border-box;
    padding: 0;
  }
  body{
    display:flex;
    justify-content:center;
    background-color: #1C1C1C;
    img src={Catarina}
}
  
  `


const Inicio = styled.div`
background-color: blue;
margin-top: 2vh;
margin-left: 8vw;
margin-right: 8vw;
background-color: #ffffff;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
height: 28vw;
width: 80vw;
`
const Titulo = styled.h1`
padding-left: 3vw;
margin-left: 20px;
margin-right: 15em;
font-size: 25px;
`
const Paragrafo = styled.p`
margin-left: 65px;
margin-right: 15em;
margin-top: 2vh;
`

const Violencia = styled.div`

margin-top: 2vh;
margin-left: 8vw;
margin-right: 8vw;
background-color: #B0E0E6;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
height: 28vw;
width: 80vw;
font-family: sans-serif
`

const Educação = styled.div`
margin-top: 2vh;
margin-left: 8vw;
margin-right: 8vw;
background-color: #F5DEB3;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
height: 28vw;
width: 80vw;
font-family: sans-serif
`

const Infraestrutura = styled.div`
margin-top: 2vh;
margin-left: 8vw;
margin-right: 8vw;
background-color: #FF6347;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
height: 28vw;
width: 80vw;
font-family: sans-serif
`

const Limpeza = styled.div`
margin-top: 2vh;
margin-left: 8vw;
margin-right: 8vw;
background-color: #708090;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
height: 28vw;
width: 80vw;
font-family: sans-serif
`

const Solidariedade = styled.div`
margin-top: 2vh;
margin-left: 8vw;
margin-right: 8vw;
background-color: #FF4040;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
height: 28vw;
width: 80vw;
font-family: sans-serif
`
const Rodape = styled.div`
background-color:#696969;
height: 7vh;
display: flex;
margin-top: 2vh;
padding-top: 3vh;
justify-content: center;
font-family: sans-serif
font-size: 15px;
`

export default function App() {



    return (
        <>
         

            <Inicio>
                <Titulo>Os Objetivos de Desenvolvimento sustentável no Jardim Catarina a começar em min</Titulo>
                <Paragrafo>Jardim Catarina é um bairro fluminense pertencente ao distrito de Monjolos, no município de São Gonçalo. Apesar de possuir uma faixa de terra menor do que outros bairros de São Gonçalo, Jardim Catarina é considerado o maior loteamento da América Latina. O bairro recebeu este título devido ao grande número de domicílios.
                    A origem do Jardim Catarina remonta a antiga Fazenda Laranjal, cujo o seu proprietário foi o senhor Júlio Pedroso Lima que a comprou em 26 de junho de 1903 do Banco da Republica do Brasil S/A.
                    Com o passar do tempo muitas coisas começou a desejar dentro do Bairro, violência, índice baixo de educação, saneamento básico, falta de projetos sócias e infraestrutura, isso fez com que o bairro tem um índice baixo de perspectiva de vida.
                    Hoje uma boa porcentagem de moradores do bairro tem em mente a oportunidade de querer sair do bairro para buscar um lugar melhor, sem ter a iniciativa para realizar a mudança e sabemos que toda mudança começa em si mesmo.
                </Paragrafo>
            </Inicio>
            <Violencia>
               
                <Titulo>Violência</Titulo>
                <Paragrafo>O bairro mais populoso de São Gonçalo, na região Metropolitana do Rio de Janeiro, é também um dos mais violentos. Jardim Catarina virou um território sem lei. No meio da guerra entre facções rivais, moradores ficam reféns do medo.</Paragrafo><br></br>
                <Paragrafo>Assim o bairro tem um índice muito baixo de investimentos, entendemos que a segurança é um papel muito importante, para que todos moradores possam ir e vim, constante.</Paragrafo><br></br>
                <Paragrafo>O que podemos fazer para que isso possa melhorar, essa é uma pergunta que todos nós fazemos constantemente, mas devemos ter a plena certeza que começa em nos. A nossa atitude de cada morador desse bairro é de maior importância, sabemos que a falta de oportunidades faz com que muitos tem a indignação em entrar para o tráfico de drogas, precisamos sim ajudar esses adolescente e jovens fazer com que eles possam entender que não é apenas esse mundo fechado, mas sim nós podemos ir muito além com dignidade. </Paragrafo>
                <Paragrafo>Um dos principais projetos é um roda de conversa e de ideias com adolescente e jovens, fazendo com que possam refletir em tudo isso, para que todos possam ter uma oportunidade em viver de maneira correta e integra.</Paragrafo>
            
            </Violencia>


            <Educação>
                <Titulo>Educação</Titulo>
                <Paragrafo>Construir uma escola pública popular é uma luta permanente da qual a participação dos movimentos sociais torna-se necessária. É nesta relação entre escola e movimentos sociais que a escola vai se retroalimentando e recriando a educação de jovens e adultos enquanto sujeitos desse processo, isso é um papel muito importante na vida das crianças pois o seus pensamentos terão novo ares para que possam pensar e se desenvolver.</Paragrafo><br></br>
                <Paragrafo>Todo esse intuito da escola popular e trazer essa criança ou adolescente para perto, porque dentro da nossa comunidade, muitos não tem uma família estruturada para que possa dá o apoio necessário, como deveria, então com ajuda de profissionais como psicólogos educadores e pessoas que tem um coração a ajudar seria muito importante.</Paragrafo><br></br>
                <Paragrafo></Paragrafo>
                <Paragrafo></Paragrafo>
            
            </Educação>
         

            <Infraestrutura>
                <Titulo>Infraestrutura</Titulo>
                <Paragrafo>Muitos de nós sabemos que dentro das comunidades e favelas o saneamento básico e algo que acaba deixando muito a desejar, no jardim Catarina ainda existe algumas ruas que se encontro com terra ao invés de asfalto fazendo com em dias de chuvas acontece os alagamentos.</Paragrafo><br></br>
                <Paragrafo>Sabemos que todos nós merecemos isso para ter uma vida digna mas por causa de alguns problemas sócias os governantes deixaram para trás essa opção. </Paragrafo><br></br>
                <Paragrafo></Paragrafo>
                <Paragrafo></Paragrafo>
            
            </Infraestrutura>
    
            <Limpeza>
                <Titulo>Limpeza</Titulo>
                <Paragrafo>A limpeza é algo muito importante para todo o mundo, um lugar limpo é muito agradável de se conviver e também não gera nenhuma doença, sabemos o papel também da limpeza não é só do órgão público mais sim também de cada um de nós, devemos cuidar e zelar por todo o nosso espaço em que convivemos. </Paragrafo><br></br>
                <Paragrafo>Mas infelizmente sabemos que não acontece dessa muitos ainda deixam de colocar o lixo no lugar correto e acaba jogando nas ruas, boieiros e tudo mais, e quando chove acaba dando um trabalho imenso.</Paragrafo><br></br>
                <Paragrafo>Um papel importante seria conscientizar a todos com ideias de reciclagem sabendo que o seu lixo pode ser muito importante para outros e também gerar uma renda. As oficinas nesse papel é muito importante pois poderíamos conversar sobre essas coisas e também trazer pessoas para que possamos aprender a cuidar do nosso lixo de maneira correta. </Paragrafo>

            
            </Limpeza>
            
            <Solidariedade>
                <Titulo>Solidariedade</Titulo>
                <Paragrafo>A solidariedade significa se identificar com o sofrimento do outro e, principalmente, se dispor a ajudar a solucionar ou amenizar o problema. Ser solidário não é dar esmola porque a construção de uma sociedade mais justa é responsabilidade de todos.</Paragrafo><br></br>
                <Paragrafo>Quando peçamos no próximo fazemos com que queremos um local melhor para todos nós, não apenas para o nosso cômodo mais sim todos, não devemos apenas culpar governantes ou todo aquele que exerce um poder público, apenas faça aquilo que você acha que bom, não espera o tempo passar pois sabemos que o tempo passa cada vez mais rápido.</Paragrafo><br></br>
                <Paragrafo>Começa em você que eu vou começar a min a mudar a história do nosso bairro, pois a longo prazo iremos ter uma comunidade feliz e com prazer em fazer parte dela.  </Paragrafo>
            </Solidariedade>

        
        <Rodape>
            <p>Faça parte desse projeto entre em contato com o whatsapp (21) 968645662 e venha ser mais um a começar em min.</p>
        </Rodape>
       

        </>



    );
}