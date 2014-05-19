<!-- .slide: data-background="images/02/strip-tease.png" data-background-size="auto auto" class="no-title" -->

Vis ma vie de front
===================

---

## Le workflow

* tests unitaires pour le métier
* reload pour le visuel

> Le retour doit être rapide, tomcat c'est trop long.
>
> proxy NodeJs

---

## Un proxy en prod

* Nb de requêtes parallèles dans le navigateur
* CDN (gestion du cache)
* utiliser les ressources du serveur d'application pour l'application

> Attention à bien tenir compte du proxy dans les générations d'URL (redirect,
> liens...)

---

## Javascript

* 1 seul fichier car le chargement est bloquant
* En bas de page pour que la page s'affiche vite

---

## CSS, images

* use cache
* Load CSS early to avoid reflow

---

## Réseau

* mobile
* compress assets
* Amazon: 1% revenue increase for every 100ms of improvement (source:
[Amazon](https://sites.google.com/site/glinden/Home/StanfordDataMining.2006-11-28.ppt))

---

## Cross browser

* 1331 specifications (source [W3C](http://www.w3.org/TR/#w3c_all))
* multiples implémentations
* multiples systèmes et formats (appareils)
