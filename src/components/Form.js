
const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {
    
    const inputTextHandler = (e) => { // Function to grap the inputted value
        setInputText(e.target.value); // Getting the value that was inserted by the user
    };

    const submitTodoHandler = (e) => { // Function to submit
    	e.preventDefault(); // Preventin default behaviour of the page which is refresh on page load
    	setTodos([...todos, {text: inputText, completed: false, id: Math.random() * 1000}]); // Adding a single todo task
    	setInputText("");  // Setting the input back to an empty space after submitting a single list
    };

    const statusHandler = (e) => {
        setStatus(e.target.value);
    }

	return(
		<form>
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
    </form>
	);
};

export default Form;