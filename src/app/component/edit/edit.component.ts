import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  doAction($event: MouseEvent) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['userId'];
    this.getDataById(this.id);
  }

  constructor(public apiService: AuthService,
    private router: Router,
    private route: ActivatedRoute) { }

  id!: any;
  userData!: User;

  getDataById(id: any) {
    this.apiService.getByID(id).subscribe((v: any) => {
      this.userData = v;
      this.userForm.setValue(this.userData);
    })
  }

  onSubmit() {
    this.userForm.value.id = this.id
    this.apiService.updateData(this.userForm.value).subscribe((res: any) => {
      this.router.navigateByUrl('/list');
    })
  }



  userForm: FormGroup = new FormGroup({
    id: new FormControl(),
    inputFname: new FormControl(''),
    inputLname: new FormControl(''),
    inputEmail: new FormControl(''),
    inputPassword: new FormControl(),
    inputAddress: new FormControl(''),
    inputAddress2: new FormControl(''),
    inputCity: new FormControl(''),
    inputZip: new FormControl(''),
    gridCheck: new FormControl(''),
    radioCheck: new FormControl('')
  });
}
