import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog.component';
import { BlogCardComponent } from './blog-card/blog-card.component';
import { BlogSingleViewComponent } from './blog-single-view/blog-single-view.component';
import { FuseSharedModule } from '@fuse/shared.module';
import { MatCardModule, MatIconModule, MatButtonModule, MatDividerModule, MatTooltipModule } from '@angular/material';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer-landing/footer-landing.module';
import { BlogListComponent } from './blog-list/blog-list.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
const routes: Routes = [
    {
        path: '',
        component:BlogListComponent
    },
    // { path: 'list' , component:BlogListComponent},
    { path: 'details' , component:BlogSingleViewComponent}
];

@NgModule({
    declarations: [BlogComponent, BlogCardComponent, BlogSingleViewComponent, BlogListComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FuseSharedModule,
        MatCardModule,
        HeaderModule,
        FooterModule,
        MatIconModule,
        MatButtonModule,
        MatDividerModule,
        MatAutocompleteModule,
        MatTooltipModule
    ],
})
export class BlogModule {}
