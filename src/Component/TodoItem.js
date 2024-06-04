import React from 'react';

const TodoItem = (props) => {
  return (
    <div onClick={()=> props.deleteItem(props.id)}>
        <li>
            {props.Text}
        </li>
    </div>
  );
};

export default TodoItem;