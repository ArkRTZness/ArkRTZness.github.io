class MiFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2023
        Fernando Jasso, Adriana Maldonado, Esteban Portocarrero
        Diseño de Sistemas de proyectos Informaticos 
      </p>`;
  }
}

customElements.define("mi-footer", MiFooter);
