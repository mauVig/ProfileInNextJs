import { createContext, useContext, useEffect, useState } from 'react';

export const ChooseIdiom = createContext();

export function ContextIdiom({ children }) {
    const [stateIdiom, setStateIdiom] = useState();

    useEffect(()=>{
        const idiom = localStorage.getItem('midiom')
        setStateIdiom(idiom)
    },[])

  const esp = () => setStateIdiom(true);
  const eng = () => setStateIdiom(false);
  
  return (
    <ChooseIdiom.Provider value={{ stateIdiom, esp, eng }}>
      {children}
    </ChooseIdiom.Provider>
  );
}

export const UseContextIdiom = () => {
  return useContext(ChooseIdiom);
};
