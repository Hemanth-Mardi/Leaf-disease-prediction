export function renderFeatures() {
    return `
    <section class="section-padding" style="background: var(--bg-surface);">
      <div class="container">
        <div class="text-center" style="max-width: 600px; margin: 0 auto;">
          <h2 style="font-size: 2.25rem; margin-bottom: 1rem;">Why Choose AgriScan?</h2>
          <p style="color: var(--text-muted);">Our technology combines agricultural expertise with cutting-edge artificial intelligence.</p>
        </div>
        
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">
              <i data-lucide="zap"></i>
            </div>
            <h3>Instant Results</h3>
            <p style="color: var(--text-muted); margin-top: 0.5rem;">Get diagnosis results in seconds, not days. Act fast to save your crops.</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">
              <i data-lucide="shield-check"></i>
            </div>
            <h3>98% Accuracy</h3>
            <p style="color: var(--text-muted); margin-top: 0.5rem;">Trained on over 1 million plant images for reliable disease detection.</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">
              <i data-lucide="sprout"></i>
            </div>
            <h3>Expert Treatments</h3>
            <p style="color: var(--text-muted); margin-top: 0.5rem;">Receive detailed treatment plans approved by agricultural experts.</p>
          </div>
        </div>
      </div>
    </section>
  `;
}
