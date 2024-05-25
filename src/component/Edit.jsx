import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ProductContext } from '../utils/Context'

const Edit = () => {
  const [products,setproducts] = useContext(ProductContext)
  const navigate = useNavigate()
  const {id} = useParams();
  const [product,setproduct] = useState({
    title:"",
    description:"",
    image:"",
    price:"",
    category:""
  })

  const ChangeHandler = (e) =>{
    setproduct({...product, [e.target.name]:[e.target.value]})
  }

  useEffect(() => {
    setproduct(products.filter((p) => p.id == id)[0])
  },[id])
  

const AddProductHandler = (e) =>{
  e.preventDefault();
  if(
     product.title.trim().length < 5 ||
     product.image.trim().length < 5 ||
     product.price.length < 1||
     product.category.trim().length < 5||
     product.description.trim().length <5){
      alert('Each and every input must have atleast 4 characters')
      return;
     }

     const pi = products.findIndex((p) => p.id == id)
     const copyData = [...products]
     copyData[pi] = { ...product };
  
  setproducts(copyData)
  localStorage.setItem("products", JSON.stringify(copyData))
  navigate(-1)
}


  return (
    <form onSubmit={AddProductHandler} className='flex flex-col items-center p-[5%] w-screen h-screen'>
        <h1 className='mb-5 w-1/2 text-3xl'>Edit Product</h1>

        <input type="text"
         placeholder='Image Link'
         className='text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3'
         name="image"
         onChange={ChangeHandler}
         value={product && product.image} ></input>

        <input type="text"
         placeholder='title'
         className='text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3'
         name="title"
         onChange={ChangeHandler}
         value={product && product.title} ></input>

         <div className='w-1/2 flex justify-between'>

         <input type="text"
         placeholder='category'
         className='text-1xl bg-zinc-100 rounded p-3 w-[47%] mb-3'
         name="category"
         onChange={ChangeHandler}
         value={product && product.category} ></input>

         <input type="number"
         placeholder='price'
         className='text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3'
         name="price"
         onChange={ChangeHandler}
         value={product && product.price} ></input>
         </div>

         <textarea className='text-1xl h-fit bg-zinc-100 rounded p-3 w-1/2 mb-3'
         placeholder='Enter Description Here...'
         name="description"
         onChange={ChangeHandler}
         value={product && product.description}
         ></textarea>

         <div className='w-1/2'>
            <button type="submit" className='py-2 px-5 border rounded border-blue-200  text-blue-400'>Edit Product</button>

         </div>
    </form>
  )
}

export default Edit