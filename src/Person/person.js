import React from 'react';

const Person = props => {
  
return (
    <div>
        <p>Hi I am {props.name} and I am {props.age} years old!</p>
        {/* props.children is a built in method */}
        <p>{props.children}</p>
    </div>
    )
}

export default Person;