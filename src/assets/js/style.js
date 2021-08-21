window.onclick = function(event) {
     if (!event.target.matches('.btn-txt')) {
        var dropdowns = document.getElementsByClassName("nav-dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
    }
    // else if(!event.target.matches('.profil-txt')) {
    //     var dropdowns1 = document.getElementsByClassName("nav-profil-content");
    //     var j;
    //     for (j = 0; j < dropdowns1.length; j++) {
    //       var openDropdown1 = dropdowns1[j];
    //       if (openDropdown1.classList.contains('show')) {
    //         openDropdown1.classList.remove('show');
    //       }
    //     }
    // }
    
}
window.__forceSmoothScrollPolyfill__ = true;
//sidebar
// let btn = document.querySelector("#btn");
//    let sidebar = document.querySelector(".sidebar");
//    let searchBtn = document.querySelector(".bx-search");

//    btn.onClick
//    btn.onClick = function() {
//      sidebar.classList.toggle("active");
//    }
//    searchBtn.onClick = function() {
//      sidebar.classList.toggle("active");
//    }