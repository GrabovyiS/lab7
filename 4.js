let year = prompt('Введите год');
let visokosny;
( year%4 == 0 ? (year%100==0 ? (year%400==0 ? visokosny = true : visokosny = false) : visokosny = true) : visokosny = false );
alert(visokosny);