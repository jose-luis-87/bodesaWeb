import React, { createContext, useState} from 'react'

export const NavContext = createContext()
export const NavProvider = props =>{

    const [section, setSection] = useState(0)

    return <NavContext.Provider value={[section, setSection]}>
                {props.children}
           </NavContext.Provider>
}