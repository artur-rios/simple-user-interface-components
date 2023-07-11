import { getUniqueId } from "../shared/helper-functions.js";

export class SuicNavbar extends HTMLElement {
  static template = document.createElement("template");

  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });

    // Generate a unique ID for each instance
    const elementIds = {
      navbar: getUniqueId(),
      navCheck: getUniqueId(),
      navHeader: getUniqueId(),
      navTitle: getUniqueId(),
      navBtn: getUniqueId(),
      navLinks: getUniqueId(),
    };

    const smallViewportPixelSize = 600;

    // Create a media query that targets a specific viewport width
    const mediaQuery = window.matchMedia(
      `(max-width: ${smallViewportPixelSize}px)`
    );

    // Function to apply the appropriate styles based on the viewport size
    const applyStylesBasedOnViewport = () => {
      if (mediaQuery.matches) {
        this.applySmallViewportStyles(elementIds);
      } else {
        this.applyLargeViewportStyles(elementIds);
      }
    };

    // Function to handle changes in the media query
    const handleViewportChange = (query) => {
      if (query.matches) {
        this.applySmallViewportStyles(elementIds);
      } else {
        this.applyLargeViewportStyles(elementIds);
      }
    };

    shadowRoot.appendChild(SuicNavbar.template.content.cloneNode(true));

    this.init(elementIds);

    // Initial call to apply styles based on the initial viewport size
    applyStylesBasedOnViewport();

    // Listen for changes in the viewport size
    mediaQuery.addEventListener("change", handleViewportChange);
  }

  init(elementIds) {
    const shadow = this.shadowRoot;
    const navbar = shadow.getElementById("suic-nav");
    const navCheck = shadow.getElementById("suic-nav-check");
    const navHeader = shadow.getElementById("suic-nav-header");
    const navTitle = shadow.getElementById("suic-nav-title");
    const navBtn = shadow.getElementById("suic-nav-btn");
    const navLinks = shadow.getElementById("suic-nav-links");

    navbar.id = elementIds.navbar;
    navCheck.id = elementIds.navCheck;
    navHeader.id = elementIds.navHeader;
    navTitle.id = elementIds.navTitle;
    navBtn.id = elementIds.navBtn;
    navLinks.id = elementIds.navLinks;

    const dataAttr = this.getAttribute("data");
    const title = this.getAttribute("title");

    if (title) {
      navTitle.textContent = title;
    }

    if (dataAttr) {
      const data = JSON.parse(dataAttr);

      data.forEach((item) => {
        let newLink = document.createElement("a");
        newLink.setAttribute("href", item.url);
        newLink.setAttribute("target", "_blank");
        newLink.textContent = item.name;

        navLinks.appendChild(newLink);
      });
    }

    // Standart styles
    navbar.style.backgroundColor = "#4d4d4d";
    navbar.style.fontFamily = "segoe ui";
    navbar.style.height = "50px";
    navbar.style.position = "relative";
    navbar.style.width = "100%";

    navHeader.style.display = "inline";

    navTitle.style.color = "#fff";
    navTitle.style.display = "inline-block";
    navTitle.style.fontSize = "22px";
    navTitle.style.padding = "10px";

    navBtn.style.display = "none";

    navLinks.style.display = "inline";
    navLinks.style.float = "right";
    navLinks.style.fontSize = "18px";

    navCheck.style.display = "none";

    navBtn.addEventListener("click", () => {
      navLinks.style.height =
        navLinks.style.height === "0px" ? `calc(100vh - 50px)` : "0px";

      navLinks.style.overflowY =
        navLinks.style.overflowY === "hidden" ? "auto" : "hidden";

      const navBtnNodes = navBtn.childNodes;
      for (let i = 0; i < navBtnNodes.length; i++) {
        if (navBtnNodes[i].nodeName.toLowerCase() == "label") {
          if (i > 0) {
            navBtnNodes[i].style.backgroundColor =
              navBtnNodes[i].style.backgroundColor === "rgba(0, 0, 0, 0.3)"
                ? ""
                : "rgba(0, 0, 0, 0.3)";
          }
        }
      }
    });

    const navBtnNodes = navBtn.childNodes;
    for (let i = 0; i < navBtnNodes.length; i++) {
      if (navBtnNodes[i].nodeName.toLowerCase() == "label") {
        navBtnNodes[i].setAttribute("for", elementIds.navBtn);
      }
    }

    const navLinksNodes = navLinks.childNodes;
    for (let i = 0; i < navLinksNodes.length; i++) {
      if (navLinksNodes[i].nodeName.toLowerCase() == "a") {
        navLinksNodes[i].style.color = "#efefef";
        navLinksNodes[i].style.display = "inline-block";
        navLinksNodes[i].style.padding = "13px 10px 13px 10px";
        navLinksNodes[i].style.textDecoration = "none";

        // Hover
        // Add event listeners for mouseover and mouseout
        navLinksNodes[i].addEventListener("mouseover", function () {
          navLinksNodes[i].style.backgroundColor = "rgba(0, 0, 0, 0.3)";
        });

        navLinksNodes[i].addEventListener("mouseout", function () {
          navLinksNodes[i].style.backgroundColor = "";
        });
      }
    }
  }

  applySmallViewportStyles(elementIds) {
    const shadow = this.shadowRoot;
    const navBtn = shadow.getElementById(elementIds.navBtn);
    const navLinks = shadow.getElementById(elementIds.navLinks);

    navBtn.style.display = "inline-block";
    navBtn.style.position = "absolute";
    navBtn.style.right = "0px";
    navBtn.style.top = "0px";

    navLinks.style.backgroundColor = "#333";
    navLinks.style.display = "block";
    navLinks.style.height = "0px";
    navLinks.style.left = "0px";
    navLinks.style.overflowY = "hidden";
    navLinks.style.position = "absolute";
    navLinks.style.top = "50px";
    navLinks.style.transition = "all 0.3s ease-in";
    navLinks.style.width = "100%";

    const navBtnNodes = navBtn.childNodes;
    for (let i = 0; i < navBtnNodes.length; i++) {
      if (navBtnNodes[i].nodeName.toLowerCase() == "label") {
        navBtnNodes[i].style.display = "inline-block";
        navBtnNodes[i].style.height = "50px";
        navBtnNodes[i].style.padding = "13px";
        navBtnNodes[i].style.width = "50px";

        // Hover
        // Add event listeners for mouseover and mouseout
        navBtnNodes[i].addEventListener("mouseover", function () {
          navBtnNodes[i].style.backgroundColor = "rgba(0, 0, 0, 0.3)";
        });

        navBtnNodes[i].addEventListener("mouseout", function () {
          navBtnNodes[i].style.backgroundColor = "";
        });

        let labelNodes = navBtnNodes[i].childNodes;
        for (let i = 0; i < labelNodes.length; i++) {
          if (labelNodes[i].nodeName.toLowerCase() == "span") {
            labelNodes[i].style.borderTop = "2px solid #eee";
            labelNodes[i].style.display = "block";
            labelNodes[i].style.height = "10px";
            labelNodes[i].style.width = "25px";
          }
        }
      }

      const navLinksNodes = navLinks.childNodes;
      for (let i = 0; i < navLinksNodes.length; i++) {
        if (navLinksNodes[i].nodeName.toLowerCase() == "a") {
          navLinksNodes[i].style.display = "block";
          navLinksNodes[i].style.width = "100%";
        }
      }
    }
  }

  applyLargeViewportStyles(elementIds) {
    const shadow = this.shadowRoot;
    const navBtn = shadow.getElementById(elementIds.navBtn);
    const navLinks = shadow.getElementById(elementIds.navLinks);

    navBtn.style.display = "none";

    navLinks.style.backgroundColor = "";
    navLinks.style.display = "inline";
    navLinks.style.float = "right";
    navLinks.style.fontSize = "18px";
    navLinks.style.height = "";
    navLinks.style.left = "";
    navLinks.style.overflowY = "";
    navLinks.style.position = "";
    navLinks.style.top = "";
    navLinks.style.transition = "";
    navLinks.style.width = "";

    const navLinksNodes = navLinks.childNodes;
    for (let i = 0; i < navLinksNodes.length; i++) {
      if (navLinksNodes[i].nodeName.toLowerCase() == "a") {
        navLinksNodes[i].style.display = "inline-block";
        navLinksNodes[i].style.width = "";
      }
    }
  }
}

SuicNavbar.template.innerHTML = `
    <nav class="nav" id="suic-nav">
        <input id="suic-nav-check" type="checkbox" />
        <div id="suic-nav-header" class="nav-header">
            <div id="suic-nav-title" class="nav-title"></div>
        </div>
        <div id="suic-nav-btn" class="nav-btn">
            <label for="suic-nav-check">
                <span></span>
                <span></span>
                <span></span>
            </label>
        </div>
        <div id="suic-nav-links" class="nav-links">
        </div>
    </nav>
`;

customElements.define("suic-navbar", SuicNavbar);
