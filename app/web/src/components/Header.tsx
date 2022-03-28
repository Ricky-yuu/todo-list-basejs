import { useState } from "react";

const Header = ({setRefresh}) => {
  const [title, setTitle] = useState("");

  // fungsi menambah data 
  const addTodo = () => {
	  const newTodo = {title, completed: false}

	  fetch('http://localhost:3200/api/post', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newTodo)
        }).then(() => {
			// ketika sukses menambah data, reset form dengan mengeset state title menjadi empty string 
			setTitle("")
			setRefresh(true)

			setTimeout(() => {
				alert('Selamat data berhasil ditambahkan')
			}, 500)
        });
  }

  return (
    <div id="todo-header" className="header">
      <h2>Apa yag kamu lakukan hari ini</h2>
	  <input 
		  type="text"
		  value={title}
		  onChange={(e) => setTitle(e.target.value)}
	  />
      <span className="add-button" onClick={addTodo}>Add</span>
    </div>
  );
};

export default Header;