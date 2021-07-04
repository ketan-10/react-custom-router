import React, { useContext } from "react";
import Context from "./Context";

type Props = {
  children: React.ReactNode,
  path: string,
}

const Route = ({children, path}: Props) => {
  
  const location = useContext(Context);
  return (<>
    {(path === location)?
      <>{children}</>
    : null}
  </>)
}


export default Route;