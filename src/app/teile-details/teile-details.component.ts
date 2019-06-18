import { Component, OnInit, Input } from "@angular/core";
import { Teile } from "../_models/teile";

@Component({
  selector: "teile-details",
  templateUrl: "./teile-details.component.html",
  styleUrls: ["./teile-details.component.css"]
})
export class TeileDetailsComponent implements OnInit {
  @Input("teile") teile: Teile;
  photoUrl: string = "../../assets/user.png";
  constructor() {}

  ngOnInit() {
    console.log("teile", this.teile);
  }
}
