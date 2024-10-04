import { useRef, useState } from "react";

const NoControlado = () => {
  const form = useRef(null);
  const [error, setError] = useState();

  const handleSubmi = (e) => {
    e.preventDefault();
    setError("");

    //Capturar los datos del entrie
    const data = new FormData(form.current);
    const { title, description, states } = Object.fromEntries([
      ...data.entries(),
    ]);

    //Validar los datos

    if (!title.trim() || !description.trim())
      return setError("Llenar todos los campos");

    //Enviar los datos

    console.log(title, description, states);
  };

  return (
    <form onSubmit={handleSubmi} ref={form}>
      <input
        type="text"
        placeholder="Igrese Todo"
        className="form-control mb-2"
        name="title"
        defaultValue="Todo #1"
      />
      <textarea
        className="form-control mb-2"
        placeholder="Ingrese descripción"
        name="description"
        defaultValue="Descripcion #1"
      />
      <select
        className="form-select mb-2"
        name="states"
        defaultValue="Completado"
      >
        <option value={"Pendiente"}>Pendiente</option>
        <option value={"Completado"}>Completado</option>
      </select>
      <button type="submit" className="btn btn-primary">
        Procesar
      </button>
      {error !== "" && error}
    </form>
  );
};

export default NoControlado;
