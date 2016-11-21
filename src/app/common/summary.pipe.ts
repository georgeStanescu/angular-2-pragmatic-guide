import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "summary"
})
export class SummaryPipe implements PipeTransform {

  transform(value, maxLength: number) {
    let supportedLength = 10;
    if (maxLength) {
      supportedLength = maxLength;
    }

    if (value) {
      
      return value.substring(0, supportedLength) + "...";
    }
  }
}
