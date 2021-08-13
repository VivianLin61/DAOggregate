import { useState } from 'react'
export const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export const useForm = (callback, initialState = {}) => {
  const [values, setValues] = useState(initialState)

  const onChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value })
  }

  const onSubmit = (event) => {
    event.preventDefault()
    callback()
  }
  const resetValues = () => {
    setValues({})
  }
  return {
    onChange,
    onSubmit,
    resetValues,
    values,
  }
}
