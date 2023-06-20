fetch('http://localhost:5678/api/works')
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    console.log(localStorage.getItem("token"));
    const gallery = document.querySelector(".gallery");
    let works = "";
    for (let i in data) {
      let work = data[i];
      let workObject = `
      <figure data-work="${work.id}" data-category="${work.categoryId}"> 
       <img src="${work.imageUrl}" alt="${work.title}">
        <figcaption>${work.title}</figcaption>
      </figure> 
      `;
      works += workObject;
    }
    gallery.innerHTML = works;
  });

fetch('http://localhost:5678/api/categories')
  .then(function (res) {
    return res.json();
  })
  .then(function (categories) {
    // récupération des catégories
    let categoriesHTML = '<button data-filter="all" id="button-filter-all">Tous</button>';
    for (let i in categories) {
      categoriesHTML += `<button data-filter="${categories[i].id}">${categories[i].name}</button>`;
    }
    // affichage des catégories
    const filterContainer = document.querySelector('.filter');
    filterContainer.innerHTML = categoriesHTML;

    // clique sur les boutons
    const buttons = document.querySelectorAll("[data-filter]");
    // tri des catégories 
    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        const categoryId = button.getAttribute("data-filter");
        const projects = document.querySelectorAll("[data-work]");

        projects.forEach(function (project) {
          project.style.display = "none";
          if (project.getAttribute("data-category") === categoryId || categoryId === "all") {
            project.style.display = "block";
          } 
        })
      });
    });

  })






