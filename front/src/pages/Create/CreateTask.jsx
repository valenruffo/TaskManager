import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./CreateTask.css";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";
import { useCreateTaskMutation } from "../../ReduxToolkit/taskSlice";

const CreateTask = () => {
  const [createTask] = useCreateTaskMutation();
  const navigate = useNavigate();
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const { title, description } = task;

  const handleSubmit = (event) => {
    event.preventDefault(); //-->para evitar que la pagina refresque
    setTask({
      title: "",
      description: "",
    });
    navigate("/tasks");
    createTask({
      ...task,
      id: uuid(),
    });
  };

  // para captar lo que se ingresa en el input/textarea
  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <form className="form1" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">
            <span>Title:</span>
          </label>
          <input
            placeholder="Put your title here..."
            name="title"
            value={title}
            type="text"
            onChange={handleChange}
          />
        </div>
        <br />
        <div>
          <label htmlFor="">
            {" "}
            <span>Description:</span>
          </label>
          <textarea
            placeholder="Put your description here..."
            name="description"
            value={description}
            type="text"
            onChange={handleChange}
          />
        </div>
        <br />

        <input className="submit" type="submit" name="submit" />
      </form>
    </div>
  );
};

export default CreateTask;
