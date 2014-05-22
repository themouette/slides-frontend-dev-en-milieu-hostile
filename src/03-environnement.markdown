<!-- .slide: data-background="images/03/environnement.jpg" data-background-size="100% auto" class="no-title" -->

Environnement
=============

Note: <h2>Environnement</h2>

---

## Le workflow

* Tests unitaires pour le métier ;
* Rechargement de page pour le visuel.

Note: Le retour doit être rapide

---

<!-- .slide: data-background="images/02/troll-blank.jpg" data-background-size="100% auto" -->

<img  src="images/02/eclipse_progress.gif" />

Note: Le retour doit être rapide, attendre que les fichiers soient republiés n'est pas
une option.

Un **éditeur** et la **ligne de commande**.

---

## Proxy de développement

<p class="alert warn fragment">Attention à bien tenir compte du proxy dans les générations d'URL (redirect, liens...)</p>

Note: Utiliser un proxy NodeJs en développement est simple et efficace.

---

<!-- .slide: class="no-title" -->

## Éditeurs

<a href="http://www.vim.org/" style="background-image:url(images/03/vim_logo.gif);background-size:100% auto;" class="editor-logo hide-text">Vim</a>
<a href="http://www.sublimetext.com/" style="background-image:url(images/03/sublime_text_icon.png);background-size:auto 80%;" class="editor-logo hide-text">Sublime Text</a>
<a href="http://brackets.io/" style="background-image:url(images/03/logo-brackets.png);background-size:100% auto;" class="editor-logo hide-text">Backets</a>
<a href="https://atom.io/" style="background-image:url(images/03/logo-atom.png);background-size:100% auto;" class="editor-logo hide-text">ATOM</a>
<a href="http://www.html5rocks.com/en/tutorials/developertools/revolutions2013/"
    style="background-image:url(images/03/logo-google-developers.png);background-size:100% auto;"
    class="editor-logo is-wide">Chrome Workspace</a>

---

<!-- .slide: data-background-image="images/03/yo-logo.png" data-background-size="auto 70%" data-background-position="right center" -->

## Yeoman

``` sh
$ npm install -g yeoman
$ npm install -g generator-webapp
$ yo webapp
```

<p class="alert is-big">
<a href="http://code.tutsplus.com/tutorials/building-apps-with-the-yeoman-workflow--net-33254">Building Apps With the Yeoman Workflow</a>
</p>

---

<!-- .slide: data-background="images/03/troll-windows.jpg" data-background-size="auto 100%" class="no-title" -->

## Ligne de commande sous windows

---

<!-- .slide: data-background-image="images/03/npm-logo.png" data-background-size="auto 30%" data-background-position="center 10%" class="no-title" -->

## npm

package.json

```
$ npm install
```

Note: Doit rappeler maven :)

---

<!-- .slide: data-background-image="images/03/bower-logo.png" data-background-size="auto 70%" data-background-position="left center" -->

## bower

bower.json

```
$ bower install
```

* installe des dépôts git
* exposé en mode dev, compilé en release

---

<!-- .slide: data-background="images/03/troll-svn.jpg" data-background-size="auto 100%" class="no-title" -->

## SVN

---

<!-- .slide: data-background-image="images/03/grunt-logo.png" data-background-size="auto 70%" data-background-position="left center" -->

## grunt

``` sh
$ grunt --help
$ grunt default
```

---

<!-- .slide: data-background-image="images/03/grunt-logo.png" data-background-size="auto 70%" data-background-position="left center" -->

## Gruntfile.js

``` javascript
module.exports = function(grunt) {

    var concat = {
        dist: {
            src: ['src/**/*.js'],
            dest: 'dist/<%= pkg.name %>.js'
        }
    };

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: concat
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.registerTask('default', ['concat']);
};
```

---

<!-- .slide: data-background-image="images/03/grunt-logo.png" data-background-size="auto 70%" data-background-position="left center" -->

## Gruntfile.js

``` javascript
    var concat = {
        options: {
            separator: ';'
        },

        dist: {
            src: ['src/**/*.js'],
            dest: 'dist/<%= pkg.name %>.js'
        }

    };
```

<p class="alert info fragment">ANT configuré en JSON</p>

Note: Pas forcément plus lisible que le XML, mais plus simple à écrire.

---

<!-- .slide: data-background-image="images/03/grunt-logo.png" data-background-size="auto 70%" data-background-position="left center" -->

## Démarrer avec Grunt

* [Getting started](http://gruntjs.com/getting-started)
* [Your first GruntJS plugin](http://javascriptplayground.com/blog/2014/01/creating-your-first-grunt-plugin/)
* [Supercharging your Gruntfile](http://www.html5rocks.com/en/tutorials/tooling/supercharging-your-gruntfile/)


---

## Tâches existantes

* [officielles](https://github.com/gruntjs/grunt-contrib)
* [toutes](http://gruntjs.com/plugins)

---

## watchers

Note: Recompile en permanence

---

## Alternatives

<a href="http://gulpjs.com/" style="background-image:url(images/03/logo-gulp.png);background-size:auto 100%;" class="editor-logo hide-text">Gulp</a>
<a href="http://brunch.io/" style="background-image:url(images/03/logo-brunch.png);background-size:auto 70%;" class="editor-logo hide-text">Brunch</a>
<a href="https://github.com/broccolijs/broccoli" style="background-image:url(images/03/logo-broccoli.png);background-size:auto 100%; width: 100%" class="editor-logo hide-text">Broccoli</a>


