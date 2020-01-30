import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule, MatButtonModule, MatToolbarModule, MatSidenavModule, MatListModule, MatTabsModule } from '@angular/material';


@NgModule({
    imports: [MatBadgeModule, MatButtonModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatTabsModule],
    exports: [MatBadgeModule, MatButtonModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatTabsModule]
})

export class MaterialModule {}
