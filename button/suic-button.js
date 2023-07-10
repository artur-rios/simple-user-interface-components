import { getUniqueId } from "../shared/helper-functions.js";

export class SuicButton extends HTMLElement {
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

      // Dynamic styles
      const backgroundColor = this.getAttribute("bg-color")
        ? this.getAttribute("bg-color")
        : "#fe0000";

      const fontSize = this.getAttribute("font-size")
        ? this.getAttribute("font-size")
        : "15px";

      const horPad = this.getAttribute("hor-pad")
        ? this.getAttribute("hor-pad")
        : "20px";

      const textColor = this.getAttribute("text-color")
        ? this.getAttribute("text-color")
        : "#fff";

      const verPad = this.getAttribute("ver-pad")
        ? this.getAttribute("ver-pad")
        : "10px";

      // Standard styles
      component.style.backgroundColor = backgroundColor;
      component.style.border = "2px solid #000";
      component.style.borderRadius = "10px";
      component.style.boxShadow = "5px 5px 0px #000";
      component.style.color = textColor;
      component.style.cursor = "pointer";
      component.style.display = "inline-flex";
      component.style.fontSize = fontSize;
      component.style.fontWeight = "bold";
      component.style.padding = `${verPad} ${horPad}`;
      component.style.textAlign = "center";
      component.style.textDecoration = "none";
      component.style.transition = "all 0.3s ease";
      component.style.userSelect = "none";
      component.style.touchAction = "manipulation";
      component.style.whiteSpace = "nowrap";
      component.style.willChange = "box-shadow, transform";

      // Focus (:active)
      component.addEventListener("focus", function () {
        component.style.backgroundColor = "#fcf414";
        component.style.boxShadow = "none";
        component.style.transform = "translateY(4px)";
      });

      component.addEventListener("blur", function () {
        component.style.backgroundColor = backgroundColor;
        component.style.boxShadow = "5px 5px 0px #000";
        component.style.transform = "";
      });

      // Hover
      // Add event listeners for mouseover and mouseout
      component.addEventListener("mouseover", function () {
        component.style.backgroundColor = textColor;
        component.style.border = `2px solid ${backgroundColor}`;
        component.style.boxShadow = `5px 5px 0px ${backgroundColor}`;
        component.style.color = backgroundColor;
      });

      component.addEventListener("mouseout", function () {
        component.style.backgroundColor = backgroundColor;
        component.style.border = "2px solid #000";
        component.style.boxShadow = "5px 5px 0px #000";
        component.style.color = textColor;
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
