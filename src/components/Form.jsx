import { useState, useContext } from "react"
import { dataContext } from "../context"

function Form() {

    const {state, addItem, deleteItem} = useContext(dataContext)

    const [data, setData] = useState({
        id: null,
        title: "",
        ingredients: null,
        method: "",
        time: null,
        link: "",
    })

    
    const handleSubmit = (e) => {
        e.preventDefault()
        const id = Math.floor(Math.random() * 10000)
        addItem({...data, id })
    }

    return (
        <dialog id="my_modal_3" className="modal">
            <div className="modal-box w-[500px]">
                <form method="dialog" className=" flex items-center justify-center">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    <div className="flex flex-col">
                        <h1 className="text-xl mb-7">Create a new recipe</h1>
                        <input onChange={(e) => {
                            setData((prev) => {
                                return {...prev, link: e.target.value}
                            })
                        }} id="link" type="text" placeholder="Enter image url" className="input input-bordered w-full max-w-xs mb-6" />
                        <label htmlFor="title" className="mb-1">Enter a title</label>
                        <input onChange={(e) => {
                            setData((prev) => {
                                return {...prev, title: e.target.value}
                            })
                        }} id="title" type="text" placeholder="Enter a title" className="input input-bordered w-full max-w-xs mb-6" />
                        <label htmlFor="ingredients" className="mb-1">Enter ingredients</label>
                        <input onChange={(e) => {
                            setData((prev) => {
                                return {...prev, ingredients: e.target.value}
                            })
                        }} id="ingredients" type="text" placeholder="Enter ingredients" className="input input-bordered w-full max-w-xs mb-6" />
                        <label htmlFor="method" className="mb-1">Enter a method</label>
                        <input onChange={(e) => {
                            setData((prev) => {
                                return {...prev, method: e.target.value}
                            })
                        }} id="method" type="text" placeholder="Enter a method" className="input input-bordered w-full max-w-xs mb-6" />
                        <label htmlFor="time" className="mb-1">Cooking time</label>
                        <input onChange={(e) => {
                            setData((prev) => {
                                return {...prev, time: e.target.value}
                            })
                        }} id="time" type="number" placeholder="Cooking time" className="input input-bordered w-full max-w-xs mb-6" />

                        <button className="btn btn-md btn-success btn-ghost mt-4" type="submit" onClick={handleSubmit}>Submit</button>
                    </div>
                </form>
            </div>
        </dialog>
    )
}

export default Form