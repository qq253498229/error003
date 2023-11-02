import { Component } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { PluginService } from '../../../shared/services/plugin.service';
import { Observable, Observer } from 'rxjs';
import * as _ from 'lodash';
import { Store } from '@ngxs/store';
import { PluginSelector } from '../../../store/plugin/plugin.selector';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  validateForm: FormGroup;

  constructor(
      private fb: FormBuilder,
      private store: Store,
  ) {
    this.validateForm = this.fb.group({
      path: ['', [Validators.required], [this.pathAsyncValidator]],
      desc: [''],
      exposedModule: [''],
      moduleName: [''],
      remoteEntry: [''],
      remoteEntryDev: [''],
      menu: [],
    });
  }

  ngOnInit() {
  }

  pathAsyncValidator: AsyncValidatorFn = (control: AbstractControl) => new Observable((observer: Observer<ValidationErrors | null>) => {
    let valid = this.store.selectSnapshot(PluginSelector.checkCustomPluginPath(control.value));
    observer.next(valid ? null : {error: true, duplicated: true});
    observer.complete();
  });
}
