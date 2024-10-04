import { useState } from "react";
import Swal from "sweetalert2";

const Formulario = ({ addTodo }) => {
  const [todo, setTodo] = useState({
    title: "Todo #1",
    description: "Descripción",
    states: "Pendiente",
    priority: true,
  });

  const { title, description, states, priority } = todo;

  const handleSubmi = (e) => {
    e.preventDefault();

    if (!title.trim() || !description.trim()) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Título y descripción obligatorios",
        confirmButtonText: "Aceptar",
      });
    }

    addTodo({
      id: Date.now(),
      ...todo,
      states: states === "Completado",
    });

    //console.log(title, description, states, priority);

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Todo agregado correctamente",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const handleChange = (e) => {
    //Destructuring
    const { name, type, checked, value } = e.target;

    setTodo({
      ...todo,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmi} className="form-control mb-5">
        <input
          type="text"
          placeholder="Ingrese Todo"
          className="form-control mb-2"
          name="title"
          value={title}
          onChange={handleChange}
        />
        <textarea
          className="form-control mb-2"
          placeholder="Ingrese descripción"
          name="description"
          value={description}
          onChange={handleChange}
        />
        <div className="form-check mb-2">
          <input
            type="checkbox"
            name="priority"
            checked={priority}
            className="form-check-input"
            id="inputcheck"
            onChange={handleChange}
          />
          <label htmlFor="inputcheck">Dar prioridad</label>
        </div>
        <select
          className="form-select mb-2"
          name="states"
          value={states}
          onChange={handleChange}
        >
          <option value={"Pendiente"}>Pendiente</option>
          <option value={"Completado"}>Completado</option>
        </select>
        <button type="submit" className="btn btn-primary">
          Agregar Todo
        </button>
      </form>
    </div>
  );
};

export default Formulario;
