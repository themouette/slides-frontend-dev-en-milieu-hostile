<!-- .slide: data-background="images/02/strip-tease.png" data-background-size="auto auto" class="no-title" -->

Vis ma vie de front
===================

---

## Cross browser

* 1331 specifications (source [W3C](http://www.w3.org/TR/#w3c_all))
* multiples implémentations
* multiples systèmes et formats (appareils)

---

## Note sur le réseau

* mobile: 57% d'abandon après 3 secondes (source : [strangeloop](http://www.strangeloopnetworks.com/resources/infographics/web-performance-and-user-expectations/website-abandonment-happens-after-3-seconds/))
* Amazon: 1% revenue increase for every 100ms of improvement (source :
[Amazon](https://sites.google.com/site/glinden/Home/StanfordDataMining.2006-11-28.ppt))

<p class="alert tip fragment">Il est indispensable d'optimiser ses fichiers statiques</p>

---

## contraintes du navigateur

* 5 requêtes en // par domaine
* Chargement du JS bloquant
* reflow
* latence réseau

---

## Javascript

* 1 seul fichier
* En bas de page pour que la page s'affiche vite

---

## CSS, images

* Load CSS early to avoid reflow
* use cache

---

## Le workflow

* tests unitaires pour le métier
* reload pour le visuel

<img class="fragment" src="images/02/eclipse_progress.gif" />

<p class="alert warn fragment">
Le retour doit être rapide, attendre que les fichiers soient republiés n'est pas
une option.
</p>

---

## Derrière un proxy en dévloppement

<p class="alert info">
Utiliser un proxy NodeJs en développement est simple et efficace.
</p>

<p class="alert warn fragment">Attention à bien tenir compte du proxy dans les générations d'URL (redirect, liens...)</p>

---

## Un CDN en production

* distribué
* autre domaine
* gestion du cache
* utiliser les ressources du serveur d'application pour l'application

<p class="alert warn fragment">Attention au chemin des assets dans le html.</p>
