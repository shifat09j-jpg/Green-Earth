const categoryContainer = document.getElementById("categoryContainer");
const treeContainer = document.getElementById("treeContainer");
const loadCategory = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((data) => {
    const categories = data.categories;
      //   console.log(categories)
      showCategory(categories);
    })
    .catch((err) => {
      console.log(err);
    });
};

const showCategory = (categories) => {
  categories.forEach((cat) => {
    categoryContainer.innerHTML += `
            <li id="${cat.id}" class="hover:border-b-4 hover:bg-blue-600 cursor-pointer">${cat.category_name}</li>
        `;
  });     
}
 const loadNewsByCategory = (categoryId) => {
  //   console.log(categoryId);
  fetch(`https://openapi.programming-hero.com/api/plant/${id}`)
    .then((res) => res.json())
    .then((data) => {
      treeCategory(data.category_name);
    })
    .catch((err) => {
       showError()
    });
};

loadCategory();



