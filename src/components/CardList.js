
import React from 'react'
import Card from './Card'
// import styled from 'styled-components'
import './CardList.css'

const CardList = (props) => {

    return (
        <div className='cardlist'>
            {/* <Card objeto={props.data}/> */}
            {
                props.data.map(objeto => <Card key={objeto.id} objeto={objeto}/>)
            }
        </div>
    )
}

// const Contenedor = styled.div`
// display: flex;
// flex-wrap: wrap;
// `;

export default CardList;