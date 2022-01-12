import axios from "axios";
import { useEffect, useState } from "react";

const getData = (nameInStorage: string) => {
  const result = localStorage.getItem(nameInStorage);
  return result && JSON.parse(result)
}

export const useFetchAll = (uri: string, nameInStorage: string) => {
  const [state, setState] = useState({ data: [], loading: true })
  useEffect(() => {
    const data = getData(nameInStorage);
    if (data) return setState(() => ({ data: data, loading: false }));
    (() => {
      axios.get(`https://fakestoreapi.com/products/`).then((res: any) => {
        setState(() => ({ data: res.data, loading: false }));
        localStorage.setItem(nameInStorage, JSON.stringify(res.data));
    });
    })();
  }, [setState, nameInStorage, uri]);
  return state
}

export const useForm = (intialValue :any) => {
  const [values, setValues] = useState(intialValue);
  return [
    values,
    (e : any) => {
      setValues({
        ...values, 
        [e.target.name]: e.target.value,
      });
    },
  ];
}