# HACK THE FUTURE 3.0 --- Website Development Specification

**Project:** Hack the Future 3.0\
**Organizer:** Tula's University, Dehradun\
**Event:** 36-Hour National-Level Hackathon\
**Dates:** 25--26 September 2026\
**Location:** Tula's University, Dehradun, Uttarakhand, India\
**Prize Pool:** ₹5 Lakh+\
**Confirmed Top Prizes:** ₹65,000 / ₹50,000 / ₹30,000\
**Status:** Design direction finalized --- development ready

------------------------------------------------------------------------

## 1. Project Vision

Hack the Future 3.0 must NOT look like a generic AI-generated hackathon
website.

The target is a **premium, custom-designed, human-crafted event
website** that feels like a real technology event brand.

The design should combine:

-   Editorial design
-   Futuristic technology
-   Technical interface language
-   Strong typography
-   High-quality visual composition
-   Purposeful motion
-   Excellent information hierarchy
-   Clean UX
-   A consistent mascot system

The website should feel **designed**, not decorated.

### Core statement

> **36 HOURS. ONE FUTURE. BUILD IT.**

The mascot is the personality of the event, while typography, layout,
photography, grid systems and motion create the actual brand experience.

------------------------------------------------------------------------

# 2. Non-Negotiable Design Principles

## 2.1 Do NOT create an AI-template aesthetic

Avoid:

-   Excessive glassmorphism
-   Huge purple gradients everywhere
-   Purple/blue blobs
-   Random floating 3D objects
-   Excessive particles
-   Generic neon cyberpunk styling
-   Repeated rounded cards
-   Three-card layouts everywhere
-   Generic slogans such as "Innovate. Create. Disrupt."
-   Excessive animations
-   Stock illustrations
-   Fake testimonials
-   Fake judges
-   Fake sponsors
-   Unconfirmed statistics

The website should never feel like it was generated from one prompt.

------------------------------------------------------------------------

## 2.2 Each page must have its own visual personality

The design system remains consistent, but every major page should have a
different composition.

  Page       Personality
  ---------- ---------------------------
  Home       Cinematic / high-impact
  About      Editorial / narrative
  Problems   Functional / technical
  Tracks     Exploratory / interactive
  Prizes     Bold / celebratory
  Timeline   Journey / movement
  Rules      Documentation / utility
  Judges     Premium / prestigious
  Mentors    Community / human
  Sponsors   Minimal / prestigious
  FAQ        Clean / functional
  Contact    Institutional / welcoming

------------------------------------------------------------------------

# 3. Brand Identity

## 3.1 Event name

Primary:

**HACK THE FUTURE 3.0**

Short identifier:

**HTF / 03**

The `HTF / 03` identifier should appear throughout the interface as a
recurring brand marker.

Examples:

``` text
HTF / 03
01 / ABOUT

HTF / 03
04 / PROBLEM STATEMENTS

HTF / 03
07 / PRIZES
```

------------------------------------------------------------------------

# 4. Logo System

added in the folder




------------------------------------------------------------------------

# 5. Mascot System

The current robot mascot is the official HFT 3.0 character.

## Mascot characteristics

-   Friendly futuristic robot
-   White/black body
-   Electric violet lighting
-   Hoodie
-   Laptop/developer identity
-   Backpack
-   Coding symbol
-   Playful but technically capable

## Important rule

**Mascot = personality, not the entire design language.**

Do not place the same mascot image on every page.

Use different poses/variations.

### Required mascot variations

  Usage          Pose
  -------------- -------------------------------
  Home hero      Laptop + thumbs-up
  About hero     Sitting with laptop/sketchpad
  About values   Small illustrated mascot
  Problems       Coding/working
  Tracks         Pointing/exploring
  Prizes         Trophy/celebration
  Timeline       Running/moving
  Rules          Holding checklist
  Judges         Presenting panel
  Mentors        Conversational/helping
  Sponsors       Partner/presentation pose
  FAQ            Thinking/curious
  Contact        Welcoming
  404            Confused/lost
  Final CTA      Looking forward / confident

All variations must preserve:

-   Face
-   Body proportions
-   Clothing
-   Color treatment
-   Head design
-   Overall visual identity

Do not generate unrelated robot characters.

------------------------------------------------------------------------

# 6. Color System

Primary palette:

``` css
--black: #08080B;
--black-soft: #0D0D12;
--white: #F5F3EF;
--white-pure: #FFFFFF;
--violet: #7C3AED;
--violet-bright: #A855F7;
--violet-soft: #C084FC;
--grey: #8A8A94;
--grey-light: #D6D3D1;
--border-dark: #292331;
```

## Color rules

Black is the primary immersive environment.

Off-white is the primary content surface.

Violet is an accent.

Do NOT make the entire site purple.

Use alternating dark/light sections to create rhythm.

Example:

``` text
HOME        → DARK
ABOUT       → DARK / EDITORIAL
PROBLEMS    → LIGHT
TRACKS      → LIGHT / DARK MIX
PRIZES      → DARK
TIMELINE    → LIGHT or controlled dark
RULES       → LIGHT
JUDGES      → DARK
SPONSORS    → LIGHT/DARK
FAQ         → LIGHT
CONTACT     → DARK
```

------------------------------------------------------------------------

# 7. Typography

Typography is a major part of the identity.

## Display typography

Use a bold, condensed, highly expressive display font.

It should support:

``` text
HACK
THE
FUTURE
3.0
```

The hero treatment may use:

-   Distressed texture
-   Angular cuts
-   Technical linework
-   Purple fill
-   Metallic white
-   Controlled skew
-   Circuit details

Do not apply all effects simultaneously.

## Interface typography

Use a clean technical sans-serif.

Suitable options include:

-   Inter
-   Geist
-   IBM Plex Sans
-   Manrope

Choose one primary interface font and remain consistent.

## Micro typography

Use uppercase labels:

``` text
HTF / 03
25—26 SEP 2026
DEHRADUN / INDIA
REGISTRATION / OPEN
```

Use letter spacing and small sizes.

------------------------------------------------------------------------

# 8. Grid & Layout

Use a disciplined editorial grid.

Desktop target:

``` text
max-width: 1440px
content padding: 48–80px
12-column grid
```

Do not center everything.

Use:

-   asymmetry
-   negative space
-   offset images
-   oversized type
-   strong alignment
-   intentional overlaps

The layout itself should provide visual interest.

------------------------------------------------------------------------

# 9. Navigation

Desktop navigation:

``` text
[ HFT LOGO ]

HOME
ABOUT
PROBLEMS
TRACKS
PRIZES
TIMELINE
RULES
FAQ
CONTACT

[ REGISTER NOW ]
```

The active page gets:

-   violet underline
-   subtle color change

The navbar should remain visually minimal.

### Mobile

Use:

``` text
[ LOGO ]                       [ MENU ]
```

Open a full-screen navigation panel.

Do not shrink the desktop navigation into unreadable text.

------------------------------------------------------------------------

# 10. Homepage Architecture

The homepage should contain:

### 01 --- Hero

Main identity:

``` text
TULA'S UNIVERSITY PRESENTS

HACK
THE
FUTURE

3.0

36 HOURS. ONE FUTURE. BUILD IT.

25–26 SEPTEMBER 2026
TULA'S UNIVERSITY, DEHRADUN

[ REGISTER NOW ]
[ EXPLORE EVENT ]
```

Mascot:

Laptop + thumbs-up.

Supporting element:

Registration status.

------------------------------------------------------------------------

### 02 --- Event Snapshot

Use four clean information blocks:

``` text
36 HOURS
NON-STOP BUILDING

₹5L+
PRIZE POOL

MULTIPLE
TRACKS

DEHRADUN
UTTARAKHAND
```

Do not use excessive cards.

------------------------------------------------------------------------

### 03 --- About Preview

Use the approved editorial composition.

Heading:

**WHAT IS HACK THE FUTURE?**

Short introduction.

Campus image / event imagery.

CTA:

**KNOW MORE ABOUT HFT →**

------------------------------------------------------------------------

### 04 --- Prize Preview

Dark section.

Dominant:

**₹5L+**

Then:

``` text
WINNER
₹65,000

RUNNER UP
₹50,000

2ND RUNNER UP
₹30,000
```

Additional awards remain TBA until confirmed.

------------------------------------------------------------------------

### 05 --- Timeline Preview

This should NOT be a generic card grid.

Use a visual journey.

Show:

``` text
25 SEP
REGISTRATION
INAUGURATION
HACKING BEGINS
MENTORING

26 SEP
SUBMISSION
EVALUATION
FINALE
```

Exact times remain placeholders until officially confirmed.

CTA:

**VIEW FULL TIMELINE →**

Mascot:

Running/moving variation.

------------------------------------------------------------------------

### 06 --- Tracks Preview

Use a visually distinct layout.

Potential tracks can be placeholders:

``` text
AI / ML
WEB & APP
IOT & ROBOTICS
CYBERSECURITY
FINTECH
OPEN INNOVATION
```

Exact official tracks must be replaced when confirmed.

CTA:

**EXPLORE TRACKS →**

Mascot:

Pointing/exploring variation.

------------------------------------------------------------------------

### 07 --- Why Participate

Do not promise unconfirmed benefits.

Possible approved-content placeholders:

``` text
LEARN & BUILD
MENTORSHIP
NETWORK
RECOGNITION
CERTIFICATION
```

Only publish benefits confirmed by organizers.

------------------------------------------------------------------------

### 08 --- Final CTA

Large dark section:

> **ARE YOU READY TO BUILD THE FUTURE?**

Supporting line:

> Ideas are waiting. The future is yours to build.

Buttons:

``` text
REGISTER NOW
EXPLORE EVENT
```

Mascot:

Confident/welcoming variation.

------------------------------------------------------------------------

### 09 --- Footer

Include:

-   HFT logo
-   Short event description
-   Quick links
-   Participate links
-   Support links
-   Social links
-   Contact
-   Copyright

Avoid adding fake newsletter functionality unless it is actually
implemented.

------------------------------------------------------------------------

# 11. About Page

The About page is a **full multi-section page**, not one screen.

## Screen 1 --- Why We Build the Future

Use the approved design direction.

Large heading:

**WHY WE BUILD THE FUTURE.**

Content explains:

-   What HFT 3.0 is
-   36-hour format
-   Tula's University
-   Purpose of the hackathon
-   Real-world problem solving

Mascot:

Sitting with laptop/sketchpad.

Campus:

Tula's University imagery.

------------------------------------------------------------------------

## Screen 2 --- What HFT Stands For

Use a different composition.

Five concepts:

``` text
INNOVATION
COLLABORATION
IMPACT
GROWTH
COMMUNITY
```

Each gets:

-   unique icon
-   short description
-   restrained motion

Mascot:

Small supporting illustration.

------------------------------------------------------------------------

## Screen 3 --- The HFT Experience

Create a visual journey:

``` text
DISCOVER
    ↓
CHOOSE
    ↓
BUILD
    ↓
MENTOR
    ↓
SUBMIT
    ↓
PRESENT
```

Mascot:

Coding/building variation.

------------------------------------------------------------------------

## Screen 4 --- Who It's For

Potential audience:

``` text
DEVELOPERS
DESIGNERS
AI / ML BUILDERS
ENTREPRENEURS
PROBLEM SOLVERS
STUDENTS
```

Keep wording subject to organizer approval.

------------------------------------------------------------------------

## Screen 5 --- Philosophy

Large editorial statement:

> **The future isn't something we wait for.\
> It's something we build.**

Mascot can appear as a small illustrated character.

------------------------------------------------------------------------

## Screen 6 --- CTA

``` text
YOUR NEXT BUILD
STARTS HERE.

[ EXPLORE PROBLEMS ]
[ REGISTER NOW ]
```

------------------------------------------------------------------------

# 12. Problem Statements

This page is functional and clean.

Do NOT make it visually overcrowded.

Structure:

``` text
04 / PROBLEM STATEMENTS

REAL PROBLEMS.
REAL BUILDERS.

[ ALL ]
[ AI / ML ]
[ WEB ]
[ IOT ]
[ CYBER ]
[ FINTECH ]
[ OPEN ]
```

Then a clean list:

``` text
01 / HTF26-01
AI / MACHINE LEARNING
Problem title
→

02 / HTF26-02
HEALTHCARE
Problem title
→
```

Each item should be a horizontal row, not a giant card.

Clicking opens:

``` text
/problems/htf26-01
```

------------------------------------------------------------------------

# 13. Problem Detail Page

Structure:

``` text
HTF26 / PS-01

AI / MACHINE LEARNING

PROBLEM TITLE

Overview

THE CHALLENGE

...

OBJECTIVE

...

EXPECTED OUTCOME

...

CONSTRAINTS

...

[ DOWNLOAD PDF ]
[ REGISTER NOW ]
```

Mascot:

Coding pose.

------------------------------------------------------------------------

# 14. Tracks Page

Tracks should feel exploratory.

Large typography:

> **CHOOSE YOUR ARENA.**

Possible temporary domains:

``` text
01 AI / ML
02 WEB & APP
03 IOT & ROBOTICS
04 CYBERSECURITY
05 FINTECH
06 OPEN INNOVATION
```

Each track should have:

-   distinctive icon
-   short description
-   hover state
-   subtle color variation
-   optional details

Mascot:

Pointing toward selected track.

------------------------------------------------------------------------

# 15. Prizes Page

The prize page should feel celebratory but premium.

Hero:

``` text
THE PRIZE POOL

₹5L+
```

Main prizes:

``` text
01
WINNER
₹65,000

02
RUNNER UP
₹50,000

03
2ND RUNNER UP
₹30,000
```

Additional awards:

**TBA**

Do not invent special awards.

Mascot:

Trophy/celebration pose.

------------------------------------------------------------------------

# 16. Timeline Page

Concept:

**36 HOURS / ONE CONTINUOUS BUILD**

Use a journey/path.

Separate:

``` text
25 SEPTEMBER
26 SEPTEMBER
```

Include official event stages when confirmed.

Do not publish placeholder times.

Mascot:

Running/moving through the timeline.

------------------------------------------------------------------------

# 17. Rules Page

Rules should prioritize readability.

Heading:

> **KNOW THE GAME. BUILD WITHIN IT.**

Categories:

``` text
Eligibility
Team
Submission
Judging
Code of Conduct
```

Use expandable sections.

Mascot:

Checklist/clipboard pose.

All actual rules must come from the official organizer-approved
document.

------------------------------------------------------------------------

# 18. Judges Page

Headline:

> **THE MINDS BEHIND THE VERDICT.**

Until confirmed:

``` text
REVEALING SOON
```

Do NOT create fake judges.

When confirmed, profile cards contain:

-   photo
-   name
-   designation
-   organization
-   expertise
-   LinkedIn

Mascot:

Presenting/introduction pose.

------------------------------------------------------------------------

# 19. Mentors Page

Same principle.

Until confirmed:

**REVEALING SOON**

When available:

``` text
PHOTO
NAME
ROLE
EXPERTISE
LINKEDIN
```

Mascot:

Helpful/conversational pose.

------------------------------------------------------------------------

# 20. Sponsors & Partners

Until confirmed:

``` text
SPONSORS
REVEALING SOON

PARTNERS
REVEALING SOON
```

Do not create placeholder company logos that look real.

When sponsors are confirmed, organize by:

``` text
TITLE PARTNER
POWERED BY
TECHNOLOGY PARTNER
CLOUD PARTNER
COMMUNITY PARTNER
```

Only use categories approved by the event team.

------------------------------------------------------------------------

# 21. FAQ Page

Clean accordion.

Potential questions:

-   Who can participate?
-   What is the team size?
-   Is the event offline?
-   What should participants bring?
-   Is accommodation available?
-   How are projects judged?
-   What technologies can be used?
-   How do submissions work?

Answers should be added only after organizer confirmation.

------------------------------------------------------------------------

# 22. Contact Page

Include:

``` text
HACK THE FUTURE 3.0

Tula's University
Dehradun, Uttarakhand

FACULTY COORDINATOR
[ TBA ]

STUDENT COORDINATOR
[ TBA ]

EMAIL
[ TBA ]

PHONE
[ TBA ]
```

Social links should be added when official event accounts exist.

------------------------------------------------------------------------

# 23. Animation System

Use animation with restraint.

Recommended:

### Page entrance

Fade + slight vertical movement.

### Headings

Text reveal / clip reveal.

### Images

Subtle parallax.

### Mascot

Small movement on scroll or hover.

### Buttons

Arrow movement.

### Problem rows

Border/accent transition.

### Timeline

Progressive reveal.

### Navigation

Smooth active-state transition.

Avoid:

-   constant floating
-   excessive glow
-   spinning icons
-   random particles
-   unnecessary 3D movement

------------------------------------------------------------------------

# 24. Responsive Design

Mobile is NOT a compressed desktop version.

## Mobile priorities

Hero:

``` text
LOGO
MENU

HACK
THE
FUTURE
3.0

MASCOT

DATE
LOCATION

REGISTER
```

The mascot moves below/alongside the headline.

Stats become:

``` text
36 HOURS
₹5L+
TRACKS
DEHRADUN
```

in a 2×2 layout.

Problem rows remain highly readable.

Timeline becomes vertical.

Track cards become a vertical stack or horizontal scroll.

Large typography must scale down without destroying hierarchy.

------------------------------------------------------------------------

# 25. Accessibility

Implement:

-   semantic HTML
-   keyboard navigation
-   visible focus states
-   sufficient contrast
-   alt text
-   reduced-motion support
-   accessible accordions
-   accessible navigation
-   button labels
-   proper heading hierarchy

Do not use animation as the only method of communicating state.

------------------------------------------------------------------------

# 26. SEO

Set:

``` text
Title:
Hack the Future 3.0 — 36-Hour Hackathon | Tula's University

Description:
Hack the Future 3.0 is a 36-hour hackathon at Tula's University, Dehradun, on 25–26 September 2026.

Keywords:
Hack the Future 3.0
Tula's University Hackathon
Dehradun Hackathon
36 Hour Hackathon
Hackathon 2026
```

Add:

-   Open Graph metadata
-   Twitter/X metadata
-   favicon
-   sitemap
-   robots.txt
-   canonical URLs

------------------------------------------------------------------------

# 27. Recommended Tech Stack

## Frontend

``` text
React
Vite
TypeScript
Tailwind CSS
```

Use TypeScript from the beginning.

## Animation

Primary:

``` text
Framer Motion
```

Only add GSAP if a specific animation requires it.

## Icons

``` text
Lucide React
```

Avoid mixing multiple icon libraries.

## Routing

``` text
React Router
```

Recommended routes:

``` text
/
 /about
 /problems
 /problems/:id
 /tracks
 /prizes
 /timeline
 /rules
 /judges
 /mentors
 /sponsors
 /faq
 /contact
```

## Deployment

``` text
GitHub
Vercel
```

------------------------------------------------------------------------

# 28. Suggested Project Structure

``` text
src/
│
├── assets/
│   ├── mascot/
│   ├── logo/
│   ├── campus/
│   ├── icons/
│   └── images/
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── PageShell.tsx
│   │
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── SectionLabel.tsx
│   │   ├── PageHeading.tsx
│   │   └── NumberedSection.tsx
│   │
│   ├── mascot/
│   │   └── Mascot.tsx
│   │
│   ├── problems/
│   ├── tracks/
│   ├── prizes/
│   ├── timeline/
│   └── faq/
│
├── pages/
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Problems.tsx
│   ├── ProblemDetail.tsx
│   ├── Tracks.tsx
│   ├── Prizes.tsx
│   ├── Timeline.tsx
│   ├── Rules.tsx
│   ├── Judges.tsx
│   ├── Mentors.tsx
│   ├── Sponsors.tsx
│   ├── FAQ.tsx
│   └── Contact.tsx
│
├── data/
│   ├── problems.ts
│   ├── tracks.ts
│   ├── timeline.ts
│   ├── faq.ts
│   └── navigation.ts
│
├── animations/
│   ├── pageTransitions.ts
│   ├── reveal.ts
│   └── hover.ts
│
├── styles/
│   ├── globals.css
│   └── typography.css
│
├── App.tsx
└── main.tsx
```

------------------------------------------------------------------------

# 29. Content Management Strategy

Do not hard-code every piece of event content directly inside JSX.

Store dynamic event information in data files.

Example:

``` ts
export const event = {
  name: "Hack the Future 3.0",
  dates: "25–26 September 2026",
  venue: "Tula's University, Dehradun",
  duration: "36 Hours",
  prizePool: "₹5L+",
};
```

Problem statements, tracks, timeline and FAQs should also be
data-driven.

This allows organizers to update content without redesigning components.

------------------------------------------------------------------------

# 30. Placeholder Policy

Use explicit placeholders:

``` text
REVEALING SOON
TBA
COMING SOON
```

Never fabricate:

-   judges
-   mentors
-   sponsors
-   companies
-   partner logos
-   participant counts
-   track counts
-   special awards
-   event times
-   accommodation promises
-   stipend/prize benefits
-   judging criteria

The confirmed information currently available is:

``` text
Hack the Future 3.0
Tula's University
25–26 September 2026
Dehradun
36 hours
₹5 Lakh+ prize pool
Winner: ₹65,000
Runner-up: ₹50,000
2nd Runner-up: ₹30,000
```

------------------------------------------------------------------------

# 31. Development Workflow

Do not build the entire website with one AI prompt.

Build in controlled phases.

## Phase 1 --- Foundation

-   Vite + React + TypeScript
-   Tailwind
-   Routing
-   Fonts
-   Global colors
-   CSS variables
-   Responsive container
-   Navbar
-   Footer

## Phase 2 --- Brand

-   Logo
-   Mascot system
-   typography
-   buttons
-   section labels
-   page transitions
-   background patterns

## Phase 3 --- Homepage

Build:

1.  Hero
2.  Event snapshot
3.  About preview
4.  Prizes
5.  Timeline preview
6.  Tracks preview
7.  Why participate
8.  Final CTA
9.  Footer

## Phase 4 --- Inner pages

Build individually:

1.  About
2.  Problems
3.  Problem detail
4.  Tracks
5.  Prizes
6.  Timeline
7.  Rules
8.  Judges
9.  Mentors
10. Sponsors
11. FAQ
12. Contact

## Phase 5 --- Motion

Add animation only after static layouts are correct.

## Phase 6 --- Responsive

Desktop → tablet → mobile.

## Phase 7 --- QA

Check:

-   Chrome
-   Edge
-   Safari
-   Android
-   iPhone
-   different screen widths
-   keyboard navigation
-   loading performance

------------------------------------------------------------------------

# 32. Performance Requirements

The website should remain visually rich without becoming slow.

Target:

-   optimized WebP/AVIF images
-   lazy loading below-the-fold images
-   responsive image sizes
-   SVG icons
-   compressed mascot assets
-   minimal JavaScript where possible
-   avoid unnecessary animation libraries
-   avoid huge background videos unless required

The mascot should have appropriately sized versions for:

``` text
desktop
tablet
mobile
```

------------------------------------------------------------------------

# 33. Final Design Quality Checklist

Before considering a page finished:

### Visual

-   Does it look custom?
-   Does the page have its own personality?
-   Is typography strong?
-   Is there enough whitespace?
-   Is purple being used as an accent?
-   Is the mascot contextually relevant?

### UX

-   Is the primary action obvious?
-   Is information easy to scan?
-   Is there unnecessary content?
-   Are buttons understandable?
-   Does mobile remain clean?

### Brand

-   Does `HTF / 03` appear appropriately?
-   Does the mascot match the official design?
-   Does the typography feel like HFT?
-   Does the page belong to the same overall system?

### Authenticity

-   Are all claims confirmed?
-   Are there fake logos?
-   Are there fake statistics?
-   Are there placeholder judges?
-   Are sponsors marked correctly?

------------------------------------------------------------------------

# 34. Definition of Done

The website is complete only when:

-   Every major section has a dedicated page.
-   Desktop and mobile layouts are polished.
-   Mascot variations are consistent.
-   Logo is available as a proper asset.
-   All navigation works.
-   Problem detail pages work.
-   CTA links work.
-   Forms/registration links work.
-   Official information replaces all placeholders.
-   Judges/sponsors are updated when revealed.
-   SEO metadata is configured.
-   Accessibility is tested.
-   Performance is optimized.
-   No fake event information remains.
-   The website feels like a **custom HFT 3.0 digital identity**, not an
    AI-generated template.

------------------------------------------------------------------------

# 35. Development Rule

**Do not optimize for "more effects."**

Optimize for:

> **Better hierarchy. Better typography. Better spacing. Better
> storytelling. Better interaction.**

The mascot, violet accents, technical graphics and animations should
support the experience---not overwhelm it.

The final result should feel like:

**A technology event brand first.\
A hackathon website second.\
An AI-generated webpage never.**
