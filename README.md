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

## Versija 1.3 — drošības un pārbaudes uzlabojumi

- Pievienota ierobežojoša CSP (Content Security Policy), kas atļauj resursus no pašas vietnes un Pyodide bibliotēku no `cdn.jsdelivr.net`. Tā nav pilnīga neuzticama Python koda izolācija. CSP `meta` direktīva `frame-ancestors` pārlūkprogrammās netiek piemērota; to var iestatīt tikai HTTP galvenēs, kuras GitHub Pages šeit nekontrolējam.
- Python koda un ievades apjoma ierobežojumi; `print()` izvadei ierobežots apjoms, lai samazinātu nejaušas pārlūkprogrammas pārslodzes risku. Bezgalīgu ciklu joprojām pārtrauc Web Worker taimauts.
- 2. patstāvīgajā uzdevumā automātiskā pārbaude pieņem vairākus pieklājīgus sasveicināšanās variantus ar ievadīto vārdu, nevis tikai precīzu “Sveiki, ...!”. Joprojām pārbauda atkārtojumu skaitu ar trim testiem.
- Paaugstināta JavaScript versija uz `v=5`, lai atjauninātos arī mobilās ierīces.

**Drošības robeža:** Šī ir uzraudzītai mācību lietošanai paredzēta vide, nevis drošs neuzticama koda izpildes pakalpojums. Python kods var izmantot Pyodide JS sasaisti; CSP nav absolūta aizsardzība pret visām darbībām. Skolēniem jāizvairās no personas datu un paroļu ievades. Pirms plašas izmantošanas pārbaudiet publicēto lapu telefonā un datorā, tostarp Python pirmreizējo ielādi, `input()`, kļūdas, bezgalīgu ciklu un visus trīs pārbaudes testus.


## Versija 1.4 — 2. stunda

Pievienota 2. stunda ar teoriju, četriem vingrinājumiem (apzināti kļūdains sākuma kods), trim patstāvīgiem uzdevumiem un noslēguma jautājumu.

`input()` ievades lauks tiek rādīts 2. stundas 2. vingrinājumā un 2., 3. patstāvīgajā darbā. Pārbaude izmanto vairākas testa ievades; poga “Izpildīt kodu” izmanto skolēna ievadi. Skaitliskās atbildes pārbaudē pieņem arī vienu skaidrojošu izvades rindu, piemēram, `Summa: 625`. Reizināšanas tabulas pārbaude pieņem 10 rindas ar pareizu pēdējo skaitli katrā rindā.

Lai atjauninātu GitHub Pages, augšupielādējiet `lessons/lesson-02.js`, `js/app.js`, `index.html` un šo README. Pārējos failus saglabājiet no versijas 1.3.

**Piezīme:** pārbaudes testi ir redzami klienta pusē; tie paredzēti mācībām, nevis drošai summatīvai vērtēšanai.

## Versija 1.5 — 3. stunda: while cikls

- Pievienots `lessons/lesson-03.js` ar teoriju, 4 kļūdaina koda labošanas vingrinājumiem, 3 patstāvīgajiem uzdevumiem un noslēguma jautājumu.
- `js/app.js` atjaunināta navigācija: pieejamas 1.–3. stundas; pārējās ir sagataves.
- `index.html` JavaScript versija `v=7` kešatmiņas atsvaidzināšanai.
- Ievades lauki 3. stundā ir **tikai** 3. un 4. vingrinājumā un visos trīs patstāvīgajos uzdevumos. 1. un 2. vingrinājumā ievades lauku nav.
- Katru `input()` vērtību ievades laukā raksta atsevišķā rindā. Poga “Pārbaudīt risinājumu” izmanto vairākus iepriekš definētus ievades testus, nevis ievades laukā ierakstīto piemēru.
- Bezgalīgi cikli: izpilde notiek Web Worker, un tā tiek pārtraukta pēc laika ierobežojuma (pēc ielādes ~7 s). Ļoti daudz izvades gadījumā var nostrādāt izvades apjoma limits ātrāk. Poga “Apturēt” ļauj pārtraukt izpildi manuāli. Tas nav absolūts drošības izolācijas mehānisms.
- PIN uzdevumā tiek izmantots tikai mācību piemēra PIN `2468`; skolēniem nevajadzētu ievadīt īstas paroles vai PIN.
- Automātiskie testi paredzēti formatīvai atgriezeniskajai saitei. Tie salīdzina prasīto izvadi, tāpēc dažādi citādi loģiski korekti teksta formulējumi var netikt pieņemti.

### Atjaunināšana no versijas 1.4

Pievieno `lessons/lesson-03.js`, aizstāj `js/app.js` un `index.html`; pēc vēlēšanās atjaunini `README.md`. Pārējos failus var atstāt nemainītus.

### Pārbaude pirms izmantošanas klasē

1. Palaid 1. vingrinājuma sākuma kodu; jānostrādā izvades apjoma vai laika ierobežojumam, un lapai jāturpina reaģēt.
2. Izlabo 1. vingrinājumu ar `skaitlis += 1`, pārbaudi rezultātu 1–10.
3. Pārbaudi 3. vingrinājumu ar ievadēm `-2`, `0`, `5` (katru savā rindā).
4. Pārbaudi 4. vingrinājumu ar `4`, `-2`, `3`, `0`.
5. Pārbaudi PIN uzdevumu ar `1111`, `2468` un minēšanas uzdevumu ar `3`, `9`, `7`.
6. Pārbaudi uz telefona, ka 1. un 2. vingrinājumā nav ievades lauka.

JavaScript sintakse pārbaudīta, taču pilns Pyodide pārlūkprogrammas tests nav veikts.
