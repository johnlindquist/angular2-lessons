import {Injectable} from "@angular/core";
@Injectable()
export class QuestionService{
    questions = [
        {
            template: 'dropdown',
            name: 'brave',
            label: 'Bravery Rating',
            options: [
                {key: 'solid',  value: 'Solid'},
                {key: 'great',  value: 'Great'},
                {key: 'good',   value: 'Good'},
                {key: 'unproven', value: 'Unproven'}
            ],
            order: 3
        },
        {
            template: 'input',
            type: 'text',
            name: 'firstName',
            label: 'First name',
            value: 'Bombasto',
            required: true,
            order: 1
        },
        {
            template: 'input',
            type: 'email',
            name: 'emailAddress',
            label: 'Email',
            type: 'email',
            order: 2
        }
    ];

}
