function TodoItem1() {
    let todoName='Buy milk';
    let todoDate='4/10/2026';
  return (
    <div className="container text-container">
      <div className="row my-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger my-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem1;
