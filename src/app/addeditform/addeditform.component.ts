import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { ListService } from '../list.service';


@Component({
  selector: 'app-addeditform',
  templateUrl: './addeditform.component.html',
  styleUrls: ['./addeditform.component.scss']
})
export class AddeditformComponent implements OnChanges {

  @Input() editData: any;

  @Output() refreshData = new EventEmitter();
 
  constructor(private listservice: ListService) { }


  data: any
  name: any
  address: any
  email: any
  phone: any
  allData: any
  id: any
  salary: any

  ngOnChanges(): void {
    if(!this.editData){
      return;
    }
    this.id = this.editData.id;
    this.name = this.editData.name;
    this.email = this.editData.email;
    this.address = this.editData.address;
    this.phone = this.editData.phone;
    this.salary = this.editData.salary;
  }


  create() {

    debugger
    const data: any = {
      name: this.name,
      address: this.address,
      email: this.email,
      phone: this.phone,
      salary: this.salary,
    }

    if (this.id) {
      data.id = this.id
      this.updateData(data)
    }

    else {
      this.listservice.createData(data).subscribe(() => {
        alert("Data Save Successfully")
        this.address = ''
        this.name = ''
        this.email = ''
        this.phone = ''
        this.salary = ''
        this.refreshData.emit();
      })
    }


  }

  updateData(data: any) {
    data.id = this.id
    return this.listservice.updateData(data).subscribe(() => {
      this.name = ''
      this.email = ''
      this.phone = ''
      this.address = ''
      this.salary = ''
      this.refreshData.emit();
    })

  }
}
