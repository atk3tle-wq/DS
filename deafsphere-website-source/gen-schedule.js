const { write, EMAIL } = require("./build.js");
const { TERMS, QUARTERS } = require("./site-data.js");

const termRows = TERMS.map(t => `<tr><td>${t.term}</td><td>${t.start}</td><td>${t.end}</td><td>${t.assessment}</td><td>${t.breakDates}</td></tr>`).join("");
const quarterRows = QUARTERS.map(q => `<tr><td>${q.range}</td><td>${q.terms}</td><td>${q.also}</td></tr>`).join("");

const body = `
<section class="section" style="padding-top:36px;">
  <div class="container">
    <h1>2027 Course Calendar</h1>
    <p class="lead" style="color:var(--ink-soft);font-size:1.05rem;">Term dates, weekly timetable, and instructor line-up for our launch year.</p>

    <h2 style="margin-top:36px;">Annual Term Dates</h2>
    <div class="table-wrap">
    <table>
      <thead><tr><th>Term</th><th>Start</th><th>End</th><th>Assessment Week</th><th>Break</th></tr></thead>
      <tbody>
        ${termRows}
      </tbody>
    </table>
    </div>

    <h2>Weekly Schedule</h2>
    <h3>Evening Face-to-Face — Mon to Thu, 7:30pm–9:30pm</h3>
    <div class="table-wrap">
    <table>
      <thead><tr><th>Day</th><th>Classroom 1</th><th>Classroom 2</th></tr></thead>
      <tbody>
        <tr><td>Monday</td><td>Level 1A</td><td>Level 2A</td></tr>
        <tr><td>Tuesday</td><td>Level 1B</td><td>Level 2B</td></tr>
        <tr><td>Wednesday</td><td>Level 3A</td><td>Standalone F2F — Cycle 1</td></tr>
        <tr><td>Thursday</td><td>Level 3B</td><td>Standalone F2F — Cycle 2</td></tr>
      </tbody>
    </table>
    </div>

    <h3>Online Standalone — Zoom</h3>
    <div class="table-wrap">
    <table>
      <thead><tr><th>Day</th><th>Time</th><th>Class</th></tr></thead>
      <tbody>
        <tr><td>Friday</td><td>7:30pm–9:30pm</td><td>Standalone Zoom — Cycle 1</td></tr>
        <tr><td>Saturday</td><td>10:00am–12:00pm</td><td>Standalone Zoom — Cycle 2</td></tr>
      </tbody>
    </table>
    </div>

    <h3>Daytime Reserve — Mon to Sat</h3>
    <p>10:00am–12:00pm and 2:00pm–4:00pm are kept free at launch for private classes, corporate workshops, and overflow — activated once demand is proven.</p>

    <h2>Instructor Line-up</h2>
    <div class="table-wrap">
    <table>
      <thead><tr><th>Instructor</th><th>Availability</th><th>Class(es)</th><th>Weekly Hours</th></tr></thead>
      <tbody>
        <tr><td>Owner 1</td><td>Day &amp; Night</td><td>Level 1A (Mon) + Zoom-1 (Fri)</td><td>4 hrs</td></tr>
        <tr><td>Owner 2</td><td>Day &amp; Night</td><td>Level 1B (Tue) + Zoom-2 (Sat)</td><td>4 hrs</td></tr>
        <tr><td>Freelancer 1</td><td>Night only</td><td>Level 2A (Mon)</td><td>2 hrs</td></tr>
        <tr><td>Freelancer 2</td><td>Night only</td><td>Level 2B (Tue)</td><td>2 hrs</td></tr>
        <tr><td>Freelancer 3</td><td>Night only</td><td>Level 3A (Wed)</td><td>2 hrs</td></tr>
        <tr><td>Freelancer 4</td><td>Night only</td><td>Level 3B (Thu)</td><td>2 hrs</td></tr>
        <tr><td>Freelancer 5</td><td>Day &amp; Night</td><td>Standalone F2F-1 (Wed) + F2F-2 (Thu)</td><td>4 hrs</td></tr>
      </tbody>
    </table>
    </div>
    <p style="color:var(--ink-soft);">7 instructors across our weekly sections — no one teaches more than 2 sections. Standalone classes run on their own calendar (see below), separate from this weekly line-up.</p>

    <h2>What's Running Each Quarter</h2>
    <p>Beyond the weekly term classes above, here's what's on through our launch year. Level counts show how many sections of that level are running that quarter — not the number of lessons (every section still runs 10 lessons + assessment).</p>
    <div class="table-wrap">
    <table>
      <thead><tr><th>Quarter</th><th>Term Classes</th><th>Also On</th></tr></thead>
      <tbody>
        ${quarterRows}
      </tbody>
    </table>
    </div>
    <p>Standalone Beginner classes aren't shown here — new cycles run continuously throughout the year, independent of this quarterly schedule. See <a href="standalone.html">Standalone Classes</a> for details, and <a href="community.html">Community &amp; Talks</a> for more on the IS Course, Deaf Awareness Talks, and Enrichment Series.</p>

    <h2>Public Holiday Notes</h2>
    <ul>
      <li>Saturday Zoom classes fall on 5 public holidays in 2027: Chinese New Year (6 Feb), Labour Day (1 May), Hari Raya Puasa (8 May), Hari Raya Haji (17 Jul), and Deepavali (23 Oct). <span class="tbc">Makeup arrangement to be confirmed</span> — either a Sunday makeup or a shift to Friday evening / weekday daytime.</li>
      <li>National Day (Mon 9 Aug, during Term 3) affects one Monday class. Planned makeup options: Saturday 14 Aug at 2pm, or Tuesday 10 Aug.</li>
    </ul>
    <p>We'll confirm the final holiday policy and publish it here before Term 1 registration opens. <a href="mailto:${EMAIL}">Ask us directly</a> if you'd like to know sooner.</p>

  </div>
</section>
`;

write("schedule.html", "2027 Schedule", "Term dates, weekly timetable, and instructor line-up for DeafSphere's 2027 launch year.", "schedule.html", body);
