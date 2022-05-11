import React, { useState } from 'react';
import PropTypes from 'prop-types';
export const AddCategory = ({setCategories}) => {
  
    const [inputValue, setInputValue] = useState('') // se le pone comillas '' para darle un valor de string 'Vacío' de lo contrario lo reconoce como Undefined

    const handleInputChange =( e ) => {
        setInputValue(e.target.value); // para llamar datos del input
    }

    const handleSubmit = ( e ) => {
        e.preventDefault(); //fuerza no refrescar nuevamente toda la pagina con el form
        if(inputValue.trim().length >2){
          setCategories( cats=>[inputValue,...cats]);
          setInputValue(''); // vacío el input para que no se duplique

        }

    }

//el form ya agrupa. no hace falta usar un fragment   <>   </>
    return (
 
   <form onSubmit={handleSubmit}>
        <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
        />
   </form>
  )

}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
//AddCategory.defaultProps = {
//  setCategories: 'Prueba1',
//};
//export default AddCategory;
