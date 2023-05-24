class Navbar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = (
            <header>
                <nav class="navbar-top">
                    <a href="index.html">Home</a>
                    <a href="News.html">News</a>
                    <a href="art.html">Culture</a>
                    <a href="About.html">About</a>
                </nav>
            </header>
        );
    }
}

customElements.define("navbar", Navbar);
