function TaskList({tasks}) {
    return (
        <div className="task-list">
            <h2>Lista de tareas</h2>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <input type="checkbox" checked={task.completed} readOnly/>
                        <span>{task.title}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TaskList