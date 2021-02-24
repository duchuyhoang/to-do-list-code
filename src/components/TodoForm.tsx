import React, { useEffect, useRef } from "react";
import "../styles/TodoForm.css";

interface IFormProp {
  addTodo: (description: string) => void;
  checkAll: () => void;
}
export default React.memo(function TodoForm(props: IFormProp) {
  const { addTodo, checkAll } = props;
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="d-flex form-container align-center">
      <input type="checkbox" id="checkAll" />
      <label htmlFor="checkAll" className="checkAll" onClick={checkAll}></label>
      <input
        className="input-field"
        ref={inputRef}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            let value = (e.target as HTMLInputElement).value.trim();
            if (value !== "") addTodo(value);

            if (inputRef.current) inputRef.current.value = "";
          }
        }}
      />
      <button
        className="input-button"
        onClick={(e) => {
          if (inputRef.current) {
            let value = inputRef.current.value.trim();
            if (value !== "") addTodo(value);
            if (inputRef.current) inputRef.current.value = "";
          }
        }}
      >
        Add
      </button>
    </div>
  );
});
