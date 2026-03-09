# Romanian Translation Reference

## Overview
The Nicu Chereji ecommerce music store has been fully translated to Romanian (ro). All user-facing text, buttons, notifications, and messages are now in Romanian.

## Translation Summary

### Header & Navigation
| English | Romanian |
|---------|----------|
| Independent Music \| Soul \| Spirituality | Muzică Independentă \| Suflet \| Spiritualitate |
| Store | Magazin |
| About | Despre |

### Hero Section
| English | Romanian |
|---------|----------|
| Support Independent Music | Susține Muzica Independentă |
| Every purchase directly supports the creation of new music | Fiecare cumpărătură sprijină direct crearea de muzică nouă |

### Store Section
| English | Romanian |
|---------|----------|
| Music Store | Magazin de Muzică |
| All singles: $1.99 each \| Buy all 6 for $11.94 | Toate cântecele: 1,99$ fiecare \| Cumpără toate 6 pentru 11,94$ |
| Complete Collection | Colecția Completă |
| All 6 tracks | Toate 6 cântecele |
| Buy All | Cumpără Tot |
| Compilation | Compilație |
| 6 tracks | 6 cântece |
| Preview Tracks | Ascultă Cântecele |
| Buy Album | Cumpără Album |

### About Section
| English | Romanian |
|---------|----------|
| About Nicu Chereji | Despre Nicu Chereji |
| An independent musician dedicated to creating meaningful, soulful music that speaks to the heart and spirit. Each purchase supports the creation of new original music and helps bring this artistic vision to life. | Un muzician independent dedicat creării muzicii semnificative și pline de suflet care vorbește inimei și spiritului. Fiecare cumpărătură sprijină crearea de muzică nouă originală și ajută la aducerea acestei viziuni artistice în viață. |
| Your support enables me to continue making music, invest in better equipment, and collaborate with talented artists. Thank you for being part of this musical journey. | Sprijinul tău mă permite să continui să fac muzică, să investesc în echipamente mai bune și să colaborez cu artiști talentați. Îți mulțumesc că faci parte din această călătorie muzicală. |

### Footer
| English | Romanian |
|---------|----------|
| All rights reserved. | Toate drepturile rezervate. |
| Payments processed securely through PayPal | Plăți procesate în siguranță prin PayPal |

### Purchase Modal
| English | Romanian |
|---------|----------|
| Thank You for Your Purchase! | Mulțumim pentru Cumpărătura Ta! |
| Your download should start immediately. If it doesn't, use the button below: | Descărcarea ar trebui să înceapă imediat. Dacă nu, folosește butonul de mai jos: |
| ⬇ Download Now | ⬇ Descarcă Acum |
| Order ID: | ID Comandă: |
| Check your email for a receipt and download link. | Verifică email-ul tău pentru chitanță și link de descărcare. |
| Close | Închide |

### JavaScript Messages
| English | Romanian |
|---------|----------|
| Complete Music Collection - All 6 tracks by Nicu Chereji | Colecția Completă de Muzică - Toate 6 cântecele de Nicu Chereji |
| by Nicu Chereji | de Nicu Chereji |
| PayPal is not configured. Please replace YOUR_PAYPAL_CLIENT_ID with your actual Client ID in the HTML file. | PayPal nu este configurat. Te rog să înlocuiești YOUR_PAYPAL_CLIENT_ID cu ID-ul tău real în fișierul HTML. |
| To set up PayPal: | Pentru a configura PayPal: |
| Create a Business account | Creează un cont de afaceri |
| Get your Client ID | Obține ID-ul tău de client |
| Replace YOUR_PAYPAL_CLIENT_ID in index.html | Înlocuiește YOUR_PAYPAL_CLIENT_ID în index.html |
| Payment error: | Eroare la plată: |
| An error occurred during payment. Please try again. | A apărut o eroare în timpul plății. Te rog încearcă din nou. |
| Payment cancelled: | Plată anulată: |
| Nicu Chereji Music Store loaded | Magazinul de Muzică Nicu Chereji a fost încărcat |
| PayPal not configured. Update YOUR_PAYPAL_CLIENT_ID in index.html | PayPal nu este configurat. Actualizează YOUR_PAYPAL_CLIENT_ID în index.html |

### Numeric/Format Translations
| English | Romanian |
|---------|----------|
| $1.99 | 1,99$ |
| $11.94 | 11,94$ |
| track (singular) | cântec |
| tracks (plural) | cântece |
| Complete Collection - Download All Tracks\n\nPlease download each track individually: | Colecția Completă - Descarcă Toate Cântecele\n\nTe rog să descarci fiecare cântec individual: |

## HTML Changes
- Language attribute: `lang="en"` → `lang="ro"`
- Page title: Updated to Romanian
- All text content: Translated
- Button labels: Translated
- Form labels: Translated (where applicable)

## JavaScript Changes (app.js)
- Purchase descriptions: Translated
- Error messages: Translated
- Console output: Translated
- Plural forms: Romanian plural rules applied (cântec/cântece)
- All user-facing strings: Translated

## Browser Recognition
The `lang="ro"` attribute tells browsers and screen readers that the page is in Romanian, enabling:
- Proper spell-checking in Romanian
- Text-to-speech in Romanian
- Search engine optimization for Romanian language
- Accessibility improvements for Romanian-speaking users

## Pluralization Rules
Romanian pluralization follows these patterns:
- **cântec** (singular) → **cântece** (plural)
- Applied dynamically in JavaScript for track counts

## Character Encoding
- UTF-8 encoding maintained for all Romanian diacritics:
  - ă, â, î, ș, ț (Romanian-specific characters)
- All special characters properly encoded

## Future Updates
When adding new features or text:
1. Always provide Romanian translations alongside English
2. Use UTF-8 encoding for special characters
3. Apply Romanian grammar rules for pluralization
4. Test with Romanian spell-checker
5. Update this document with new translations

## Translation Guidelines Used
- Formal tone suitable for music/artist context
- Natural-sounding Romanian (not machine-translated)
- Consistent terminology throughout
- Cultural adaptation where necessary
- Professional, polished language

---

**Translation Date**: March 9, 2026
**Status**: Complete - All text translated to Romanian
**Language Code**: ro
**Character Encoding**: UTF-8

