import {useEffect, useState} from 'react';
import { getAllCategorias } from "../api/categorias.api";
import { CateCard } from "../components/CateCard";

export  function CateList() {
    // guardamos las categorias y dejamos una constante para modificarlas
    const [categorias, setCategorias] = useState([])
    

    //cargamos el arreglo de categorias antes que cargue la pagina
    useEffect(() => {
        async function loadCategorias() {
           const res =  await getAllCategorias();
           setCategorias(res.data)

        }
        loadCategorias();
    },[]);



  return (
    <div>
        {categorias.map(categoria => (
            <CateCard key={categoria.id} categoria={categoria} />
        ))}
    </div>
  )
}
