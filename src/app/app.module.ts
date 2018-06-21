import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSelectModule, MatButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ReturnsComponent } from './returns/returns.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';
import { RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  { path: 'privacy', component: PrivacyComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'returns', component: ReturnsComponent },
  //{ path: 'faq', component: FAQComponent },
  { path: 'content', component: ContentComponent },
  { path: '', redirectTo: '/content', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    ProductDetailComponent,
    ReturnsComponent,
    PrivacyComponent,
    TermsComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    ),
    BrowserModule,
    MatSelectModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
