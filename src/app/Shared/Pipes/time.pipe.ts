import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time',
  standalone: true,
})
export class TimePipe implements PipeTransform {
  transform(value: Date): string {
    var today = new Date();
    var diff = today.getTime() - value.getTime();

    var secs = 1000;
    var mins = secs * 60;
    var hours = mins * 60;
    var days = hours * 24;
    var months = days * 30.416666666666668;
    var years = months * 12;

    var diffYears = Math.floor(diff / years);

    diff = diff - diffYears * years;
    var diffMonths = Math.floor(diff / months);

    diff = diff - diffMonths * months;
    var diffDays = Math.floor(diff / days);

    diff = diff - diffDays * days;
    var diffHours = Math.floor(diff / hours);

    diff = diff - diffHours * hours;
    var diffMins = Math.floor(diff / mins);

    diff = diff - diffMins * mins;
    var diffSecs = Math.floor(diff / secs);

    return `Hace 
    ${diffYears > 0 ? diffYears + ' años' : ''}
    ${diffMonths > 0 ? diffMonths + ' meses' : ''}
    ${diffDays > 0 ? diffDays + ' dias' : ''}
    ${diffHours > 0 ? diffHours + ' horas' : ''}
    ${diffMins > 0 ? diffMins + ' minutos' : ''}
    ${diffSecs > 0 ? diffSecs + ' segundos' : ''}
    `;
  }
}
