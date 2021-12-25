import axios from 'axios';
import {
  USER_LIST_FAIL,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS
} from '../constants/userConstants'


let nextTodoId = 0;



export const addTodo = (task_name) => async (dispatch) => {

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }
  const { data } = await axios.post(
    'http://localhost:5000/api/todo',
    { status: "active", task_name: task_name, assignee: "61a83db51aeb546f7e2b3bc0" },
    config
  )

  dispatch({
    type: 'ADD_TODO',
    id: data._id,
    task_name
  });
};

export const getAllTodos = () => async (dispatch) => {

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }
  const { data } = await axios.get(
    'http://localhost:5000/api/todo',
    config
  )


  // console.log("users", users);

  dispatch({
    type: 'GET_TODO',
    data
  });
};

export const listUsers = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_LIST_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    // const config = {
    //   headers: {
    //     Authorization: `Bearer ${userInfo.token}`,
    //   },
    // }

    const { data } = await axios.get('http://localhost:5000/api/users')

    dispatch({
      type: USER_LIST_SUCCESS,
      payload: data.users,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: USER_LIST_FAIL,
      payload: message,
    })
  }
}





export const setVisibilityFilter = filter => {
  console.log("filter changes", filter)
  return ({
    type: 'SET_VISIBILITY_FILTER',
    filter
  })
};

export const toggleTodo = (id, completed) => async (dispatch) => {
  console.log("completed", completed)
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }
  const { data } = await axios.put(
    `http://localhost:5000/api/todo/updateTodo/${id}`,
    { completed: !completed },
    config
  )

  dispatch({
    type: 'TOGGLE_TODO',
    id
  })
};


export const deleteTodofromList = (id) => async (dispatch) => {
  // console.log("completed", completed)
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }
  // const { data } = await axios.delete(
  //   `http://localhost:5000/api/todo/deleteTodo/${id}`,
  //   config
  // )
  // const { data2 } = await axios.get(
  //   'http://localhost:5000/api/todo',
  //   config
  // )


  // console.log("users", users);

  dispatch({
    type: 'DELETE_TODO',
    id: id
  });
};



export const VisibilityFilters = {
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
  SHOW_ALL: 'SHOW_ALL'
};

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.post(
      'http://localhost:5000/api/users/login',
      { email, password },
      config
    )

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    })

    localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const logout = () => (dispatch) => {
  localStorage.removeItem('userInfo')
  localStorage.removeItem('cartItems')
  localStorage.removeItem('shippingAddress')
  localStorage.removeItem('paymentMethod')
  dispatch({ type: USER_LOGOUT })
  document.location.href = '/'
}

export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.post(
      'http://localhost:5000/api/users/',
      { name, email, password },
      config
    )

    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data,
    })

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    })

    localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}


