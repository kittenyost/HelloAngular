import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-callout',
  templateUrl: './callout.component.html',
  styleUrls: ['./callout.component.css']
})
export class CalloutComponent implements OnInit {

  id = "";

  game: any = {};

  constructor(private route: ActivatedRoute, private data: DataService) {

  }

  ngOnInit(): void {
    console.log("view is ready");

    this.route.paramMap.pipe(
      switchMap(params => {
        this.id = params.get('id')!;
        return this.data.getOneGame(this.id);
      })
    ).subscribe(ourGame => {
      this.game = ourGame;
    });
  }
}