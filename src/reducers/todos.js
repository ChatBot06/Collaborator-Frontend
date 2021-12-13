const todos = (state = [], action) => {
    console.log("lets check", state)
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    task_name: action.task_name,
                    completed: false
                }
            ];
        case 'TOGGLE_TODO': {
            console.log("in reducer", state);
            console.log("action", action)
            return state.map(todo =>
                (todo._id === action.id)
                    ? { ...todo, completed: !todo.completed }
                    : todo
            )
        }
        case 'GET_TODO':
            {
                return state.todo = action.data
            }
        case 'DELETE_TODO':
            {
                console.log("in reducer", action.id);
                console.log("state", state)
                let todo = state.filter(item => item._id != action.id)
                return todo
            }

        default:
            return state
    }
};

export default todos