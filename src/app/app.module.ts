import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReviewModule } from '@review/review.module';
import { SharedModule } from '@shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule, ReviewModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
