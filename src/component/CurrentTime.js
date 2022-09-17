import React, { Component } from 'react'

export default class CurrentTime extends Component {
  state={
    currentTime1: new Date(),
   a:new Date(),
    reff:null
  };
 RetriveDay=(y)=>
  {
      let arr=["sun", "mon "  ,"tues" ,"wed" , "thur" ,"fri" ,"sat" ];
      return(arr[y]);
  };
RetriveMonth=(m)=>
  {
      let arr=["Jan" , "Feb" , "Mar" , "April" , "May" ,"June" ,"July" , "Aug" , "Sep" , "Oct" , "Nov" ,"Dec"];
      return(arr[m]);
      
  }
componentDidMount=()=>{

}
  
    render() {
    return (
      <div className='container' >Current Time
      <h1>{this.state.currentTime1.getDate()}/{this.RetriveMonth(this.state.currentTime1.getMonth())}/{this.state.currentTime1.getFullYear()}</h1>
      <h1>{this.state.currentTime1.getHours()}::{this.state.currentTime1.getMinutes()}::{this.state.a}</h1>
      </div>
    )
  }
}
