import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTasks, getTasks } from "../../Redux/Actions";
import "./CreateTask.css";

const CreateTask = () => {
  const [input, setInput] = useState({
    title: "",
    description: "",
  });

  const [errors, setErrors] = useState({
    title: "El titulo es requerido",
  });

  const dispatch = useDispatch()

  const validate = (input, title) => {
    if (title === 'title') {
      // title validation
      if (input.title !== '') setErrors({ ...errors, title: '' })
      else setErrors({ ...errors, title: 'El titulo es requerido' })

  }
}

const { title, description } = input;

const handleSubmit = (event) => {
  event.preventDefault()
  dispatch(createTasks(input))
  dispatch(getTasks())
  setInput({
    title: "",
    description: "",
  })
}

  // para captar lo que se ingresa en el input
  const handleChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value
    })

    validate(
      {
        ...input,
        [event.target.name]: event.target.value
      },
      event.target.name
    )
  }

  

  return (
    <div>
      <form className='form1' onSubmit={handleSubmit}>
        <div>
          <label htmlFor=''><span>Title:</span></label>
          <input placeholder="Put your title here..." name='title' value={title} type='text' onChange={handleChange} />
        </div>
        <br />
        <div>
          <label htmlFor=''> <span>Description:</span></label>
          <textarea placeholder="Put your description here..."name='description' value={description} type='text' onChange={handleChange} />
        </div>
        <br />
        
        <input className='submit'  type='submit' name='submit' />
      </form>
    </div>
  )
 
};

export default CreateTask;
