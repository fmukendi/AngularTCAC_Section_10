import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { GithubFollowersService } from './../services/github-followers.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers: any[];

  constructor(private service: GithubFollowersService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const obs = Observable.combineLatest([
       this.route.paramMap,
       this.route.queryParamMap
    ]).subscribe(combined => {
      const id =  combined[0].get('id');
      const page = combined[1].get('page');

      // this.service.getAll({ id: id, page: page })
      this.service.getAll()
      .subscribe(followers => this.followers = followers);
    });

    /* Observable.combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
   ])
   .map(combined => {
    const id =  combined[0].get('id');
    const page = combined[1].get('page');

    // this.service.getAll({ id: id, page: page })
    return this.service.getAll();

   })
   .subscribe(followers => {
     this.followers = followers;
   }); */
/*
    this.service.getAll()
      .subscribe(followers => this.followers = followers);

     this.route.paramMap.subscribe();
    const id = this.route.snapshot.paramMap.get('id');

    this.route.queryParamMap.subscribe();
    const page = this.route.snapshot.queryParamMap.get('page'); */



  }
}
