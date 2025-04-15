// const Item = (props) => {
//   return (
//     <>
//     <li className="list-group-item">{props.items}</li>
//     </>
//   )
// }
// export default Item;











// -------------Using a Array destructuring--------------------
// const Item = (props) => {
//     let { items } = props;

//     return (
//       <>
//       <li className="list-group-item">{items}</li>
//       </>
//     )
//   }
//   export default Item;













// --------------Another same Way-------------------

// const Item = ({ items }) => {

//   const handleBuyButton = (event) => {
//     console.log(event); // return a Object 
//     console.log(`${items} being bought.`)
//   }

//   return (
//     <>
//       <li className="list-group-item kg-item">
//         <span className="kg-span">{items}</span>
//         <button style={{margin:"20px", backgroundColor:"blue", color: "white"}}
//         onClick={(event) => handleBuyButton(event)}
//         >Buy</button>
//       </li>
//     </>
//   )
// }
// export default Item;

