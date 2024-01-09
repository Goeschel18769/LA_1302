# Projekt-Dokumentation

"Die Virtuosen der Numerischen Höhen und Tiefen: Entwicklergruppe für ein Hoch-Runter-Spiel der Extraklasse!" 
-ergo Müller, Frey und Haldimann


| Datum | Version | Zusammenfassung                                              |
| ----- | ------- | ------------------------------------------------------------ |
|  29.11 | 0.1   |  React-App erstellt, Grundstruktur (Header, Body, Footer, JSON), Bilder sammeln                         |
|  06.12 | 0.2   |  Conten-Container (Bilder mit Text) so programmiert, dass sie sich zufällig ändern, Bilder sammeln              |
|  13.12 | 1.0   |  Spiellogik (reagieren auf Eingabe) implementiert, Design      |



## 1 Informieren

### 1.1 Ihr Projekt

Wir haben eine Higher-Lower WebApp, mit unseren eigenen Bildern/Ideen, mithilfe von REACT programmiert.

Unser Spiel funktioniert so, dass dem Spieler zwei Bilder mit entsprechendem Text angezeigt werden, und dieser dann entscheiden muss welches "Objekt" grösser ist. Dabei ist das linke "Objekt" der Ausgangspunkt und das rechte "Objekt" ist entweder grösser oder kleiner. Der Spieler kann dies mithilfe der "Higher" und "Lower" Buttons eingeben. Falls er richtig liegt, bekommt +1 Scorepoint und das linke "Ausgangsobjekt" wird mit dem rechten "Objekt" ersetzt. Bei einem falschen Versuch wird der Score zurückgesetzt.

### 1.2 User Stories

| US-№ | Verbindlichkeit | Typ  | Beschreibung                       |
| ---- | --------------- | ---- | ---------------------------------- |
| 1    |  Muss              |  Funktional    | Als ein User möchte ich, dass das Spiel fehlerfrei läuft, damit ich keinen Spielunterbruch habe. |
| 2  |   Kann          |  Qualität    |  Als ein User möchte ich, dass der Score automatisch aktualisiert wird, damit ich sehe wie viele richtige Versuche ich hatte.            |
| 3  |    Muss             | Qualität   |  Als ein User möchte ich, dass die "Objekte" Bilder haben, damit ich eine visuelle Refferenz habe.   |
| 4  |     Muss            |  Rand    |  Das Projekt ist in REACT mit HTML, CSS, JavaScript und JSON umgesetzt.     |
| 5  |     Kann            |  Qualität    |  Als ein User möchte ich, dass mein Highscore angezeigt wird, damit ich diesen mit meinen Freunden vergleichen kann.           |
| 6  |     Muss            |  Funktional    | Als ein User möchte ich, dass alle Buttons ihrer Beschriftung entsprechend funktionieren, damit ich das Spiel spielen kann.         |
| 7  |    Kann            |  Qualität   | Als ein User möchte ich, dass das Spiel visuell ansprechend gestaltet ist, damit ich mit voller Euphorie durchstarten (oder durchklicken;)) kann.       |



### 1.3 Testfälle

| TC-№ | Ausgangslage | Eingabe | Erwartete Ausgabe |
| ---- | ------------ | ------- | ----------------- |
| 1.1  |  Das Spiel wurde gestartet/Die Seite wurde geöffnet            |    spielen des Spiels     |    Das Spiel verläuft fehlerfrei.               |
| 2.1  |  Der User hat einen richtigen Versuch gemacht            |  Eingabe des richtigen Versuches       |  Der Score wird automatisch aktualisiert.                 |
| 3.1  |  Der User spielt das Spiel           |  spielen des Spiels       |  Zu den Beschreibungen werden die passenden Bilder angezeigt.                 |
| 5.1  |  Der User hat eine Serie an richigen Versuchen gemacht            |  Eingabe von richtigen Versuchen       |   Der Highscore wird automatisch aktualisiert.                |
| 6.1  |  Der User spielt das Spiel            |  drücken eines Buttons       |   Das Spiel reagiert passend.                |
| 7.1  |  Der User spielt das Spiel              |  spielen des Spiels       |  Der User hat ein überwältigendes Spielerlebnis und kann kaum aufhören zu spielen.                 |

### 1.4 Diagramme
#### PAP:
![image](https://github.com/Goeschel18769/LA_1302/assets/111043950/e1e9c77d-7f25-4624-b333-aa63b51cd530)


## 2 Planen

| AP-№ | Frist | Zuständig | Beschreibung | geplante Zeit |
| ---- | ----- | --------- | ------------ | ------------- |
| 1.A  | 29.11      |  Frey, Haldimann       |   Grundstruktur des Spiels programmieren           |    300 Min.           |
| 1.B  |  29.11     | Müller          |  Projektdoku anpassen            |   60 Min.            |
| 2.A  | 06.12      |  Haldimann         |  Programmieren des Scores            |  60 Min.             |
| 3.A  | 06.12      |  Frey         |  erstellen der JSON-Datei            |  60 Min.             |
| 3.B  | 06.12      |  Frey         |  Suchen und einfügen der Bilder            |   200 Min.            |
| 3.C  | 06.12      |  Müller         |  Projektdoku anpassen            |    60 Min.           |
| 4.A  | 29.11 |   Frey, Haldimann, Müller   |  Erstellen der ReactApp            |   60 Min.            |
| 5.A  | 06.12      |  Haldimann         |   Programmieren des Highscores           |    60 Min.           |
| 6.A  |  13.12     |   Haldimann         |   Programmieren der Buttons           |   200 Min.           |
| 7.A  |  13.12     |   Müller        |   Desgin anpassen und verschönern           |    200 Min.           |
| 7.B  | 13.12      |  Müller, Frey, Haldimann         |  Projektdoku anpassen            | 100 Min.              |

Total: ca. 31 Arbeitspakete


## 3 Entscheiden

Wir haben uns entschieden, unsere WebApp in React zu erstellen. Dafür mussten wir unsere diesbezüglichen Kenntnisse auf den selben Stand bringen und dann gemeinsam erweitern.

## 4 Realisieren

| AP-№ | Datum | Zuständig | geplante Zeit | tatsächliche Zeit |
| ---- | ----- | --------- | ------------- | ----------------- |
| 1.A  |  29.11     |   Frey, Haldimann         |    300 Min.           |    330 Min.               |
| 1.B  |  29.11     |   Müller        |  60 Min.             |        60 Min.           |
| 2.A  |  06.12     |   Haldimann          |   60 Min.           |       70 Min.        |
| 3.A  | 06.12      |   Frey         |   60 Min.           |    50 Min.           |
| 3.B  |  06.12     |   Frey         |     200 Min.          |   180 Min.            |
| 3.C  | 06.12      |   Müller        |     60 Min.          |     60 Min.          |
| 4.A  | 29.11      |   Frey, Haldimann, Müller        |   60 Min.            |     100 Min.          |
| 5.A  |  06.12     |  Haldimann         |   60 Min.            |         70 Min.     |
| 6.A  |  13.12     |   Haldimann        |    200 Min.           |      210 Min.         |
| 7.A  |  13.12     |   Müller        |    200 Min.           |      100 Min.         |
| 7.B  |  13.12     |   Müller, Frey, Haldimann        |     100 Min.          |      50 Min.         |





## 5 Kontrollieren

| TC-№ | Datum | Resultat | Tester |
| ---- | ----- | -------- | ------ |
| 1.1  |       |          |        |
| ...  |       |          |        |

✍️ Vergessen Sie nicht, ein Fazit hinzuzufügen, welches das Test-Ergebnis einordnet.

## 6 Auswerten

✍️ Fügen Sie hier eine Verknüpfung zu Ihrem Lern-Bericht ein.
