import { Component, OnInit } from '@angular/core';

import { SearchLanguagesService } from '../search-languages.service';

@Component({
  selector: 'app-search-languages',
  templateUrl: './search-languages.component.html',
  styleUrls: ['./search-languages.component.css']
})
export class SearchLanguagesComponent implements OnInit {
  
  language: string;

  results: any[] = [];       // This will hold the data coming from the service
  error_text: string = "";   // So called error reporing text to the end user
  selected: boolean = false; // Flag to check if a repository is clicked or not
  selectedRepository: any;   // presently Selected repository details

  constructor(private searchLanguagesService: SearchLanguagesService) { 

  }

  ngOnInit() {
  }

  search(language: string) {
    if (language == "") {
      this.error_text = "Enter a language before searching.";
      return;
    }
    this.error_text = "";
    this.language = language;
    this.searchLanguagesService.getRepositoryByLanguage(language).subscribe(
      repositories => {
        this.results = repositories;
      },
      error => {
        this.results = [];
        this.error_text = "No repositories found for language ["+this.language+"]";
        console.error(error);
      }
    )
  }

  getDetails(repository: any) {
      this.selectedRepository = repository;
      this.selected = true;
  }
}
