function goToNextPage(pageNumber) {
  var pages = document.getElementsByClassName("page");
  for (var i = 0; i < pages.length; i++) {
    pages[i].classList.remove("active");
  }
  document.getElementById("page" + pageNumber).classList.add("active");
}

// Initially show the first page
document.getElementById("page1").classList.add("active");
