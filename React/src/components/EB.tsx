import React, { useEffect, useState } from 'react'

const EB = ({children}:{children:React.ReactNode}) => {
    const [hasError,setHasError] = useState<boolean>(false);

    useEffect(()=>{
        const handelError = ()=>{
            setHasError(true);
        };

        window.addEventListener("error",handelError);
        window.addEventListener("unhandledrejection",handelError);

        return ()=>{
            window.removeEventListener("error",handelError);
            window.removeEventListener("unhandledrejection",handelError);
        };
    },[]);

    if(hasError){
        return <p>SomeThings went wrong....</p>
    }
  return (
    <div>{children}</div>
  )
}

export default EB;


//Error Boundary

// class EBD extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//             hasError:false
//         }
//     }

//     static getDerivedStateFromError(){
//         return {hasError:true};
//     }

//     componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
//         console.log(error,errorInfo);
//     }

//     render(): React.ReactNode {
//         if(this.state.hasError){
//             return <p>Some Things went wrong....</p>
//         }
//         return this.props.children;
// }