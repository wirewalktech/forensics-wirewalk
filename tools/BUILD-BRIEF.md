# BUILD BRIEF — forensics.wirewalk.com

Issued 2026-09-11. Everything below is a decision, not an option, unless marked **[PRINCIPAL]** (needs the principal's personal sign-off) or **[LOW CONFIDENCE]** (number needs checking before publication).

---

## 1. THE SITE'S ARGUMENT

Forensic evidence is only worth what it survives, so this practice publishes the things that get attacked — the method, the rate schedule, the limits of each finding — rather than the things that cannot be checked. The rate is the same whichever side retains us, it is fixed before we look at anything, and it does not move with what we find; that is why our fee is not a cross-examination issue and why a null or adverse result is billed exactly like a helpful one. Every capability on this site is published alongside what it does not establish, because an examiner who has not written that down before the engagement will be writing it on the stand.

Everything else on the site serves those three sentences. Where a page cannot be traced back to one of them, cut the page.

---

## 2. SITEMAP

Fifteen URLs. Two lanes. The emergency band (number + link to `/emergency`) renders identically at the top of every page in the considered lane; the considered lane never renders on `/emergency`.

| URL | Job (one) | Buyer | Lane |
|---|---|---|---|
| `/` | Let a referred lawyer decide in four minutes whether forwarding this name is safe. Carries the WE WILL NOT block in full at anchor `#we-will-not`. | Outside counsel, in-house GC | Considered |
| `/emergency` | Make a frightened non-specialist do the right things in the first hour, whether or not they call. Self-contained, no nav, loads without scripts. | IT manager, office admin, junior associate, CFO | **Emergency** |
| `/method` | State the acquisition → verification → examination → reporting procedure in enough detail that an opposing examiner could reproduce it. The format nobody in this category publishes. | Outside counsel, corporate infosec | Considered |
| `/specimen-report` | Give the buyer the thing buyer-side guidance tells them to ask for, before they ask. Marked `[SPECIMEN — NOT A REAL MATTER]` throughout. | Outside counsel | Considered |
| `/limits` | State what digital evidence cannot establish. This is a selling document, not a disclaimer. | All considered buyers | Considered |
| `/roles` | The four instruction roles and how discovery obligations differ between them; the privilege posture and its honest limit. | Outside counsel, in-house GC | Considered |
| `/scope` | The full service ledger — every service, its price class, and its `WHAT THIS DOES NOT ESTABLISH` column — plus what the practice refers out. | All considered buyers | Considered |
| `/rates` | The rate schedule as it appears attached to the engagement letter. No cart, no discount, no promotion. | Outside counsel, HR counsel, individuals | Considered |
| `/engagement` | Conflicts, intake, what not to send, authorisation ceilings, invoicing, purchase orders, retainer mechanics, who the client is. | Outside counsel, in-house GC, procurement | Considered |
| `/evidence-handling` | Custody, storage, encryption, retention, destruction, subpoena notice, access authority, the CSAM stop-and-escalate rule. | In-house GC, PE diligence, HR counsel | Considered |
| `/standby` | Sell the standby agreement: the conflicts check, rates and terms done while nothing is on fire. | In-house GC, corporate infosec | Considered |
| `/ediscovery` | The EDRM stages performed and the per-unit economics, with the culling conflict named against our own interest. | Litigation support, paralegals, counsel | Considered |
| `/insurance` | State the panel posture candidly and tell the reader to call their carrier before instructing anyone. | In-house GC, breach coach, IT manager | Both (linked from `/emergency`) |
| `/contact` | Capture name, role, whether counsel is engaged, callback number. Nothing else, with the reason printed beside the fields. | All | Both |
| `/versions` | Index of prior versions of every page at stable URLs, supporting the chain-of-custody footer. | Anyone verifying | Considered |

**Cut deliberately:** per-service landing pages (the bureau tell), a blog, a team page, an "about" page separate from `/`, case studies, a resources library. There is no testimonial component in the template — if the slot does not exist, nobody fills it in eighteen months.

---

## 3. THE PRICE LIST

### 3.1 The three price classes — printed at the head of `/rates` and labelled on every line of `/scope`

1. **FIXED** — a stated price for a stated unit.
2. **HOURLY AGAINST AN AUTHORISED CEILING** — a published rate plus a written stop-point. No hour above the ceiling is billed. At 80% consumption we stop and report; work resumes only on a written increase.
3. **SCOPED AFTER PAID TRIAGE** — a fixed, time-boxed first block, credited in full against whatever follows.

### 3.2 The rule that decides which class applies

Print this verbatim:

> A fixed price buys an artefact of defined extent — an image, an extraction, a copy, a hash set, a certificate. Analysis cannot be priced before someone has looked at the artefact, because the extent of an answer is not knowable in advance. That is why some lines below carry a price and some carry a rate and a ceiling.

### 3.3 Hourly rates

| Line | Rate |
|---|---|
| Principal — examination, analysis, opinion work, case strategy | **$425/hr** |
| Associate examiner — examination and analysis under the principal's direction | **$275/hr** **[PRINCIPAL: delete if no associate exists]** |
| Collection and processing technician | **$175/hr** |
| eDiscovery project management | **$180/hr** |
| Travel time | **$210/hr**, capped at 5 hours per day. Expenses at cost, no mark-up. |
| Billing increment | **0.1 hour**, one task per entry. No block billing. |

**After-hours and expedited uplift: +35%.** Trigger stated mechanically: work performed outside 08:00–18:00 Eastern Monday to Friday, or on a weekend or US federal holiday; or an engagement commencing within 24 hours of signature. **The uplift applies only to the out-of-hours hours, not to all time on the matter.** One number, one trigger — the research showed 25–50% and a vague trigger is the most-disputed line on a forensics invoice.

**Rate versioning:** the rate in effect at the date of the engagement letter applies, held 12 months, changed only on 60 days' written notice; already-authorised work bills at the rate authorised.

### 3.4 Testimony — published before any date is reserved

| Line | Price |
|---|---|
| Deposition, remote | **$550/hr**, 4-hour minimum |
| Deposition, in person | **$4,800 per day or any part thereof**, plus travel |
| Trial, hearing or arbitration | **$5,600 per day or any part thereof**, plus travel |
| Preparation | Ordinary principal hourly rate |
| Standby / reserved-and-not-called | Billed at the applicable day rate |
| Cancellation | Released more than 3 business days out: no charge. Inside 3 business days: 50% of the reserved time. Inside 1 business day: 100%. |
| Prepayment | Estimated testimony fee prepaid before the date |

State alongside: testimony time is billed to the retaining party irrespective of the outcome and irrespective of whether the testimony helps them. Testimony is never capped — the schedule belongs to the court, and a not-to-exceed on testimony is a promise no expert can keep.

### 3.5 FIXED prices — publishable

| Service | What it includes | Unit | Price |
|---|---|---|---|
| Scoping and preservation triage call | Up to 45 minutes, a written preservation instruction if one is needed | per matter | **No charge.** Also no charge for the call that ends with us saying the data cannot answer the question, or that you do not need a forensic examiner. |
| Forensic acquisition — computer, loose drive or external media | Write-blocked where the media permits, SHA-256 verified at acquisition and after, imaging worksheet, acquisition log, signed chain of custody, destination media up to 2 TB, 90 days storage | per device, ≤2 TB | **$950** |
| — same, 2–8 TB | as above, media at cost above 2 TB | per device | **$1,450** |
| — same, above 8 TB | — | per device | Quoted after a short technical call |
| Each additional device, same matter, same site, same day | as above | per device | **$650** |
| Targeted artefact collection (triage collection) | KAPE/Velociraptor-class targeted set, hashed container, collection manifest, written note of what was deliberately not collected | per endpoint | **$475** |
| On-site collection | Up to 8 hours on site within 60 miles; beyond that, travel rate and expenses at cost | per examiner-day | **$2,900** (half-day **$1,700**) |
| Remote / self-service custodian collection | Prepared kit or supervised agent collection, custodian attestation, session log | per custodian | **$900** + shipping at cost |
| Mobile extraction — logical / advanced logical | The attempt, the documented method, hashed extraction set, written statement of the level achieved and what was not obtainable | per device, per attempt | **$850** |
| Mobile extraction — full file system attempt | As above at the deeper level. **Quoted only after the handset is inspected. If only a logical level is reached, the logical price applies and the difference is not charged.** | per device | **$1,800** |
| Each additional device, same matter | — | per device | **$600** |
| Cloud account collection | One mailbox plus one drive, hashed export, hash manifest, record of the authority relied on and the tenant's retention and licence tier at collection | per custodian | **$1,100** |
| — each additional custodian, same tenant, same export | — | per custodian | **$450** |
| Cloud tenant preservation | Holds applied in-platform, retention and licence-tier review, audit log export out of the tenant, hold confirmation report | per tenant, per platform | **$2,400** **[LOW CONFIDENCE — not published as a line item anywhere in the research; built from 6–10 hours at collection rates]** |
| Verified forensic copy for production or for the opposing party | Hash-verified copy, verification report | per copy | **$350** + media at cost |
| Second opinion on an internal IT finding | Review of the original artefacts rather than the summary, short written opinion, assessment of what the internal examination itself overwrote | per finding | **$2,600** |
| Review of an opposing examiner's report | First-pass: each material finding marked supported / partly supported / unsupported / untestable on the material provided, plus the questions to put | flat | **$3,250** |
| Declaration or affidavit restating completed work | Signed declaration with exhibits, each sentence mapped to something verified | per document | **$1,800** (hourly where it requires new testing) |
| Cloud logging and evidence-readiness review | Per log source: current state, retention, what it would answer, prioritised changes with licence cost stated | per M365 or Google tenant | **$4,200** **[LOW CONFIDENCE]** |
| — AWS account added | — | per account | **$1,800** **[LOW CONFIDENCE]** |
| Tabletop exercise and plan review | Half-day facilitated exercise, decision log, marked-up plan | per exercise | **$6,500** **[LOW CONFIDENCE — no published market comparator found]** |
| Evidence storage after the matter closes | Access-controlled, encrypted at rest, hash re-verification on withdrawal | per matter per month, up to 4 TB | **$75** ( **$15/TB/month** above 4 TB). First 90 days after final invoice included. |
| Certified destruction | Written instruction required, certificate issued | per matter | **$150** |
| **Emergency mobilisation** | Fixed, time-boxed first block: preservation direction, volatile and triage collection from up to five systems, a written preliminary position and a scoped proposal with a ceiling. **Inclusive of the out-of-hours uplift.** Credited in full against whatever follows. | per incident | **$6,000** **[LOW CONFIDENCE — set it against what the principal can actually deliver in the block]** |
| **Standby agreement** | Conflicts check pre-run against named adversaries, rate card fixed for the year, terms and MSA pre-agreed, short-form out-of-hours authorisation pre-signed, annual review call. **Credited in full against the first engagement of the year; if unused, converts to a tabletop or a logging review rather than expiring.** Retained rates: published card **less 15%**, and the out-of-hours uplift waived for the first 48 hours of an incident. | per year | **$7,500** |

**No surge clause.** Print it: *there is no overage or surge rate; hours beyond a standby credit bill at the retained rate.* The research identifies the 50–150% surge clause as where cheap retainers become expensive. Refusing it is specific, checkable and costly.

### 3.6 Unit price, unknown quantity — publish the unit, never a total

| Line | Unit | Price |
|---|---|---|
| Processing and ingest | **per GB of source volume as collected — pre-expansion, pre-deduplication.** Print: *we do not bill on expanded volume.* | **$22/GB** **[LOW CONFIDENCE — verify against the processing vendor's own metering before publishing; the friendlier measure may not cover cost]** |
| Review hosting, no analytics | per GB per month | **$9** |
| Review hosting, with analytics | per GB per month | **$14** |
| Review platform user licence | per user per month, **passed through at cost, no mark-up** | **$75** |
| Imaged production | per page | **$0.05** **[LOW CONFIDENCE]** |
| TAR protocol design and validation | per project, fixed | **$6,500** **[LOW CONFIDENCE]** |

`/ediscovery` carries a visible `RATES REVIEWED 2026-09-11 · NEXT REVIEW 2027-03-11`. Per-GB pricing is moving down and toward bundles; a figure without a review date goes stale invisibly.

### 3.7 Services that CANNOT carry a published price — and what the page says instead

| Service | Why not | What the page says |
|---|---|---|
| Any examination or analysis | The deliverable is an answer, not an artefact | *Hourly against a written ceiling. We propose an opening authorisation before we start; we stop and report at 80% of it and do not resume without a written increase.* |
| Server, RAID, NAS or virtualised host imaging | Not repeatable work — RAID rebuild, live acquisition, hypervisor export, multi-terabyte throughput | *Quoted as a ceiling after a short technical call. Treat a flat number for this from anyone with suspicion.* |
| Mobile physical, BFU, advanced unlock, chip-off, ISP | Success is not guaranteed and a modern before-first-unlock handset may be unobtainable at any price | *Not published. Quoted per device after inspection, or referred out. A locked modern handset may simply not be reachable, and we say so before you spend anything.* |
| Rule 26(a)(2)(B) expert report | Report cost varies by expert and exhibit volume, not by case | *Quoted as an estimated band with a stop-and-confer point, after the examination is complete — not at engagement.* |
| Ransomware / intrusion incident response | Scope is discovered, not declared | *Staged: the fixed mobilisation block produces the information needed to price everything after it.* |
| Breach data mining and notification list preparation | Priced on record count after the at-risk set is known | *Quoted on record count once the at-risk set is confirmed. Ask us which of the two economics you are buying — forensic hourly or eDiscovery per-GB — because the difference is the whole bill.* |
| Enterprise / regulated / multi-jurisdiction IR, and full reverse engineering of a bespoke implant | Out of this practice's capacity | On `/scope`, not in the refusals: *that tier belongs to the panel consultancies. We will work under or alongside them, or say on the first call that we are the wrong firm.* |

### 3.8 What is explicitly not charged

The scoping call. The call that ends with us saying no. A "typical hours" figure — we do not publish one, because it would be a claim about past matters, and what we publish instead is the opening authorisation we would propose.

---

## 4. EVIDENTIARY CONTENT

Everything in this section is written as something the practice **does**. No credential appears anywhere on the site.

### 4.1 Acquisition and verification (`/method`)

- Acquisition verified by cryptographic hash: a digest computed at acquisition, the image digest compared against it, both recorded with the algorithm and the tool version, and the image re-verified before analysis and again before production. **SHA-256 is the primary algorithm**; a second digest is recorded where the tool provides one. Print the limit in the same paragraph: *a hash match proves the image corresponds to the source as read at acquisition. It does not prove the source was unaltered before we arrived, and it says nothing about who created anything.*
- MD5 and SHA-1 are recorded where a tool emits them and are never described as secure. NIST has deprecated SHA-1 (SP 800-131A Rev. 2).
- Analysis is performed on a working copy. The master image is stored under access control with its own integrity record.
- Write blocking is used wherever the source permits — **and in the same sentence:** it cannot be used for live memory capture, running production systems, most mobile extractions, or cloud and SaaS sources. In those cases soundness comes from documenting the method, recording tool and version, hashing the output at the earliest possible point, and stating plainly what alteration was unavoidable and why. Reference NIST CFTT HWB and SWB specifications and Federated Testing as the validation framework the practice works to.
- Written chain of custody covering receipt, every named custodian, every transfer with date and time, storage conditions between transfers, and return or destruction — written as the work happens, not reconstructed. State that gaps ordinarily go to weight rather than admissibility (*United States v. Howard-Arias*, 679 F.2d 363 (4th Cir. 1982)) and that this is why we do not overstate the rule.
- Contemporaneous notes, tool inventory with versions, search terms, filter criteria and discarded hypotheses are kept on the assumption they will be produced, because FRCP 26(a)(2)(B)(ii) reaches facts and data **considered**, not merely relied upon.
- The four principles the method is written against, named and cited: auditability, repeatability, reproducibility, justifiability — ISO/IEC 27037:2012.

### 4.2 Standards cited by number and consultation date

State once, plainly, that these are guidance the practice works to, **not accreditation it holds and not a guarantee of admissibility**:

- NIST SP 800-86, *Guide to Integrating Forensic Techniques into Incident Response* (September 2006) — collection, examination, analysis, reporting; order of volatility.
- ISO/IEC 27037:2012, with ISO/IEC 27041, 27042, 27043 and the 27050 series where relevant.
- SWGDE 17-F-002 (acquisitions), 18-F-001 (examinations), 18-F-002 (collection), 23-F-004 (cloud) — cite the number and the date consulted, because versions change.
- EDRM named as shared vocabulary, explicitly **not a standard, not required by the FRCP, and iterative rather than linear**. State which stages the practice performs: identification, preservation, collection, processing, production and presentation support. State that managed review and information governance consulting are out of scope and referred out.

### 4.3 Rules of evidence — the citations, correct

| Point | Cite | Site wording |
|---|---|---|
| The operative admissibility test | **FRE 702** as amended effective 1 Dec 2023 | The proponent must show it is more likely than not that each requirement is met, and 702(d) asks whether the opinion **reflects a reliable application** of the method. Daubert, *Joiner* and *Kumho* gloss the rule; the rule is the text. |
| The trilogy | *Daubert v. Merrell Dow Pharmaceuticals, Inc.*, **509 U.S. 579 (1993)**; *General Electric Co. v. Joiner*, **522 U.S. 136 (1997)**; *Kumho Tire Co. v. Carmichael*, **526 U.S. 137 (1999)** | Kumho is the governing gloss for digital forensics, which is technical and experience-based; the factors are flexible, not a checklist. Never write "extended Daubert to non-scientific evidence". |
| State standard | *Frye v. United States*, **293 F. 1013 (D.C. Cir. 1923)** — a Court of Appeals decision, not the Supreme Court | *The applicable standard is checked for the venue at engagement.* **Do not publish a state-by-state table** — the map is contested and moving. New York remains a Frye jurisdiction (*People v. Wesley*, 83 N.Y.2d 417 (1994); *Parker v. Mobil Oil Corp.*, 7 N.Y.3d 434 (2006)), which matters for a New York-area practice and should be named as the venue we most often work in. |
| Authentication | **FRE 901(a)**, conditional relevance under **104(b)**; illustrations 901(b)(1), (b)(3), (b)(4), (b)(9) | The foundation is built at collection time, not before trial. 901(b)(9) is an **authentication illustration, never a self-authentication provision**. |
| Self-authentication | **FRE 902(14)** for data copied from a device or medium and authenticated by a process of digital identification — the hash-verified copy. **FRE 902(13)** for records generated by an electronic process or system — log files. | These two are reversed on most forensics websites and a lawyer spots it instantly. Both require a certification meeting **FRE 902(11) or (12)**, and 902(11) carries the **notice condition**: reasonable written notice with the record and certification made available for inspection. Print the limit: *these remove the need for live foundation testimony on authenticity only. They resolve neither hearsay, nor relevance, nor best evidence, and an opponent may still contest authenticity.* |
| Best evidence | **FRE 1002** with **1001(d)**, **1001(e)**, **1003**, **1004** | For ESI, "original" means any output readable by sight that accurately reflects the information; a duplicate is admissible to the same extent absent a genuine authenticity question. **Never write that the original drive is required.** |
| Reliance material | **FRE 703**, **705** | Third-party logs and vendor telemetry can support an opinion without themselves being admitted; we are explicit about what was relied on versus what is offered as evidence. |
| Exhibits and summaries | **FRE 107** (effective 1 Dec 2024) and amended **FRE 1006** | A timeline built from artefacts is usually a Rule 107 illustrative aid and is not evidence; a computed summary of voluminous admissible material can be Rule 1006 substantive evidence. We say which we are producing. |
| Privilege waiver | **FRE 502(b)**, **502(d)** | Where the court will enter a 502(d) order, we work under it and say so. |
| Machine-generated evidence | **Proposed FRE 707 — NOT IN FORCE** | One clause only, clearly labelled: published for comment June 2025, comment closed 16 February 2026, the Standing Committee declined to recommend action in June 2026 and returned it for further study. Never cite it as a rule. |

### 4.4 Procedure

- **FRCP 26(a)(2)(B)** — the report contains a complete statement of opinions with bases and reasons, facts and data considered, exhibits, qualifications including publications from the previous 10 years, the 4-year testimony list, and the compensation statement. Prepared and signed by the examiner who did the work. **26(a)(2)(C)** is the lighter disclosure for non-retained experts. **26(a)(2)(D)** timings apply absent stipulation or order — never describe 90/30 days as fixed.
- **FRCP 26(b)(4)** — (A) deposition after the report; (B) **draft reports are protected**; (C) attorney–expert communications protected **except** compensation, facts or data provided by counsel and considered, and assumptions provided and relied on; (D) consulting expert shielded absent exceptional circumstances; (E) the party seeking discovery normally pays the expert's reasonable fee. We segregate and log material supplied by counsel so the (C) carve-outs can be honoured without sweeping in protected communications and drafts.
- **FRCP 34(b)(1)(C)** and **34(b)(2)(E)** — we produce in the form specified, or as ordinarily maintained, or in a reasonably usable form with searchable text and metadata preserved, and **we say when a requested format would degrade usability rather than deliver it silently**.
- **FRCP 26(b)(1)** proportionality and **26(b)(2)(B)** not-reasonably-accessible sources; **26(f)** discovery plan. As amended effective **1 December 2025**, **26(f)(3)(D)** requires the plan to address the method and timing of complying with **26(b)(5)(A)**, and **16(b)(3)(B)(iv)** directs the scheduling order to set it — privilege-log format is now an up-front scheduled question. We take part in that technical conference.
- **FRCP 37(e)** — the exclusive framework for ESI loss. (e)(1) requires prejudice; **(e)(2) requires a finding that the party acted with the intent to deprive**, which negligence and gross negligence do not reach. Print: *we report what the artefacts show — what existed, what was deleted, when, by what mechanism, and whether it can be restored or replaced from backups, shadow copies, journals or a second custodian. Whether a party acted with intent to deprive is a finding for the court, and we do not offer it.*
- **Preservation duty** — common law, triggered when litigation is reasonably anticipated (*Zubulake v. UBS Warburg*, 220 F.R.D. 212 (S.D.N.Y. 2003); 229 F.R.D. 422 (S.D.N.Y. 2004)). The Sedona Conference *Commentary on Legal Holds* and *Principles, Third Edition* (2018) are persuasive authority, not rules. **We do not tell a client when their duty attached.**
- **Fed. R. Crim. P. 16(a)(1)(G), 16(b)(1)(C)** as amended effective 1 Dec 2022 — same report discipline both sides of the docket, where the practice takes criminal-adjacent work.
- ***Lorraine v. Markel American Insurance Co.*, 241 F.R.D. 534 (D. Md. 2007)** — spelled *Markel*. Cited as the structural argument for building the authentication foundation at collection time.

### 4.5 Filter protocols and privilege

We operate a documented filter protocol: segregation before substantive review, **flagging rather than adjudicating**, a privilege-log output meeting FRCP 26(b)(5)(A), work under an FRE 502(d) order where the court enters one, and escalation to counsel or a court-appointed special master. **The examiner applies the protocol; counsel or the court makes the privilege call.** We do not describe ourselves as running a taint team — government filter teams have drawn sharp judicial criticism (*In re Search Warrant Issued June 13, 2019*, 942 F.3d 159 (4th Cir. 2019); *In re Grand Jury Subpoenas*, 454 F.3d 511 (6th Cir. 2006)), and a vendor asserting the privilege call is worse.

On `/roles`, the privilege paragraph, in full and exactly this shape:

> Where privilege matters, counsel usually prefers to retain us directly, scoped to the legal question and paid from the legal budget, with distribution controlled and any business-remediation workstream kept separate from the litigation report. How the engagement is structured is a decision for your lawyer and we will paper it either way. What we will not tell you is that involving us makes anything privileged. Forensic reports are not automatically work product; courts have ordered them produced. We can structure our work to support a privilege claim. We cannot promise one holds.

### 4.6 Access authority and statutory constraints (`/evidence-handling`)

- Authority to access each device and each account is confirmed and documented **before collection**, from a person with authority to give it. We decline where authority is unclear. Cite the reason, not as decoration: the **Stored Communications Act, 18 U.S.C. § 2702** (which is why a civil subpoena to a provider does not yield message content), the **Computer Fraud and Abuse Act, 18 U.S.C. § 1030**, the **Wiretap Act, 18 U.S.C. § 2511**, and state computer-crime and eavesdropping statutes. Name the flashpoints: BYOD, jointly used household machines, credentials supplied by a spouse or a co-owner.
- **Suspected child sexual abuse material:** the practice does not take or retain custody of it, has a stop-and-escalate procedure, and works through counsel and law enforcement on access. Note **18 U.S.C. § 3509(m)** in federal criminal matters. Print that this cannot be agreed away, and that the client is told before they hire rather than after.
- Engagements touching HIPAA, GLBA, GDPR/UK GDPR or CUI carry their own handling constraints, stated at scoping.

### 4.7 Unsafe claim → what to write instead

| Do not write | Write |
|---|---|
| "Court-qualified expert" / "courtroom-tested" / "survived Daubert" | *Where a matter requires a previously qualified testifying expert, that requirement is identified at scoping, named in the engagement letter, and either met by associating a qualified examiner or the matter is declined.* |
| "Certified examiners" | *Where an engagement requires a certified examiner, an accredited laboratory, or a licence, that condition is stated in the engagement letter and satisfied before work begins.* |
| "ISO 27037 compliant" | *Our method is written against the four principles in ISO/IEC 27037:2012 — auditability, repeatability, reproducibility, justifiability. That is guidance we work to, not accreditation we hold; we are not an ISO/IEC 17025 accredited laboratory.* |
| "Independent neutral examiner" | *We accept an appointed-neutral role only where both parties or the court appoint us, and we do not act as neutral in a matter where we have advised either side.* |
| "Forensically sound, court-admissible, bulletproof chain of custody" | Delete. Replace with the procedure. Every competitor asserts these; none demonstrates them. |
| "We will recover the deleted files" | *Deleted-data recovery is conditional on medium, filesystem and encryption, and is often unavailable on modern encrypted flash storage. We will tell you what is recoverable before you pay for the attempt.* |
| "They spoliated evidence" | *We report what was destroyed, when, and by what mechanism. Routine retention deletion looks a great deal like deliberate destruction in the artefacts, and where the two cannot be distinguished, we say they cannot.* |
| "The logs show he took the files" | *Device evidence shows what a device did. It does not show who was at the keyboard. An opinion on attribution requires a separately stated methodology and will be identified as such.* |
| Absence of an artefact framed as proof | *Absence of an artefact is not evidence of absence. Normal system behaviour, retention windows, log rotation, TRIM on SSDs and routine wipe utilities all destroy data without any intent.* |

### 4.8 The limits page (`/limits`) — the contents

Timestamps depend on time zone, clock drift, filesystem semantics (`$STANDARD_INFORMATION` versus `$FILE_NAME`), application behaviour and NTP state, and mislead routinely. A device or an account is not a person. Intent behind a file copy is usually indistinguishable from sync-client behaviour. Cloud activity where audit logging was off or retention lapsed cannot be reconstructed from silence — name `MailItemsAccessed` and CloudTrail data events as the two that most often turn out never to have been enabled. Nothing predates the earliest surviving log. Encrypted volumes without a key are not openable by effort. Mobile and cloud acquisitions are logical and partial and what is obtainable changes with vendor and OS version. Anti-forensic tooling exists and sometimes works.

Close with: *We report what the evidence supports, including when it supports nothing, or supports the other side. The fee is the same. That is a worse outcome for us and a perfectly good one for you, and it is the reason this is worth commissioning rather than taking our word for it.*

---

## 5. THE EMERGENCY PATH

`/emergency` is self-contained: no navigation, no scripts required, no form, no chat, measure ~52ch, leading opened. Order on the page, top to bottom:

**1. The kraft band.** `IMMEDIATE RESPONSE — THIS PAGE IS WRITTEN TO BE USED, NOT READ.`

**2. The number**, tap-to-call, large, in the mono face. Immediately beneath, the honest commitment and its limit, in one sentence. **[PRINCIPAL: confirm what is true before this ships]** — the working draft is: *A named person answers, or calls back within 30 minutes, between 07:00 and 23:00 Eastern, seven days. Outside those hours we answer when we can and we will not pretend otherwise. Under a signed standby agreement there is a stated response commitment; without one there is not, and we would rather say that now than at 02:00. If we cannot take your matter we will say so on the call and, where we can, name someone who can.*

**3. The organising sentence.** *In the first hour, containment and preservation are two different jobs. Almost every avoidable loss comes from doing containment in a way that also does destruction. Everything below is a way of containing that happens to keep the record.*

**4. The universal six** — numbered as an ordered procedure with imperative verbs:

1. **Do not re-image, rebuild, "clean" or restore over an affected system.** This is the most complete destruction of evidence in the first hour and it is almost always done by competent IT staff doing the job they were trained to do. If a system must be rebuilt to keep the business running, image it first, or rebuild onto new hardware and set the original aside.
2. **Do not reboot.** Isolate instead: unplug the network cable, shut the switch port, or use your EDR's host-isolation feature — with automatic remediation off if your product separates them — and leave the machine powered and unlocked. Power off only if isolation is impossible and spread cannot otherwise be stopped. Memory does not survive a power-off and is overwritten continuously while the machine runs, so the only thing that preserves it is capturing it. Before powering off any encrypted machine, confirm the recovery key is escrowed: a running unlocked BitLocker or FileVault machine is readable, a powered-off one without a key is a block of ciphertext.
3. **Do not pull a domain controller, storage head, industrial controller or clinical device off the network reflexively.** Isolation order is a decision, not a reflex, and on some systems it does more harm than the intrusion.
4. **Suspend backup retention, expiry, garbage collection and replication now**, and do not mount or restore from backups until someone has established whether the backup system itself is compromised. A routine retention cycle can delete your last clean restore point tonight; replication can overwrite good copies with encrypted ones; mounting an infected backup on a clean network reintroduces the attacker. The backup console's own logs are often the best evidence of how long the attacker was inside.
5. **Preserve the logs that expire, today.** Raise local log sizes — it costs nothing and buys days. Export the relevant window **out of** the affected tenant, because an attacker with admin can turn logging off going forward. Figures as published by Microsoft and current at the date on this page, and worth checking for your own tenant and licence: Microsoft 365 Audit (Standard) retention is 180 days by default for records generated since 17 October 2023; `MailItemsAccessed` — the record showing which messages were actually read, and therefore what actually has to be notified about — is a Premium feature that does not exist in lower-licensed tenants; Exchange mailbox audit entries default to 90 days; Entra ID sign-in logs are 7 days on the free tier and 30 with P1/P2 unless exported. Turning auditing on now logs forward only. It recovers nothing.
6. **Start a log at minute one** — UTC timestamps, who did what, on which system, and why, including the reboots and the mistakes made before anyone thought about evidence. It is the first thing any examiner or opposing counsel asks for, and the honest version is worth far more than a tidy one. **Move the conversation off the possibly-compromised email and chat.**

**5. Four situation blocks**, each short, each in the same numbered imperative grammar:

- **Ransomware.** Isolate in a coordinated sweep, not one machine at a time over an afternoon. Preserve the note, its filename, and a sample of encrypted files with their extensions — that is often what identifies the family. Keep one fully encrypted machine untouched as the reference. Check whether patching, imaging, backup expiry or log rotation is scheduled tonight and suspend it. Do not delete the note, do not rename or "try" encrypted files, do not run a full AV clean, do not connect a technician's own USB drive. *We do not advise on whether to pay, we do not negotiate, and we do not contact a threat actor. Any payment analysis involves sanctions screening, your carrier's position and law enforcement, and it belongs with counsel.*
- **Fraudulent wire / email compromise.** The money clock is shorter than the forensic clock. Call the **originating bank's fraud desk by phone within the hour** to request a recall or hold; call the receiving bank if you can identify it. File at **ic3.gov immediately** so the FBI's Recovery Asset Team can consider the Financial Fraud Kill Chain — file rather than pre-judge whether you qualify, because IC3 applies its own conditions and they change. Then: capture the inbox and transport rules (including the blank- or single-character-named one), forwarding addresses at mailbox and tenant level, delegate permissions, registered MFA methods, OAuth consents and registered devices **before you delete any of them** — deleting the rule destroys the record of the rule. A password reset alone does not evict an attacker holding a valid refresh token: revoke sessions and tokens, remove attacker-registered MFA methods and app passwords, then reset. Sweep every mailbox, not just the one that was noticed. Do not delete the fraudulent emails; preserve full headers, not forwarded copies. Tell accounts payable to verify every pending payment-detail change by callback to a known number.
- **Departing employee.** Take the laptop out of the return-and-reimage queue before anything else — physically, labelled, logged. Do not boot it and do not let IT have a quick look: booting alters thousands of timestamps, can trigger a cloud sync that deletes the copied files, and can trigger an MDM wipe. Document the state you found it in. Put the same hold on the mailbox, the cloud drive and the home directory, all of which offboarding scripts delete on a timer. **Never log into the individual's personal email, personal cloud account or personal device, even from a saved session on the company laptop, and even if they used it for work** — it carries real legal exposure and can taint everything else. Do not tip off the subject, and know what does the tipping: an abrupt account disable, a device recall, a new DLP block, a conspicuous meeting. When and how the individual is told depends on the employment agreement and applicable law; that is counsel's decision, not IT's.
- **Lost or stolen device.** Document the encryption state from the management console **before** you send the wipe — after the wipe you cannot prove the device was encrypted, and that is often the difference between a notifiable event and a documented non-event. Record identifiers, last check-in time, IP and location, compliance state, what was stored locally versus only reachable through a session. Revoking sessions, tokens and device trust contains the account risk without destroying the record. A wipe command runs only when the device checks in, so record whether it was queued, acknowledged or completed, and treat an unacknowledged wipe as a device still at large. File the police report and keep the number. If the device is under a litigation hold, the analysis changes entirely and nothing should be wiped before counsel says so.

**6. Call your insurer or broker before you engage anyone** — this before any mention of our fee, and linked to `/insurance`. Policies commonly require notice within a short window measured from discovery, and commonly require the carrier's prior consent or the use of panel counsel and panel vendors. Hiring outside that can reduce or void cover you have paid for. Containment does not wait for the carrier; procurement does. Many carriers run a hotline that reaches counsel faster than your business can.

**7. What the first call costs.** The scoping call is free. The mobilisation block is $6,000 fixed, inclusive of the out-of-hours uplift, credited in full. Card, because bank transfer does not clear at 02:00. The conflicts check is compressed to the named parties and run before the first hour; if a conflict is discovered later we withdraw and refund the unearned balance in full.

**8. What we will not do**, short form, then who we are, last.

**One disclaimer, once, plainly, no wall:** *This is not legal advice and it is not a substitute for counsel or your carrier's instructions. It is written so it is useful to someone who never calls us.* Plus a visible `ISSUED` / `LAST REVISED` date and the note that retention figures and IC3 conditions change.

**Nothing on this page is red. No countdown, no pulsing dot, no "ACTIVE INCIDENT" badge.** Urgency comes from ordering and grammar, not colour.

---

## 6. DESIGN DIRECTION

The governing idea: this site is **a controlled document**, not a brochure about rigour. A reader who works with expert evidence recognises document discipline in four seconds and it cannot be faked.

### Palette — tokens, exactly

```
--paper:        #F6F6F3   /* page ground */
--label-stock:  #FDFDFC   /* inset blocks, specimen headers, table bodies */
--ink:          #14161A   /* all running text */
--ink-2:        #5A6068   /* captions, field labels, margin conditions — 5.9:1 */
--hairline:     #DEDFDA   /* rules inside tables, between rows */
--rule:         #B4B7B0   /* box boundaries, outer frame of a form block */
--annotation:   #2A4A66   /* identifiers, hashes, clause numbers, link underlines — 8.5:1 */
--terracotta:   #D97757   /* HOUSE, unchanged — provenance only */
--seal:         #A14A2C   /* stamp impressions, exhibit seal — 5.5:1, usable as text */
--kraft:        #E8E2D2   /* the emergency band and specimen headers */
```

Terracotta is demoted to the **provenance mark only**: wordmark, footer lockup, cross-site link row. It is 2.9:1 on this paper and fails as a text colour. Annotation blue does the work terracotta does on the other three sites. The one warm mark on a cool page reads as a seal on a record.

**No red anywhere on the site.** If nothing on the marketing site is ever red, a red line in a delivered report means something. **No dark mode** — one look; a dark theme drags the whole thing toward the SOC-console cliché through the back door.

### Type

Two faces.

1. **The house system sans, unchanged, for everything that is prose** — headings, body, navigation. Set `font-variant-numeric: tabular-nums` globally so every figure aligns whether or not it is in a table.
2. **IBM Plex Mono** — `"IBM Plex Mono", ui-monospace, "SF Mono", Menlo, monospace`.

**The rule, which is the point:** monospace is reserved for any value that could be copied into another document and checked — hashes, file paths, ISO timestamps, engagement and revision numbers, device identifiers, prices and units, page-of-page counts, clause numbers, the emergency phone number. **Never headings. Never body. Never atmosphere.** A reader learns this in one page, and thereafter the mono face is a claim: *this is a value, not a sentence, and you can verify it.*

Scale, set as if to print at 11pt:

- Body 16px / 1.55, measure 68ch (52ch on `/emergency`)
- H1 28px · H2 20px · H3 17px — no display sizes, no full-bleed hero, nothing centred
- Mono values 14px
- Field labels 11px, caps, 0.08em tracking, `--ink-2`
- Clause numbers 13px mono, `--annotation`, hanging in a 4.5rem left gutter

**No serif anywhere** — a serif swaps the forensics cliché for the adjacent law-firm one.

### Four structural devices

1. **The specimen header.** Every page opens with a framed block ruled like a form, two columns of labelled fields in small caps and mono: `DOCUMENT / VERSION / ISSUED / LAST REVISED / SCOPE / AUTHORITY`. The pricing page carrying a visible `LAST REVISED 2026-09-11` is a stronger honesty signal than any sentence about honesty.

2. **Continuous clause numbering.** Sections numbered `1`, `1.1`, `1.2`, hanging in the left gutter in annotation-blue mono, never inside the heading's own type. Counsel can say "your section 3.2 says". The number column is also the layout spine, which gives the page its exactness with no ornament. On `/emergency` the same device changes mood: there the numbers mark an ordered procedure with imperative verbs.

3. **The two-column ledger as the default form of content, with the limits column built in.** Label-left / value-right, hairlines between rows. **Every capability row on `/scope` carries a right-hand column headed `WHAT THIS DOES NOT ESTABLISH`.** This is the single most important structural idea in the build: the WE WILL NOT habit stops being a virtuous box at the bottom of a page and becomes a cell that cannot be left empty. An overclaim now requires a visible blank. That is the constraint enforced by the template rather than by discipline, which is how it survives the third round of copy edits. A narrow right margin column, mono, `--ink-2`, takes conditions attached to a specific line — *"where the engagement requires a certified examiner, that is stated in the engagement letter"* — so the caveat belongs to the sentence, not to a disclaimer page.

4. **The chain-of-custody footer.** Full-width mono strip on every page: page identifier, last-revised timestamp in ISO 8601 with timezone, a content hash of the page text computed at build, and a link to prior versions at stable URLs under `/versions`. **Build it for real.** A hash that is not computed, or archived versions that do not exist, is exactly the costume this brief exists to avoid, and on this domain it is a worse failure than having no footer at all. If the build cannot produce genuine archived versions, ship the footer without the hash and the version link, not with fake ones. Pair it with a print stylesheet producing a clean PDF with the footer intact and URLs expanded — the thing circulating inside a law firm is an email with a link, and the thing on the table at a meeting is a print-out.

### Imagery

There is none. The only permitted "image" is a specimen page of an actual deliverable format — the report template with fields filled in — and every specimen carries `MATTER: [SPECIMEN — NOT A REAL MATTER]` in the seal colour, so it can never drift into being read as a case study. This is the evidentiary substitute for the case studies the firm cannot invent: show the shape of the work product, not stories about it.

### Deliberately excluded

No animation of any kind, **including scroll reveals** — an element that appears as you scroll implies the document changed while you were reading it. No icons; a label is a word. No tool badge wall (naming a tool in prose where it is material to a method is fine; a logo grid contradicts the refusal of vendor commissions). No certification badge grid. No "trusted by" row. No counters — cases handled, terabytes processed, years in practice; they are the numeric form of exactly the claims the firm must not make and they are the first thing a cross-examiner reads back. No testimonial component in the template at all. No chat widget — and say why on `/contact`: *a chat bubble invites a caller to type privileged facts into a third-party service.* No intake form that collects case detail: name, role, whether counsel is engaged, a callback number, with the reason printed beside the fields.

### The recognisability test

Four homepages at thumbnail size share ground-colour family, margin, rule weight, body face and one terracotta mark. This one is distinguished at that size by two things only: visible ruled structure, and a column of monospace running down the left. Same firm, different instrument.

---

## 7. REFUSALS

Lives in full on `/`, anchored at `#we-will-not`, and repeated verbatim in the engagement letter. Set in the ledger form, one clause per row, numbered.

> **WE WILL NOT**
>
> Take a fee that depends on what we find, on the outcome of the matter, or on which side retains us. The rate is the same either way and it is set before we look at anything. An examiner paid on the result is impeachable, and the client is the one who pays for that.
>
> Take or pay a referral fee, in either direction — to counsel, brokers, insurers, or anyone else who sends us work.
>
> Take a commission from any hardware, software, platform or hosting vendor we place, or sell you the remediation we were paid to investigate.
>
> Write to a conclusion supplied in advance, or report an inference as a finding because a stronger letter is wanted.
>
> Opine on who was at the keyboard from device evidence alone. A device is not a person.
>
> Opine that a party acted with intent to destroy evidence. We report what the artefacts show. Intent is the court's finding, not ours.
>
> Bill an hour above the ceiling you authorised in writing, or run an open-ended password recovery or extraction attempt without a written cap agreed first.
>
> Image a whole disk where a targeted collection answers the question, or bill you for expanded volume. Processing is measured on the data as we collected it.
>
> Tell you when culling would take your bill from five figures to four and then not do it — even though the bill we would otherwise send you is the larger one.
>
> Touch a device, mailbox or account without documented authority from someone entitled to give it, whatever the account holder's relationship to you, and whatever the story about ownership. That includes a spouse's phone, a former employee's personal account, and a saved session on a company laptop.
>
> Take a matter we cannot finish inside your deadline. We will say so on the first call rather than accept it and miss it.
>
> Start work, hold a date, or accept a single file before the conflicts check clears and the engagement letter is signed. A payment made before that point is an offer, held unapplied, and refunded in full.
>
> Carry an overage or surge rate. Hours beyond a standby credit bill at the retained rate, not above it.
>
> Deduct card processing fees from an unearned balance we are returning to you.
>
> Act for both sides in a matter, or act as an appointed neutral where we have advised either side.
>
> Take a matter that requires a certification, a licence or a qualification we do not hold. We identify that at scoping, name it in the engagement letter, and either bring in someone who holds it or decline.
>
> Promise you a finding, a recovered file, an unlocked handset, or that anything we produce will be admitted. Admissibility is the court's decision and no one can guarantee it.

Note for the writer: capability gaps go on `/scope`, never here. *"We do not take vendor commissions"* is a refusal of money. *"We do not do chip-off extraction"* is a scope boundary, and putting it in this list converts a principle into an admission of inexperience.

---

## 8. CONFLICTS AND OPEN QUESTIONS

### 8.1 Where the researchers disagreed, and the decision

| Conflict | Decision and why |
|---|---|
| **COMPETITIVE** says publish at market and never below; **PRICING** supplies bands whose low ends ($400 imaging, $300/hr analysis) would read as junior in a court-facing practice in the New York metro, where rates run 20–40% above national medians. | Priced at the **upper-middle of the boutique band**: $425 principal, $950 imaging, $3,250 opposing-report review. Below market invites "you charge less because you are less experienced" in deposition; at the top of the market invites comparison with consultancies the practice cannot staff against. |
| **PRICING** offers per-GB collection at $50–200/GB; the underlying survey shows the market actually prices collection hourly or per device. | **Rejected.** Collection is published per device, per custodian and per hour only. Per-GB collection pricing invites an argument about whether GB are measured before or after processing. |
| **PRICING** shows the industry measuring processing at expanded volume; **ORDERING** requires the measurement point to be named. | **Named, and chosen against our own interest:** source volume as collected, pre-expansion and pre-deduplication — the number the client can count on their own drive. **[LOW CONFIDENCE — this must be checked against the processing vendor's metering and cost before it is published; if it does not cover cost, change the rate, not the measurement.]** |
| **BUYERS** wants an emergency number with a stated response commitment; **EMERGENCY-OPS**, **ORDERING** and **COMPETITIVE** all forbid an SLA the practice cannot staff. | **No SLA except under a signed standby agreement.** Otherwise the commitment is to answer, and to say quickly whether we can take it — including saying no immediately rather than holding it. The stated hours must be true. **[PRINCIPAL]** |
| **TAXONOMY** lists roughly seventy services including enterprise IR and full reverse engineering of a bespoke implant; a one-principal practice cannot carry those. | `/scope` publishes the full ledger but marks each line **take / refer out / decline**, with enterprise IR and bespoke-implant RE in the second and third columns. That is scope, stated on `/scope`, and it never appears in the refusals. |
| **PRICING** treats testimony day rate and hourly testimony as alternatives. | **Both, split by mode:** remote deposition hourly with a 4-hour minimum; in-person deposition and trial on a day rate "or any part thereof". The phrase is the whole point of the structure. |
| **PRICING** reports published minimums of 10 hours per drive and 6 hours per phone. | **Rejected.** A minimum that quietly converts a two-hour job into a ten-hour invoice reads badly when the invoice becomes an exhibit. The only minimums published are the testimony ones, each with its reason stated: a reserved day cannot be resold. |
| **DESIGN** wants a build-time content hash and archived versions; **EMERGENCY-OPS** and the house's own "green checks miss" lesson warn against a check that passes while the thing is broken. | Build both for real, or ship neither. An uncomputed hash on a forensics site is the exact costume the brief exists to avoid. |

### 8.2 Decisions the principal must make personally before go-live

**Blocking — the site cannot ship without these:**

1. **Private-investigator licensing.** New York regulates private investigation under General Business Law article 7 with no clear published carve-out for digital examiners; New Jersey licenses through the State Police; Michigan has expressly brought digital forensics inside its regime; Texas has carved parts out. This is the single largest legal exposure in the build — unlicensed practice is an offence in some states and is cross-examination material everywhere. **Counsel must sign off on the exact wording before any page mentions licensing, and the practice's own New York position must be settled.** The site publishes a condition ("we check the position for your venue and either hold the licence, work under one, or decline"), never a state-by-state table and never an assertion that a licence is held.
2. **Certifications actually held.** If none, the conditions wording in §4.7 is the only wording permitted, everywhere, with no softening. Confirm no page, meta description, or footer implies otherwise.
3. **Testimony history.** Confirm that no sentence anywhere implies prior testimony, deposition, qualification, or a Daubert or Frye challenge survived. The `/roles` and `/specimen-report` pages are the two most likely to drift.
4. **Professional liability and cyber cover** — carrier, limits, and whether a certificate of insurance can be issued on request. Vendor onboarding at a law firm or a corporate client will demand it, and `/engagement` should only say "available on request" if it is.
5. **The evidence store.** `/evidence-handling` describes an access-controlled, logged, encrypted-at-rest store with hash re-verification on withdrawal. **Do not publish that page until it exists exactly as described.** Also settle: retention period after final invoice, where it physically is, who has access, whether anything is subcontracted, and whether any work or data leaves the jurisdiction.

**Needed before the relevant page ships:**

6. **Which tools are actually licensed and current.** Cellebrite-class licensing runs $10k–15k+/yr. Do not name a tool in a method description unless it is licensed today. This decides which mobile tiers stay on the price list and which move to "referred out".
7. **Whether associates exist.** If not, delete the associate rate, the technician rate, and every plural-team construction on the site.
8. **LEDES / UTBMS capability.** If invoices cannot be produced in LEDES for an e-billing portal, `/engagement` says so plainly and states what can be produced instead (itemised PDF plus CSV). Discovering this at the first invoice costs sixty days of payment.
9. **Panel posture.** The honest statement is not on a panel, with the three realistic positions named: subcontract or second-examiner work for panel firms, the insured's independent examiner where the insured wants one, and matters too small for a panel firm. State it on `/insurance`.
10. **Who answers the phone at night, honestly, and between which hours.** The number on `/emergency` is a promise; a missed published response during an incident is the worst possible first impression.
11. **Retainer mechanics.** Confirm: advance deposit held in the operating account, **never** described as trust, escrow or IOLTA; no interest to the payer; unearned balance refunded in full within ten business days of matter close with no processing-fee deduction; no card-on-file auto-replenishment without a separately signed authorisation naming the trigger, the amount and a ceiling; card retainers mapped to `deposit` mode, never `full` (which would fire the 5% prepay discount on money that is not a prepayment of a known fee). Bank transfer offered first above a threshold, with the existing **3% bank-transfer discount — never a card surcharge**, which is unlawful in several states and cannot be applied to debit at all.
12. **Sign-off on the specimen report.** It must be the template the practice would genuinely use, marked `[SPECIMEN — NOT A REAL MATTER]` on every page, with fabricated values that could not be mistaken for a real matter, real party, real court or real device.
13. **Every `[LOW CONFIDENCE]` figure in §3** — server imaging approach, cloud tenant preservation, evidence-readiness review, tabletop, TAR protocol, per-page production, processing per-GB, mobilisation, standby. These are reasoned estimates from hourly rates, not market evidence. Each needs the principal's own scoping judgement before it becomes a published number.

**Standing decisions to record now, because they are raised later under pressure:**

14. Rate review date and the 60-day notice mechanism, with the first review date entered in the `/rates` specimen header.
15. The conflict-surfaces-mid-matter protocol, written down before it happens: work stops, evidence sequestered unexamined, retaining party told the same day, material returned or destroyed on instruction, unearned balance refunded in full, nothing learned disclosed to anyone — including to the party the conflict runs to.
16. That preliminary approaches are logged for conflicts purposes even when they go nowhere, that logging creates no engagement, and that what was said stays confidential. Opposing parties do call specialists early to put them out of reach.
17. Whether the practice accepts pay-when-paid terms. The answer on the page is no, in one sentence, because it prevents the most common bad debt in the field.