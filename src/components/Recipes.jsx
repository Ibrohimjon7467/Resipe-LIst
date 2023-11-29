import { useContext } from 'react'
import { dataContext } from './../context/index'
import { BsTrash } from './../../node_modules/react-icons/bs/index.esm';

function Recipes() {
    const { state: { data }, deleteItem } = useContext(dataContext)
    return (
        <div className="grid grid-cols-3 gap-4 mt-10">
            {data ? data.map(({ id, title, ingredients, time, link, method }) => {
                return <div key={id}>
                    <div className="card card-compact relative w-92 bg-base-100 shadow-xl text-white">
                        <figure><img src={link} alt={title} /></figure>
                        <button onClick={() => {
                            deleteItem(id)
                        }} className='absolute top-2 right-2 cursor-pointer'><BsTrash /></button>
                        <div className="card-body">
                            <h2 className="card-title font-extrabold capitalize">{title}</h2>
                            <p className='font-semibold'>Ingredients: <span className='italic font-normal'>{ingredients}</span></p>
                            <p className='font-semibold'>Methods: <span className='font-normal'>{method}</span></p>
                            <p className='font-semibold'>Cooking Time: {time} minutes</p>
                            <div className="card-actions justify-end">
                            </div>
                        </div>
                    </div>
                </div>
            }) : "No data"}
        </div>
    )
}

export default Recipes