import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
`

const Name = styled.div`
    color:red;
`

export default ({player}) => {



    return (
        <Container>
            <Name>{{player.name}}</Name>
        </Container>
    )
}

