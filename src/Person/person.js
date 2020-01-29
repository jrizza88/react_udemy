import React from 'react';

const Person = props => {
  
return (
    <div>
{/* <p>Hi, I'm a person and I am {Math.floor(Math.random() * 32)} years old!</p> */}
<p>Hi I am {props.name} and I am {props.age} years old!</p>
<p></p>
    </div>
    )
}

export default Person;