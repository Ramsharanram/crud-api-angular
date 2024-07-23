import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http:HttpClient) {}

    createData(data: any ){

      return this.http.post('http://localhost:3000/posts', data)
    }

    getData(){
      return this.http.get('http://localhost:3000/posts')
    }

    delete(id: any){
      return this.http.delete('http://localhost:3000/posts/' + id)

    }

    getsinglData(id: number){
      return this.http.get('http://localhost:3000/posts/' + id )
    }

    updateData(data: any){
      return this.http.put('http://localhost:3000/posts/' +data.id, data)
    }
   }

