import React from 'react';




const Todo = ({ addTodo }) => {
    // Input tracker
    let input;

    return (
        <div>
            <div>
                
                <button onClick={() => {
                    addTodo(input.value);
                    input.value = '';
                }}>
                    
            </button>
            </div>
            <div>
                <p>Hello World</p>
            </div>
        </div>
    );
};

export default Todo;