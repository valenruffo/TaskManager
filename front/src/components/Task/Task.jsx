import React, { useState } from "react";
import "./Task.css";
import { useDeleteTaskMutation } from "../../ReduxToolkit/taskSlice";
import Icon from "@mui/material/Icon";
import DeleteIconOutlineOutlined from "@mui/icons-material/DeleteOutlineOutlined";
import PushPinIcon from "@mui/icons-material/PushPin";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import ReactMarkdown from "react-markdown";

const Task = ({ id, title, isPinned, onPin, onDelete }) => {
  const [deleteTask] = useDeleteTaskMutation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={`task-container ${isPinned ? "pinned" : ""}`}>
      <h4 className="task-description" onClick={() => setIsModalOpen(true)}>
        <ReactMarkdown>{title}</ReactMarkdown>
      </h4>

      <button
        className="delete-btn"
        onClick={() => {
          deleteTask(id);
          onDelete(id);
        }}
      >
        <Icon>
          <DeleteIconOutlineOutlined className="delete-icon" />
        </Icon>
      </button>

      {isModalOpen && (
        <div className="modal-background" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h1>
              <ReactMarkdown>{title}</ReactMarkdown>
            </h1>
            <div className="button-container-modal">
              <button
                className="delete-btn-modal"
                onClick={() => {
                  deleteTask(id);
                  onDelete(id);
                }}
              >
                <Icon>
                  <DeleteIconOutlineOutlined className="delete-icon" />
                </Icon>
              </button>
              <button className="pin-btn-modal" onClick={() => onPin(id)}>
                <Icon>
                  {isPinned ? (
                    <PushPinIcon className="pin-icon" />
                  ) : (
                    <PushPinOutlinedIcon className="pin-icon" />
                  )}
                </Icon>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Task;
