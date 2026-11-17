# prem.webcompliance.in

Prem Singh's portfolio. Static site (`index.html`, `styles.css`, `script.js`), no build step.

- Preview locally: `npx serve .`
- Project screenshots live in `assets/projects/` (1440×900 JPEG, cropped to the top 16:9 on the page).

## Deploy (Vercel)

1. Push this folder to a GitHub repo and import it in Vercel (Framework preset: **Other**, no build command).
2. Vercel → Project → Settings → Domains → add `prem.webcompliance.in`.
3. In the DNS for webcompliance.in (Hostinger hPanel → Domains → DNS, or wherever the nameservers point), add:

   | Type  | Name   | Target                                      |
   |-------|--------|---------------------------------------------|
   | CNAME | `prem` | the value Vercel shows (e.g. `cname.vercel-dns.com`) |

4. Wait for Vercel to show the domain as Valid. HTTPS is issued automatically.
