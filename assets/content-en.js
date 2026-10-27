/* Mini_Training_6_Online_Format - English content (all text of the page).
   To add a language: copy this file to content-xx.js, translate the strings (keep the code, keys, HTML tags, helper calls and image/video/simulation paths), set PAGE_LANG, flag and dir. */
const PAGE_LANG='en';
const CONTENT = {
  flag:'🇬🇧', dir:'ltr',
  ui:{
    pageTitle:"Mini-Training · Online Format — Kodland Tutor Training",
    logoSub:'Tutor Development Department',
    heroEyebrow:"🎯 Mini-Training",
    heroTitle:"Making <span class=\"h-pill\">Online</span> Lessons Feel Right",
    heroIntro:"You've received this training because you have students who have requested a refund because they don't like the online format. Here, we'll show you what you can do as a tutor and how to handle these situations.",
    heroWork:"Work through 4 short modules. Each module check needs 70%+ to unlock the next. About 20–25 minutes total.",
    startBtn:"🚀 Start Training",
    pathLabel:'Your learning path',
    devTitle:'Dev: unlock all modules for review',
    backToPath:'Back to path',
    modulesPassed:'{done} / {total} modules passed',
    moduleN:'Module {n}',
    of:'of',
    locked:'🔒 Locked',
    passedBadge:'✅ Passed · {pct}%',
    reviewedBadge:'✅ Reviewed',
    startBadge:'▶ Start',
    reviewBadge:'▶ Review',
    objective:'Objective',
    startCheck:'▶ Start the module check',
    finishBtn:'▶ Finish the mini-training',
    doneBack:'✓ Done — back to path',
    ixBadge:'📋 Module check — 70% to unlock the next module',
    ixItemBadge:'📋 Module check — item {i} of {n}',
    scoreSoFar:'Score so far: {c} / {t}',
    continue:'Continue →',
    sortWrong:'Not quite — the right answer is "{label}".',
    resPassed:'Module passed!',
    resFailed:'Not quite there yet',
    resUnlocked:"You've unlocked the next module.",
    resDone:"You've completed this mini-training.",
    resNeed:'You need 70% to unlock the next module. Review the section above and try the check again.',
    resContinue:'Continue to learning path',
    resFinish:'Continue',
    resBack:'Back to path',
    resReview:'Review this module',
    doneEyebrow:'Mini-Training Complete',
    doneTitle:'🎉 Congratulations!',
    doneP1:"🎉 <strong>Congratulations! You've completed this mini-training.</strong>",
    doneP2:"You're all done here! Please return to the LMS training page where you accessed this mini-training to close out the assignment.",
    doneP3:"👉 <strong>If a check or assessment is listed directly below the training in the LMS, make sure to complete it and achieve a passing score</strong> — otherwise the assignment may remain incomplete.",
    doneP4:'Good luck! ❤️',
    doneP5:'',
    devUnlockAlert:'Dev mode: all modules are now unlocked for review.',
    devOn:'🔓 Dev mode ON — all modules unlocked',
    devOff:'🔒 Dev mode OFF — progress cleared',
    devBadge:'🔓 DEV MODE',
    doLabel:'✅ Do',
    avoidLabel:'🚫 Avoid',
    noticeLabel:'Notice:',
    cvSee:'What you see:',
    cvDo:'What you do:',
    dtExample:'Example from a real class',
    dtNext:'Next:',
    dtDone:"✅ That's all four areas. Next, classify what you see.",
    tlVideoTitle:'{label} — a real class example',
    tlVideoMeta:'Watch how this phase looks in a real lesson'
  },

  buildModules(){
    return [
{id:'intro', numLabel:'Introduction', emoji:'🧩', color:'var(--coral)',
 title:'Why You\'re Here',
 desc:'Why "I don\'t like online lessons" can still be turned around — and the rules that apply once a refund request has already come in.',
 obj:'Understand what "I don\'t like the online format" really means, why a same-day report matters, and exactly what to do (and not do) once a refund request already exists.',
 sections:[
  {t:'💻 What "I don\'t like online" really means', html:`
   <div class="card"><p>Almost nobody says "my attention drifts after a long day of screens". They say <em>"online is boring"</em>, <em>"I don't like it"</em> — and the family asks for a refund. Behind that one sentence there are usually very different things:</p></div>
   ${iconGrid([
     {ic:'🥱', html:`<strong>Screen fatigue.</strong> The lesson comes after a school day of screens, and the child has nothing left.`},
     {ic:'🫥', html:`<strong>Feeling alone.</strong> No classmates to share the work with, no one to laugh with.`},
     {ic:'📱', html:`<strong>Distractions at home.</strong> The phone, a game, a pet or a sibling is one click away.`},
     {ic:'🙈', html:`<strong>Shyness on camera.</strong> They don't want to be seen or to speak in front of everyone.`},
     {ic:'🔌', html:`<strong>Frustration with the tools.</strong> Lag, audio that doesn't work, buttons that don't respond.`},
     {ic:'👨‍👩‍👧', html:`<strong>The family expected in-person.</strong> To them, online feels "less real" — whatever the child thinks.`}
   ])}
   ${co('co-idea','💡',`<p><strong>You can't change the format — but you can change how the lesson feels inside it.</strong> Most of what students dislike about online lessons comes from how the lesson is run, and that part is yours.</p>`)}
  `},
  {t:'⏱️ The key is speed — and your report', html:`
   <div class="card"><p>You don't decide whether a student can move to a different group or format. But your report is what starts that conversation, and it only works if it reaches the right people <strong>early</strong>.</p></div>
   ${stepFlow([
     {ic:'👀', label:'You notice the dislike in a lesson'},
     {ic:'📝', label:'You report it in BO the same day'},
     {ic:'👩‍💼', label:'Your Team Leader and Client Service look at the options'},
     {ic:'🔄', label:'A motivational conversation, a different group or format that suits them (if available), or another course'}
   ])}
   ${co('co-danger','🚨',`<p><strong>A late report closes doors.</strong> Once the family has decided, most options are gone. The same report, written in the first weeks, can keep a child at Kodland.</p>`)}
   ${co('co-ok','✅',`<p><strong>While the team looks at options, the lesson is still yours.</strong> Modules 1 and 2 show you how to find out what bothers the student, and how to build an online lesson they enjoy.</p>`)}
  `},
  {t:'🛟 If a refund request already exists', html:`
   <div class="card"><p>Everything above is about catching this early. But you may be opening this training because a family has <strong>already</strong> asked for a refund. The rules below apply no matter the reason — read them first, then use the rest of this training to understand what led here and what you can still do in the lesson.</p></div>
   ${co('co-idea','💡',`<p><strong>The request itself is created by Client Service, not by you</strong> — that part isn't yours to control. What's still yours is everything that happens in the lesson from here, and that's not nothing.</p>`)}
   ${co('co-danger','🤐',`<p><strong>Say nothing about the request itself</strong> — not to the child, not to the family — unless Client Service explicitly asks you to say something specific. Your job now is the lesson, not the conversation.</p>`)}
  `},
  {t:'🎯 Your next lesson is the save attempt', html:`
   <div class="card"><p>You may not get a chance to change anything else. Treat the very next lesson with this child as the moment that decides it.</p></div>
   ${iconGrid([
     {ic:'🙋', html:`<strong>Give them a real turn.</strong> Not a meaningless question — a genuine moment where they're seen and they succeed.`},
     {ic:'🏆', html:`<strong>Build in an early, visible win.</strong> They should leave the lesson feeling capable, not behind.`},
     {ic:'👀', html:`<strong>Specific attention</strong> — make them feel noticed for something concrete, not generically praised.`},
     {ic:'🤐', html:`<strong>No mention of the request</strong> — even if the child brings it up, redirect warmly and keep teaching.`}
   ])}
  `},
  {t:'📮 Notify fast, and know the one safe line', html:`
   <div class="card"><p>You can find out a request exists through Client Service's comments on the child's profile in BO — there's no automatic system that notifies you. Once you know, what you've seen in your lessons is information Client Service doesn't have any other way.</p></div>
   ${numlist([
     'Leave a comment in BO the same day with exactly what you\'ve seen — dates and specifics, not impressions',
     'Include the family\'s own words, verbatim, if you have them',
     'Loop in your Team Leader the same day',
     'Never confirm that a refund has been approved, or discuss any amount'
   ])}
   ${co('co-ok','✅',`<p><strong>The message that's always safe to say:</strong> <em>"Customer Service will help you with this."</em> That's where your part of the conversation ends — Client Service takes it from there.</p>`)}
  `},
  {t:'🌱 Keep it up afterward', html:`
   <div class="card"><p>Whether the request is withdrawn, the child stays in your group, or moves to another tutor or format, keep giving extra care for the next few lessons. A save that holds for one lesson and then quietly goes back to normal often doesn't hold at all.</p></div>
  `}
 ]
},
{id:'diagnose', numLabel:'Module 1', emoji:'🔍', color:'var(--coral)',
 title:'Find Out What Bothers Them — Then Reframe It',
 desc:'How to tell what exactly feels wrong about online lessons, the questions that surface it by age, how to change the perception, and how to report it in BO.',
 obj:'Identify what the student actually dislikes about the online format, ask about it in a way that suits their age, validate and reframe it, and report the case in BO the same day.',
 sections:[
  {t:'🔍 Ask first: what exactly feels wrong?', html:`
   <div class="card"><p>Before trying engagement techniques, find out <strong>which part of the online format does not land</strong>. A technique that fixes loneliness does nothing for screen fatigue. Children rarely say it clearly, so learn what each one looks and sounds like:</p></div>
   ${patternCards([
     {ic:'🥱', title:'Tired and distracted', desc:'"I\'m tired." "It\'s too long." Eyes wander, tabs switch, yawns.', note:'An energy and attention problem. <strong>Shorter rounds, movement, a change of activity.</strong>'},
     {ic:'🫥', title:'Alone, not connected', desc:'"There\'s nobody to talk to." Camera off, silent, no reactions.', note:'A connection problem. <strong>Bring classmates in: pairs, show-and-tell, reactions.</strong>'},
     {ic:'🙈', title:'Uncomfortable on camera', desc:'Won\'t speak or show their face; answers in the chat, or not at all.', note:'A safety problem. <strong>Low-pressure ways to take part.</strong>'},
     {ic:'🔌', title:'Frustrated by the tools', desc:'"It always lags." "I couldn\'t hear." Gives up after a tech hiccup.', note:'A tool problem. <strong>Fix it fast, or follow the technical-issue protocol (10 minutes, then communicate, document, escalate).</strong>'}
   ],2)}
  `},
  {t:'❓ Questions that surface it — by age', html:`
   <div class="card"><p>Ask <strong>open questions, with no pressure</strong>, and give the student a way to answer that doesn't feel like being put on the spot. What works depends on age:</p></div>
   ${dimTabs([
     {ic:'🧒', title:'Ages 6–8',
      intro:'Young children answer best with faces, pictures and choices — not with explanations.',
      tips:[
       {ic:'😀', html:`<strong>Pick-a-face poll.</strong> <em>"Show me with your hand or an emoji how today's lesson felt — happy, so-so, or sleepy?"</em>`},
       {ic:'🌟', html:`<strong>Best and not-so-best.</strong> <em>"What was the most fun part of today? And the most boring part?"</em>`},
       {ic:'🎁', html:`<strong>The magic wand.</strong> <em>"If you could change one thing about our online class, what would it be?"</em>`},
       {ic:'👂', html:`<strong>Listen, don't fix.</strong> Repeat what they said and thank them — then change one small thing next lesson, so they see you listened.`}
      ]},
     {ic:'🧑', title:'Ages 9–11',
      intro:'They can rate and explain — as long as it feels safe and short.',
      tips:[
       {ic:'🔢', html:`<strong>The 1–5 scale.</strong> <em>"From 1 to 5, how much do you enjoy our online lessons? What would make it a 5?"</em>`},
       {ic:'🌟', html:`<strong>The coolest part.</strong> <em>"What was the coolest part of today's class?"</em> If they can't name anything, that is a signal.`},
       {ic:'🔧', html:`<strong>One change.</strong> <em>"If you could change one thing about the lessons, what would it be?"</em>`},
       {ic:'🗳️', html:`<strong>Quick poll in the chat.</strong> <em>"Type A if you'd like more building time, B if you'd like more time with a classmate."</em>`}
      ]},
     {ic:'🧑‍🎓', title:'Ages 12+',
      intro:`Older students don't want to say it in front of everyone. Give them a private or anonymous way.`,
      tips:[
       {ic:'🔒', html:`<strong>A private message.</strong> <em>"I noticed you've been quieter lately. Is there anything about the online lessons that bothers you? Just between us."</em>`},
       {ic:'🗳️', html:`<strong>An anonymous poll.</strong> Ask the whole group to finish the sentence <em>"I would join in more if…"</em> — it removes the fear of being judged.`},
       {ic:'🤝', html:`<strong>Ask for their ideas,</strong> not their complaints: <em>"What would make our lessons better for you?"</em>`},
       {ic:'🙏', html:`<strong>Respect their answer.</strong> Never argue with it — thank them, and act on one thing.`}
      ]}
   ],'✅ That\'s the three age groups. Next: how to change the perception.')}
   ${co('co-idea','🧠',`<p><strong>Why it works.</strong> Open questions and anonymous formats take away the social pressure of answering in front of classmates. Giving feedback "I would speak more if…" is often easier than giving it face to face.</p>`)}
  `},
  {t:'🔁 Change the perception — validate first, then reframe', html:`
   <div class="card"><p>You can't talk someone out of a feeling. The order that works is: <strong>1. validate</strong> ("that makes sense"), <strong>2. reframe</strong> (show the other side, honestly), <strong>3. try something small</strong> in the very next lesson. Open each one:</p></div>
   ${accItem('🥱 "It\'s boring on a screen."', `
     <p><strong>✅ Validate:</strong> <em>"You're right — watching a screen for a long time can feel boring."</em></p>
     <p><strong>🔁 Reframe:</strong> <em>"Here you're not just watching — everything on your screen is something you make."</em></p>
     <p><strong>🎯 Try:</strong> in the next lesson, put the student's own project on the screen in the first five minutes.</p>`)}
   ${accItem('🫥 "I miss my friends / there\'s nobody to talk to."', `
     <p><strong>✅ Validate:</strong> <em>"That makes sense — it's more fun to build things with other people."</em></p>
     <p><strong>🔁 Reframe:</strong> <em>"In our class you have people who love the same thing as you. Let's use that."</em></p>
     <p><strong>🎯 Try:</strong> a two-minute pair task or a show-and-tell: <em>"Show your partner your best part."</em></p>`)}
   ${accItem('📱 "I can\'t focus at home."', `
     <p><strong>✅ Validate:</strong> <em>"Home has a lot of tempting things — that's normal."</em></p>
     <p><strong>🔁 Reframe:</strong> <em>"We'll work in short rounds, so you only have to focus a little at a time."</em></p>
     <p><strong>🎯 Try:</strong> change the activity about every 10 minutes, and tell them in advance what the next round is.</p>`)}
   ${accItem('🙈 "I don\'t like speaking on camera."', `
     <p><strong>✅ Validate:</strong> <em>"That's totally okay — lots of people feel that way."</em></p>
     <p><strong>🔁 Reframe:</strong> <em>"You can join in with the chat or by sharing your screen first. The camera can come later, when you want."</em></p>
     <p><strong>🎯 Try:</strong> an easy question answered in the chat, and a private "great idea" message afterwards.</p>`)}
   ${doavoid(
     ['Validate first: <em>"That makes sense."</em>','Be honest — reframe, don\'t sell','Promise only what you can keep: <em>"Next lesson we start by building."</em>','Change one small thing next lesson, so they see you listened'],
     ['Arguing that <em>"online is just as good"</em>','Dismissing it: <em>"everyone studies online now"</em>','Promising a group or format change','Asking in front of the whole group']
   )}
  `},
  {t:'📝 Report it in BO — the same day', html:`
   <div class="card"><p>A student who keeps saying they don't like the online lessons, or who stays quiet and disconnected, is a refund risk. <strong>Report it the same day</strong> — the team can only look at options (a different group or format that suits them if one is available, a motivational conversation, another course) while the family is still deciding.</p></div>
   <div class="card" style="background:var(--surface2)"><h4>📨 What a useful report looks like — copy and complete</h4>
   <p style="font-size:13.5px;line-height:1.75"><strong>Student:</strong> [name] · <strong>Group / format:</strong> [e.g. group of 6, Tuesdays 6 pm] · <strong>Lesson:</strong> [date]<br>
   <strong>What they said:</strong> [their own words — e.g. "online is boring, there's nobody to talk to"]<br>
   <strong>What I saw:</strong> [camera, microphone, chat, attention — and whether it changed from before]<br>
   <strong>What I think bothers them:</strong> ☐ tired / distracted &nbsp; ☐ alone &nbsp; ☐ uncomfortable on camera &nbsp; ☐ frustrated by the tools<br>
   <strong>What I have already tried:</strong> [e.g. short rounds, pair task, chat-first participation]<br>
   <strong>What could help — my recommendation, your decision:</strong> [e.g. a smaller group, a motivational conversation, another course]</p></div>
   <div class="sim-embed"><div class="sim-embed-inner"><span class="sim-embed-tag">🖥️ BO — Report a case</span><iframe src="Simulacion_BO_Evaluate.html" title="BO — Report a case" loading="lazy"></iframe></div></div>
   ${co('co-idea','💬',`<p><strong>With the family:</strong> talk about the learning, never the arrangement. <em>"Hi [parent's name], I've noticed [student] sometimes finds it hard to stay energised in online lessons. I've started doing short building rounds and letting them choose, and I've shared it with my team so we can support them in the best way."</em> No promises about groups or formats.</p>`)}
  `}
 ],
 ix:{
  title:'What bothers them — and what to do first',
  instr:'Sort the quotes and pick the best move. 70% to unlock the next module.',
  items:[
   {type:'sort', prompt:'What is bothering this student?', card:`"There's nobody to talk to."`, zones:[{label:'🥱 Tired and distracted', fb:'Not quite — the student is describing being alone, not being tired.'},{label:'🫥 Alone, not connected', fb:'Correct — it is a connection problem. Bring classmates in with pairs, show-and-tell and reactions.'},{label:'🙈 Uncomfortable on camera', fb:'Not quite — this is about missing people to share with, not being seen.'},{label:'🔌 Frustrated by the tools', fb:'Not quite — nothing here is about the tools.'}], correctZone:1},
   {type:'sort', prompt:'What is bothering this student?', card:`She has her camera off, never speaks, and only types in the chat.`, zones:[{label:'🥱 Tired and distracted', fb:'Not quite — typing in the chat shows she is engaged, just not out loud.'},{label:'🫥 Alone, not connected', fb:'Not quite — she is taking part through the chat.'},{label:'🙈 Uncomfortable on camera', fb:'Correct — a safety problem. Start with low-pressure ways in: chat first, then screen-share, and the camera when she is ready.'},{label:'🔌 Frustrated by the tools', fb:'Not quite — nothing suggests a technical issue.'}], correctZone:2},
   {type:'choice', prompt:`A student says: "Online lessons are boring." What is the best first move?`, opts:[`Explain that online lessons are just as good as in-person ones`,`Lengthen your explanations so the lesson is more interesting`,`Ask what exactly feels boring — the length, the tasks, the screen, being alone?`], correct:2, fb:`Before any technique, find out which part doesn't land. "Boring" can mean tired, lonely, shy or frustrated — and each has a different fix.`},
   {type:'sort', prompt:'Treasure or trash? Is this a good response?', card:`"That makes sense — screens can feel passive. Here, everything on your screen is something you make."`, zones:[{label:'💎 Treasure — validates and reframes', fb:'Correct — it validates the feeling first, then offers an honest reframe.'},{label:'🗑️ Trash — dismisses', fb:'Not quite — this response validates first and then reframes. That is the right order.'}], correctZone:0},
   {type:'choice', prompt:`A 12-year-old seems disconnected. Which way of asking lets them answer honestly?`, opts:[`Ask the whole group out loud: "Who finds online lessons boring?"`,`Ask the parent to talk to them`,`A private message, or an anonymous poll: "I would join in more if…"`], correct:2, fb:`Older students rarely say it in front of peers. A private message or an anonymous poll takes away the social pressure.`},
   {type:'choice', prompt:`When do you report a student's dislike of the online format in BO?`, opts:[`The same day — with what they said, what you saw and what you tried`,`After a month, if nothing has improved`,`Only if the parent complains`], correct:0, fb:`Options such as a different group or format can only be considered while the family is still deciding. Facts, the student's words and what you tried let the team act quickly.`}
  ]
 }
},
{id:'engage', numLabel:'Module 2', emoji:'🎬', color:'var(--coral)',
 title:'Build an Online Lesson They Enjoy',
 desc:'Techniques that keep attention and make the screen feel like a shared room: opening strong, working in short rounds, interaction, connection, direct questions and a win at the end.',
 obj:'Run an online lesson that keeps attention, gives every student a comfortable way to take part, connects classmates, and ends on a win — adapted to the age of the group.',
 sections:[
  {t:'🧠 Four things every motivating lesson has', html:`
   <div class="card"><p>Online, nothing holds attention for you: no physical room, no classmates next to them, and every distraction one click away. Motivation research gives a simple checklist — John Keller's <strong>ARCS model</strong> (1987). Ask yourself, before every lesson, whether it has all four:</p></div>
   ${iconGrid([
     {ic:'👀', html:`<strong>Attention.</strong> A surprise, a question, a short challenge, and a change of format. <em>"A bug escaped from the game — who can help me catch it?"</em>`},
     {ic:'🔗', html:`<strong>Relevance.</strong> Connect the lesson to what they care about: their games, their series, the thing they want to make.`},
     {ic:'💪', html:`<strong>Confidence.</strong> Small steps, a clear next step, and support when they get stuck — so they believe they can do it.`},
     {ic:'🏆', html:`<strong>Satisfaction.</strong> Specific praise and a finished thing to show at the end.`}
   ])}
   ${bigStat('≈ 10 min', `<p>A widely quoted rule of thumb from learning research (popularised by John Medina's <em>Brain Rules</em>): attention starts to drift after about <strong>ten minutes</strong>. Plan a change of activity around then — and keep rounds even shorter with the youngest.</p>`)}
  `},
  {t:'🎬 The lesson, minute by minute', html:`
   ${timeline([
     {ic:'🎬', label:'Open strong — the first three minutes', items:[
       '<strong>Start with a surprise, a story or a question</strong> tied to today\'s project — the opening sets the tone for the whole lesson.',
       '<em>"Today a robot lost its voice — by the end of the lesson you\'ll have given it one. Who\'s in?"</em>'
     ]},
     {ic:'⏱️', label:'Work in short rounds', items:[
       '<strong>Change the activity about every 10 minutes:</strong> explain → try → share. Tell them what the next round is.',
       '<em>"Round one: five minutes to try it. Round two: show your partner."</em>'
     ]},
     {ic:'🙋', label:'Interact — every few minutes', items:[
       '<strong>Give everyone a way in:</strong> chat, reactions, a quick poll, or sharing their screen in turns.',
       '<em>"Type your guess in the chat — I\'ll read them all out!"</em>'
     ]},
     {ic:'👥', label:'Connect classmates', items:[
       '<strong>Two-minute pair moments</strong> or small-group tasks, so the screen feels like a shared room.',
       '<em>"Show your partner your best part — then tell me what you liked in theirs."</em>'
     ]},
     {ic:'🏁', label:'Close with a win', items:[
       '<strong>Show-and-tell of what they made,</strong> a specific compliment, and a hint of what comes next.',
       '<em>"Look what you built today — next time it gets a score."</em>'
     ]}
   ])}
  `},
  {t:'🛠️ Tools that make the screen feel interactive', html:`
   ${iconGrid([
     {ic:'💬', html:`<strong>The chat as a second voice.</strong> Shy students take part without being on the spot. <em>"Type your idea — I'll read them all."</em>`},
     {ic:'👍', html:`<strong>Reactions and quick polls.</strong> <em>"Show me with an emoji: easy, medium or hard?"</em>`},
     {ic:'🖥️', html:`<strong>Screen-sharing in turns.</strong> <em>"Who wants to show their project in 30 seconds?"</em> Offer, don't force.`},
     {ic:'1️⃣', html:`<strong>One instruction at a time — and check it.</strong> Don't stack steps. Then ask: <em>"What are you going to do first?"</em> A short written list in the chat helps when the connection is slow.`},
     {ic:'🎲', html:`<strong>Mini-games and quick challenges.</strong> A 60-second quiz or a "who can find it first?" resets attention.`},
     {ic:'🧑‍🤝‍🧑', html:`<strong>Pairs or small groups.</strong> People speak more in a small group, and get more personal feedback.`}
   ])}
  `},
  {t:'🎂 Adapt it by age', html:`
   ${dimTabs([
     {ic:'🧒', title:'Ages 6–8',
      intro:'Short rounds, movement and surprise. Their energy is the lesson.',
      tips:[
       {ic:'🤸', html:`<strong>Movement breaks.</strong> <em>"Stand up and show me your best robot pose!"</em> — then back to the keyboard.`},
       {ic:'⏲️', html:`<strong>Shorter rounds than 10 minutes,</strong> with a clear "now we're doing this" at each change.`},
       {ic:'🎁', html:`<strong>Stickers, points, a mascot</strong> — small, immediate rewards for taking part.`},
       {ic:'🧸', html:`<strong>Show-and-tell.</strong> <em>"Show us your favourite toy or drawing, then we'll build it."</em>`}
      ]},
     {ic:'🧑', title:'Ages 9–11',
      intro:'Missions, timers and teams make the screen feel like a game.',
      tips:[
       {ic:'🎯', html:`<strong>Mini-missions with a timer.</strong> <em>"You have 8 minutes to make the character jump. Ready?"</em>`},
       {ic:'🏁', html:`<strong>Team challenges.</strong> Pairs compete to find the bug first — friendly and short.`},
       {ic:'🧩', html:`<strong>A choice of theme</strong> inside the same task — the objective stays, the costume is theirs.`},
       {ic:'🗳️', html:`<strong>Quick polls</strong> to decide what the next round is.`}
      ]},
     {ic:'🧑‍🎓', title:'Ages 12+',
      intro:'Autonomy, relevance and respect for their comfort level.',
      tips:[
       {ic:'🧭', html:`<strong>Give a say in the plan.</strong> <em>"We have 15 minutes for this part — do you want to start with A or B?"</em>`},
       {ic:'🌍', html:`<strong>Show real uses</strong> of the skill, in things they know.`},
       {ic:'🔒', html:`<strong>Respect the camera.</strong> Offer chat-first participation; never force the camera on.`},
       {ic:'🗳️', html:`<strong>Anonymous polls</strong> to gather opinions, and peer review of each other's work.`}
      ]}
   ],'✅ That\'s the three age groups.')}
  `},
  {t:'🙋 Direct questions — without pressure', html:`
   <div class="card"><p>Asking a student by name works — if they trust it won't be embarrassing. Prepare them, start easy, and make it feel fair.</p></div>
   ${doavoid(
     ['Tell the group you\'ll ask everyone at some point — and that <em>"I don\'t know"</em> is a fine answer','Start with an easy question to build confidence','Use a random picker so it feels fair, not personal','Praise any contribution: <em>"Thank you — that helps us think."</em>'],
     ['Cold-calling the quietest student with a hard question','Correcting harshly in front of the group','Asking only the same fast students every time','Introducing a hard question without warning — try: <em>"This one is tricky, but does anyone want to try?"</em>']
   )}
   ${co('co-star','🌱',`<p><strong>Why it works:</strong> students take part when they feel safe. Preparing them, starting easy and keeping it fair turns a question from a risk into an invitation.</p>`)}
  `}
 ],
 ix:{
  title:'Build the lesson they enjoy',
  instr:'Pick the best move or sort each habit. 70% to unlock the final checklist.',
  items:[
   {type:'choice', prompt:`Halfway through the lesson, a 9-year-old looks tired and starts switching tabs. What is the best move?`, opts:[`Keep explaining — they'll catch up`,`Change the activity: a quick poll or a short timed mission, then a new round`,`Tell them to pay attention`], correct:1, fb:`A change of activity resets attention. Telling them to focus doesn't give them a reason to.`},
   {type:'sort', prompt:'Does this habit help or hurt an online lesson?', card:`Changing the activity about every 10 minutes: explain, try, share.`, zones:[{label:'💎 Helps', fb:'Correct — short rounds are one of the most reliable ways to keep attention online.'},{label:'🗑️ Hurts', fb:'Not quite — short rounds help; long, single-activity stretches lose students.'}], correctZone:0},
   {type:'choice', prompt:`How do you give instructions in an online lesson?`, opts:[`All the steps at once, so nobody has to wait`,`One instruction at a time, then check it: "What are you going to do first?"`,`Say it once, quickly, and move on`], correct:1, fb:`Stacked instructions get lost online. One step plus a check question catches confusion early.`},
   {type:'choice', prompt:`A shy 13-year-old never answers aloud. What helps most?`, opts:[`Call on them by name every lesson until they speak`,`Let them take part through the chat first, and praise their contributions`,`Ask them to turn on their camera in front of everyone`], correct:1, fb:`Give them a comfortable way in — the chat first. The camera can come later, when they want.`},
   {type:'sort', prompt:'Does this habit help or hurt an online lesson?', card:`Cold-calling the quietest student with the hardest question.`, zones:[{label:'💎 Helps', fb:'Not quite — it puts the student on the spot and makes the next question harder to answer.'},{label:'🗑️ Hurts', fb:'Correct — start easy, prepare them, and make the choice feel fair.'}], correctZone:1},
   {type:'choice', prompt:`Which opening works best for a 7-year-old?`, opts:[`"Today we're going to learn about variables."`,`"Today a robot lost its voice — by the end of the lesson you'll have given it one. Who's in?"`,`"Open the lesson and start exercise 1."`], correct:1, fb:`A story with a mission gives attention and a reason to take part. Jumping straight into content wastes the most attentive minutes.`}
  ]
 }
},
{id:'checklist', numLabel:'Final Checklist', emoji:'✅', color:'var(--coral)',
 title:'Final Checklist',
 desc:'No quiz here — just the essentials from this mini-training, before you close it out.',
 obj:'Review the checklist below. This module is ungraded — read it, then finish the mini-training.',
 sections:[
  {t:'🛟 If a refund request already exists', html:`
   ${numlist([
     'I left a comment in BO the same day I learned of the request, and looped in my Team Leader',
     'My next lesson with this student was a real save attempt — a real turn, a visible win, specific attention, no mention of the request',
     'I never confirmed approval or discussed an amount — I used the one safe line and left the rest to Client Service'
   ])}
  `},
  {t:'🌱 In every lesson', html:`
   ${numlist([
     'Before trying any technique, I find out what exactly feels wrong about online lessons for this student',
     'I validate the feeling first ("that makes sense") and only then reframe — I never argue that online is "just as good"',
     'I ask in a way that suits the age: a pick-a-face poll for the youngest, a 1–5 scale for 9–11, a private or anonymous poll for 12+',
     'I open every lesson strong: a surprise, a story or a question tied to today\'s project',
     'I change the activity about every 10 minutes (shorter with the youngest): explain → try → share',
     'I use the chat, reactions, polls and screen-sharing in turns, so everyone has a comfortable way to take part',
     'I give one instruction at a time and check it was understood',
     'I ask direct questions without pressure: easy first, a fair way to choose, and positive feedback for any answer',
     'I connect classmates with short pair or small-group moments',
     'I report a student\'s dislike of the online format in BO the same day: what they said, what I saw, what I tried',
     'I never promise a format or group change — I recommend in BO and say "I\'ll check with my team"'
   ])}
  `},
  {t:'', html:`
   ${co('co-star','⭐',`<p><strong>That's the whole mini-training.</strong> When you're ready, continue — then complete the DST in the LMS to close out the assignment.</p>`)}
  `}
 ],
 gateExam:true
}
];
  }
};
