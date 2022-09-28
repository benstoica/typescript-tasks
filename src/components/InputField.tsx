import React from "react";
import "./styles.css";

import { useRef } from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className='input'
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}>
      <input
        className='input__box'
        type='input'
        ref={inputRef}
        placeholder='Enter a task'
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className='input__submit' type='submit'>
        Add
      </button>
    </form>
  );
};

export default InputField;
