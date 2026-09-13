export default function Footer() {
  return (
    <footer className="shared-footer-main">
      <div className="shared-footer-top-section">
        <div className="shared-footer-branding-container">
          <div className="shared-footer-branding-text">
            <h2 className="shared-footer-wedding-text" style={{ fontSize: 'inherit', fontWeight: 400 }}>
              <span className="footer-categorytype">wedding</span> Invitation website by
            </h2>
            <span className="shared-footer-brand-name">Invitationnation</span>
          </div>
          <div className="shared-footer-logo-group" aria-hidden="true">
            <svg width="52" height="52" viewBox="0 0 52 52" role="img" aria-label="Invitation Nation logo">
              <circle cx="26" cy="26" r="24" fill="#35004d" />
              <text
                x="26"
                y="33"
                textAnchor="middle"
                fontFamily="Georgia, serif"
                fontSize="22"
                fontWeight="700"
                fill="#fff"
              >
                IN
              </text>
            </svg>
          </div>
        </div>
      </div>

      <div className="shared-footer-bottom-wrapper">
        <div className="shared-footer-container">
          <div className="shared-footer-links-row">
            <a href="#report" className="shared-footer-link shared-footer-gray-link">
              <span className="shared-footer-link-text">Report a Problem</span>
            </a>
            <a
              className="shared-footer-link shared-footer-gray-link"
              href="mailto:marketing@codenimbussolutions.com?subject=Invitation Support&body=Hello Team,%0A%0AI need help with..."
            >
              <span className="shared-footer-link-text">Contact Support</span>
            </a>
            <a className="shared-footer-link shared-footer-gray-link" href="#privacy">
              <span className="shared-footer-link-text">Privacy Policy</span>
            </a>
          </div>
          <div className="shared-footer-attribution">
            POWERED BY <span>INVITATION NATION</span>
          </div>
          <div className="shared-footer-legal-bar">
            <p className="shared-footer-legal-text">
              © 2026 Invitation Nation. All rights reserved. Crafted with care for your forever.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
