import { Injectable } from '@angular/core';
import { AdminModule } from '@app/admin/admin.module';
import { DomainHelper } from '@app/core/domain/domain-helper';
import { map } from 'rxjs/operators';
import { AdminPageDatabase } from '../../admin-page-database';
import { Page } from '../page';

@Injectable({ providedIn: AdminModule })
export class PageRecallCommand {
  constructor(
    private pageDatabase: AdminPageDatabase
  ) { }

  execute(model: Page, forceRecall: boolean) {
    model.status = 'Recalled';

    return this.pageDatabase.update(model).pipe(
      map(x => DomainHelper.adapt(PageRecallResult, x))
    );
  }
}

export class PageRecallResult {
  status = '';
  savedBy = '';
  @Reflect.metadata('design:type', Date)
  savedOn: Date = null;
  version = 0;
}
