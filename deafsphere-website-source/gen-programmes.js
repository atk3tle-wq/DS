const { write, EMAIL } = require("./build.js");

const body = `
<section class="section" style="padding-top:44px;">
  <div class="container">
    <div class="announcement">
      <strong>Changes to SgSL classes, effective January 2027.</strong> All programmes below launch with DeafSphere's first intake. Students transitioning from Equal Dreams: your completed levels are recognised — see the <a href="faq.html#transition">FAQ</a> for details.
    </div>

    <div class="section-head" style="text-align:left;max-width:none;">
      <h1>Programmes</h1>
      <p>Term classes, a standalone taster, and everything in between.</p>
    </div>

    <div class="grid grid-2" style="margin-bottom:32px;">
      <div class="card">
        <span class="tag pill p-navy">Term Classes</span>
        <h3>Structured, Progressive — Level 1 to 4</h3>
        <p>4 terms a year. Each term is 10 lessons plus an assessment, one evening session a week (with a second weekly session possible if demand and classroom space allow). Score 75% or above and you get a Grade A — a Certificate of Completion with distinction, and a straight path into the next level. Anything below that still gets you a Certificate of Attendance.</p>
        <div class="badge-list">
          <span class="pill p-teal">6–12 students</span>
          <span class="pill p-gold">Face-to-face</span>
        </div>
        <p style="margin-top:auto;">
          <a class="card-link" href="level-1.html">Level 1 →</a><br>
          <a class="card-link" href="level-2.html">Level 2 →</a><br>
          <a class="card-link" href="level-3.html">Level 3 →</a><br>
          <a class="card-link" href="level-4.html">Level 4 (coming soon) →</a>
        </p>
      </div>
      <div class="card">
        <span class="tag pill p-purple">Standalone Classes</span>
        <h3>Beginner Classes — Try SgSL First</h3>
        <p>A self-contained 5-session taster, completely separate from the term pathway. Runs on its own rolling calendar rather than the term/quarter schedule, so a new cycle can start whenever there's demand — new cycles are staggered every 2–3 weeks. Ends with a Certificate of Attendance.</p>
        <div class="badge-list">
          <span class="pill p-purple">Priced above term rates</span>
          <span class="pill p-teal">Face-to-face or Zoom</span>
        </div>
        <p style="margin-top:auto;"><a class="card-link" href="standalone.html">Explore Standalone Classes →</a></p>
      </div>
    </div>

    <div class="card" style="margin-bottom:48px;">
      <span class="tag pill p-teal">Beyond the term pathway</span>
      <h3>International Sign, talks, and community sessions</h3>
      <p>Want to sign with Deaf people beyond Singapore, or just get more involved without enrolling in a full term? Our International Sign course, Deaf Awareness Talks, enrichment workshops, and community sessions run alongside the term calendar.</p>
      <a class="card-link" href="community.html">See what's on →</a>
    </div>

    <h2>Term Classes vs. Standalone Classes</h2>
    <div class="table-wrap">
    <table>
      <thead><tr><th>Feature</th><th>Term Classes</th><th>Standalone Classes</th></tr></thead>
      <tbody>
        <tr><td>Structure</td><td>Progressive, 10 lessons + assessment</td><td>Short, 5 sessions</td></tr>
        <tr><td>Calendar</td><td>Runs on the quarterly term schedule</td><td>Own rolling calendar, independent of terms</td></tr>
        <tr><td>Certificate</td><td>Completion (Grade A) or Attendance</td><td>Attendance only</td></tr>
        <tr><td>Resources</td><td>Full SgSLcore access</td><td>Class-session videos only</td></tr>
        <tr><td>Pathway</td><td>Leads to the next level</td><td>No pathway into the term levels</td></tr>
        <tr><td>Homework</td><td>None for Level 1 (self-practice instead); assigned from Level 2 up</td><td>None assigned</td></tr>
      </tbody>
    </table>
    </div>

    <h2>Pricing</h2>
    <p style="color:var(--ink-soft);">Each term level has three rate options — Reduced, General, and Supporter. Pick whichever fits your situation; Supporter-rate students help keep Reduced rates possible for others.</p>
    <div class="table-wrap">
    <table>
      <thead><tr><th>Programme</th><th>Reduced</th><th>General</th><th>Supporter</th></tr></thead>
      <tbody>
        <tr><td>Level 1</td><td>$224</td><td>$256</td><td>$288</td></tr>
        <tr><td>Level 2</td><td>$300</td><td>$340</td><td>$380</td></tr>
        <tr><td>Level 3 &amp; 4</td><td>$320</td><td>$360</td><td>$400</td></tr>
        <tr><td>International Sign Course</td><td>$200</td><td>$220</td><td>$240</td></tr>
        <tr><td>Standalone Beginner Class</td><td colspan="3">Priced above the term rates — final figure to be confirmed before registration opens</td></tr>
      </tbody>
    </table>
    </div>

    <hr class="div">

    <div class="grid grid-2">
      <div class="card">
        <span class="tag pill p-gold">Private Classes</span>
        <h3>Need a schedule of your own?</h3>
        <p>Private lessons for individuals or small groups, plus corporate workshops, can be arranged outside the regular timetable. Dates aren't fixed in advance — email us and we'll work out a time with you directly.</p>
        <a class="card-link" href="mailto:${EMAIL}">Enquire about private classes →</a>
      </div>
      <div class="card">
        <span class="tag pill p-teal">Partnerships</span>
        <h3>Workshops for institutions</h3>
        <p>We partner with institutes of higher learning and accessibility units — including NUS SIGNapse and the Student Accessibility Unit — for tailored Deaf-awareness workshops, twice yearly.</p>
        <a class="card-link" href="mailto:${EMAIL}">Discuss a partnership →</a>
      </div>
    </div>

    <div class="cta-band" style="margin-top:48px;">
      <h2>Not sure where to start?</h2>
      <p>If you've never signed before, Level 1 or a Standalone Beginner class are both good entry points.</p>
      <a class="btn btn-primary" href="faq.html">Read the FAQ</a>
    </div>
  </div>
</section>
`;

write("programmes.html", "Programmes", "Term classes, standalone classes, and community programmes at DeafSphere.", "programmes.html", body);
