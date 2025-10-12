// Footer component
function loadFooter() {
    const footer = `
    <footer class="site-footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>Ladino Data Hub</h3>
                    <ul>
                        <li><a href="about.html">About</a></li>
                        <li><a href="https://aclanthology.org/2022.eurali-1.18/" target="_blank">Research Paper</a></li>
                    </ul>
                </div>
                <div class="footer-section contact">
                    <h3>Contact</h3>
                    <p>Halaskargazi cad. No: 94 Maya apt. K: 7</p>
                    <p>Osmanbey, Şişli 34363 Istanbul Turkey</p>
                    <p>+90 212 231 92 82</p>
                    <p>sephardiccenter@gmail.com</p>
                </div>
            </div>
        </div>
        <div class="footer-logos">
            <img src="imgs/bottom_logos.webp" alt="Partner Logos">
        </div>
        <p class="logos-disclaimer">
            This web page was created with the financial support of the European Union. The content of this website is the sole responsibility of Col.lectivaT and SKAD and does not necessarily reflect the views of the European Union.
        </p>
    </footer>
    `;
    
    document.getElementById('footer').innerHTML = footer;
}