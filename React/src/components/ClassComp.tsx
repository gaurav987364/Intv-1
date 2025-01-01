import React from "react";

class MyClassComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            user:null
        }
    };


    componentDidMount(): void {
        console.log("Monted")
    }

    componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void {
        if(this.prevState !== this.state.user){
            console.log("Updated")
        }
    }
    componentWillUnmount(): void {
        console.log("UnMounted")
    }

     adduser = ()=>{
        this.setState({user: "John Doe"})
    }

    render(): React.ReactNode {
       return <div>
        <button onClick={this.adduser}>Add</button>
        {this.state.user}
        </div>
    }
}

export default MyClassComponent;