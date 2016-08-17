import {NgModule} from "@angular/core";
import {TodoService} from "./todo.service";
import {IsComplete, IsActive} from "./todo.pipe";

export {TodoService} from "./todo.service";
export {IsComplete, IsActive} from "./todo.pipe";


@NgModule({
    declarations: [IsComplete, IsActive],
    exports: [IsComplete, IsActive]
})
export default class TodoModule{
    static forRoot(){
        return {
            ngModule: TodoModule,
            providers: [TodoService]
        }
    }
}