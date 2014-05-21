<!-- .slide: data-background="images/02/strip-tease.png" data-background-size="auto auto" class="no-title" -->

Vis ma vie de front
===================

---

<!-- .slide: data-background="images/02/browser-at-war.jpg" data-background-size="100% auto" -->

Note: <h2>Cross browser</h2>
<ul>
<li>1331 specifications (source [W3C](http://www.w3.org/TR/#w3c_all))</li>
<li>multiples implémentations</li>
<li>Guerre des implémentations</li>
</ul>

---

<!-- .slide: data-background="images/02/multiple-devices.jpg" data-background-size="100% auto" -->

<p class="alert warn is-big fragment">Il est indispensable de tester.</p>

Note: <h2>Equipements</h2>

<ul>
<li>multiples systèmes et formats (appareils)</li>
</ul>

---

<!-- .slide: data-background="images/02/security.jpg" data-background-size="100% auto" -->

<p class="alert warn is-big fragment">Dans le HTML, attention à bien "html_encode" les variables venant de l'utilisateur.</p>

Note: <h2>Sécurité</h2>

<ul>
<li>Sécurité des API interrogées (authentification, fin de session, CORS)</li>
<li>cross-site scripting (XSS)</li>
<li>Content Security Policy (CSP)</li>
</ul>

---

<!-- .slide: data-background="images/02/network.jpg" data-background-size="100% auto" -->

<p class="alert warn is-big fragment">Il est indispensable d'optimiser ses fichiers statiques</p>

Note: Le réseau

<ul>
<li>mobile: 57% d'abandon après 3 secondes (source : [strangeloop](http://www.strangeloopnetworks.com/resources/infographics/web-performance-and-user-expectations/website-abandonment-happens-after-3-seconds/))</li>
<li>Amazon: 1% revenue increase for every 100ms of improvement (source :
[Amazon](https://sites.google.com/site/glinden/Home/StanfordDataMining.2006-11-28.ppt))</li>
</ul>

---

## Contraintes du navigateur

* 5 requêtes en parallèle par domaine ;
* Chargement du JS bloquant ;
* reflow + repaint ;
* asynchrone

Note: <h2>Reflow</h2>

<a href="http://stackoverflow.com/questions/2549296/whats-the-difference-between-reflow-and-repaint">Reflow Vs Repaint</a>

<ul>
<li>reflow: impact on layout</li>
<li>repaint: impact rendering</li>
</ul>

---

## Javascript

* 1 seul fichier ;
* En bas de page.

---

## CSS, images

* Charger les CSS tôt pour éviter le reflow ;
* Bonne gestion du cache HTTP.

---

## Un CDN en production

* distribué
* autre domaine
* gestion du cache
* utiliser les ressources du serveur d'application pour l'application

<p class="alert warn fragment">Attention au chemin des assets dans le html.</p>
