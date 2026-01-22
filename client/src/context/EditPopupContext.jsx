import {createContext, useState } from "react";

const EditPopupContext = createContext();

const EditPopupContextProvider = ({children}) =>{
    const [showEditPopup, setShowEditPopup] = useState(false);
    const [editTaskData, setEditTaskData] = useState({});

    return (
        <EditPopupContext.Provider value={{showEditPopup,setShowEditPopup,editTaskData,setEditTaskData}}>
            {children}
        </EditPopupContext.Provider>
    )
}

export {EditPopupContext, EditPopupContextProvider};