Slides template
===============

This is a default repository to create a
[reveal.js](https://github.com/hakimel/reveal.js/) presentations.

Clone it and replace origin with your repository.

``` sh
$ PRESENTATION_NAME="your-presentation"
$ git clone https://github.com/themouette/slides-bootstrap.git $PRESENTATION_NAME
$ cd $PRESENTATION_NAME
$ git remote set-url origin git@github.com:you/${PRESENTATION_NAME}.git
```

Build
-----

To build your presentation you need [nodejs](http://nodejs.org/) and
[grunt](http://gruntjs.com/) installed.

First step is **install depdendencies**:

``` sh
$ npm install
```

### grunt dev

Build presentation in development environment.
Whenever a sass file or a markdown file is changed, output is rebuilt.

In dev environment, `index-dev.html` file is generated.

``` sh
$ grunt dev ; open index-dev.html
```

### grunt release

Build and optimize prensentation.

``` sh
$ grunt release ; open index.html
```

### grunt themes

The themes task builds all reveal.js themes as well as custom themes.

Custom themes are available in `css/theme/source` directory. `example.scss` is
provided as an example.

Themes are used to personalize stuff depending on the audience. This template
allow customisation of the output through scss:

``` sass
$location: 'My Company'
$date: '2014 January, 2nd'
```

It is also possible to configure some behavior in `Gruntfile.js`.
All possible options are documented there.

License
-------

<a rel="license" href="http://creativecommons.org/licenses/by/4.0/">
    <img alt="Creative Commons License" style="border-width:0"
            src="http://i.creativecommons.org/l/by/4.0/88x31.png" />
</a>

This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.
