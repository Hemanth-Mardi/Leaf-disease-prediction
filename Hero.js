export function renderHero() {
  return `
    <section class="hero">
      <div class="container hero-grid">
        <div class="hero-content">
          <h1>Instant Crop Disease Diagnosis</h1>
          <p>Protect your harvest with our advanced AI detection tool. Upload a photo of your plant and get immediate treatment recommendations.</p>
          <div class="hero-actions">
            <button class="btn btn-primary" id="start-diagnosis-btn">
              <i data-lucide="upload"></i> Start Diagnosis
            </button>
            <button class="btn btn-outline">
              <i data-lucide="shield-check"></i> Learn More
            </button>
          </div>
        </div>
        <div class="diagnosis-card-wrapper">
           <div id="diagnosis-app" class="diagnosis-card">
              <div class="upload-zone" id="drop-zone">
                <input type="file" id="upload-input" class="hidden-input" accept="image/*">
                <div class="upload-icon">
                  <i data-lucide="upload" width="48" height="48"></i>
                </div>
                <h3>Upload Plant Photo</h3>
                <p style="color: var(--text-muted); margin-top: 0.5rem; font-size: 0.9rem;">
                  Drag & drop or click to browse
                </p>
                <button class="btn btn-outline" style="margin-top: 1.5rem;" onclick="document.getElementById('upload-input').click()">
                  Select Image
                </button>
              </div>
           </div>
        </div>
      </div>
    </section>
  `;
}
