import React from 'react'

const Result = (props) => {
    const {secretNum,term}=props;
    let res;
    if(term){
    if(term > secretNum){
        res ="Higher";
    }else if(term < secretNum){
        res="Lower";
    }
    else if(parseInt(term) ===secretNum){
        res="Dude! you Find it";
    }else{
        res="Type a Valid Input Dude!";
    }
}
  return (
    <>
    <h3>You Gussed:{res}</h3>
    </>
  )
}

export default Result;