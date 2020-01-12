import React from 'react'
import Card from './Card'

const CardContainer = (props) => {
  // debugger
  // console.log(props.characters)
  return(
    <>
      <div className='ui grid'>

          {
            props.characters.length === 0 ? null : props.characters.map(character => <Card charac={character} key={character.FirstURL}/>)
          }

      </div>
    </>
  )
}

export default CardContainer
