import React from 'react'
import styled from 'styled-components'
import PlayerCard from '../player-card/player-card.component'

const Container = styled.div`
    background-color: white;
    margin: 10px;

`


export default ({data}) => {



    return (

        <Container>
            <ul>
{/* 
        {{data.map(i => {
            <li><PlayerCard player={i}></PlayerCard></li>
        })}} */}
        
            </ul>
        </Container>


    )


}
