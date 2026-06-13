export function renderHeader() {
  return `
    <header class="header">
      <div class="container header-content">
        <div class="logo">
          <i data-lucide="leaf" class="text-primary"></i>
          <span>AgriScan AI</span>
        </div>
        <nav class="nav-links">
          <a href="#">Home</a>
          <a href="#">Diagnosis</a>
          <a href="#">Features</a>
          <a href="#">About</a>
        </nav>
        <button class="mobile-menu-btn">
          <i data-lucide="menu"></i>
        </button>
      </div>
    </header>
  `;
}
