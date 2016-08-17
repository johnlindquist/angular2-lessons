export class TodoService {
    constructor(){
        console.log(`creating new TodoService...`)
    }

    list = [
        {
            task: "eat",
            status: "active"
        },
        {
            task: "code",
            status: "active"
        },
        {
            task: "sleep",
            status: "active"
        },
    ];
}
