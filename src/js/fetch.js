
//**Portfolio Data */

const portfolioContainer = document.getElementById("portfolio-container")

 fetch("portfolio.json")
  .then(res => res.json())
  .then(data => handlePortfolioItems(data));

const handlePortfolioItems = (Items) => {
 
    Items.map(item => {
      const child = document.createElement("div");
      child.innerHTML=`
         <div class="p-5 bg-white rounded-lg mb-4 border border-[#f4f5f7] hover:shadow-badge duration-700">
              <div class="border-2 p-2 border-[#593DAB] rounded-lg overflow-hidden group">
               <img class="group-hover:scale-[1.2] group-hover:rotate-12 duration-700" loading="lazy"
                  src="${item.image}" loading="lazy" alt="">
              </div>
              <div class="pt-4">
                <h3 class="text-[18px] font-semibold mb-2">${item.title}</h3>
                <span class="text-[16px] text-[#999]">${item.category}</span>
              </div>
            </div>
      `
      portfolioContainer.appendChild(child);
    })
}

