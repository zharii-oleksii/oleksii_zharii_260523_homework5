


document.getElementById("button1").addEventListener("click", function () {


    function dateTest(date) {
        let birthDateArray = date.split('-')
        let day = parseInt(birthDateArray[0])
        let month = parseInt(birthDateArray[1])
        let year = parseInt(birthDateArray[2])

        let flag = true
        if (year % 4 === 0) {
            if (month === 2) {
                if (day <= 0 || day > 29) {
                    flag = false;
                    alert('Its seems you`re entering non-existed date in February of high year (only 29 days in)')
                }
            }
        } else {
            if (month === 2) {
                if (day <= 0 || day > 28) {
                    flag = false
                    alert('Its seems you`re entering non-existed date in February of the regular year (only 28 days in)')
                }
            }
        }
        if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
            if (day <= 0 || day > 31) {
                flag = false
                alert('Its seems you`re entering non-existed date in the 31-days month')
            }
        } else
            if (month === 4 || month === 6 || month === 9 || month === 11) {
                if (day <= 0 || day > 30) {
                    flag = false
                    alert('Its seems you`re entering non-existed date in the 30-days month')
                }
            }
        return flag
    }

    ///////////
    let flagOfBirthDate = true
    let birthDate = prompt('Enter your birth date in DD-MM-YYYY format')
    if (birthDate === null) {
        flagOfBirthDate = false
        alert('It is sad that you don`t want to share your birth date with us :(')
    } else {
        validDateFormat = /^(0[1-9]|[1-2][0-9]|3[0-1])-(0[1-9]|1[0-2])-\d{4}$/

        while (!validDateFormat.test(birthDate) || !dateTest(birthDate)) {
            birthDate = prompt('Please enter your birth date in DD-MM-YYYY format')
            dateTest(birthDate);
        }
        let birthDateArray = birthDate.split('-')
        let day = birthDateArray[0]
        let month = birthDateArray[1]
        let year = birthDateArray[2]

        let convertedBirthDate = year + '-' + month + '-' + day

        birthDate = new Date(convertedBirthDate)
        currentDate = new Date();

        let ageInMilliseconds = currentDate - birthDate;

        const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25;
        var ageResult
        ageResult = Math.floor(ageInMilliseconds / millisecondsInYear);
    }

    /////////////

    flagOfHometown = true
    let hometown = prompt('In what city are you living in?')

    if (hometown === null) {
        flagOfHometown = false
        alert('It is sad that you don`t want to share your hometown with us :(')
    } else {
        while (hometown === '') {
            hometown = prompt('In what city are you living in?')
        }
        const countries = {
            london: "Great Britain",
            vashington: "USA",
            kyiv: "Ukraine"
        }
        var hometownResult
        if (hometown.toLowerCase() in countries) {
            hometownResult = 'You`re living in the capital of ' + countries[hometown]
        } else {
            hometownResult = 'You`re living in the ' + hometown.toLowerCase().charAt(0).toUpperCase() + hometown.toLowerCase().slice(1)
        }

    }


    //////////////

    let flagOfchamps = true
    let champs = prompt('What sport are you interested in?')

    if (champs === null) {
        flagOfchamps = false
    } else {
        while (champs === '') {
            champs = prompt('What sport are you interested in?')
        }

        const sport = {
            boxing: "Seems like you want to be as strong as Vitaliy Klychko of his golden times?",
            football: "Perhaps you would like to have a technique as good as Ronaldo's?",
            basketball: "So you`re trying to jump as high as Michael Jordan?"
        }

        var champsResult
        if (champs.toLowerCase() in sport) {
            champsResult = sport[champs.toLowerCase()]
        } else {
            champsResult = 'I`m sorry but I don`t know this kind of sport or at least it is not in my dictionary'
        }
    }

    ///////////////
    let zeroLineResult
    if (flagOfBirthDate + flagOfHometown + flagOfchamps === 0) {
        zeroLineResult = 'You`ve not shared any info about you :((( ' + '\n'
    } else
        if (flagOfBirthDate + flagOfHometown + flagOfchamps === 1 || flagOfBirthDate + flagOfHometown + flagOfchamps === 2) {
            zeroLineResult = 'Here`s some parts of info about you:\n'
        } else {
            zeroLineResult = 'Here`s full info about you:\n'
        }

    let firstLineResult

    if (flagOfBirthDate) {
        firstLineResult = '1. ' + 'You`re ' + ageResult + ' y.o.' + '\n'
    } else {
        firstLineResult = '1. Missing info: you haven`t share your birth date with us' + '\n'
    }

    let secondLineResult

    if (flagOfHometown) {
        secondLineResult = '2. ' + hometownResult + '\n'
    } else {
        secondLineResult = '2. Missing info: you haven`t share your hometown with us' + '\n'
    }

    let thirdLineResult

    if (flagOfchamps) {
        thirdLineResult = '3. ' + champsResult + '\n'
    } else {
        thirdLineResult = '3. Missing info: you haven`t share your fav sport with us' + '\n'
    }

    /////////////////

    alert(
        zeroLineResult +
        firstLineResult +
        secondLineResult +
        thirdLineResult
    )


});







