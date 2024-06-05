function calculateResults(){
    // Get values for table 1
    const A1 = parseFloat(document.getElementById('A1').value);
    const A2 = parseFloat(document.getElementById('A2').value);
    const A3 = parseFloat(document.getElementById('A3').value);
    const A4 = parseFloat(document.getElementById('A4').value);
    const A5 = parseFloat(document.getElementById('A5').value);
    const A6 = parseFloat(document.getElementById('A6').value);
    const A7 = parseFloat(document.getElementById('A7').value);
    const A8 = parseFloat(document.getElementById('A8').value);
    const A9 = parseFloat(document.getElementById('A9').value);
    const A10 = parseFloat(document.getElementById('A10').value);
    const A11 = parseFloat(document.getElementById('A11').value);
    const A12 = parseFloat(document.getElementById('A12').value);
    const A13 = parseFloat(document.getElementById('A13').value);
    const A14 = parseFloat(document.getElementById('A14').value);
    const A15 = parseFloat(document.getElementById('A15').value);
    const A16 = parseFloat(document.getElementById('A16').value);
    const A17 = parseFloat(document.getElementById('A17').value);
    const A18 = parseFloat(document.getElementById('A18').value);
    const A19 = parseFloat(document.getElementById('A19').value);
    const A20 = parseFloat(document.getElementById('A20').value);

    //calculate values of table 2
    const Alpha = A5 + A20;
    const Beta = A15 / A7;
    const Charlie = A13 * A12;

    //update results in table 2
    document.getElementById('Alpha').textcontent = Alpha;
    document.getElementById('Beta').textcontent = Beta;
    document.getElementById('Charlie').textcontent = Charlie;
}

//calculate
calculateResults();