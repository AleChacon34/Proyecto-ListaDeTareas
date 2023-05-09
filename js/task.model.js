class Task{
    taskDescription;

    constructor(taskDescription){
        this.taskDescription = taskDescription;
    }

    get taskDescription(){
        return this.taskDescription;
    }

    set taskDescription(taskDescription){
        this.taskDescription = taskDescription;
    }
}