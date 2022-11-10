function TodoListFilter() {
  return (
    <div class="filters btn-group stack-exception">
      <button type="button" class="btn toggle-btn">
        all
      </button>
      <button type="button" class="btn toggle-btn">
        active
      </button>
      <button type="button" class="btn toggle-btn">
        completed
      </button>
    </div>
  );
}

export default TodoListFilter;
