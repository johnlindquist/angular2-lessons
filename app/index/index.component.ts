import {Component} from "@angular/core";
import {TodoService} from "../shared/todo.module";
@Component({
    styles: [`
    .complete{
        text-decoration: line-through;
    }
`
    ],
    template: `
    <h2>All Todos</h2>
    <ul>
        <li 
            *ngFor="let todo of todo.list"
            [ngClass]="{complete: todo.status == 'complete'}"
            (click)="
                todo.status = 
                    todo.status === 'active'
                    ? 'complete'
                    : 'active'
                "
            >
            {{todo.task}}
        </li>
    </ul>
`
})
export class Index{
    constructor(public todo:TodoService){}
    isComplete(todo){
        return todo.status === 'complete';
    }
}
