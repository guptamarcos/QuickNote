import { createContext , useState} from "react";

const ShowPopupContext = createContext();

const ShowPopupContextProvider = ({ children }) =>{
    const [showPopup,setShowPopup] = useState(false);
    return (
        <ShowPopupContext.Provider value={{showPopup,setShowPopup}}>
            {children}
        </ShowPopupContext.Provider>
    )
}

export {ShowPopupContext, ShowPopupContextProvider};


// CONTEXT AND PROVIDER NAME ALWAYS IN CAPITAL 
// KEEP THE VALUE AS VALUE DON'T CHANGE IT'S NAME