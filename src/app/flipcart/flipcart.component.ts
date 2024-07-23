import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';

@Component({
  selector: 'app-flipcart',
  templateUrl: './flipcart.component.html',
  styleUrls: ['./flipcart.component.scss']
})
export class FlipcartComponent implements OnInit {

  data: any
  name: any
  address: any
  email: any
  phone: any
  allData: any
  id: any
  salary: any

  constructor(private listservice: ListService) { }

  ngOnInit(): void {
    this.getallData();
  }

  getallData() {
    debugger
    this.listservice.getData().subscribe((data) => {
      this.allData = data
    })
  }

  deleteData(data: any){
    let id = data.id 
      this.listservice.delete(id).subscribe(() =>{
        this.getallData()
      })
    }

    getsingleData(currentRecord: any){
      this.data = currentRecord;
      this.id = currentRecord.id

      return this.listservice.getsinglData(currentRecord.id).subscribe((res: any)=>{
        this.name = res.name
        this.address = res.address
        this.email = res.email
        this.phone = res.phone
        this.salary = res.salary
        
      })
    }

    
  }

