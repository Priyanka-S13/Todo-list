import React, { useState } from 'react';
import InputArea from './Component/InputArea';
import './App.css';
import TodoItem from './Component/TodoItem';

function App() {
  const [items, setItems] = useState([]);

  const addItems = (inputText) => {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
  };

  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="container">
      <div className="heading">
        <h1>Todo List</h1>
      </div>
      <InputArea addItems={addItems} />
      <div>
        <ul>
          {items.map((item, index) => {
           return  <TodoItem key={index} Text={item} deleteItem={deleteItem} id={index} />;
})}
        </ul>
      </div>
    </div>
  );
}

export default App;
