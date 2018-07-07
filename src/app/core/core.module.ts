import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Services
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { InMemoryDataService } from './services/in-memory-data.service';
import { InMemoryWebApiModule } from "angular-in-memory-web-api";

@NgModule({
    imports: [
        CommonModule,
        InMemoryWebApiModule.forRoot(
            InMemoryDataService, {dataEncapsulation: false, delay: 1000}
        )
    ],
    declarations: [],
    providers: [
        AuthGuardService,
        AuthService,
    ]
})
export class CoreModule {
    // TODO: need to prevent reloading
}
