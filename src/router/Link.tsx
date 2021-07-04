
import React from "react";
import {history} from './Provider';

type Props = {
  path: string,
  children: React.ReactNode,
}

const Link = ({path, children}: Props) => {


  return (
    <a onClick={()=> {
      history.push(path)}
    }>
      <p>{children}</p></a>
  )
};

export default Link;