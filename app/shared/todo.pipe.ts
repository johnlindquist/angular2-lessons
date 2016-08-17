import {Pipe} from "@angular/core";
@Pipe({
    name: 'isComplete'
})
export class IsComplete{
    transform(todos){
        return todos.filter(todo => todo.status === 'complete')
    }
}

@Pipe({
    name: 'isActive'
})
export class IsActive{
    transform(todos){
        return todos.filter(todo => todo.status === 'active')
    }
}