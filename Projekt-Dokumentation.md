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
| 3  |    Muss             | Qualität   |  Als ein User möchte ich, dass die "Objekte" Bilder haben, damit ich eine visuelle Referenz habe.   |
| 4  |     Muss            |  Rand    |  Das Projekt ist in REACT mit HTML, CSS und JavaScript umgesetzt.     |
| 5  |     Kann            |  Qualität    |  Als ein User möchte ich, dass mein Highscore gespeichert wird, damit ich diesen mit meinen Freunden vergleichen kann.           |
| 6  |     Muss            |  Funktional    | Als ein User möchte ich, dass alle Buttons ihrer Beschriftung entsprechend funktionieren, damit ich das Spiel spielen kann.         |





✍️ Jede User Story hat eine ganzzahlige Nummer (1, 2, 3 etc.), eine Verbindlichkeit (Muss oder Kann?), und einen Typ (Funktional, Qualität, Rand). Die User Story selber hat folgende Form: *Als ein 🤷‍♂️ möchte ich 🤷‍♂️, damit 🤷‍♂️*.

### 1.3 Testfälle

| TC-№ | Ausgangslage | Eingabe | Erwartete Ausgabe |
| ---- | ------------ | ------- | ----------------- |
| 1.1  |              |         |                   |
| ...  |              |         |                   |

✍️ Die Nummer hat das Format `N.m`, wobei `N` die Nummer der User Story ist, die der Testfall abdeckt, und `m` von `1` an nach oben gezählt. Beispiel: Der dritte Testfall, der die zweite User Story abdeckt, hat also die Nummer `2.3`.

### 1.4 Diagramme

✍️Fügen Sie hier ein Use Case-Diagramm mit mindestens 3 Anwendungsfällen ein; und eine Skizze davon, wie Ihre Netzseite aussehen sollte.

## 2 Planen

| AP-№ | Frist | Zuständig | Beschreibung | geplante Zeit |
| ---- | ----- | --------- | ------------ | ------------- |
| 1.A  |       |           |              |               |
| ...  |       |           |              |               |

Total: 

✍️ Die Nummer hat das Format `N.m`, wobei `N` die Nummer der User Story ist, auf die sich das Arbeitspaket bezieht, und `m` von `A` an nach oben buchstabiert. Beispiel: Das dritte Arbeitspaket, das die zweite User Story betrifft, hat also die Nummer `2.C`.

✍️ Ein Arbeitspaket sollte etwa 45' für eine Person in Anspruch nehmen. Die totale Anzahl Arbeitspakete sollte etwa Folgendem entsprechen: `Anzahl R-Sitzungen` ╳ `Anzahl Gruppenmitglieder` ╳ `4`. Wenn Sie also zu dritt an einem Projekt arbeiten, für welches zwei R-Sitzungen geplant sind, sollten Sie auf `2` ╳ `3` ╳`4` = `24` Arbeitspakete kommen. Sollten Sie merken, dass Sie hier nicht genügend Arbeitspakte haben, denken Sie sich weitere "Kann"-User Stories für Kapitel 1.2 aus.

## 3 Entscheiden

✍️ Dokumentieren Sie hier Ihre Entscheidungen und Annahmen, die Sie im Bezug auf Ihre User Stories und die Implementierung getroffen haben.

## 4 Realisieren

| AP-№ | Datum | Zuständig | geplante Zeit | tatsächliche Zeit |
| ---- | ----- | --------- | ------------- | ----------------- |
| 1.A  |       |           |               |                   |
| ...  |       |           |               |                   |

✍️ Tragen Sie jedes Mal, wenn Sie ein Arbeitspaket abschließen, hier ein, wie lang Sie effektiv dafür hatten.

## 5 Kontrollieren

| TC-№ | Datum | Resultat | Tester |
| ---- | ----- | -------- | ------ |
| 1.1  |       |          |        |
| ...  |       |          |        |

✍️ Vergessen Sie nicht, ein Fazit hinzuzufügen, welches das Test-Ergebnis einordnet.

## 6 Auswerten

✍️ Fügen Sie hier eine Verknüpfung zu Ihrem Lern-Bericht ein.
