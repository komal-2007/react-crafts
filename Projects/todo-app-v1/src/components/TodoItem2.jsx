function TodoItem2() {
    let todoName='Study for the test';
    let todoDate='5/10/2026';
  return (
    <div class="container text-container">
      <div class="row">
        <div class="col-6">{todoName}</div>
        <div class="col-4">{todoDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem2;