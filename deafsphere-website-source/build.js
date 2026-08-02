const fs = require("fs");
const path = require("path");

const SITE = "DeafSphere";
const EMAIL = "hello@deafsphere.sg"; // placeholder — replace with your real domain/email once confirmed

const CSS = fs.readFileSync(path.join(__dirname, "css/style.css"), "utf8");
const JS = fs.readFileSync(path.join(__dirname, "js/site.js"), "utf8");

function head(title, desc, active) {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title} — ${SITE}</title>
<meta name="description" content="${desc}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
<style>
${CSS}
</style>
</head>
<body>
<a class="skip-link" href="#main">Skip to content</a>
${header(active)}
<main id="main">`;
}

function header(active) {
  const links = [
    ["index.html", "Home"],
    ["programmes.html", "Programmes"],
    ["community.html", "Community & Talks"],
    ["schedule.html", "2027 Schedule"],
    ["faq.html", "FAQ"],
  ];
  const items = links.map(([href, label]) =>
    `<li><a href="${href}"${active === href ? ' class="active" aria-current="page"' : ""}>${label}</a></li>`
  ).join("");
  return `<header class="site-header">
  <div class="container">
    <a class="logo" href="index.html">
      <!-- Placeholder monogram — swap for the real logo once confirmed -->
      <span class="logo-badge">DS</span>
      <span><span class="brand-sgsl">Deaf</span><span class="brand-space">Sphere</span></span>
    </a>
    <nav class="main-nav" aria-label="Main">
      <ul>${items}<li><a href="mailto:${EMAIL}" class="btn btn-outline" style="padding:8px 18px;">Contact</a></li></ul>
    </nav>
  </div>
</header>`;
}

function footer() {
  return `<footer class="site-footer">
  <div class="container footer-grid">
    <div>
      <h4>DeafSphere</h4>
      <p style="color:#C9D5F2;max-width:32ch;">A Deaf-owned, Deaf-led home for Singapore Sign Language education — opening January 2027.</p>
    </div>
    <div>
      <h4>Explore</h4>
      <ul>
        <li><a href="programmes.html">Programmes</a></li>
        <li><a href="community.html">Community &amp; Talks</a></li>
        <li><a href="schedule.html">2027 Schedule</a></li>
        <li><a href="faq.html">FAQ</a></li>
      </ul>
    </div>
    <div>
      <h4>Get in touch</h4>
      <ul>
        <li><a href="mailto:${EMAIL}">${EMAIL}</a></li>
        <li><a href="#">Instagram</a></li>
        <li><a href="#">Facebook</a></li>
        <li><a href="#">TikTok</a></li>
        <li><a href="#">LinkedIn</a></li>
      </ul>
    </div>
  </div>
  <div class="container footer-bottom">
    <span>© 2027 DeafSphere. All rights reserved.</span>
    <span>Formerly delivered by Equal Dreams — classes continue with the same instructors.</span>
  </div>
</footer>
<script>
${JS}
</script>
</body>
</html>`;
}

function write(file, title, desc, active, body) {
  const html = head(title, desc, active) + body + `</main>` + footer();
  fs.writeFileSync(path.join(__dirname, file), html);
  console.log("wrote", file);
}

module.exports = { write, SITE, EMAIL };
