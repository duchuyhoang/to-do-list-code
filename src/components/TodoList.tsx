import React, { FC } from "react";
import "../styles/TodoList.css";
import { AiFillDelete } from "react-icons/ai";
import { TiEdit } from "react-icons/ti";
export interface ITodoItem {
  id: number;
  description: string;
  isCompleted: boolean;
}

interface ITodoListProps {
  list: ITodoItem[];
  editingId: number;
  setEditingId: (id: number) => void;
  editById: (id: number, text: string) => void;
  deleteItem: (id: number) => void;
  tickABox: (id: number, status: boolean) => void;
}

export const TodoList: FC<ITodoListProps> = ({
  list,
  setEditingId,
  editingId,
  deleteItem,
  editById,
  tickABox,
}) => {
  return (
    <section className="todo-list-container">
      {list.map((todoItem: ITodoItem) =>
        editingId === todoItem.id ? (
          <input
            type="text"
            className="todo-item"
            key={todoItem.id}
            defaultValue={todoItem.description}
            autoFocus
            onBlur={(e) => {
              const value = (e.currentTarget as HTMLInputElement).value;
              editById(todoItem.id, value);
              setEditingId(-1);
            }}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                const value = (e.currentTarget as HTMLInputElement).value;
                editById(todoItem.id, value);
                setEditingId(-1);
              }
            }}
          />
        ) : (
          <div className="todo-item" key={`edit-${todoItem.id}`}>
            <div className="tick-container d-flex align-center">
              <input
                type="checkbox"
                id={`"checkbox-"${todoItem.id}`}
                checked={todoItem.isCompleted}
                onChange={() => {
                  tickABox(todoItem.id, !todoItem.isCompleted);
                  console.log("changed");
                }}
              />
              <label
                htmlFor={`"checkbox-"${todoItem.id}`}
                className="label-checkbox"
              ></label>
            </div>
            <div
              className={`item-description ${
                todoItem.isCompleted ? "item-complete" : ""
              }`}
            >
              {todoItem.description}
            </div>
            <div className="d-flex align-center icon-container">
              <TiEdit size="25" onClick={() => setEditingId(todoItem.id)} />
              <AiFillDelete
                size="25"
                onClick={(e) => {
                  deleteItem(todoItem.id);
                }}
              />
            </div>
          </div>
        )
      )}
    </section>
  );
};

export default TodoList;
