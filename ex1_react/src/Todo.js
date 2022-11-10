function Todo() {
  return (
    <li class="todo ">
      <div class="c-cb">
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
        <label for="vehicle1"> I have a bike</label>
      </div>
      <div class="btn-group">
        <button type="button" class="btn toggle-btn">
          edit
        </button>
        <button type="button" class="btn btn__danger">
          delete
        </button>
      </div>
    </li>
  );
}

export default Todo;
