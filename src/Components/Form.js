import React from 'react';

const Form = (props) => {

    const handleChange = Event => {
        const { name, value } = Event.target;

        props.change(name,value);
    }

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
            <label>Email
            <input 
                placeholder='Your Email Here'
                value={values.email}
                name='email'
                onChange={handleChange}
            />
            </label>
            <label>Role
            <input 
                placeholder='What is Your Role'
                value={values.role}
                name='role'
                onChange={handleChange}
            />
            </label>
            <input type='submit' value='Create Your Profile'>
            </input>
        </form>
    )
}

export default Form;