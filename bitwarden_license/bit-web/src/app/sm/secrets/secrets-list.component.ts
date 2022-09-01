import { SelectionModel } from "@angular/cdk/collections";
import { Component, EventEmitter, OnDestroy, OnInit, Output } from "@angular/core";
import { Subject, takeUntil } from "rxjs";

import { SecretListView } from "@bitwarden/common/models/view/secretListView";

import { SecretService } from "./secret.service";

@Component({
  selector: "sm-secrets-list",
  templateUrl: "./secrets-list.component.html",
})
export class SecretsListComponent implements OnDestroy, OnInit {
  secrets: SecretListView[];

  @Output() editSecretEvent = new EventEmitter<string>();
  @Output() copySecretNameEvent = new EventEmitter<string>();
  @Output() copySecretValueEvent = new EventEmitter<string>();
  @Output() projectsEvent = new EventEmitter<string>();
  @Output() deleteSecretEvent = new EventEmitter<string>();
  @Output() onSecretCheckedEvent = new EventEmitter<string[]>();

  private destroy$: Subject<void> = new Subject<void>();

  selection = new SelectionModel<string>(true, []);

  constructor(public secretService: SecretService) {
    this.selection.changed
      .pipe(takeUntil(this.destroy$))
      .subscribe((_) => this.onSecretCheckedEvent.emit(this.selection.selected));
  }

  ngOnInit() {
    this.secretService.secrets$.pipe(takeUntil(this.destroy$)).subscribe((v) => {
      //console.log("update broadcasted to this listener");
      //console.log(v);
      this.secrets = v;
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.secrets.length;
    return numSelected === numRows;
  }

  toggleAll() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.selection.select(...this.secrets.map((s) => s.id));
  }
}
