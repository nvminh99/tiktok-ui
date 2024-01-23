import TodoForm from '../components/TodoForm/TodoForm';

function ListPage() {
  const handleSubmitForm = (value) => {
    console.log('value', value);
  };

  return (
    <div>
      <h3>Todo Form</h3>
      <TodoForm onSubmit={handleSubmitForm} />
      <h2>Hello van minh pro</h2>
    </div>
  );
}

export default ListPage;
