import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoanService } from 'src/services/loan.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  descision:String=""

  constructor(private loanService: LoanService){
  }
  title = 'Loan_Management_Front';
  submit(form:NgForm){
    console.log(form.value);
    this.loanService.loan(form.value.idClient,form.value.money).subscribe((res)=>{
    console.log("Loan API called successfully");
      setTimeout(() => {
        this.loanService.getCreditDecision()
      .then(decision => {
        this.descision = decision;
        console.log('Decision:', this.descision);
      })
      .catch(error => {
        console.error('Error getting credit decision:', error);
      });
      }, 1000);    }
    )
  }
   ngOnInit(): void {
    
  }

}
