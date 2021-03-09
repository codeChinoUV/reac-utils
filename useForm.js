import { useState } from "react"

export const useForm = (initialState = {}) => {
    const [valuesForm, setvaluesForm] = useState(initialState);
    
    const reset = () =>{
        setvaluesForm(initialState);
    }

    const handleInputChange = ({target}) => {
        setvaluesForm({
            ...valuesForm,
            [target.name]: target.value
        });
    }

    return {valuesForm, handleInputChange, reset};
}
