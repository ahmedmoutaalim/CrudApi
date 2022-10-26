import  {useState} from 'react'



const useForm =(initialFieledValues) => {
    
  const [values , setValues] = useState(initialFieledValues)
  const [errors , setErrors] = useState({})

    const handleInputChange = e => {
        const {name ,value} =e.target 

        setValues({
          ...values,
          [name] : value
        })
}

    return(
        values,
        setValues,
        setErrors,
        errors,
        handleInputChange
       
    );
}

export default useForm 