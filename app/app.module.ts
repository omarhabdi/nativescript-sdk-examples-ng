// this import should be first in order to load some required settings (like globals and reflect-metadata)
// >> ngmodule-config
// >> (hide)
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { routes, routableComponents, examplePipes } from "./app.routes";
import { AppComponent } from "./app.component";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
// << (hide)
import { ModalDialogService } from "nativescript-angular/modal-dialog";
// >> (hide)
import { ToggleNavButtonDirective } from "./directives/toggle-nav-button.directive";
import { ExampleTitleDirective } from "./directives/example.directive";
// << (hide)
import { registerElement } from 'nativescript-angular/element-registry';
import { ModalViewComponent } from "./modal-page/sample-modal-page-module-example/modal-view";
import { TnsGoogleMaps } from "nativescript-googlemaps";
import { isIOS } from "platform";

@NgModule({
  declarations: [
    // >> (hide)
    AppComponent,
    ToggleNavButtonDirective,
    ExampleTitleDirective,
    ...routableComponents,
    // << (hide)
    ModalViewComponent,
    ...examplePipes
  ],
  // >> (hide)
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(routes),
  ],
  // << (hide)
  providers: [ModalDialogService],
  schemas: [NO_ERRORS_SCHEMA],
  entryComponents: [AppComponent, ModalViewComponent]
})
// << ngmodule-config
export class AppModule { }

registerElement("TnsGoogleMaps", () => TnsGoogleMaps);

if (isIOS) {
  GMSServices.provideAPIKey("AIzaSyDQZOuoz1x-bMki_pbb7AYyU9D8Js4ZpKQ");
}

