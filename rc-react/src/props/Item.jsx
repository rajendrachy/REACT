// const Item = (props) => {
//   return (
//     <>
//     <li className="list-group-item">{props.items}</li>
//     </>
//   )
// }
// export default Item;



// -----------Using a Array destructuring--------------------
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

const Item = ({items}) => {

    return (
      <>
      <li className="list-group-item kg-item"><span className="kg-span">{items}</span></li>
      </>
    )
  }
  export default Item;
  
  