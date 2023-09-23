import swal from 'sweetalert2';

export function extractCSVDataFromHTML(VirtualDOM: any) {
  //VirtualDOM => Virtual Document Object Model
  const table = VirtualDOM.querySelector("table.waffle"); // Assuming the table has the "waffle" class
  const data: any = [];
  if (!table) {
    swal.fire("waring", "Data not found.", "warning");
    return { data };
  }
  // Extract data rows from the table body
  const dataRows = table.querySelectorAll("tbody tr");
  dataRows.forEach((row: any) => {
    const rowData: any = [];
    const tdElements = row.querySelectorAll("td");
    tdElements.forEach((td: any) => {
      rowData.push(td.textContent.trim());
    });
    data.push(rowData);
  });

  return data;
}
