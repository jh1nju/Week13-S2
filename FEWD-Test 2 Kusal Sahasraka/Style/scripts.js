function CalcVowels() {
    alert("Calculate vowels");
    const word = document.getElementById("vowels").value.toLowerCase(); //fetch the value input by user
    const vowels = word.match(/[aeiou]/gi); // use match to check if there are any vowels
    result = vowels.length; //get the length of vowels str and assign it to variable to print
    document.getElementById("VowelsResult").textContent = result; // print result

}

function CalcVolume() {
    alert("calculate the volume of a sphere");
    const R = document.getElementById("Radius").value; // fetch radius value
    const volume = (4 / 3 * Math.PI * R * R * R) //formula for calculating the volume. using Math.PI to get value of pi
    document.getElementById("VolumeResult").textContent = volume; // print result

}

function ShowGrade() {
    alert("Show Grade");
    const M = parseFloat(document.getElementById("Mark").value); //fetch user input
    let grade = "";

    if (M >= 0 && M <= 59) { //set grading criteria. using if, else conditions
        grade = "E";
    } else if (M >= 60 && M <= 69) {
        grade = "D";
    } else if (M >= 70 && M <= 79) {
        grade = "C";
    } else if (M >= 80 && M <= 89) {
        grade = "B";
    } else if (M >= 90 && M <= 100) {
        grade = "A";
    } else {
        grade = "Mark must be between 0 - 100" //error handling
    }

    document.getElementById("GradeResult").textContent = grade; //print the result

}