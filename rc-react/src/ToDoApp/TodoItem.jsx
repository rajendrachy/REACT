//----------------Using a Props in React--------------

export function TodoItem({ todoName, todoDate, onDeleteClick }) {
    return (
      <div className="container" style={{ display: "flex", gap: "10px", margin: "20px" }}>
        <div>{todoName}</div>
        <div>{todoDate}</div>
        <button type="button" id="del" onClick={()=> onDeleteClick(todoName)}>Delete</button>
      </div>
    );
  }

