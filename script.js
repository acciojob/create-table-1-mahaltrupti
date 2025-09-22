function insert_Row() {
    //Write your code here
  // Get the table element by its ID.
  const table = document.getElementById('sampleTable');

  // Insert a new row at the beginning of the table (index 0).
  const newRow = table.insertRow(0);

  // Insert two new cells into the newly created row.
  const newCell1 = newRow.insertCell(0);
  const newCell2 = newRow.insertCell(1);

  // Set the content of the new cells.
  newCell1.textContent = 'New Cell1';
  newCell2.textContent = 'New Cell2';
}
  

