import React ,{ useCallback,useState,useEffect} from "react"; 
const useLocalStorage = (key, initial) =>{ 
    const [storageValue, setStorageValue] = useState(() =>{ 
        const item = window.localStorage.getItem(key) 
        return item ? JSON.parse(item) : initial
    }) 
    const setValue = useCallback((value) =>{ 
        setStorageValue(value) 
        window.localStorage.setItem(key,JSON.stringify( value))
    }, [key])
} 
export default useLocalStorage