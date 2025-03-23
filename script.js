const main = document.getElementById("main")
const hidden = document.getElementById("expanded-content")
const expandedGrid = document.getElementById("expanded-grid")
const viewMore = document.getElementById("view-more")

main.addEventListener("click", function(){
    main.style.display = "none"
    hidden.style.display = "block"
})

viewMore.addEventListener("click", function(){
    expandedGrid.style.display = "flex"
    viewMore.style.display = "none"
})