class Task {
    execute() {}
}

class Study extends Task {
    execute() {
        return "Study hard to learn new things.";
    }
}

class Work extends Task {
    execute() {
        return "Work diligently to achieve your goals.";
    }
}

class TaskFactory {
    static createTask(taskType) {
        switch (taskType) {
            case 'study':
                return new Study();
            case 'work':
                return new Work();
            default:
                return null;
        }
    }
}

function selectTask(taskType) {
    const task = TaskFactory.createTask(taskType);
    if (task) {
        const resultElement = document.getElementById("result");
        resultElement.textContent = task.execute();
    }
}
