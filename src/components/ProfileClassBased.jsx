import {Component} from "react";

class ProfileClass extends Component{
   
    constructor(props){
        super(props);
        this.state = {
            count1:0,
            count2:0
        }
        console.log("constructor" + this.props.name)
    }

  
        componentDidMount(){
            this.timer = setInterval(()=>{
                console.log("ankur");
            },1000);
            console.log("componentDidMount" + this.props.name);
        }
      

    componentWillUnmount(){
        clearInterval(this.timer);
        console.log("child - componentWillUnmount")
    }

    render(){
        return(
            <>
            <h1>Profile Class Based Component</h1>
            <h1>{this.props.name}</h1>
            <h2>{this.state.count1}</h2>
            <h2>{this.state.count2}</h2>

            <button onClick = {()=>{this.setState({count1:1,count2:1})}}>SetCount</button>
            {/* <button onClick = {()=>{this.setState({count2:1})}}>SetCount2</button> */}

            {console.log("render" + this.props.name)}
            </>
            
        )
    }
    
}

export default ProfileClass;