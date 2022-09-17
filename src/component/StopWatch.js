import React, { Component } from 'react'
import StopChild from './StopChild';

export default class StopWatch extends Component {
  
  state={
    timetoggle:true,
    sec:0,
    min:0,
    hour:0,
    ref:null,
    count:0,
    toggle:"",
    arr:[],
    currentTime1: new Date(),
    currentTime2: new Date(),
    currentTime3: new Date(),
    sec1:null , min1:null , hour1:null, date1:null , month1:null, year1:null,
    reff:null,
    stopWatchToggler:false,
    countDownToggler:false,
    currentTimeToggler:true,
    switch_stopped:true,
    switch_stopped2:true,
    sec2:null , min2:null , hour2:null , date2:null,
    date:null, refff:null
      
  };


  handleClickStart=()=>
  {
    if(this.state.switch_stopped){

      console.log("stopwatch started");
    this.setState({toggle:false , switch_stopped:false });

  this.setState({ref:setInterval(()=>{ 
  //console.log("in loop");
    this.setState({sec:this.state.count+1});
    if(this.state.sec<60)
    this.setState({sec:this.state.sec+1})
    else if(this.state.min<6)
    this.setState({sec:0, min:this.state.min+1});
    else if(this.state.hour<4)
    this.setState({min:0, hour:this.state.hour+1});
    else
    this.setState({sec:0 ,min:0 ,hour:0 });
    
    },1000)});
    }
};

handleClicker=(value)=>
{
  if(this.state.switch_stopped2===true){
    this.setState({ switch_stopped2:false });
    let wantDate=new Date(value).getTime();
  console.log(wantDate);
  this.setState({timetoggle:false});
  this.setState({refff:setInterval(()=>{
    let today=new Date().getTime();
  let difference=wantDate-today;
    this.setState({sec2:Math.floor((difference%(1000*60))/(1000)),
    min2:Math.floor((difference%(1000*60*60))/(1000*60)),
   hour2:Math.floor((difference%(1000*60*60*24))/(1000*60*60)),
   date2:Math.floor(difference/(1000*60*60*24))
 });
 console.log("first");

  },1000)})
  }
  };

  hanadleReset2=()=>{
    if(this.state.switch_stopped2===false)
    {
      this.setState({sec2:0 ,min2:0 ,hour2:0 ,date2:0, switch_stopped2:true, timetoggle:true });
      clearInterval(this.state.refff);
      
    }
    
    this.setState({switch_stopped2:true});
    
  };
  componentDidMount=()=>
  {
   setInterval(()=>{
    let today=new Date();
    this.setState({ sec1:today.getSeconds() });
    this.setState({ min1:today.getMinutes() });
    this.setState({ hour1:today.getHours() });
    this.setState({ date1:today.getDate() });
    this.setState({ month1:this.RetriveMonth(today.getMonth()) });
    this.setState({ year1:today.getFullYear()});
   },1000);
   
   
   
   
   
    //console.log(this.state.currentTime1);
    this.setState({sec1:this.state.currentTime2.getSeconds()});
    this.setState({min1:this.state.currentTime2.getMinutes()});
    this.setState({hour1:this.state.currentTime2.getHours()});
  //this.handleClickStart2();
    
    
  }
  
  handleClickStop=()=>
  {
    if(this.state.switch_stopped===false)
    {
      clearInterval(this.state.ref);
    }
    
    this.setState({toggle:true , switch_stopped:true});
    
    
  }
    
    //this.setState({arr:this.state.arr.push(this.state.count)});
    
  
  handleClickReset=()=>{
    this.setState({sec:0 ,min:0 ,hour:0 , switch_stopped:true });
    clearInterval(this.state.ref);
    
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
Toggler1=()=>
{

  this.setState({ currentTimeToggler:true, countDownToggler:false , stopWatchToggler:false});
  console.log(this.state.currentTimeToggler);

};
Toggler2=()=>
{
  this.setState({stopWatchToggler:true , currentTimeToggler:false , countDownToggler:false});
  console.log(this.state.stopWatchToggler);

};

Toggler3=()=>
{
  this.setState({ countDownToggler:true , stopWatchToggler: false , currentTimeToggler:false});
  console.log(this.state.countDownToggler);
}


    render() {
    return (
      <div className='container'>
        My Watch<br/>
        { this.state.currentTimeToggler&& <div>
        <h1>{this.state.date1}/{this.state.month1}/{this.state.year1}</h1>
        <h1>{this.state.hour1}h::{this.state.min1}m::{this.state.sec1}s</h1>
        </div> }        
        { this.state.stopWatchToggler
          && <div>
          <h1>{this.state.hour}h::{this.state.min}m::{this.state.sec}s</h1>
          
      <button className='btn btn-primary' onClick={this.handleClickStart}>start</button>
      <button className='btn btn-primary' onClick={this.handleClickStop} style={{margin:20}}>stop</button>
      <button className='btn btn-primary' onClick={this.handleClickReset}>reset</button>
          {this.state.toggle &&<StopChild  value={this.state.arr}/> }
          
          </div>        
          
        }
        {this.state.countDownToggler && 
        <div className='container'>
          <h3>select the date and time for count Down</h3>
          
        { !(this.state.timetoggle)  && <div><h1>{this.state.date2}d::{this.state.hour2}h::{this.state.min2}m::{this.state.sec2}s</h1>
        <button onClick={this.hanadleReset2} className="btn btn-primary" >Reset</button>
         </div> }  
          { this.state.timetoggle && <div><input type="text" id="some"/>
          <button className='btn btn-primary' onClick={()=>this.handleClicker(document.getElementById("some").value)}>click</button>
          </div>         
           }
        
        </div>}

        
        <button className='btn btn-info' onClick={this.Toggler1}>Current Time</button>
        <button className='btn btn-info' onClick={this.Toggler2} style={{margin:20}}>StopWatch</button>
        <button className='btn btn-info' onClick={this.Toggler3}>CountDown</button>
        


       </div>
    )
  }
}
//<ul>{this.state.months.map(year=>(<option onClick={()=>this.handleYear(year)}>{year}</option>))}</ul>
/*
handleClickStart2=()=>
  {
    this.setState({reff:setInterval(()=>{ 
      //this.setState({sec1:this.state.count+1});
      if(this.state.sec1<60)
      this.setState({sec1:this.state.sec1+1})
      else if(this.state.min1<60)
      this.setState({sec1:0, min1:this.state.min1+1});
      else if(this.state.hour1<12)
      this.setState({min1:0, hour1:this.state.hour1+1});
      //else
    //  this.setState({sec:0 ,min:0 ,hour:0 });
  },1000)});
  
  };
  
*/