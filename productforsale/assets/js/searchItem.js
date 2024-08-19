// search bar




// let searchProduct = () => {
//     let searchProductInput = document.getElementById('searchInput');
//     searchProductInput.addEventListener('keyup', () =>{
//         let filterKey =  searchProductInput.value.toLowerCase();
//         let searchData = document.querySelectorAll('.product-container')
//         let searchContainer = searchData.querySelectorAll(".product-cover");
//         let falseProduct = false
//         searchContainer.forEach((searchInput) => {
//             let dataTitle = searchInput.querySelectorAll(".title")
//            if(dataTitle.innerHTML.toLowerCase().indexOf(filterKey) < 0){
//                searchInput.classList.remove("addbg-color")
//                falseProduct = true
    
//            } else {
//             searchInput.classList.add("addbg-color")
//             falseProduct = false
//            }
           
//         })
    
//     })

// }
// searchProduct()

//   document.getElementById("searchIcon").addEventListener("click", () => {
//     searchProduct()
// })























// search bar






            let title = document.querySelectorAll(".product-cover a");

const searchItem = document.getElementById("searchIcon"); 
             searchItem.addEventListener("click", () => {
              let searchProductInput = document.getElementById("searchInput");
              let input = searchProductInput.value.toLowerCase();
              if (input !== "") {
                let regExp = new RegExp(input, "gi");
                title.innerHTML = title.textContent.replace(
                  regExp,
                  "<mark>$&</mark>"
                );
              }
            });


