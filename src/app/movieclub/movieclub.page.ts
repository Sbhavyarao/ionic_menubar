import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-movieclub',
  templateUrl: './movieclub.page.html',
  styleUrls: ['./movieclub.page.scss'],
})
export class MovieclubPage implements OnInit {

  constructor(private httpClient: HttpClient) { }

  public searchedMovie;
  public movieDetails;
  public movieData;
  ngOnInit() {
  }
  getMovieData() {
    this.httpClient.get('https://cors-anywhere.herokuapp.com/' +
        'https://api.themoviedb.org/3/search/movie?api_key=79d0f381ad0a8b1c3fb900afef69ee6c&query=' + this.searchedMovie)
        .subscribe(data => {
          this.movieDetails = data;
          this.movieData = this.movieDetails.results.slice(0, 5);
          console.log(this.movieData);
        });
  }
}

