import React, { useState } from "react";
import "./CreateTask.css";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";
import { useCreateTaskMutation } from "../../ReduxToolkit/taskSlice";
import ArrowDropDownOutlined from "@mui/icons-material/ArrowDropDownOutlined";
import TextareaAutosize from "react-textarea-autosize";

const CreateTask = () => {
  const [createTask] = useCreateTaskMutation();
  const navigate = useNavigate();
  const [task, setTask] = useState({
    title: "",
  });

  const { title } = task;

  const handleSubmit = (event) => {
    event.preventDefault(); //-->para evitar que la pagina refresque
    if (title.trim() === "") {
      // Si el título está vacío, no hagas nada y retorna
      return;
    }
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
            <span>New Task:</span>
          </label>
          <TextareaAutosize
            className="task-input"
            placeholder="Put your task here..."
            name="title"
            value={title}
            onChange={handleChange}
          />
        </div>
        <button className="submit" type="submit" name="submit">
          <ArrowDropDownOutlined />
        </button>
      </form>
    </div>
  );
};

export default CreateTask;
