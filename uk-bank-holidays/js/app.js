const url = "https://www.gov.uk/bank-holidays.json";

const tbody = document.getElementById("tbody");

let storeData;

async function loadData() {
  try {
    // fetch the data
    const response = await fetch(url);
    const data = await response.json();
    //   create the dropdown
    // console.log(data);
    storeData = data;
    // createDropdown(data.message);
  } catch (error) {
    console.log(error);
  }
}
loadData();
function showHolidays(areaname) {
  console.log("storeData", storeData[areaname]["events"]);

  // const tr = document.createElement("tr")
  storeData[areaname]["events"].forEach((element) => {
    // console.log(element);
    createTable(element);
  });
}

function createTable(rowdata) {
  const tr = document.createElement("tr");
  console.log("rowdata", rowdata);
  // rowdata.forEach(function (itm) {
  //   const td = document.createElement("td");
  //   td.innerHTML = "text";
  //   tr.appendChild(td);
  // });
  for (const key in rowdata) {
    console.log(`${key}: ${rowdata[key]}`);
    const td = document.createElement("td");
    td.innerHTML = rowdata[key];
    tr.appendChild(td);
  }
  // for (let i = 0; i < rowdata.length; i++) {
  //   console.log(rowdata[i]);
  //   // const td = document.createElement("td");
  //   // td.innerHTML = "text";
  //   // tr.appendChild(td);
  // }
  tbody.appendChild(tr);
}
