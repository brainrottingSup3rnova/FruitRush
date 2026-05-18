# 🍎 Fruit Rush

**Fruit Rush** è un gioco web dinamico in cui il giocatore veste i panni di un giovane contadino impegnato nella frenetica stagione della raccolta. L'obiettivo è semplice ma sfidante: raccogliere quanta più frutta possibile prima di soccombere agli ostacoli che piovono dall'alto!

---

## 🎯 Obiettivi del Progetto
* Permettere all'utente di godere di partite complete e sempre variegate.
* Gestire un sistema di *drop* diversificato che include frutta classica, frutta marcia e ostacoli mortali.
* Gestire e aggiornare dinamicamente il **punteggio** in base agli oggetti raccolti.
* Gestire le **vite** a disposizione del giocatore.

## 🎮 Elementi di Gioco
* 🧑‍🌾 **Il Contadino**: Il personaggio controllato dal giocatore. Si muove per raccogliere la frutta e schivare i pericoli.
* 🍉 **La Frutta**: Cade costantemente dagli alberi e garantisce punti diversi in base alla tipologia:
    * **Mela**: +1 punto
    * **Arancia**: +2 punti
    * **Limone**: +3 punti
* 💣 **Gli Ostacoli**: Cadono mimetizzandosi tra la frutta per mettere in difficoltà il giocatore. Raccogliere una **bomba**, ad esempio, sottrarrà vite preziose al contadino.

## ⚙️ Requisiti

### Requisiti Funzionali
* Movimento orizzontale fluido e libero all'interno dei confini della schermata di gioco.
* Sistema di collisioni per permettere la raccolta della frutta e il conseguente aumento del punteggio.
* Sistema di penalità che riduce le vite del giocatore in caso di impatto con una bomba.

### Requisiti Non Funzionali
* Interfaccia utente (UI) semplice, pulita e immediatamente intuitiva.

## 🛠️ Tecnologie e Struttura del Sistema
Il progetto è stato sviluppato utilizzando **Visual Studio Code**, seguendo i principi della *Clean Architecture* per mantenere il codice organizzato, scalabile e di facile lettura. 

Lo stack tecnologico si basa interamente su tecnologie web standard:
* **HTML5 + Bootstrap**: Per definire la struttura della pagina web in modo rapido e responsivo.
* **CSS3 + Bootstrap**: Per la cura della veste grafica, del layout e dell'estetica dell'interfaccia.
* **Vanilla JavaScript (JS)**: Per il motore di gioco, la gestione del `<canvas>`, il game loop e l'intera logica applicativa.

## 🚀 Sviluppi Futuri
Il progetto getta le basi per numerose espansioni. Alcune idee per i futuri aggiornamenti includono:
* Personalizzazione estetica (es. permettere al giocatore di cambiare il colore del personaggio).
* Introduzione di nuove tipologie di frutta e relativi modificatori di punteggio.
* Creazione di un'interfaccia più articolata (es. menu principale, impostazioni, scoreboard globale).
* Implementazione di *power-up* positivi, come **boost temporanei di velocità**.

---
*Progetto sviluppato per scopi didattici e per il puro divertimento di programmare.*