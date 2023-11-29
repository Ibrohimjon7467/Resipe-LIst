import { createContext, useReducer } from "react";

export const dataContext = createContext()

const initialState = localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : {
    data: [],
    darkMode: false,
}

function reducer(state, action) {
    const { type, payload } = action

    switch (type) {
        case "ADD_ITEM":
            localStorage.setItem('data', JSON.stringify({ ...state, data: [...state.data, payload] }))
            return { ...state, data: [...state.data, payload] }
        case "DELETE_ITEM":
            const newData = state.data.filter((item) => item.id !== payload)
            // localStorage.setItem({ ...state, data: newData })
            return { ...state, data: newData }
    }
}

export function ContextProvider({ children }) {

    const [state, dispatch] = useReducer(reducer, initialState)

    function addItem (obj) {
        dispatch({ type: "ADD_ITEM", payload: obj })
    }

    function deleteItem (id) {
        dispatch({ type: "DELETE_ITEM", payload: id })
    }

    return <dataContext.Provider value={{ state, addItem, deleteItem }}>
        {children}
    </dataContext.Provider>
}