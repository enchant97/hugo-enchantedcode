// @license magnet:?xt=urn:btih:d3d9a9a6595521f9666a5e94cc830dab83b65699&dn=expat.txt
"use-strict";

function create_element_anchor(parent) {
    if (!parent.id) { return }

    let anchor = document.createElement("a");
    anchor.classList.add("page-anchor");
    anchor.title = "Anchor For: '" + parent.innerText + "'";
    anchor.href = document.location.href + "#" + parent.id;
    anchor.innerText = "¶";

    parent.append(anchor);
}

function add_article_anchors() {
    let headings = document.querySelectorAll('#main article :is(h1, h2, h3, h4, h5, h6)');
    headings.forEach(heading => {
        create_element_anchor(heading);
    });
}

function setup_theme_picker_bnt() {
    let picker_bnt = document.getElementById("theme-toggle-bnt")
    picker_bnt.addEventListener("click", ThemeChanger.toggle_theme_picker);
    picker_bnt.classList.remove("hidden");
}

function setup_back_to_top() {
    let bnt = document.createElement("a");
    bnt.id = "to-top-bnt";
    bnt.innerText = "To Top";
    bnt.href = "#";
    document.addEventListener("scroll", _ => {
        if (window.scrollY > 200) {
            bnt.style.display = "block";
        } else {
            bnt.style.display = "none";
        }
    });
    document.body.append(bnt);
}

ThemeChanger.theme_picker_parent = document.querySelector("main");
ThemeChanger.use_local = true;
ThemeChanger.selected_theme_css_class = "active";

let themeToggleBnt = document.getElementById("theme-toggle-bnt")
themeToggleBnt.addEventListener("click", ThemeChanger.toggle_theme_picker);
themeToggleBnt.classList.remove("hidden");

ThemeChanger.on_load();
add_article_anchors();
setup_back_to_top()
// @license-end
