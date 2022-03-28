const TodoItem = ({ todo, setRefresh }) => {

  // fungsi untuk update data todo melalui API ketika di klik 
  const updateTodo = () => {
    todo.completed = !todo.completed

    fetch("http://localhost:3200/api/update?id=" + todo.id, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(todo)
    }).then(() => {
      console.log('todo berhasil updated')
      setRefresh(true)
    })
  }
// end fungsi updateTodo
// fungsi untuk menghapus data todo melalui API ketika tombol x di klik
  const deleteTodo = () => {
    fetch("http://localhost:3200/api/delete?id=" + todo.id, {
      method: "GET",
    }).then(() => {
      console.log('yey todo berhasil terhapus')
      setRefresh(true);
    });
  };

  return (
    <li className={`${todo.completed ? "checked" : ""}`}>
      <div onClick={updateTodo}>{todo.title}</div> 
      <span className="close" onClick={deleteTodo}>x</span>
    </li>
  );
};
 // end fungsi deleteTodo

export default TodoItem;
