import React, { useState } from 'react'
import { axiosWithAuth } from '../axiosWithAuth'


const initialValues = {
    color: "",
    code: {
      hex: ""
    }
}

export const AddColorForm = () => {
    const [newColor, setNewColor ] = useState ([])
    const [values, setValues] = useState(initialValues)

    const handleChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }

    // console.log(newColor)

    const onSubmit = (e) => {
        axiosWithAuth()
        .post('/colors', values)
        .then(res => {
            console.log('it worked', res)
            setValues({
                color: "",
                code: {
                  hex: ""
                }
            })
            setNewColor([...newColor, res.data])
        })
        .catch(err => {
            console.log('it didnt work', err)
        })
    }

    return (
        
        <form onSubmit={onSubmit}>
            <h2 >Add a Color</h2>
                <label >Color</label>
                    <input
                    type='text'
                    placeholder='blue'
                    onChange={handleChange}
                    name='color'
                    value={values.color}
                    required
                    />
     
                <label >Hex</label>
                    <input 
                    type='text'
                    placeholder='#ffff'
                    onChange={handleChange}
                    name='code'
                    value={values.code.hex}
                    required
                    />
                <button  type='submit'>Add</button>
        </form>
               

    )
}

