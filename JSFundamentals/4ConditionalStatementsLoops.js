function biggestOf3([one,two,three]) {
    console.log( Math.max(one,two,three))
}

function pointInRect([x, y, xMin, xMax, yMin, yMax]) {
    [x, y, xMin, xMax, yMin, yMax]=[x, y, xMin, xMax, yMin, yMax].map(Number)
    console.log(x < xMin || y<yMin || x>xMax|| y > yMax ? "outside" : "inside")
}

function oddNums([num]) {
    for (let i = 1; i <= num; i+=2) {
        console.log(i)
    }
}

function triangle$([num]) {
    for (let i = 1; i <= num; i++) {
        console.log('$'.repeat(i))
    }
}

function moviePrices([movie, day]) {
    let price = 0;
    movie = movie.toLowerCase()
    day = day.toLowerCase()

    switch(movie){
        case "the godfather":
        switch(day){
            case "monday": price = 12; break;
            case "tuesday": price = 10; break;
            case "wednesday": price = 15; break;
            case "thursday": price = 12.5; break;
            case "friday": price = 15; break;
            case "saturday": price = 25; break;
            case "sunday": price = 30; break;
            default: console.log("error"); return;
        }
        break;
        case "schindler's list":
            switch(day){
                case "monday":
                case "tuesday":
                case "wednesday":
                case "thursday":
                case "friday": price = 8.5; break;
                case "saturday": price = 15; break;
                case "sunday": price = 15; break;
                default: console.log("error"); return;
            }
            break;
        case "casablanca":
            switch(day){
                case "monday":
                case "tuesday":
                case "wednesday":
                case "whursday":
                case "friday": price = 8; break;
                case "saturday":
                case "sunday": price = 10; break;
                default: console.log("error"); return;
            }
            break;
        case "the wizard of oz":
            switch(day){
                case "monday":
                case "tuesday":
                case "wednesday":
                case "whursday":
                case "friday": price = 10; break;
                case "saturday":
                case "sunday": price = 15; break;
                default: console.log("error"); return;
            }
            break;
        default: console.log("error"); return;
    }
    console.log(price)
}

function quadraticEquation([a,b,c]){
    let d = b*b - 4*a*c;
if(d < 0) {
    console.log("No")
    return
}
    else if (d == 0){
    console.log((-1)*b/(2*a))
    return
}
    else{
    console.log(((-1)*b-Math.sqrt(d))/(2*a))}
    console.log(((-1)*b+Math.sqrt(d))/(2*a))

}

function multiplicationTable([n]){
    console.log('<table border="1">')

    console.log('  <tr><th>x</th>')
    for (let i = 1; i <= n; i++) {
        console.log(`<th>${i}</th>`);
    }
    console.log("</tr>")

    for (let j = 1; j <= n; j++) {
        console.log("<tr>")
        console.log(`<th>${j}</th>`);
        for (let i = 1; i <= n; i++) {
            console.log(`<td>${i*j}</td>`);

        }
        console.log("</tr>")
        }

    console.log("</table>")
}

function figure4squares([n]) {
    console.log(`+${'-'.repeat(n - 2)}+${'-'.repeat(n - 2)}+`)
    if(n != 2) {
        if (n % 2 == 0) {
            for (var i = 1; i <= (n - 4) / 2; i++) {
                console.log(`|${' '.repeat(n - 2)}|${' '.repeat(n - 2)}|`)
            }
            console.log(`+${'-'.repeat(n - 2)}+${'-'.repeat(n - 2)}+`)
            for (var i = 1; i <= (n - 4) / 2; i++) {
                console.log(`|${' '.repeat(n - 2)}|${' '.repeat(n - 2)}|`)
            }
        }
        else {
            for (var i = 1; i <= (n - 3) / 2; i++) {
                console.log(`|${' '.repeat(n - 2)}|${' '.repeat(n - 2)}|`)
            }
            console.log(`+${'-'.repeat(n - 2)}+${'-'.repeat(n - 2)}+`)
            for (var i = 1; i <= (n - 3) / 2; i++) {
                console.log(`|${' '.repeat(n - 2)}|${' '.repeat(n - 2)}|`)
            }
        }
        console.log(`+${'-'.repeat(n - 2)}+${'-'.repeat(n - 2)}+`)
    }
}

function monthlyCalendar([d,m,y]) {

   let html ;
    html =('<table>\n')
    html +=('<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>\n')

    let date = new Date(y, m - 1, d);
    let oneDay = 24 * 60 * 60 * 1000
    let firstDay = new Date(y,m-1,1);
    let nextMonth = new Date(y,m,1)

    let dayOfWeek = firstDay.getDay();
    let prevMonth= new Date(firstDay.getTime()-oneDay)
    let lastDay= new Date(nextMonth.getTime()-oneDay)
    let today = date.getDate();

    let startDay = prevMonth.getDate()-dayOfWeek+1
    let lastDayCurrMonth = lastDay.getDate();
    let dayOfWeekLast = lastDay.getDay();
    html +=("  <tr>")
    for (let j = 0; j < dayOfWeek; j++) {
        html +=(`<td class="prev-month">${startDay++}</td>`)
    }
    let i = 1;
    for (let j = 0; j < 7-dayOfWeek; j++) {
        if(i == today)  {
            html +=(`<td class="today">${i++}</td>`);
            continue;
        }
        html +=(`<td>${i++}</td>`)
    }
    html +=("</tr>\n");
    html +=("<tr>");
    let currI = i;
    for (let j = 0; j <= lastDayCurrMonth-currI; j++) {
        if (i == today) {
            html += (`<td class="today">${i++}</td>`);
        }
        else
            html += (`<td>${i++}</td>`)
        if ((j + 1) % 7 == 0) {
            html += ("</tr>\n");
            if (j != lastDayCurrMonth - currI) html += ("<tr>");
        }
    }

    i=1;
    for (let j = dayOfWeekLast; j < 6; j++) {
        html +=(`<td class="next-month">${i++}</td>`)
    }
    if(dayOfWeekLast < 6) html +=("</tr>\n");
    html +=('</table>')
    console.log(html)
}

figure4squares([4])