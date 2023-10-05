import * as d3 from "d3";
import swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { player } from 'src/app/interfaces/player';
import { MatDialog } from '@angular/material/dialog';
import { SharedService } from 'src/app/services/shared.service';
import { extractCSVDataFromHTML } from 'src/app/helpers/dataExtracter';
import { ChartDialogComponent } from '../chart-dialog/chart-dialog.component';

@Component({
  selector: 'app-d3js-data-reader',
  templateUrl: './d3js-data-reader.component.html',
  styleUrls: ['./d3js-data-reader.component.css']
})
export class D3jsDataReaderComponent implements OnInit {

  public players: player[] = [];
  public o_players: player[] = [];
  public playersPerTeam: any = [];
  public shouldSpinnerBeStarted = false;

  constructor(private sharedService: SharedService, private matDialog: MatDialog) {}

  ngOnInit() {
    this.shouldSpinnerBeStarted = true;

    this.sharedService.getDataWithD3().subscribe((res: any) => {
      var tdValues = d3.select(res).selectAll("tr").nodes().map(function (d: any) {
        return d3.select(d).selectAll("td").nodes().length>0 ? d : null;
      });
      let id = 0;
      tdValues.forEach((element: any) => {
        if (d3.select(element).selectAll("td").nodes()[1] != undefined) {
          let obj: player = {
            id: id,
            name: (<HTMLElement>d3.select(element).selectAll("td").nodes()[1]).innerText,
            club: (<HTMLElement>d3.select(element).selectAll("td").nodes()[3]).innerText,
            image: (<HTMLElement>d3.select(element).selectAll("td").nodes()[4]).innerText,
            nationality: (<HTMLElement>d3.select(element).selectAll("td").nodes()[2]).innerText,
          };
          id++;
          let it = this.playersPerTeam.find((f: any) => f.libelle == obj.club);
          if (it) {
            it.count = it.count + 1;
          } else {
            let newIt = {
              libelle: obj.club,
              count: 1
            };
            this.playersPerTeam.push(newIt);
          }
          if (obj.club != "Club" && obj.club != "") {
            this.players.push(obj);
            this.o_players.push(obj);
          }
        }
      });
      /*const newData: string[][] = extractCSVDataFromHTML(res);
      newData.forEach((element: any) => {
        let obj: player = {
          id: element[0],
          name: element[1],
          club: element[3],
          image: element[4],
          nationality: element[2],
        };
        let it = this.playersPerTeam.find((f: any) => f.libelle == obj.club);
        if (it) {
          it.count = it.count + 1;
        } else {
          let newIt = {
            libelle: obj.club,
            count: 1
          };
          this.playersPerTeam.push(newIt);
        }
        if (obj.club != "Club" && obj.club != "") {
          this.players.push(obj);
          this.o_players.push(obj);
        }
      });*/
      swal.fire({ width: 400, timer: 2000, icon: 'success', showConfirmButton: false });
      this.shouldSpinnerBeStarted = false;
    }, (err: any) => {
      swal.fire({ width: 400, timer: 2000, icon: 'error', showConfirmButton: false });
      this.shouldSpinnerBeStarted = false;
    });
  }

  filter(txt: any) {
    if (txt.value != "" && txt.value != null && txt.value != undefined)
      this.players = this.o_players.filter(p =>
        p.name.toLowerCase().includes(txt.value.toLowerCase()) ||
        p.club.toLowerCase().includes(txt.value.toLowerCase()) ||
        p.nationality.toLowerCase().includes(txt.value.toLowerCase())
      );
    else this.players = this.o_players;
  }

  showChart() {
    this.matDialog.open(ChartDialogComponent, {
      width: "900px",
      data: this.playersPerTeam,
    });
  }
}
