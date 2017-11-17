var navToggle = document.querySelector("#main-nav-toggle");

var navList = document.querySelector("#main-nav-list")

//Always checks to see if elements exist before writing js involving those elements
if (navToggle && navList) {
  navToggle.addEventListener("click", function() {
    /*
    navToggle.classList.toggle("close");
    navList.classList.toggle("open");
    */
    //This checks to see if the element has the class "close" on it
    if (navToggle.classList.contains("close")) {
      //If the element has the close class, that means the nav is open; to close it, we need to remove the open class from nav list, and remove the close class to make it look like a hamburger again
      navToggle.classList.remove("close");
      navList.classList.remove("open");
    } else {
      //If the element does not have the close class open, then the else says the close class should be open and the open class should show the list
      navToggle.classList.add("close");
      navList.classList.add("open");
    }
  });
}
