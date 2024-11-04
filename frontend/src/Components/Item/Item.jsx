import React from 'react'
import { useEffect, useState } from 'react'
import './Item.css'

const Item = (props) => {
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        // Hacemos la solicitud para obtener los datos desde el backend
        fetch('http://localhost:8080/api/productos')
          .then((response) => response.json())
          .then((data) => setProductos(data)) // Guardamos los datos en el estado
          .catch((error) => console.error('Error al cargar productos:', error));
    }, []);
  return (
    <div className='item'>
        <h2> Llista productes </h2>
        <ul>
            {productos.map((producto) => (
                <li key={producto.id}>{producto.name} - ${producto.price}</li>
            ))}
        </ul>
    </div>
  )
}

export default Item;