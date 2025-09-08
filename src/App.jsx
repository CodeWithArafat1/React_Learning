import { Counter, Destinations, TodoApp, UserList } from "./projects";

const App = () => {
  return (
    <>
      <div className="container mx-auto">
        <Counter />
        <TodoApp />
        <UserList />
        <Destinations />
      </div>
    </>
  );
};

export default App;
