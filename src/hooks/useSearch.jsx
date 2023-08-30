import { useState,useEffect } from "react";

export function useSearch() {
    const [search, updateSearch] = useState("");
    const [error, setError] = useState(null);
  
    
    useEffect(()=>{
      if(search === ""){
        setError("El campo esta vacio")
      }
  
      else if(search.length < 3){
        setError("Minimo 3 caracteres")
      }else{
        setError(null)
      }
    },[search])
  
    return {search,updateSearch,error}
  }