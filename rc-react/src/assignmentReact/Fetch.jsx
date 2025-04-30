// import React, { useEffect, useState } from 'react';


// const ProductList = () => {
//   const [products, setProducts] = useState([]);
//   const [selected, setSelected] = useState(null);

//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products")
//       .then(res => res.json())
//       .then(data => setProducts(data));
//   }, []);



//   return (
//     <div>
//       <h2>Product Catalog</h2>
//       {products.map(product => (
//         <div key={product.id}>
//           <img src={product.image} width="100" alt={product.title} />
//           <h4>{product.title}</h4>
//           <p>Price: ${product.price}</p>
//           <p>Category: {product.category}</p>
//           <button onClick={() => setSelected(product)}>View Details</button>
//           <hr />
//         </div>
//       ))}

//       {selected && (
//         <div>
//           <h3>Product Details</h3>
//           <p>Description: {selected.description}</p>
//           <p>Rating: {selected.rating?.rate}</p>
//           <button onClick={() => setSelected(null)}>Close</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProductList;





