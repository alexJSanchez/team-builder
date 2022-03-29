import React from 'react';

const Form = (props) => {
    return(
        <form>
            <label>Name
            <input 
                placeholder='Your Name Here'
                value={values.name}
                name='name'
                onChange={handleChange}
            />
            </label>
        </form>
    )
}

export default Form;