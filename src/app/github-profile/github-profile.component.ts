import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,  Router } from '@angular/router';
@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private actRouter: ActivatedRoute , private router: Router ) { }

  ngOnInit() {
    this.actRouter.snapshot.paramMap.get('id');

    this.actRouter.paramMap
               .subscribe( params => {
                 console.log(params)
                 const id = +params.get('id'); // + convert string to a number
                 console.log(id);
               });
  }

  submit() {
    this.router.navigate(['/followers'], {
      queryParams: { page: 1, order: 'new'}
    })
  }

}
