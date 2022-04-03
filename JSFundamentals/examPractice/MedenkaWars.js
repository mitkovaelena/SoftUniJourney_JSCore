function medenkaWars(input){

    let lastWhiteAttack = 0;
    let lastDarkAttack = 0;
    let consecutiveWhiteAttacks = 0;
    let consecutiveDarkAttacks = 0;
    let whiteMadeDamage = 0;
    let darkMadeDamage =0;

    for (let i = 0; i < input.length; i++) {
        let num;
        let color;
        num = Number(input[i].split(" ")[0])
        color = input[i].split(" ")[1]

        switch (color){
            case "white":

                if(lastWhiteAttack == 0){
                    consecutiveWhiteAttacks++
                    whiteMadeDamage += 60*num;
                    lastWhiteAttack = num;
                }
                else{
                    if(lastWhiteAttack == num){
                        consecutiveWhiteAttacks++;
                        if(consecutiveWhiteAttacks >=2){
                            whiteMadeDamage += 165*num;
                            consecutiveWhiteAttacks = 0;
                            lastWhiteAttack = num;
                        }
                        else{
                            whiteMadeDamage += 60*num;
                        }
                    }
                    else{
                        whiteMadeDamage += 60*num;
                        consecutiveWhiteAttacks = 0;
                        lastWhiteAttack = num;
                    }
                }
                break;

            case "dark":

                if(lastDarkAttack == 0){
                    consecutiveDarkAttacks++;
                    darkMadeDamage += 60*num;
                    lastDarkAttack = num
                }
                else{
                    if(lastDarkAttack == num){
                        consecutiveDarkAttacks++;
                        if(consecutiveDarkAttacks >= 5){
                            darkMadeDamage += 270*num;
                            lastDarkAttack = num;
                            consecutiveDarkAttacks = 1
                        }
                        else{
                            darkMadeDamage += 60*num;
                        }
                    }

                    else{
                        darkMadeDamage += 60*num;
                        consecutiveDarkAttacks = 0;
                        lastDarkAttack = num
                    }
                }
                break;
        }

    }
    if(Math.max(whiteMadeDamage,darkMadeDamage) == whiteMadeDamage){
        console.log("Winner - Vitkor")
        console.log("Damage - " + whiteMadeDamage)
    }
    else{
        console.log("Winner - Naskor")
        console.log("Damage - " + darkMadeDamage)
    }
}

medenkaWars(['2 dark medenkas',
  '1 white medenkas',
  '2 dark medenkas',
  '2 dark medenkas',
  '15 white medenkas',
  '2 dark medenkas',
  '2 dark medenkas'])