import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Page } from './page';
import { PageDatabase } from '@app/page/page-database';
import { PageModule } from './page.module';

@Injectable({
  providedIn: PageModule
})
export class PagesCurrentQuery {
  constructor(
    private pageService: PageDatabase,
  ) { }

  execute(kind: string) {
    return this.pageService.get().pipe(
      map(pages => this.getCurrentPagesInternal(pages, kind))
    );
  }

  private getCurrentPagesInternal(pages: Page[], kind: string) {
    const result = this.currentPages(pages).filter(x => x.kind === kind);
    return result.length === 0 ? [new Page()] : result;
  }

  private currentPages(pages: Page[]) {
    const now = Date.now();
    return pages.filter(x => x.status === 'Approved' && x.effectiveFrom.valueOf() <= now && x.effectiveTo.valueOf() > now);
  }
}
