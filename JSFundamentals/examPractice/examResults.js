function examResults(input){
    let requestedExam = input.pop().trim();
    let sum = 0;
    let count=0;

    for(let line of input){
        let[student, course, examPt, bonuses ] = line.split(" ").filter(x => x != "");
        if(course == requestedExam) {
            count++;
            sum +=Number(examPt);
        }

        if(Number(examPt) < 100) console.log(`${student} failed at "${course}"`)
        else {
            let coursePt = 0.2 * Number(examPt) + Number(bonuses);
            let grade = (coursePt/80) * 4 + 2
            if(grade>6) grade = 6;
            console.log(`${student}: Exam - "${course}"; Points - ${Math.round(coursePt*100)/100}; Grade - ${parseFloat(grade).toFixed(2)}`)
        }
    }
    let average = Math.round(sum/count*100)/100;
    if(!average) average = 0;
    console.log(`"${requestedExam}" average points -> ${average}`)
}

examResults(["   Bankin    HTML&CSS                0          0    ",
   " RoYaL        HTML5&CSS        340         10",
   " Bi0GaMe      Java   10    10",
   " Stamat HQC   190 10",
   " MINKA OOP   230 10",
   " Java"  ])