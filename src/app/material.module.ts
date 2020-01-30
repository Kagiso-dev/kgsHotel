import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule, MatButtonModule, MatToolbarModule, MatSidenavModule, MatListModule } from '@angular/material';


@NgModule({
    imports: [MatBadgeModule, MatButtonModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule],
    exports: [MatBadgeModule, MatButtonModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule]
})

export class MaterialModule {}
