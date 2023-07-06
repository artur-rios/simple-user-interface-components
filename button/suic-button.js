import { getUniqueId } from "../shared/helper-functions.js";

class SuicButton extends HTMLElement {
  static template = document.createElement("template");

  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });

    // Generate a unique ID for each instance
    const elementId = getUniqueId();

    shadowRoot.appendChild(SuicButton.template.content.cloneNode(true));

    this.init(elementId);
  }

  init(elementId) {
    const shadow = this.shadowRoot;

    const buttonType = this.getAttribute("type");
    const component = shadow.querySelector("#suic-button");

    if (component) {
      component.id = elementId;
      component.textContent = this.getAttribute("text");

      if (buttonType) {
        component.setAttribute("type", buttonType);
      }

      // Handle clicks
      component.addEventListener("click", () => {
        this.handleClick(component.textContent);
      });

      // Standard styles
      component.style.alignItems = "center";
      component.style.appearance = "none";
      component.style.borderRadius = "5px";
      component.style.borderWidth = "0";
      component.style.boxShadow =
        "rgba(45, 35, 66, 0.4) 0 2px 4px,rgba(45, 35, 66, 0.3) 0 7px 13px -3px,#D6D6E7 0 -3px 0 inset";
      component.style.boxSizing = "border-box";
      component.style.cursor = "pointer";
      component.style.display = "inline-flex";
      component.style.height = "48px";
      component.style.justifyContent = "center";
      component.style.lineHeight = "1";
      component.style.listStyle = "none";
      component.style.overflow = "hidden";
      component.style.paddingLeft = "16px";
      component.style.paddingRight = "16px";
      component.style.position = "relative";
      component.style.textAlign = "left";
      component.style.textDecoration = "none";
      component.style.transition = "box-shadow .15s,transform .15s";
      component.style.userSelect = "none";
      component.style.touchAction = "manipulation";
      component.style.whiteSpace = "nowrap";
      component.style.willChange = "box-shadow, transform";
      component.style.fontSize = "18px";

      // Dynamic styles
      const bgColor = this.getAttribute("bg-color");
      const textColor = this.getAttribute("text-color");

      if (bgColor) {
        component.style.backgroundColor = bgColor;
      }

      if (textColor) {
        component.style.color = textColor;
      }

      // Focus
      component.addEventListener("focus", function () {
        component.style.boxShadow =
          "#D6D6E7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset";
      });

      // Hover
      // Add event listeners for mouseover and mouseout
      component.addEventListener("mouseover", function () {
        component.style.boxShadow =
          "rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset";
        component.style.transform = "translateY(-2px)";
      });

      component.addEventListener("mouseout", function () {
        component.style.boxShadow = ""; // Reset background color on mouseout
        component.style.transform = ""; // Reset text color on mouseout
      });
    }
  }

  handleClick(buttonClicked) {
    const event = new CustomEvent("suicClick", {
      bubbles: true,
      detail: {
        buttonText: buttonClicked,
      },
    });

    this.dispatchEvent(event);
  }
}

SuicButton.template.innerHTML = `<button id="suic-button" type="button"></button>`;

customElements.define("suic-button", SuicButton);
