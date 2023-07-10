import { getUniqueId } from "../shared/helper-functions.js";

export class SuicTextInput extends HTMLElement {
  static template = document.createElement("template");

  constructor() {
    super();
  }

  // Define a getter and a setter for the value property
  get value() {
    return this.getAttribute("value");
  }

  set value(newValue) {
    this.setAttribute("value", newValue);
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });

    const input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("id", "suic-text-input");

    // Add an event listener to handle input value changes
    input.addEventListener("input", () => {
      this.value = input.value;
    });

    // Generate a unique ID for each instance
    const elementId = getUniqueId();

    shadowRoot.appendChild(input);

    this.init(elementId);
  }

  init(elementId) {
    const shadow = this.shadowRoot;

    const component = shadow.getElementById("suic-text-input");

    if (component) {
      component.id = elementId;

      const inputType = this.getAttribute("type");
      const placeholder = this.getAttribute("placeholder");

      if (inputType) {
        component.setAttribute("type", inputType);
      }

      if (placeholder) {
        component.setAttribute("placeholder", placeholder);
      }

      // Standard styles
      const colors = {
        background: "#fff",
        focus: "#fe0000",
        font: "#323232",
        main: "#323232",
      };

      component.style.backgroundColor = `${colors.background}`;
      component.style.border = `2px solid ${colors.main}`;
      component.style.borderRadius = "5px";
      component.style.boxShadow = `4px 4px ${colors.main}`;
      component.style.color = `${colors.font}`;
      component.style.fontSize = "15px";
      component.style.fontWeight = "600";
      component.style.height = "40px";
      component.style.outline = "none";
      component.style.padding = "5px 10px";
      component.style.width = "200px";

      // Focus
      component.addEventListener("focus", function () {
        component.style.border = `2px solid ${colors.focus}`;
      });

      // Focus out
      component.addEventListener("focusout", function () {
        component.style.border = `2px solid ${colors.main}`;
      });
    }
  }
}

customElements.define("suic-text-input", SuicTextInput);
