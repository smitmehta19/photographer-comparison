# Photographer Comparison — Jan 2027

An offline-first dashboard comparing six wedding photography quotations
(26–28 January 2027, Mumbai).

Open `index.html` in any browser. Everything is in that one file: no build,
no server, no dependencies. Notes, ratings and shortlist are saved in the
browser's localStorage, so they persist between visits on the same browser.

Every extracted value is tagged:

| Tag | Meaning |
|---|---|
| *(no tag)* | quoted verbatim from the quotation |
| `calculated` | arithmetic done by the dashboard, never by the photographer |
| `verify` | the quotation is ambiguous or contradicts itself |
| `not mentioned` | absent from the quotation entirely |
