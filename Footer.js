export function renderFooter() {
    return `
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div>
            <div class="logo" style="color: white; margin-bottom: 1rem;">
              <i data-lucide="leaf"></i>
              <span>AgriScan AI</span>
            </div>
            <p style="color: #a7f3d0; line-height: 1.6;">Empowering farmers with technology for a sustainable future.</p>
          </div>
          
          <div>
            <h3>Quick Links</h3>
            <a href="#">Home</a>
            <a href="#">About Us</a>
            <a href="#">How it Works</a>
            <a href="#">Contact</a>
          </div>
          
          <div>
            <h3>Resources</h3>
            <a href="#">Disease Library</a>
            <a href="#">Farmer's Blog</a>
            <a href="#">Community Forum</a>
            <a href="#">Help Center</a>
          </div>
          
          <div>
            <h3>Contact</h3>
            <a href="mailto:support@agriscan.ai">support@agriscan.ai</a>
            <a href="tel:+1234567890">+1 (234) 567-890</a>
          </div>
        </div>
        
        <div class="copyright">
          <p>&copy; 2024 AgriScan AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `;
}
