import swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { player } from 'src/app/interfaces/player';
import { SharedService } from 'src/app/services/shared.service';
import { extractCSVDataFromHTML } from 'src/app/helpers/dataExtracter';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public players: player[] = [];
  public shouldSpinnerBeStarted = false;

  constructor(private sharedService: SharedService) {this.loadData(); }

  loadData() {
    this.shouldSpinnerBeStarted = true;
    this.sharedService.getData().subscribe(res => {
      const vertuelDOM = new DOMParser();
      const getDataFromDoc = vertuelDOM.parseFromString(res, "text/html");
      const data: string[][] = extractCSVDataFromHTML(getDataFromDoc);
      let playersList = data.slice(1);
      let pl: any = [];
      playersList.forEach((element: any) => {
        let obj: player = {
          id: element[0],
          name: element[1],
          club: element[7],
          image: element[11],
          nationality: element[6],
        };
        this.players.push(obj);
      });
      swal.fire({ width: 400, timer: 2000, icon: 'success', showConfirmButton: false });
      this.shouldSpinnerBeStarted = false;
    }, () => {
      swal.fire({ width: 400, timer: 2000, icon: 'error', showConfirmButton: false });
      this.shouldSpinnerBeStarted = false;
    });
  }
  ngOnInit(): void {

  }
}
