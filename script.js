// OPEN AND CLOSE SIDEBAR
const sidebarUlLi = document.querySelectorAll(".sidebar ul li a");
const check = document.getElementById("check");
const sidebar = document.querySelector(".sidebar");

check.addEventListener("click", () => {
  const checkStatus = check.checked;
  sidebar.style.left = checkStatus ? "0" : '-300px';
});

sidebarUlLi.forEach((li) => {
  li.addEventListener("click", () => {
    sidebar.style.left = "-300px";
    check.checked = false;
  });
});

// TEXT TYPING
const jobName = ["Freelancer", "Web Developer", "Mahasiswa Gunadarma"];
let count = 0;
let nameIndex = 0;
let txtContainer = "";
let words = "";

(function typing() {
  if (count == jobName.length) {
    count = 0;
  }

  txtContainer = jobName[count];

  words = txtContainer.slice(0, ++nameIndex);
  document.querySelector(".efek-ngetik").textContent = words;

  if (words.length == txtContainer.length) {
    count++;
    nameIndex = 0;
  }

  setTimeout(typing, 500);
})();

// PORTFOLIO CARDS
let cards = '';
fetch("portfolio.json")
  .then(response => response.json())
  .then(response => {
    response.portfolio.forEach(res => {
      cards += portfolioEl(res)
      const portfolioContent = document.querySelector(".portfolio-content");
      portfolioContent.innerHTML = cards;
    })
  });

function portfolioEl(res) {
  return `<div class="col-4">
    <a href="">
      <img src="${res.img}" alt="">
      <span>${res.span}</span>
    </a>
  </div>`;
}

let skill = '';
// SKILL CARDS
fetch("portfolio.json")
  .then(response => response.json())
  .then(response => {
    response.skills.forEach(res => {
      skill += skillsEl(res);
      const skillsContent = document.querySelector(".skills-content");
      skillsContent.innerHTML = skill;
    })
  })

function skillsEl(res) {
  return `<div class="col-4">
            <a href="">
              <img src="${res.img}" alt="" />
            </a>
          </div>`;
}