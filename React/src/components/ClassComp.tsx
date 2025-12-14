import React from "react";

class MyClassComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            user:null
        }
    };


    componentDidMount(): void {
        console.log("Mounted.")
    }

    componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void {
        if(this.prevState !== this.state.user){
            console.log("Updated.")
        }
    }
    componentWillUnmount(): void {
        console.log("UnMounted.")
    }

     adduser = ()=>{
        this.setState({user: "John Doe."})
    }

    render(): React.ReactNode {
       return <div>
        <button onClick={this.adduser}>Add User.</button>
        {this.state.user && <p>{this.state.user}</p>}
        </div>
    }
}

export default MyClassComponent;