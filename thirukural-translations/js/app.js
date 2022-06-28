const division = document.getElementById("division");
const chapter = document.getElementById("chapter");
const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const translation = document.getElementById("translation");
const explanation = document.getElementById("explanation");
const previous = document.getElementById("previous");
const next = document.getElementById("next");

let curr = 1;

async function loadData(pg_num) {
  const url = "https://api-thirukkural.vercel.app/api?num=" + pg_num;
  try {
    // fetch the data
    const response = await fetch(url);
    const data = await response.json();
    //   create the dropdown
    console.log(data);
    renderVerse(data);
  } catch (error) {
    console.log(error);
  }
}

document.getElementById("previous").addEventListener("click", function (e) {
  // alert("test");
  e.preventDefault();
  if (curr > 1) {
    document.querySelectorAll(".page-link").forEach((element) => {
      element.classList = "page-link";
    });
    next.disabled = false;
    console.log(curr - 1);
    loadData(curr - 1);
    curr = curr - 1;
    document.getElementById(`pg${curr}`).classList = "page-link active";
  } else {
    // alert("You r in the start");
    previous.disabled = true;
  }
});
document.getElementById("next").addEventListener("click", function (e) {
  // alert("test");
  e.preventDefault();
  if (curr < 10) {
    document.querySelectorAll(".page-link").forEach((element) => {
      element.classList = "page-link";
    });
    previous.disabled = false;
    console.log(curr + 1);
    loadData(curr + 1);
    curr = curr + 1;
    document.getElementById(`pg${curr}`).classList = "page-link active";
  } else {
    next.disabled = true;
  }
});

function renderVerse(verse) {
  division.innerHTML = `${verse.sect_tam}<br /><small><b>(${verse.sect_eng})</b></small>`;
  chapter.innerHTML = `${verse.chap_tam}<br /><small><b>(${verse.chap_eng})</b></small>`;
  line1.innerHTML = `${verse.line1}`;
  line2.innerHTML = `${verse.line2}`;
  translation.innerHTML = `${verse.eng}`;
  explanation.innerHTML = `${verse.eng_exp}`;
}

loadData(curr);
