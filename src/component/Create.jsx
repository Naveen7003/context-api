import React, { useCallback, useContext, useState } from 'react'
import { ProductContext } from '../utils/Context'
import {nanoid} from "nanoid";
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const navigate = useNavigate()
    const [products,setproducts] = useContext(ProductContext)
    const [title, settitle] = useState("")
    const [image, setimage] = useState("")
    const [category, setcategory] = useState("")
    const [price, setprice] = useState("")
    const [description, setdescription] = useState("")

  const AddProductHandler = (e) =>{
    e.preventDefault();
    if(title.trim().length < 5 ||
       image.trim().length < 5 ||
       price.trim().length < 1||
       category.trim().length < 5||
       description.trim().length <5){
        alert('Each and every input must have atleast 4 characters')
        return;
       }
    const product = {
      id:nanoid(),image,title,category,price,description
    }
    setproducts([...products,product])
    localStorage.setItem("products", JSON.stringify([...products,product]))
    navigate("/")
  }


  return (
    <form onSubmit={AddProductHandler} className='flex flex-col items-center p-[5%] w-screen h-screen'>
        <h1 className='mb-5 w-1/2 text-3xl'>Add New Product</h1>

        <input type="text"
         placeholder='Image Link'
         className='text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3'
         onChange={(e) => setimage(e.target.value)}
         value={image} ></input>

        <input type="text"
         placeholder='title'
         className='text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3'
         onChange={(e) => settitle(e.target.value)}
         value={title} ></input>

         <div className='w-1/2 flex justify-between'>

         <input type="text"
         placeholder='category'
         className='text-1xl bg-zinc-100 rounded p-3 w-[47%] mb-3'
         onChange={(e) => setcategory(e.target.value)}
         value={category} ></input>

         <input type="number"
         placeholder='price'
         className='text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3'
         onChange={(e) => setprice(e.target.value)}
         value={price} ></input>
         </div>

         <textarea className='text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3'
         placeholder='Enter Description Here...'
         onChange={(e) => setdescription(e.target.value)}
         value={description}
         ></textarea>

         <div className='w-1/2'>
            <button type="submit" className='py-2 px-5 border rounded border-blue-200  text-blue-400'>Add new Product</button>

         </div>
    </form>
  )
}

export default Create