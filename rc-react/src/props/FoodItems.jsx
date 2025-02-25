import Item from "./Item";

const FoodItems = ({item}) => {
   
    return (
        <>
    <ul className="list-group">

     {item.map((item) => (
        <Item key={item} items={item}></Item>
     ))}
    </ul>
    </>
    )
}
export default FoodItems;

