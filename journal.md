# 27 aprile 2019

* Lettura e comprensione della consegna.
* Valutazione sul tipo di scena da rappresentare: preferibile utilizzare come spunto una scena famosa tratta da un film o da un avvenimento celebre.
* Decisione di rappresentare l'incidente del Titanic per la grande quantità di materiale online dal quale prendere ispirazione.
* Ricerca di immagini e materiale utile per la realizzazione della scena.

| ![Titanic png](pics/titanic_PNG1.png) |
| :-----------------------------------: |
| [Titanic](https://pngimg.com/download/65349) |

| ![Deck png](pics/titanic_PNG40.png) |
| :---------------------------------: |
| [Ponte](https://pngimg.com/download/65388) |

| ![Bow png](pics/titanic_PNG37.png) |
| :--------------------------------: |
| [Prua](https://pngimg.com/download/65385) |

Immagini da [pngimg.com](https://pngimg.com).
* Prime prove di progettazione della nave su carta e di disegno in Three.js.
* Creazione del file `journal.md`

# 28 aprile 2019

* Progettazione su carta della nave.

| ![First project front](pics/primo_progetto.jpg) |
| :---------------------------------------------: |
| Disegno della parte anteriore della nave |

* Prove di disegno del progetto in Three.js.
* La nave risulta troppo grande e pesante da rappresentare: revisione del codice scalando l'immagine e migliorando l'efficienza di alcune parti.
* Risultato non ancora soddisfacente: si rende necessaria una riprogettazione della nave.
* Bozza su carta del progetto con dimensioni minori.

| ![Second project](pics/bozza_progetto.jpg) |
| :----------------------------------------: |
| Prima bozza della nave con le dimensioni riviste |

* Riprogettazione totale su carta della nave.
* Aggiornamento journal.
* Prime prove di disegno del nuovo progetto in Three.js.

# 1 maggio 2019

| ![Final project](pics/progetto_definitivo.jpg) |
| :--------------------------------------------: |
| Disegno del progetto definitivo del Titanic |

* Revisione progetto e prove di disegno in Three.js.
* Risultati di prova accettabili.
* Aggiornamento del journal.
* Decisione di suddividere il Titanic in 5 parti per semplificare il codice e la costruzione: scafo, ponte, fumaioli, prua e poppa.
* Inizio scrittura del codice dello scafo (classe **Hull**).
* Aggiornamento journal.

# 2 maggio 2019

* Scrittura del codice dello scafo (classe **Hull**), del ponte (**Deck**) e dei fumaioli (**Funnel**).

| ![Titanic incomplete](pics/titanic_scr_1.png) |
| :-------------------------------------------: |
| Nave composta da **Hull**, **Deck** e i quattro **Funnel** |

* Alcune difficoltà con la scrittura del codice di poppa (**Stern**) e prua (**Bow**): il risultato sembra presentare errori di costruzione.
* Aggiornamento journal.

# 3 maggio 2019

* Creazione della repository del progetto.
* Risoluzione problemi di poppa e prua grazie all'utilizzo di cubi wireframe.
* Fine della scrittura del codice delle parti del Titanic.

| ![Titanic complete](pics/titanic_scr_2.png) |
| :-----------------------------------------: |
| Titanic completo |

* Aggiornamento journal.

# 4 maggio 2019

* Prove di utilizzo della funzione per la heightmap e il meccanismo di creazione del terreno.
* Prove di disegno di una heightmap (utilizzando Microsoft Paint) e interazioni con la funzione.

| ![Heightmap](textures/heightmap.png) |
| :----------------------------------: |
| Heightmap 60x60 |

* Scrittura del codice della classe **Terrain** che contiene la funzione per la creazione del terreno (cioè l'oceano e l'iceberg).
* Progettazione e prove di creazione dell'iceberg nella heightmap.

| ![Iceberg](pics/heightmap_iceberg.png) |
| :------------------------------------: |
| Iceberg e porzione di oceano creati tramite la heightmap |

* Prime prove di animazione della scena (impatto e naufragio).
* Valutazioni sull'inserimento di nebbia.
* Aggiornamento journal.

# 9 maggio 2019

* Aggiornamento di alcuni file della cartella **`lib`**, sostituiti con versioni più moderne.
* Lavoro sulle animazioni dell'impatto e della prima fase del naufragio.
* Dopo alcune prove, presa la decisione di utilizzare la classe **Clock** per calcolare i tempi delle animazioni.
* Aggiornamento journal.

# 10 maggio 2019

* Lavoro su animazioni: alcuni problemi nell'implementazione della decelerazione della nave.

| ![Animation](pics/anim.png) |
| :-------------------------: |
| Prime prove di animazioni del naufragio |

* I problemi erano dovuti ad una disattenzione nella scrittura del codice: risolti. Animazioni del naufragio completate.
* Inserimento blocco verticale della telecamera al livello del mare in modo che l'osservatore non possa osservare sottacqua.
* Ricerca di texture per il cielo.
* Aggiornamento journal.

# 16 maggio 2019

* Decisione di utilizzare una texture per i cubi che rappresentano l'oceano.
* La ricerca di texture seamless, adatte alla scena e libere da copyright, è più complessa del previsto.
* Prove di modifica di una texture troppo chiara: immagine scurita attraverso gli strumenti di Microsoft Office PowerPoint. Il risultato è graficamente soddisfacente.

| ![Sea texture](textures/sea.png) |
| :------------------------------: |
| Texture per l'oceano da [3DJungle](https://3djungle.net/textures/water/1832/) scurita con Microsoft Office PowerPoint |

* Aggiunta di una texture per il cielo da inserire in background.

| ![Sky texture](textures/sky.jpg) |
| :------------------------------: |
| Texture per il cielo da [PublicDomainPictures.net](https://www.publicdomainpictures.net/en/view-image.php?image=9767&picture=starry-night) |

* Leggero schiarimento del colore della sommità dei fumaioli per renderli distinguibili dal cielo.
* Inserimento di un ground e nebbia nera per simulare meglio l'oscurità.
* Aggiunta una texture per il ghiaccio dell'iceberg.

| ![Ice texture](textures/ice.jpg) |
| :------------------------------: |
| Texture per l'iceberg da Spiral Graphics (sito non più esistente) |

* Modificata la telecamera in modo che segua il Titanic durante la scena.
* Aggiornamento journal.

# 21 maggio 2019

* Revisione completa del codice.
* Inizio redazione README.
* Aggiornamento journal.

# 23 maggio 2019

* Conclusione README.
* Revisione completa del progetto, sistemati alcuni dettagli.
* Progetto concluso.
* Aggiornamento journal.
