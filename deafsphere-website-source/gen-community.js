const { write, EMAIL } = require("./build.js");

const body = `
<section class="section" style="padding-top:36px;">
  <div class="container">
    <span class="pill p-teal">Beyond the Term Pathway</span>
    <h1 style="margin-top:14px;">Community &amp; Talks</h1>
    <p class="lead" style="color:var(--ink-soft);font-size:1.05rem;">International Sign, public talks, workshops, and get-togethers — for anyone who wants more than a term class.</p>

    <div class="page-layout" style="margin-top:32px;">
      <nav class="onpage-nav" aria-label="On this page">
        <h4>On this page</h4>
        <ul>
          <li><a href="#international-sign">International Sign</a></li>
          <li><a href="#talks">Deaf Awareness Talks</a></li>
          <li><a href="#enrichment">Enrichment Series</a></li>
          <li><a href="#community-session">Community Sessions</a></li>
          <li><a href="#more">More on the Way</a></li>
        </ul>
      </nav>

      <div>
        <h2 id="international-sign">International Sign Course</h2>
        <p>International Sign — usually shortened to IS — isn't a course about Singapore. It's the flexible, contact-based way Deaf people from different countries communicate with each other when they don't share a national sign language. You'll see it used at events like the World Federation of the Deaf congress or the Deaflympics, where Deaf people from dozens of countries need to understand one another without a single shared language between them. It's shaped mostly by European sign languages, and it isn't standardised the way SgSL is — more a shared toolkit than a language with fixed grammar.</p>
        <p>Our IS Course runs in two parts, Part 1 and Part 2, in different quarters through the year (see the <a href="schedule.html">Schedule</a>). It's aimed at students who want to communicate with Deaf people beyond Singapore — travelling, at international events, or just meeting Deaf people from elsewhere.</p>
        <div class="pricing-note" style="margin-top:16px;">
          <div class="table-wrap" style="margin-bottom:0;">
          <table style="margin-bottom:0;">
            <thead><tr><th>Reduced</th><th>General</th><th>Supporter</th></tr></thead>
            <tbody><tr><td>$200</td><td>$220</td><td>$240</td></tr></tbody>
          </table>
          </div>
          <p style="margin:14px 0 0;">Per part. Payment via PayNow Corporate.</p>
        </div>
        <p style="margin-top:14px;"><a class="card-link" href="mailto:${EMAIL}">Ask about the IS Course →</a></p>

        <hr class="div">

        <h2 id="talks">Deaf Awareness Talks</h2>
        <p>A 2-hour public talk introducing Deaf culture and Deaf awareness — open to anyone, no signing experience needed. A good starting point if you're curious about the Deaf community but not ready to commit to a class.</p>
        <p><strong>$40/pax</strong>, 2 hours, held periodically through the year.</p>

        <hr class="div">

        <h2 id="enrichment">Deaf Enrichment Series</h2>
        <p>Themed workshops that go deeper into specific topics — past and planned sessions include things like an introduction to deafblindness, with more topics being added as the series grows.</p>
        <p><strong>$20/pax</strong> per session.</p>

        <hr class="div">

        <h2 id="community-session">Community Sessions</h2>
        <p>Informal, lower-key sessions for current and past students to stay connected with each other and the Deaf community — think of it as the get-together version of what we do, rather than a class. Pricing is expected to be free; we'll confirm before the first session.</p>

        <hr class="div">

        <h2 id="more">More on the Way</h2>
        <p>A few other things we're planning, not locked in yet:</p>
        <ul>
          <li>A post-class enrichment series for students who want to keep going after their term ends</li>
          <li>Deaf movie screenings</li>
          <li>JSL (Japanese Sign Language) courses, for students interested in a second sign language</li>
          <li>Student gatherings — informal social meetups</li>
          <li>SL-related merchandise</li>
        </ul>
        <p>Want to be told when any of these open up? <a href="mailto:${EMAIL}">Email us</a> and we'll keep you posted.</p>
        <a class="btn btn-primary" href="mailto:${EMAIL}">Stay in the loop</a>

        <hr class="div">
        <p><a href="programmes.html">← Back to all programmes</a></p>
      </div>
    </div>
  </div>
</section>
`;

write("community.html", "Community & Talks", "International Sign, Deaf Awareness Talks, enrichment workshops, and community sessions at DeafSphere.", "community.html", body);
