import React from 'react'

const Joke = (props) => {
  return (
    <div>
      <h3>{props.setup}</h3>
      <h3>{props.punchline}</h3>
    </div>
  )
}

export default Joke;
