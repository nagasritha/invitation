import {Component} from 'react'
import {Heading} from './custum.js'
import './index.css'

class Templet1 extends Component{

  state={
    brideDetails:{
        name:"Bride Name",
        angle:'0'
    },
    groomDetails:{
        name:"Groom Name",
        angle:'0'
    },
    timings:'Value',
    venue: 'Value',
    date: 'Date',
    size:'18',
    font:'Roboto',
    color:'black'
}

unset=()=>{
const {brideDetails,groomDetails,formStatus,timings,venue,date,size,font,color}=this.state
this.setState({oldDetails:{
    brideDetails,groomDetails,formStatus,timings,venue,date,size,font,color
}})
this.setState({
    brideDetails:{
        name:"Bride Name",
        angle:'0'
    },
    timings:'Value',
    venue: 'Value',
    size:'18',
    font:'Roboto',
    color:'black',
    groomDetails:{
        name:"Groom Name",
        angle:'0'
    }
})
}

reset=()=>{
    const {brideDetails,groomDetails,formStatus,timings,venue,date,size,font,color}=this.state.oldDetails
    this.setState({
        brideDetails,groomDetails,formStatus,timings,venue,date,size,font,color
    })
    
    }


updateTime=(event)=>{
    this.setState({timings:event.target.value})
}

updateVenue=(event)=>{
    this.setState({venue:event.target.value})
}

updateName1 = (event)=>{
    this.setState(prevState=>(
        {
            brideDetails:{...prevState.brideDetails,name:event.target.value}
        }
    ))
}

updateSize= (event)=>{
    this.setState({size:event.target.value})
}

updateColor = (event)=>{
    this.setState({color:event.target.value})
}

updatefont = (event)=>{
    this.setState({font:event.target.value})
}

updateAngle1 = (event)=>{
    this.setState(prevState=>(
        {
            brideDetails:{...prevState.brideDetails,angle:event.target.value}
        }
    ))
}

updateName2 = (event)=>{
    this.setState(prevState=>(
        {
            groomDetails:{...prevState.groomDetails,name:event.target.value}
        }
    ))
}

updateAngle2 = (event)=>{
    this.setState(prevState=>(
        {
            groomDetails:{...prevState.groomDetails,angle:event.target.value}
        }
    ))
}

updateDate=(event)=>{
    this.setState({date:event.target.value})
}

render(){
    const {groomDetails,date,size,font,color,timings,venue,brideDetails}=this.state
    return (
        <div className='container'>
           
           <div className="templet">
                <div className="div">
                    <div>
                        <img alt='rings' className='rings' src="https://res.cloudinary.com/dkredoejm/image/upload/v1704618758/rings_hitdzv.png" width="100px" height="100px"/>
                    </div>
                    <h1 className='templeth1'>PLEASE JOIN US FOR AN ENGAGEMENT PARTY ON HONOR OF</h1>
                    <Heading type='text' font={font} size={size} color={color} angle={brideDetails.angle} >{brideDetails.name}</Heading>
                    <p>and</p>
                    <Heading type='text' font={font} size={size} color={color} angle={groomDetails.angle} >{groomDetails.name}</Heading>
                    <br/>
                    <h1 className='date'>{date}</h1>
                    <br/>
                    <div className='headings'>
                        <h2><b>Time: </b>{timings}</h2>
                        <h2><b>Venue: </b>{venue}</h2>
                    </div>
                </div>
            </div>
       
            <form className="form">
               <div className='align-flex'>
                <h1>Bride Details</h1>
                <label htmlFor='Name1'>Name</label>
                <input placeholder='Enter the name' type='text' id='Name1' value={brideDetails.name} onChange={this.updateName1}/>
                <label htmlFor='angle1'>Degree of rotation</label>
                <input onChange={this.updateAngle1} value={brideDetails.angle} placeholder='Enter the degree of rotation' type='number' min='-360' max='360' id='angle1' />
                </div>
                <div  className='align-flex'>
                <h1>Groom Details</h1>
                <label htmlFor='Name2'>Name</label>
                <input placeholder='Enter the name' value={groomDetails.name} type='text' id='Name2' onChange={this.updateName2}/>
                <label htmlFor='angle2'>Degree of rotation</label>
                <input onChange={this.updateAngle2} value={groomDetails.angle} placeholder='Enter the degree of rotation' type='number' min='-360' max='360' id='angle2' />
                
                </div><br/>
                <div  className='align-flex'>
                <h1>Common Details</h1>
                <label htmlFor="fontFamily">Fint Style</label>
                <select onChange={this.updatefont} id="fontFamily" value={font}>
                    <option value='Colonna MT'>Colonna MT</option>
                    <option value='CastellarT'>Castellar</option>
                    <option value='Algerian'>Algerian</option>
                    <option value="Blackadder ITC">Blackadder ITC</option>
                    <option value='Bahnschrift Light'>Bahnschrift Light</option>
                    <option value="Broadway">Broadway</option>
                    <option value='Bradley Hand ITC'>Bradley Hand ITC</option>
                    <option value="Comic Sans MS">Comic Sans MS</option>
                </select>
                <label htmlFor='number1'>Font Size</label>
                <input onChange={this.updateSize} value={size} placeholder='Enter the size' type='number' min='10' max='50' id='number1' />
                <label htmlFor='color1'>Color</label>
                <input onChange={this.updateColor} value={color} placeholder='Enter the color' type='color' id='color' />
                <label htmlFor="date">Date</label>
                <input type='date' id='date' onChange={this.updateDate} value={date}/> 
                <lable htmlFor='timings'>Timings</lable>
                <input type='time' id='timings' value={timings} onChange={this.updateTime}/>
                <label htmlFor='Adress'>Venue</label>
                <input type='text' id='Adress' value={venue} onChange={this.updateVenue} placeholder='Enter the Venue'/>
                </div>  
                <div className='buttons'>
                 <button type='button' onClick={this.unset} >UNDO</button> 
                 <button type='button' onClick={this.reset} >REDO</button>  
                </div>          
            </form>
        </div>
    )
}
}

export default Templet1