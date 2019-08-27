var menuItems = document.getElementsByClassName("menumobile__item");
        for (var i = 0; i < menuItems.length; i++) {
            menuItems[i].addEventListener("click", function () {
                var current = document.getElementsByClassName("menumobile__item__active");
                current[0].className = current[0].className.replace(" menumobile__item__active", "");
                this.className += " menumobile__item__active";
            })
        }
        var menuItems = document.getElementsByClassName("sidebar__item");
        for (var i = 0; i < menuItems.length; i++) {
            menuItems[i].addEventListener("click", function () {
                var current = document.getElementsByClassName("sidebar__item__active");
                current[0].className = current[0].className.replace(" sidebar__item__active", "");
                this.className += " sidebar__item__active";
            })
        }
        var menuItems = document.getElementsByClassName("menu-link");
        for (var i = 0; i < menuItems.length; i++) {
            menuItems[i].addEventListener("click", function () {
                var current = document.getElementsByClassName("active");
                current[0].className = current[0].className.replace(" active", "");
                this.className += " active";
            })
        }
function expandSidebar() {
            var contentElement = document.getElementById("content");
            var sidebarElement = document.getElementById("sidebar");
            var sidebarTxts = document.getElementsByClassName("sidebar__item__content");
            var isClosed = "false";
            if (getComputedStyle(sidebarTxts[0], null).display == "none") isClosed = "true";
            if (isClosed == "true") {
                // contentElement.style.width = "80%";
                contentElement.style.marginLeft = "150px";
                sidebarElement.style.width = "150px";
                for (var i = 0; i < sidebarTxts.length; i++) {
                    sidebarTxts[i].style.display = "block";
                }
            } else {
                // contentElement.style.width = "100%";
                contentElement.style.marginLeft = "90px";
                sidebarElement.style.width = "90px";
                for (var i = 0; i < sidebarTxts.length; i++) {
                    // sidebarTxts[i].className = sidebarTxts[i].className.replace(" d-block","");
                    sidebarTxts[i].style.display = "none";
                }
            }
        }