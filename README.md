# Zoekpagina blogs | De Voorhoede

## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Gebruik](#gebruik)
  * [Kenmerken](#kenmerken)
  * [Installatie](#installatie)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving

De bedoeling van dit project was om een blogpagina te maken door middel van GraphQL en aangeleverde designs. Op deze pagina's wouden ze meerdere functionaliteiten zoals een zoekbalk, filter systeem, sorteren en pagination.

![image](https://github.com/RickVellingaa/voorhoede-fdnd-sprint12/assets/112856287/377a47d2-f5f4-4c0e-b6fa-ac163c8db9f0)

Link: https://devoorhoede-sprint12.adaptable.app/

## Gebruik

De user stories waar ik aan heb gewerkt zijn:

 * Als gebruiker wil ik een overzicht hebben van alle blogs
 * Als gebruiker wil ik kunnen zoeken op een specifiek blogbericht
 * Als gebruiker wil ik kunnen filteren op blogberichten
 * Als developer wil ik de API koppelen aan de site zodat data wordt ingeladen

Gebruikers van de Voorhoede kunnen alle blogberichten bekijken en hierop zoeken door middel van een zoekbalk, filter en sorteer systeem. Voor de developer is de gekregen API gekoppeld door middel van GraphQL, zodat de data correct word ingeladen en dat zo de site dynamisch word gemaakt.

## Kenmerken

<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met JS gedaan en hoe? Misschien heb je iets met NodeJS gedaan, of heb je een framwork of library gebruikt? -->

Voor dit project zijn de volgende technieken gebruikt: 

 * HTML
 * CSS
 * Client-side JS
 * Server-side JS
 * Express
 * EJS
 * NodeJS
 * GraphQL
 * Adaptable

## GraphQL query

Tijdens dit project is er gebruik gemaakt van GraphQL, met GraphQL kun je altijd de data aanpassen die je ophaalt, zo zorg je er eigenlijk altijd voor dat je niet overbodige data ophaalt en alleen echt de data ophaalt/gebruikt wat je nodig hebt.

```js
allBlogPosts() {
  title
  authors {
    image {
      url
    }
    name
    id
  }
  publishDate
  introTitle
  slug
}
```
## Zero state

Voor de deeltaak van de Zero state heb ik van het design van de opdrachtgever, 6 verschillende schetsen gemaakt met bij elke een andere visuele hierarchie stijl en layout. Dit hebben we gedaan om te kijken of er een andere manier is om beter de content te tonen, zoals de titel op een andere plek of een zoekbalk boven aan de pagina i.p.v. onderaan. In de wiki van de deeltaak heb ik schetsen gemaakt en beschreven en ook de uitgewerkte schetsen van Figma en code uitgelegd.

Link naar Zero state schetsen: [Schetsen zero state](https://github.com/RickVellingaa/proof-of-concept-zero-state/wiki/Design-%7C-Schetsen-Zero-state#schetsen--zero-state) <br>
Link naar Zero state uitwerking Figma: [Figma uitwerking zero state](https://github.com/RickVellingaa/proof-of-concept-zero-state/wiki/Design-%7C-Schetsen-Zero-state#figma-uitwerking--zero-state) <br>
Link naar Zero state uitwerking code: [Code uitwerking zero state](https://github.com/RickVellingaa/proof-of-concept-zero-state/wiki/Bouwen-%7C-Uitwerking-code) <br>
Feedback klant: [Feedback over zero state](https://github.com/RickVellingaa/proof-of-concept-zero-state/wiki/Feedback-klant) <br>

Door deze deeltaak en de feedback van de klant heb ik mijn design aangepast, de blog berichten waren eerst geen echte blokken, dit heb ik aangepast aangezien ik dit meer op een blog pagina vond lijkem dan het aangeleverde design. Ook heb ik de filters een beetje aangepast, zo heb ik bijvoorbeeld de authors onder elkaar meteen gezet i.p.v. met een dropdown. Deze aanpassingen vonden de opdrachtgevers ook mooi bedacht dus heb het uiteindelijk zo gelaten.

## Installatie

Download of clone dit project van deze Github pagina.

Download de aanbevolen versie op nodejs.org en installeer vanaf deze wwebsite de Node ontwikkelomgeving. Tijdens dit project heb ik gebruik gemaakt van 18.14.0 LTS, download de benodigde bestanden en doorloop het installatieproces van Node.

Open de terminal in Visual Studio Code en installeer Node doormiddel van het commando npm init. Voer hierna npm install uit. Om de pagina te open start je een server op door middel van npm start. Als de server weer gesloten moet worden kan je control + c / ^c gebruiken.

## Bronnen

[DOCS Sprint12]([https://github.com/RickVellingaa/voorhoede-fdnd-sprint12/blob/main/docs/FDND%20API%20Assignment.pdf](https://github.com/RickVellingaa/voorhoede-fdnd-sprint12/blob/main/docs/INSTRUCTIONS.md)) <br>
[Voorhoede officele website](https://www.voorhoede.nl/en/) <br>
[ChatGPT](https://chat.openai.com/) <br>
[Developer Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/Location) 

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
