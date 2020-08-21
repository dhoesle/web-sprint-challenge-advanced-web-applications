import React, { useState } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'



const initialFormValues = {
    color: '',
    hex: ''
}

const Form = () => {
    const [formValues, setFormValues] = useState(initialFormValues)

    const newColor = {
        color: formValues.color,
        code: {
            hex: formValues.code,
        },
        id: Date.now()
    }

    const onSubmit = evt => {
        addColor(newColor)
    }

    const addColor = e => {
        axiosWithAuth()
            .post(`/api/colors`, newColor)
            .then(res => {
                console.log("Form -> res.data", res)
            })
            .catch(err => console.log({ err }))
    }

    const onInputChange = evt => {
        const { name, value } = evt.target

        setFormValues({
            ...formValues,
            [name]: value
        })
    }
    
    return (
        <form onSubmit={onSubmit}>
            <div>
                <h3>Add a color Here</h3>
                <label>code
                    <input
                        value={formValues.code}
                        onChange={onInputChange}
                        name='code'
                        type='text'
                    />
                </label>
                <label>color
                    <input
                        value={formValues.color}
                        onChange={onInputChange}
                        name='color'
                        type='text'
                    />
                </label>
                <button>Add Color</button>
            </div>
        </form>
    )



}

export default Form