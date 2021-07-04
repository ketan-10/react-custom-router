import React, { useState, useEffect } from "react" 
import Context from "./Context"
import {createBrowserHistory} from 'history'

type Props = {
  children: React.ReactNode,
}

const history = createBrowserHistory();

const Provider = ({children}: Props) => {
  const [location, setLocation] = useState(history.location.pathname);

  // callback 
  const handleLocationChange = (newLocation: any) => {
    setLocation(newLocation.location.pathname);
  }

  useEffect(() => {
    const unsub = history.listen(handleLocationChange);  // history will run this callback when location changes
    return () => {   /// this will run on unmount
      unsub();
    }
  }, [])
  /// this will only run once -> when Component mounts -> 
  


  return (<>
    <Context.Provider value={location}>
      {children}
    </Context.Provider>
  </>)
};

// const hello = "ketan";
// export const {hello}; 

export {history};
// export const hello = "ketan"

export default Provider;