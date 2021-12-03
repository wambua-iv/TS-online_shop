import axios from "axios";
import { useEffect, useState } from "react";


const getData = (nameInStorage: string)=>{
    const result = localStorage.getItem(nameInStorage);
    return result && JSON.parse(result)
}


export const useFetchAll =(uri: string, nameInStorage:string) =>{
    const [state, setState] = useState({data: null, loading : true})

    useEffect(()=>{
        const data = getData(nameInStorage);
        if(data) return setState(()=>({data: data, loading: false}));

        (() => {
            axios.get(`http://localhost:5000/${uri}`).then((res: any) => {
              setState(() => ({ data: res.data, loading: false }));
              localStorage.setItem(nameInStorage, JSON.stringify(res.data));
            });
          })();
    },[setState, nameInStorage,uri])
    return state
}