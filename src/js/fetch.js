
//**Portfolio Data */

const portfolioContainer = document.getElementById("portfolio-container")
const portfolioCategories = document.querySelectorAll(".portfolio-categories li")

//handling default category display
fetch("portfolio.json")
  .then(res => res.json())
  .then(data => handleItemAppend(data));

//-----------/

//handling category filter
portfolioCategories.forEach((category) => {
  category.addEventListener("click", (e) => {
    portfolioCategories.forEach((category) => {
      category.classList.remove("current");
    })
    portfolioContainer.innerHTML = "";
    category.classList.add("current");
    const currentCateogoryId = e.target.getAttribute("data-category")
    fetch("portfolio.json")
      .then(res => res.json())
      .then(data => handlePortfolioItems(data, currentCateogoryId));
  })

})
//_____________//


//handling all portfolio items from json file
const handlePortfolioItems = (allItems, categoryId) => {
  const categoryItems = allItems.filter(item => {
    return item.category_slugs.includes(categoryId)
  })
  handleItemAppend(categoryItems)
}
//------------//

//add items to the portfolio container
const handleItemAppend = (items) => {
  items.map(item => {
    const child = document.createElement("div");
    child.innerHTML = `
       <div class="p-5 bg-white rounded-lg mb-4 border border-[#f4f5f7] hover:shadow-badge duration-700">
            <div onclick="my_modal_${item.id}.showModal()" class="openModal cursor-pointer border-2 p-2 border-[#593DAB] rounded-lg overflow-hidden group">
             <img class="group-hover:scale-[1.2] group-hover:rotate-12 duration-700" loading="lazy"
                src="${item.image}" loading="lazy" alt="">
            </div>
            <div class="pt-4">
              <h3 class="text-[16px] md:text-[18px] font-semibold mb-2 text-black group-hover:text-main duration-700">${item.title}</h3>
              <span class="text-[14px] md:text-[16px] text-[#999]">${item.category_name}</span>
            </div>
          </div>
          <dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle">
    `
    portfolioContainer.appendChild(child);
  })

}
//------------//
