import React, { useState, useCallback, useEffect } from "react";
import TodoForm from "./TodoForm";
import "../styles/Todo.css";
import TodoList, { ITodoItem } from "./TodoList";
import Footer from "./Footer";
import useLocalStorage from "../hooks/useLocalStorage";

export default function Todo() {
  const [editId, setEditId] = useState<number>(-1);
  const [filterStatus, setFilterStatus] = useState<string>("All");
  const [isCheckAll, setIsCheckAll] = useState<boolean>(false);
  const [getLocalData, updateLocalData] = useLocalStorage("todo");
  const [list, setList] = useState<ITodoItem[]>([]);

  //   Use callback to remmerber this func because everytime you update state this function is a new one so when it pass to TodoForm Component is will make it re-render.

  useEffect(() => {
    updateLocalData(list);
  }, [list]);

  useEffect(() => {
    setList(getLocalData());
  }, []);
  const addTodo = useCallback(
    (description: string) => {
      setList([
        ...list,
        {
          id: new Date().getTime(),
          description: description,
          isCompleted: false,
        },
      ]);
    },
    [list]
  );

  const setEditingId = (id: number) => {
    setEditId(id);
  };

  const deleteById = (id: number) => {
    setList(list.filter((item) => item.id !== id));
  };

  const editById = (id: number, text: string) => {
    const itemIndex = list.findIndex((todo) => todo.id === id);
    if (Number.isInteger(itemIndex)) {
      let a = [...list];

      a.splice(itemIndex, 1, {
        id: list[itemIndex].id,
        description: text,
        isCompleted: list[itemIndex].isCompleted,
      });
      setList(a);
    }
  };

  const tickBox = (id: number, status: boolean) => {
    const itemIndex = list.findIndex((todo) => todo.id === id);

    if (Number.isInteger(itemIndex)) {
      let a = [...list];

      a.splice(itemIndex, 1, { ...list[itemIndex], isCompleted: status });

      setList(a);
    }
  };

  const checkAll = () => {
    if (!isCheckAll)
      setList(
        list.map((todo) => {
          return {
            ...todo,
            isCompleted: true,
          };
        })
      );
    else {
      setList(
        list.map((todo) => {
          return {
            ...todo,
            isCompleted: false,
          };
        })
      );
    }
    setIsCheckAll((prev) => !prev);
  };

  const filterList = (list: ITodoItem[], status: string) => {
    switch (status) {
      case "All":
        return list;

      case "Activated":
        return list.filter((todo) => todo.isCompleted === false);

      case "Completed":
        return list.filter((todo) => todo.isCompleted === true);
      default:
        return list;
    }
  };

  return (
    <section className="todo-container">
      <h1>What's is the Plan for Today?</h1>

      <TodoForm addTodo={addTodo} checkAll={checkAll} />

      <TodoList
        list={filterList(list, filterStatus)}
        editingId={editId}
        setEditingId={setEditingId}
        editById={editById}
        deleteItem={deleteById}
        tickABox={tickBox}
      />
      <Footer
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
        itemLeft={filterList(list, "Activated").length}
      />
    </section>
  );
}
