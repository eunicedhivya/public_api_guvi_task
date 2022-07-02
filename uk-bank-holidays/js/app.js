const url = "https://www.gov.uk/bank-holidays.json";

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
  console.log("storeData", storeData[areaname]);
}
