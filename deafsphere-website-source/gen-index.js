const { write, EMAIL } = require("./build.js");
const { NEXT_UP } = require("./site-data.js");

const body = `
<section class="hero">
  <div class="container">
    <div>
      <span class="hero-eyebrow">Deaf-owned · Deaf-led · Opening January 2027</span>
      <h1>Learn Singapore Sign Language. Belong to the community that speaks it.</h1>
      <p class="lead">DeafSphere delivers accessible Singapore Sign Language education through structured classes, workshops, and events — while raising awareness of Deaf identity and building allies for the Deaf community.</p>
      <div class="hero-actions">
        <a class="btn btn-primary" href="programmes.html">View Programmes</a>
        <a class="btn btn-outline" href="schedule.html">See the 2027 Schedule</a>
      </div>
    </div>
    <div class="hero-art">
      <div class="pill-row">
        <span class="pill p-navy">Level 1</span>
        <span class="pill p-teal">Level 2</span>
        <span class="pill p-gold">Level 3</span>
        <span class="pill p-purple">Standalone</span>
      </div>
      <p style="margin-bottom:6px;"><strong>4 terms a year</strong> — 10 lessons + assessment, one evening a week.</p>
      <p style="margin-bottom:6px;"><strong>6–12 students per class</strong>, taught face-to-face by Deaf instructors.</p>
      <p style="margin-bottom:0;"><strong>Full SgSLcore access</strong> — our sign-video library — for every term student.</p>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="announcement">
      <strong>Continuing the journey from Equal Dreams.</strong> From the January 2027 intake, SgSL classes move to DeafSphere — a dedicated, Deaf-owned organisation founded by longtime SgSL specialists Andrew Tay and Yew Hau En. Same teaching team, new dedicated home. Students who completed a level with Equal Dreams carry that progress straight into DeafSphere.
    </div>

    <div class="card" style="margin-bottom:40px;">
      <span class="tag pill p-navy">What's On</span>
      <h3>${NEXT_UP.headline}</h3>
      <p>${NEXT_UP.detail}</p>
      <a class="card-link" href="schedule.html">See the full schedule →</a>
    </div>

    <div class="section-head">
      <h2>Why learn with DeafSphere</h2>
      <p>Built by Deaf instructors, for anyone ready to sign.</p>
    </div>
    <div class="grid grid-3">
      <div class="card">
        <h3>Deaf-led curriculum</h3>
        <p>Every course is designed and taught by Deaf instructors, so you learn the language the way it lives — not just how it's described.</p>
      </div>
      <div class="card">
        <h3>Small, focused classes</h3>
        <p>6–12 students per class, so there's always room for real conversation practice, not just watching from the back row.</p>
      </div>
      <div class="card">
        <h3>A resource library that grows with you</h3>
        <p>Term students get full access to SgSLcore, our video library of every sign taught — so practice doesn't stop when class ends.</p>
      </div>
    </div>
  </div>
</section>

<section class="section alt">
  <div class="container">
    <div class="section-head">
      <h2>Find your programme</h2>
      <p>A few ways in, depending on how deep you want to go.</p>
    </div>
    <div class="grid grid-3">
      <div class="card">
        <span class="tag pill p-navy">Term Classes</span>
        <h3>Level 1 – 4</h3>
        <p>Progressive, 10-lesson terms with assessment and certification. Level 4 is currently in development and will open once ready.</p>
        <a class="card-link" href="level-1.html">Start at Level 1 →</a>
      </div>
      <div class="card">
        <span class="tag pill p-purple">Standalone</span>
        <h3>Beginner Classes</h3>
        <p>A flexible, 5-session taster — face-to-face or on Zoom, running on its own rolling calendar so you can start any time.</p>
        <a class="card-link" href="standalone.html">Explore Standalone Classes →</a>
      </div>
      <div class="card">
        <span class="tag pill p-teal">Community &amp; Talks</span>
        <h3>Beyond the Classroom</h3>
        <p>International Sign, Deaf Awareness Talks, enrichment workshops, and community sessions — for anyone who wants more than a term class.</p>
        <a class="card-link" href="community.html">See what's on →</a>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="stat-row" style="justify-content:center;">
      <div class="stat"><div class="num">4</div><div class="label">terms per year</div></div>
      <div class="stat"><div class="num">6–12</div><div class="label">students per class</div></div>
      <div class="stat"><div class="num">7</div><div class="label">instructors</div></div>
      <div class="stat"><div class="num">2</div><div class="label">Deaf owners</div></div>
    </div>
    <div class="cta-band">
      <h2>New here? Try a class before you commit.</h2>
      <p>As a new company, we're offering a discount on your first trial class so you can get a feel for how we teach.</p>
      <a class="btn btn-primary" href="mailto:${EMAIL}">Ask about the trial offer</a>
    </div>
  </div>
</section>
`;

write("index.html", "Home", "DeafSphere — Deaf-owned Singapore Sign Language education, opening January 2027.", "index.html", body);
