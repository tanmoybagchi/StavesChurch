import { Injectable } from '@angular/core';
import { DomainHelper } from '@app/core/domain/domain-helper';
import { Ministries, Ministry } from '@app/ministries/ministries';
import { MinistriesModule } from '@app/ministries/ministries.module';
import { PageCurrentQuery } from '@app/page/page-current-query.service';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: MinistriesModule })
export class MinistriesCurrentQuery {
  constructor(
    private pageCurrentQuery: PageCurrentQuery,
  ) { }

  execute() {
    return this.pageCurrentQuery.execute('caller').pipe(
      map(page => {
        if (String.isNullOrWhitespace(page.content)) {
          return new Ministries();
        }

        const jsonContent = JSON.parse(page.content);

        const ministries = DomainHelper.adapt(Ministries, jsonContent);

        jsonContent
          .list
          .forEach(item => ministries.list.push(DomainHelper.adapt(Ministry, item)));

        return ministries;
      })
    );
  }
}
