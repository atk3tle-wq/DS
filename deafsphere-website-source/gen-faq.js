const { write, EMAIL } = require("./build.js");

function item(id, q, a) {
  return `<details class="faq-item" id="${id}">
    <summary>${q}</summary>
    <div class="faq-a-inner">${a}</div>
  </details>`;
}

const body = `
<section class="section" style="padding-top:36px;">
  <div class="container">
    <h1>Frequently Asked Questions</h1>
    <p class="lead" style="color:var(--ink-soft);font-size:1.05rem;">Everything you need to know about classes, pricing, and the move from Equal Dreams.</p>

    <div class="faq-group">
      <h2>General</h2>
      ${item("register", "How do I register for a class?",
        `Head to the <a href="programmes.html">Programmes</a> page, pick a level or a Standalone class, then email us or use the registration link once it opens. If registration hasn't opened yet, email <a href="mailto:${EMAIL}">${EMAIL}</a> to be notified first.`)}
      ${item("payment", "How do I pay, and when is my seat confirmed?",
        `We accept PayNow Corporate. Your seat is only confirmed once payment is received, on a first-come, first-served basis. We're not using Stripe for now, so card payment isn't available yet — that may change later.`)}
      ${item("refund", "Can I get a refund if I can't attend anymore?",
        `There are no refunds once payment is made, unless DeafSphere cancels the class or term.`)}
      ${item("class-size", "How many students are in each class?",
        `A class needs at least 6 people signed up to run, and we cap it at 12. If a class doesn't reach 6, we'll let you know before it starts and help you find another slot.`)}
      ${item("access", "What if I have accessibility needs?",
        `Let us know in your registration, and we'll do our best to accommodate you — including interpretation or materials in accessible formats where needed.`)}
      ${item("venue", "Where are classes held?",
        `We're securing a dedicated venue (at least 50 sqm, two classrooms) ahead of the January 2027 launch. We'll publish the address once the lease is confirmed.`)}
      ${item("catchup", "Can I catch up if I miss a class?",
        `Zoom recordings are available for catch-up, limited to 2 per student, in line with attendance requirements for the term assessment.`)}
      ${item("telegram", "Why does DeafSphere use Telegram instead of a WhatsApp group?",
        `A few reasons: instructors can broadcast announcements and schedule changes to a whole class without anyone's phone number being visible to the group. Notes, video links, and PDFs can be shared directly in the chat. Polls make it quick to check who's coming to a makeup class. And pinned messages keep the next class time or homework link sitting at the top, so you're not scrolling back through days of chat to find it.`)}
    </div>

    <div class="faq-group">
      <h2>Term Classes (Level 1–4)</h2>
      ${item("terms-year", "How many terms run a year?",
        `Four — Term 1 (Jan–Mar), Term 2 (Apr–Jun), Term 3 (Jul–Sep), Term 4 (Oct–Dec). See the full <a href="schedule.html">Schedule</a>.`)}
      ${item("homework", "Is there homework?",
        `Depends on the level. Level 1 doesn't have homework in the traditional sense — instead you get self-practice exercises with auto-graded Google Forms, and how you do on those counts toward your grade. From Level 2 onward, homework is assigned as part of the course.`)}
      ${item("assessment", "How am I assessed?",
        `Each term ends with an assessment after 10 lessons, alongside your Level 1 self-practice scores or Level 2+ homework where applicable.`)}
      ${item("distinction", "How does the Grade A / certificate system work?",
        `Score 75% or above and you get Grade A — a Certificate of Completion with distinction, and a direct path into the next level. Score below that and you still finish the term, but with a Certificate of Attendance rather than Completion.`)}
      ${item("entry-assessment", "I've learned some SgSL before — can I skip ahead?",
        `Possibly. If you completed the level before with DeafSphere or Equal Dreams within the last 6 months, you can enrol directly in the next level. If you learned SgSL somewhere else, or it's been 6 months or more since your last class, you'll need to sit a short Level Entry Assessment first so we can place you correctly.`)}
      ${item("level4", "Is Level 4 available?",
        `Not yet — it's still being developed. It'll follow the same format as our other levels once it's ready. See the <a href="level-4.html">Level 4 page</a> to be notified when it opens.`)}
      ${item("sgslcore", "What's SgSLcore, and do I get access?",
        `SgSLcore is our sign-video resource library. Term class students get full access to every sign taught across all levels; Standalone students get access only to the videos from their own sessions.`)}
    </div>

    <div class="faq-group">
      <h2>Standalone Classes</h2>
      ${item("standalone-diff", "How is a Standalone class different from Level 1?",
        `A Standalone class is a self-contained 5-session taster with a Certificate of Attendance — it doesn't lead into Level 2. Level 1 is the first step of the full, progressive Level 1–4 pathway.`)}
      ${item("standalone-start", "When can I start a Standalone class?",
        `Anytime — Standalone classes run on their own rolling calendar rather than the term/quarter schedule, so new 5-week cycles begin continuously, staggered every 2–3 weeks, face-to-face or on Zoom.`)}
      ${item("standalone-price", "How much does a Standalone class cost?",
        `It's priced above our term-class rates — we're finalising the exact figure before registration opens. Check the <a href="standalone.html">Standalone Classes page</a> for the latest.`)}
      ${item("standalone-upgrade", "If I enjoy my Standalone class, can I move into the term pathway?",
        `Yes, though it's a separate registration — completing a Standalone class doesn't automatically enrol you in Level 1.`)}
    </div>

    <div class="faq-group">
      <h2>Community &amp; Talks</h2>
      ${item("what-is-is", "What is the International Sign course?",
        `International Sign (IS) is the flexible way Deaf people from different countries communicate with each other when they don't share a national sign language — you'll see it used at international Deaf events. Our course introduces it in two parts across the year. Full details are on the <a href="community.html#international-sign">Community &amp; Talks page</a>.`)}
      ${item("talks-workshops", "What are the Deaf Awareness Talks and Enrichment Series?",
        `Deaf Awareness Talks are 2-hour public sessions introducing Deaf culture ($40/pax) — open to anyone, no signing needed. The Enrichment Series covers specific topics in more depth ($20/pax per session). Community Sessions are informal get-togethers for students, likely free. See <a href="community.html">Community &amp; Talks</a> for what's scheduled.`)}
    </div>

    <div class="faq-group">
      <h2>Private &amp; Corporate Classes</h2>
      ${item("private-dates", "Can I choose when a private or corporate class runs?",
        `Yes — private and corporate class dates aren't fixed in advance. Email us and we'll work out a schedule directly with you.`)}
    </div>

    <div class="faq-group">
      <h2 id="transition">Transitioning from Equal Dreams</h2>
      ${item("why-transition", "Why are SgSL classes moving to DeafSphere?",
        `From the January 2027 intake, SgSL classes move from Equal Dreams to DeafSphere — a new, dedicated organisation founded and owned by longtime SgSL specialists Andrew Tay and Yew Hau En, focused solely on SgSL education and community development.`)}
      ${item("same-instructors", "Will my instructor stay the same?",
        `In most cases, yes. Many instructors who taught SgSL at Equal Dreams continue teaching at DeafSphere.`)}
      ${item("level1-to-2", "I completed a level with Equal Dreams. Can I go straight into the next one?",
        `Yes. Completion of a level with Equal Dreams is recognised for direct entry into the next level at DeafSphere, within the usual 6-month window — see the entry assessment FAQ above if it's been longer.`)}
      ${item("level3-done", "I completed Level 3 with Equal Dreams. What's next?",
        `Level 4 is currently in development, and our International Sign course and enrichment programmes are also open to you now. We'll announce Level 4 as soon as it's ready.`)}
      ${item("records", "What happens to my student records?",
        `Relevant learning records and course progress are being transferred from Equal Dreams to DeafSphere to ensure continuity. This handover agreement is being finalised ahead of launch.`)}
      ${item("stay-updated", "How can I stay updated?",
        `Follow DeafSphere's social channels (linked in the footer) or email <a href="mailto:${EMAIL}">${EMAIL}</a> to be added to our list. Equal Dreams will also share updates on their own channels until launch.`)}
    </div>

    <div class="cta-band">
      <h2>Still have a question?</h2>
      <p>We're happy to help — reach out directly and we'll get back to you.</p>
      <a class="btn btn-primary" href="mailto:${EMAIL}">Email ${EMAIL}</a>
    </div>
  </div>
</section>
`;

write("faq.html", "FAQ", "Frequently asked questions about DeafSphere's classes, pricing, and the transition from Equal Dreams.", "faq.html", body);
