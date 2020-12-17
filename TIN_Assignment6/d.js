var counter = 1 ;
function insertRow() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const age = document.getElementById('age').value;
    var table = document.getElementById('table').getElementsByTagName('tbody')[0];
    var row = table.insertRow(counter);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = counter;
    cell2.innerHTML = firstName;
    cell3.innerHTML = lastName
    cell4.innerHTML = age;
    counter++;
}