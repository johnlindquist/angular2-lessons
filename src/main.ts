import {bootstrap} from '@angular/platform-browser-dynamic';
import {App} from './app/app';
import {provideForms, disableDeprecatedForms} from '@angular/forms';

bootstrap(App, [
    provideForms(),
    disableDeprecatedForms()
])
    .catch(err => console.error(err));