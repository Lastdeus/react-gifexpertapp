import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

//const categories = ['One Punch', 'Samuray X', 'Gatos'];

const [categories, setCategories] = useState(['']);
/* 
const handleAdd = () => {
    
    //setCategories([...categories,'Perros']);  //operador SPREAD ...  los tres puntos sirven para llamar al resto de items en el array
    setCategories(c => ['Perros', ...c]);       //se puede usar esta forma o la de la línea anterior
};
 */

  return (
    <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={setCategories}/>
        <hr />

        
        <ol>
            {
                categories.map( category => (
                    <GifGrid 
                        key={category}
                        category={category}
                    />
                    ))
                    
            }
        </ol>



{/* ////////////otro tipo de lista/////////// */}

{/* 

        <hr />
        <ol>
            {categories.map(category =>{
                return <li key ={category}> {category} </li>; // uso key ={category} para darle un valor unico al elemento category
                }
            )}
        </ol>
 */}




    </>
  )
}
