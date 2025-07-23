import React from "react";
const Div = ({x,y}) => {
    return (
    <div>
    { y!==0 ? `${x} + ${y} = ${(x / y).toFixed(2)}` : 'cannot divide by 0'}  
    </div>
    );
 };
export default Div;