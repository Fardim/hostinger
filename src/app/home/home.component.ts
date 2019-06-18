import { Pagination } from "./../_models/pagination";
import { Component, OnInit } from "@angular/core";
import { TeileService } from "../_service/teile.service";
import { Teile } from "../_models/teile";
import * as _ from "underscore";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  private readonly PAGE_SIZE = 10;
  globalTeileList: Teile[];
  teileList: Teile[];
  teile: Teile;
  showSpinner: boolean = false;
  query: any = {
    pageSize: this.PAGE_SIZE
  };
  pagination: Pagination;
  columns = [
    { title: "Id", key: "id", isSortable: true },
    { title: "Album Id", key: "albumId", isSortable: true },
    { title: "Title", key: "title", isSortable: true },
    { title: "Url", key: "url", isSortable: true },
    { title: "Thumbnail Url", key: "thumbnailUrl", isSortable: true }
  ];
  selectedRow: number;
  constructor(private teileService: TeileService) {}

  ngOnInit() {
    this.showSpinner = true;
    this.teileService.getTeile().subscribe(data => {
      this.globalTeileList = [...data];
      this.pagination = {
        currentPage: 1,
        itemsPerPage: this.PAGE_SIZE,
        totalItems: this.globalTeileList.length,
        totalPages: Math.ceil(this.globalTeileList.length / this.PAGE_SIZE)
      };
      console.log(this.pagination);
      this.populateTeile();
      this.showSpinner = false;
    });
  }

  reset() {
    this.query = {};
    this.pagination = {
      currentPage: 1,
      itemsPerPage: this.PAGE_SIZE,
      totalItems: this.globalTeileList.length,
      totalPages: Math.ceil(this.globalTeileList.length / this.PAGE_SIZE)
    };
    this.populateTeile();
  }

  sortBy(columnName: string) {
    if (this.query.sortBy === columnName) {
      this.query.isSortAscending = !this.query.isSortAscending;
    } else {
      this.query.sortBy = columnName;
      this.query.isSortAscending = true;
    }
    this.populateTeile();
  }

  pageChanged(event: any) {
    console.log("eevent", event);
    this.pagination.currentPage = event.page;
    this.pagination.itemsPerPage = event.itemsPerPage;
    this.populateTeile();
  }

  populateTeile() {
    this.applySorting();
    this.applyPagination();
  }

  applySorting() {
    if (this.query.isSortAscending && this.query.sortBy) {
      this.globalTeileList = _.chain(this.globalTeileList)
        .sortBy(this.query.sortBy)
        .value();
    } else if (!this.query.isSortAscending && this.query.sortBy) {
      this.globalTeileList = _.chain(this.globalTeileList)
        .sortBy(this.query.sortBy)
        .reverse()
        .value();
    }
    console.log(this.globalTeileList);
  }
  applyPagination() {
    this.teileList = this.globalTeileList.slice(
      (this.pagination.currentPage - 1) * this.pagination.itemsPerPage,
      this.pagination.currentPage * this.pagination.itemsPerPage
    );
    console.log(this.teileList);
  }

  rowSelected(teile: Teile, selectedRow: number) {
    this.teile = teile;
    this.selectedRow = selectedRow;
  }
}
