import React from 'react'

const Joke = (props) => {
  return (
    <div>
      <br />
      <h2>Generate a Joke: </h2>
      <br />
      <h3>{props.setup}</h3>
      <h3>{props.punchline}</h3>
      <br />
    </div>
  )
}

export default Joke;
