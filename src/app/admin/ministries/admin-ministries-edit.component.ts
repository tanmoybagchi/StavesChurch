import { Component } from '@angular/core';
import { PageEditBase } from '@app/admin/page/page-edit-base';
import { AdminMinistries } from './admin-ministries';
import { AdminMinistriesApprovalRules } from './admin-ministries-approval-rules';

@Component({
  templateUrl: './admin-ministries-edit.component.html'
})
export class AdminMinistriesEditComponent extends PageEditBase<AdminMinistries> {
  modelCreator = AdminMinistries;
  protected approvalRules = new AdminMinistriesApprovalRules();

  onEffectiveFromChange($event) {
    this.model.effectiveFrom = $event;
    this.saveStream.next();
  }

  onHeaderChange(content) {
    this.model.content.header = content;
    this.saveStream.next();
  }
}
