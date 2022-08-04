import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatCreateDate',
})
export class FormatCreateDatePipe implements PipeTransform {
  transform(date: Date | undefined, ...args: unknown[]): unknown {

    if (date === undefined) return 'No date provided';
    let now = new Date();
    let postDate = new Date(date!);
    let formattedDate: string;

    let difference = Math.abs(now.getTime() - postDate.getTime());
    let differenceInDays = Math.ceil(difference / (1000 * 60 * 60 * 24));

    if (differenceInDays == 1){
      const timeFormatLessThanADay: Intl.DateTimeFormatOptions = {
        hour: '2-digit',
        minute: '2-digit',
      };
      formattedDate = 'Today at ' +  postDate.toLocaleTimeString('en-US', timeFormatLessThanADay);
    } else if (differenceInDays == 2){
      const timeFormatLessThanADay: Intl.DateTimeFormatOptions = {
        hour: '2-digit',
        minute: '2-digit',
      };
      formattedDate = "Yesterday at " + postDate.toLocaleTimeString('en-US', timeFormatLessThanADay);
    } else if (differenceInDays > 2 && differenceInDays < 8){
      const timeFormatLessThanADay: Intl.DateTimeFormatOptions = {
        weekday: 'long',
      };
      formattedDate = postDate.toLocaleDateString('en-US', timeFormatLessThanADay);
    } else {
      const timeFormatMoreThanAWeek: Intl.DateTimeFormatOptions = {
        month: 'short',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
      };
      formattedDate = postDate.toLocaleDateString('en-US', timeFormatMoreThanAWeek);
    }

    return formattedDate;
  }
}
