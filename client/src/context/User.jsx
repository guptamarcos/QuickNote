import { createContext,useState,useEffect } from "react";
import axios from "axios";

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading,setLoading] = useState(true);

  useEffect(()=>{
    const getUserData = async () =>{
      try{
        let res = await axios.get("http://localhost:4000/api/auth/me",{withCredentials: true});
        setUser(res.data.user);
      }catch(err){
        setUser(null);
      }finally{
        setLoading(false);
      }
    }
    getUserData();
  },[]);
  
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {!loading && children}
    </UserContext.Provider>
  );
};


export {UserContext, UserContextProvider};