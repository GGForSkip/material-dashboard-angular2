import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { City } from 'app/bo/location/City';
import { Commune } from 'app/bo/location/Commune';
import { Country } from 'app/bo/location/Country';
import { Nation } from 'app/bo/location/Nation';
import { ResearchGarbageService } from 'app/services/research/research-garbage.service';
@Component({
  selector: 'app-search-garbage',
  templateUrl: './search-garbage.component.html',
  styleUrls: ['./search-garbage.component.scss']
})
export class SearchGarbageComponent implements OnInit {

  profileForm!: FormGroup;
  countryDomain!: Country[] | any;
  nationDomain!: Nation[] | any;
  cityDomain!: City[] | any;
  communeDomain!: Commune[] | any;

  constructor(private fb: FormBuilder, private researchGarbageService: ResearchGarbageService) { }

  ngOnInit(): void {

    this.profileForm = this.fb.group({
      country: [''],
      nation: [''],
      town: ['',Validators.required],
      commune: [''],
      garbageType: [''],
      garbage:['',Validators.required],
      eer:[''],
      userId:['']
    });

    this.profileForm.valueChanges.subscribe(x => {
      console.log('form value changed')
      console.log(x);
    });

    this.populateDomains();

  }


  populateDomains() {
    this.cityDomain=this.researchGarbageService.cityList();
    this.countryDomain=this.researchGarbageService.countryList();
    this.communeDomain=this.researchGarbageService.communeList();
    this.nationDomain=this.researchGarbageService.nationList();
  }

  

}
