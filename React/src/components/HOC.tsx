import React, { PropsWithChildren, ComponentType, useState } from "react";

const Hoc = () => {
    const [isLoading,setIsLoading] = useState<boolean>(true);
    if(isLoading) return (
    <div>
      Hoc
      <NewLoading label="Click Me" symbol=""/>
    </div>
  );
};

export const Button = ({ label, symbol }: { label: string; symbol: string }) => {
  return <button>{label}{symbol}</button>;
};

export const withLoading = <P extends object>(Component: ComponentType<P>) => {
  return function (props: PropsWithChildren<P>) {
    console.log(props);
    return (
      <div>
        <p>Loading....</p>
        <Component {...props} symbol="+" />
      </div>
    );
  };
};

const NewLoading = withLoading(Button);

export default Hoc;