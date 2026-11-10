# Python 10. klase — cikli un saraksti

Mobilajām ierīcēm pielāgota statiska mācību vietne ar 11 stundu navigāciju.

## Publicēšana GitHub Pages

1. Izveidojiet GitHub repozitoriju, piemēram, `python-10-klase`.
2. Augšupielādējiet **šīs mapes saturu** repozitorija saknē (`index.html`, `css/`, `js/`, `lessons/`).
3. GitHub repozitorijā atveriet **Settings → Pages**.
4. Pie **Build and deployment** izvēlieties **Deploy from a branch**, zaru **main**, mapi **/(root)** un saglabājiet.
5. Pēc publicēšanas atveriet GitHub norādīto vietnes adresi, parasti `https://LIETOTAJS.github.io/python-10-klase/`.

Skolēniem nav nepieciešams GitHub konts. Bez repozitorija rakstīšanas tiesībām viņi nevar mainīt publicēto vietni. Publiskas vietnes HTML un JavaScript kodu var apskatīt.

## Python izpilde un drošība

- Python tiek izpildīts pārlūkprogrammā, izmantojot Pyodide 0.27.7 un atsevišķu Web Worker. Nepieciešams interneta savienojums bibliotēkas ielādei no jsDelivr CDN.
- Kods netiek sūtīts uz skolotāja serveri un netiek glabāts `localStorage`, datubāzē vai GitHub.
- Izpildei ir 45 sekunžu limits pirmajai ielādei un 7 sekunžu limits nākamajām izpildēm; pie taimauta Worker tiek pārtraukts. Lēnās ierīcēs pirmā ielāde var prasīt ilgāku laiku.
- Šī ir mācību vide, **nevis stingri izolēta drošības smilškaste**: Pyodide kodam ir pārlūkprogrammas Worker iespējas, tostarp potenciālas tīkla darbības. Nelietojiet to slepeniem datiem, API atslēgām vai kā publisku neuzticama koda izpildes servisu.
- Automātiskie testi ir klienta pusē un ir apskatāmi, tādēļ tie ir **formatīva atgriezeniskā saite**, nevis drošs vērtēšanas mehānisms.
- `input()` vērtības ievada atsevišķā laukā (viena vērtība rindā); pārbaudes laikā tiek lietoti iebūvēti testu dati. Programmas `print()` izvade tiek attēlota atsevišķi.
- Izvades un kļūdu ziņojumi tiek rādīti kā teksts, nevis izpildāms HTML.

## Satura pievienošana

1. stundas saturs atrodas `lessons/lesson-01.js`. Pārējo stundu nosaukumi un sasniedzamie rezultāti — `js/app.js`. Pievienojot nākamās stundas, ieteicams veidot atsevišķus `lesson-02.js` utt. un pieslēgt tos kopējai saskarnei.


## Versija 1.1 — mobilā pielāgošana

Telefonā stundu navigācija ir nolaižamā izvēlnē; redaktors, pogas un saturs pielāgojas ekrāna platumam. Atjaunojot GitHub Pages, augšupielādē **visus** šī arhīva failus, saglabājot mapju struktūru. Ja redzama iepriekšējā versija, pārlādē lapu bez kešatmiņas.

## Apvienotā versija — ievades lauks

Saglabāti skolotāja labojumi `lesson-01.js` un `index.html`. Ievades lauks redzams tikai 2. patstāvīgajā uzdevumā (`needsInput: true`). `index.html` un `js/app.js` papildināti ar `?v=4` kešatmiņas atjaunošanai.
