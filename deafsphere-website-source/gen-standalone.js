const { write, EMAIL } = require("./build.js");

const body = `
<section class="section" style="padding-top:36px;">
  <div class="container">
    <span class="pill p-purple">Standalone Class</span>
    <h1 style="margin-top:14px;">Standalone Beginner Classes</h1>
    <p class="lead" style="color:var(--ink-soft);font-size:1.05rem;">A flexible, no-commitment introduction to Singapore Sign Language — start any time.</p>

    <div class="page-layout" style="margin-top:32px;">
      <nav class="onpage-nav" aria-label="On this page">
        <h4>On this page</h4>
        <ul>
          <li><a href="#description">Description</a></li>
          <li><a href="#format">Format</a></li>
          <li><a href="#audience">Who It's For</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#registration">Registration</a></li>
        </ul>
      </nav>

      <div>
        <h2 id="description">Programme Description</h2>
        <p>Standalone classes are a self-contained taste of Singapore Sign Language, completely separate from the Level 1–4 term pathway. Completing a Standalone class does not grant entry into Level 2 — it's designed purely to help you explore SgSL and Deaf culture with no long-term commitment.</p>
        <p>Unlike the term levels, Standalone classes don't follow the quarterly term calendar — they run on their own rolling schedule, so a new 5-week cycle can start whenever there's enough interest, roughly every 2–3 weeks.</p>

        <h2 id="format">Format</h2>
        <div class="table-wrap">
        <table>
          <thead><tr><th>Type</th><th>Sessions</th><th>Class Size</th><th>Format</th></tr></thead>
          <tbody>
            <tr><td>Face-to-Face</td><td>5</td><td>6–12</td><td>In person</td></tr>
            <tr><td>Zoom</td><td>5</td><td>6–12</td><td>Online</td></tr>
          </tbody>
        </table>
        </div>
        <ul>
          <li><strong>Resources:</strong> notes with videos of signs taught in class only (no full SgSLcore access)</li>
          <li><strong>Certificate:</strong> Certificate of Attendance</li>
        </ul>

        <h2 id="audience">Who It's For</h2>
        <p>Anyone curious about SgSL who wants a low-commitment way to try it — no prior experience needed. If you think you might want to continue on to Level 1 afterwards, that's a separate registration; a Standalone class doesn't carry over into the term pathway.</p>

        <h2 id="pricing">Pricing</h2>
        <div class="pricing-note">
          <p style="margin-bottom:0;">Standalone pricing is set above our term-class rates — we're finalising the exact figure before registration opens. Payment will be via PayNow Corporate. Seats are confirmed on payment, first come first served, with no refunds once paid unless we cancel the class.</p>
        </div>

        <h2 id="registration">Registration</h2>
        <p>New cycles open on a rolling basis, and preferred start dates can be discussed directly with the office if you're coordinating a group. <a href="mailto:${EMAIL}">Email us</a> to find out the next available start date.</p>
        <a class="btn btn-primary" href="mailto:${EMAIL}">Register your interest</a>

        <hr class="div">
        <p><a href="programmes.html">← Back to all programmes</a> &nbsp;·&nbsp; <a href="level-1.html">Looking for the full pathway? Start at Level 1 →</a></p>
      </div>
    </div>
  </div>
</section>
`;

write("standalone.html", "Standalone Beginner Classes", "A flexible, no-commitment Singapore Sign Language taster class at DeafSphere.", "standalone.html", body);
