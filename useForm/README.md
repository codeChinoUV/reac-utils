# useForm

Sirve para manipular las entradas que existen en los inputs de texto

Ejemplo de uso:
```
    const initialForm = {
        name: '',
        age: 0,
        email: ''
    }

    const {valuesForm, handleInputChange, reset } = useForm(initialForm);
```