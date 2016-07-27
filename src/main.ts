import {bootstrap} from '@angular/platform-browser-dynamic';
import {App} from './app/app';
import {APP_ROUTES} from "./app/app.routes";

bootstrap(App, [APP_ROUTES])
    .catch(err => console.log(err));