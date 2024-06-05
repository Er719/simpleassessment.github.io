function calculateResults(){
    // Initialize values for table 1
    const A1 = 41;
    const A2 = 18;
    const A3 = 21;
    const A4 = 63;
    const A5 = 2;
    const A6 = 53;
    const A7 = 5;
    const A8 = 57;
    const A9 = 60;
    const A10 = 93;
    const A11 = 28;
    const A12 = 3;
    const A13 = 90;
    const A14 = 39;
    const A15 = 80;
    const A16 = 88;
    const A17 = 49;
    const A18 = 60;
    const A19 = 26;
    const A20 = 28;

    //calculate values of table 2
    const Alpha = A5 + A20;
    const Beta = A15 / A7;
    const Charlie = A13 * A12;

    // Display calculated values in the table cells
    document.getElementById('Alpha').innerText = Alpha;
    document.getElementById('Beta').innerText = Beta;
    document.getElementById('Charlie').innerText = Charlie;

    // Display values for Table 1
    document.getElementById('A1').innerText = A1;
    document.getElementById('A2').innerText = A2;
    document.getElementById('A3').innerText = A3;
    document.getElementById('A4').innerText = A4;
    document.getElementById('A5').innerText = A5;
    document.getElementById('A6').innerText = A6;
    document.getElementById('A7').innerText = A7;
    document.getElementById('A8').innerText = A8;
    document.getElementById('A9').innerText = A9;
    document.getElementById('A10').innerText = A10;
    document.getElementById('A11').innerText = A11;
    document.getElementById('A12').innerText = A12;
    document.getElementById('A13').innerText = A13;
    document.getElementById('A14').innerText = A14;
    document.getElementById('A15').innerText = A15;
    document.getElementById('A16').innerText = A16;
    document.getElementById('A17').innerText = A17;
    document.getElementById('A18').innerText = A18;
    document.getElementById('A19').innerText = A19;
    document.getElementById('A20').innerText = A20;
}

//calculate
calculateResults();