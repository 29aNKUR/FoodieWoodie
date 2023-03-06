import React from "react";
import ProfileClass from "./ProfileClassBased";

class AboutClass extends React.Component{

    constructor(props){
        super(props);
        console.log("Parent-Constructor")

    }

    componentDidMount(){
        console.log("Parent-componentDidMount");
    }

    componentWillUnmount(){
        console.log("Parent-componentWillUnmount")
    }

    render(){
        console.log("Parent-render")
        return (
            <div>
            <ProfileClass name={"FirstChild"}/>
            {/* <ProfileClass name={"SecondChild"}/> */}
            </div>
        )
    }
}

export default AboutClass;