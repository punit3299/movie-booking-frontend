import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchCustomer'
})
export class SearchCustomerPipe implements PipeTransform {

  transform(userList:any,searchText:any): any {

    let newList:any;
    if(searchText)
    {
      newList=userList.filter(user=>user.customerName.toLowerCase().startsWith(searchText.toLowerCase()));
    }
    else
    {
      newList=userList;
    }
    return newList;
  }
}
