function TodoListFilter({ globState, setGlobState }) {
  function filter(e) {
    setGlobState(e.target.id);
  }

  return (
    <div class="filters btn-group stack-exception">
      <button type="button" class="btn toggle-btn" id="all" onClick={filter}>
        all
      </button>
      <button type="button" class="btn toggle-btn" id="active" onClick={filter}>
        active
      </button>
      <button
        type="button"
        class="btn toggle-btn"
        id="completed"
        onClick={filter}
      >
        completed
      </button>
    </div>
  );
}

export default TodoListFilter;
