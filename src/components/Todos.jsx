import Todo from "./Todo";
import Info from "./Info";

const Todos = ({ todos, deleteTodo, updateTodo }) => {
  return (
    <div className="mt-5">
      <h2 className="my-3">Todos</h2>
      <ul className="list-group gap-3">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
          />
        ))}
        {todos.length === 0 && (
          <li className="list-group-item text-center">Sin Todos</li>
        )}
      </ul>
      <Info />
    </div>
  );
};
export default Todos;
