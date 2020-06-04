import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  departmentList: AngularFireList<any>;
  array = [];

  constructor(public firebase: AngularFireDatabase) {
    this.departmentList = this.firebase.list('departments');
    this.departmentList.snapshotChanges().subscribe(list => {
      this.array = list.map(item => {
        return {
          $key: item.key,
          ...item.payload.val()
        };
      });
    });
  }


  // getDepartmentName($key) {
  //   if ($key === '0') {
  //     return '';
  //   } else {
  //     return _.find(this.array, (obj) => obj.$key === $key).name;
  //   }
  // }
}
