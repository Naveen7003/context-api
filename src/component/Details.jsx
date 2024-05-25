import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Loading from './Loading';
import { ProductContext } from '../utils/Context';

const Details = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useContext(ProductContext);
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (!product) {
      setProduct(products.filter((p) => p.id == id)[0]);
    }
  }, [id, products, product]);

  const productDeleteHandler = (id) => {
    const filteredProducts = products.filter((p) => p.id !== id);
    setProducts(filteredProducts);
    localStorage.setItem("products", JSON.stringify(filteredProducts));
    navigate("/");
  };

  return product ? (
    <div className="w-[70%] flex items-center justify-center h-full m-auto p-[10%]">
      <img className="object-contain w-[55%] h-[70%]" src={`${product.image}`} alt="" />
      <div className="content ml-10">
        <h1 className="text-3xl -mt-10">{product.title}</h1>
        <h3 className="text-xl mb-2 font-semibold text-slate-400">{product.category}</h3>
        <h2 className="text-blue-400 font-semibold">{product.price}</h2>
        <p className="mb-[5%]">{product.description}</p>
        <Link to={`/edit/${product.id}`} className="py-3 mr-6 px-5 border font-semibold rounded border-blue-200 text-blue-400">Edit</Link>
        <button
          onClick={() => productDeleteHandler(product.id)}
          className="py-3 px-5 border font-semibold rounded border-blue-200 text-red-400"
        >
          Delete
        </button>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Details;
