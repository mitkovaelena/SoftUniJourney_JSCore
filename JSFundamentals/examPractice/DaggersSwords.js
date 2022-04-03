function daggersSwords(input){
    let html = '<table border="1">\n<thead>\n<tr><th colspan="3">Blades</th></tr>\n<tr><th>Length [cm]</th><th>Type</th><th>Application</th></tr>\n</thead>\n<tbody>\n'

    for(let blade of input){
        blade = Math.floor(Number(blade));
        if(blade <= 10) continue;
        else if(blade>40)
            html += `<tr><td>${blade}</td><td>sword</td>`;
        else
            html += `<tr><td>${blade}</td><td>dagger</td>`;
        blade %= 5;
        switch (blade){
            case 1: html += "<td>blade</td></tr>\n"; break;
            case 2: html += "<td>quite a blade</td></tr>\n"; break;
            case 3: html += "<td>pants-scraper</td></tr>\n"; break;
            case 4: html += "<td>frog-butcher</td></tr>\n"; break;
            case 0: html += "<td>*rap-poker</td></tr>\n"; break;
        }
    }
   html +='</tbody>\n</table>';
    console.log(html)
}

daggersSwords(["17.8",
    "19.4",
    "13",
    "55.8",
    "126.96541651",
    "3"])