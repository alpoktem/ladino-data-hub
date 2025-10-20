// Header component
function loadHeader(activePage = '') {
    const header = `
    <!-- Pre-header -->
    <div class="pre-header">
        <img src="imgs/TR-EU-flag-TOP.png" alt="EU Funding">
        <p class="pre-header-text">This project is funded by the European Union.</p>
    </div>

    <!-- Main Header -->
    <header class="masthead">
        <div class="container">
            <a href="index.html" class="logo">
                <img src="imgs/sitelogo.png" alt="Ladino Logo">
                <span class="site-title">Ladino Data Hub</span>
            </a>
            <nav>
                <ul class="nav">
                    <li><a href="about.html" class="${activePage === 'about' ? 'active' : ''}">About</a></li>
                    <li><a href="https://aclanthology.org/2022.eurali-1.18/" target="_blank">Research Paper</a></li>
                    <li><a href="https://huggingface.co/collections/collectivat/ladino-data-hub-68e3ea984627ccf32a78f340" target="_blank">Hugging Face Collection</a></li>
                </ul>
            </nav>
        </div>
    </header>
    `;
    
    document.getElementById('header').innerHTML = header;
}
