import {Component} from "@angular/core";
import {TodoService} from "../shared/todo.module";
@Component({
    template: `
    <h2>Active Todos</h2>
    <ul>
        <li *ngFor="let todo of todo.list | isActive">{{todo.task}}</li>
    </ul>
`
})
export class Active{
    constructor(public todo:TodoService){}
}