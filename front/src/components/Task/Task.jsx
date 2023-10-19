import React, { useState } from "react";
import "./Task.css";
import { useDeleteTaskMutation } from "../../ReduxToolkit/taskSlice";
import Icon from "@mui/material/Icon";
import DeleteIconOutlineOutlined from "@mui/icons-material/DeleteOutlineOutlined";

const Task = ({ id, title }) => {
  // Elimina 'description' de las props
  const [deleteTask] = useDeleteTaskMutation();
  const [isModalOpen, setIsModalOpen] = useState(false); // Agrega un estado para controlar si el modal está abierto

  return (
    <div
      className="task-container"
      onClick={() => setIsModalOpen(true)} // Abre el modal al hacer clic en la descripción
    >
      <h4 className="task-description">{title}</h4>

      <button className="delete-btn" onClick={() => deleteTask(id)}>
        <Icon>
          <DeleteIconOutlineOutlined className="delete-icon" />
        </Icon>
      </button>

      {isModalOpen && ( // Muestra el modal si isModalOpen es verdadero
        <div
          className="modal-background"
          onClick={() => setIsModalOpen(false)} // Cierra el modal al hacer clic en el fondo
        >
          <div
            className="modal-content"
             // Evita que los clics en el contenido cierren el modal
          >
            <h1>{title}</h1> {/* Muestra solo el título de la tarea */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Task;
