<!doctype html>
<html lang="en">

    <head>
        <meta charset="utf-8">

        <title><%= options.title %></title>

        <meta name="description" content="<%= options.description %>">
        <meta name="author" content="<%= options.author.name %>">

        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">

        <link rel="stylesheet" href="reveal.js/css/reveal.min.css">
        <link rel="stylesheet" href="css/theme/<%= options.theme %>.css" id="theme">

        <!-- For syntax highlighting -->
        <link rel="stylesheet" href="reveal.js/lib/css/zenburn.css">

        <% for (var i=0, l=options.styles.length ; i<l ; i++) { %>
        <link rel="stylesheet" href="<%= options.styles[i] %>" />
        <% } %>

        <!-- If the query includes 'print-pdf', use the PDF print sheet -->
        <script>
            document.write( '<link rel="stylesheet" href="reveal.js/css/print/' + ( window.location.search.match( /print-pdf/gi ) ? 'pdf' : 'paper' ) + '.css" type="text/css" media="print">' );
        </script>

        <!--[if lt IE 9]>
        <script src="reveal.js/lib/js/html5shiv.js"></script>
        <![endif]-->

    </head>

    <body>

        <div class="reveal">

            <!-- Any section element inside of this container is displayed as a slide -->
            <div class="slides">
                <section class="cover">
                    <h1><%= options.title %></h1>
                    <% if (options.cover) { %>
                        <img src="<%= options.cover %>" class="cover-img" />
                    <% } %>
                    <p class="author">
                    <small>
                        By
                        <% if (options.author.url) { %>
                            <a href="<% options.author.url %>"><%= options.author.name %></a>
                        <% } else { %>
                            <%= options.author.name %>
                        <% } %>
                        <% if (options.twitter) { %>
                            / <a href="https://twitter.com/<%= options.twitter %>">@<%= options.twitter %></a>
                        <% } %>
                    </small>
                    </p>
                    <p class="given">
                        <small id="presentation-location"></small>
                        <small id="presentation-date"></small>
                    </p>
                </section>

                <%= sections %>
            </div> <!-- End of .slides -->

        </div> <!-- end of #reveal -->

        <script src="reveal.js/lib/js/head.min.js"></script>
        <script src="reveal.js/js/reveal.min.js"></script>

        <% for (var i=0, l=options.scripts.length ; i<l ; i++) { %>
        <script src="<%= options.scripts[i] %>"></script>
        <% } %>

        <script>

            // Full list of configuration options available here:
            // https://github.com/hakimel/reveal.js#configuration
            Reveal.initialize({
                controls: true,
                progress: true,
                history: true,
                center: true,

                theme: Reveal.getQueryHash().theme, // available themes are in /css/theme
                transition: Reveal.getQueryHash().transition || 'default', // default/cube/page/concave/zoom/linear/fade/none

                // Parallax scrolling
                // parallaxBackgroundImage: 'https://s3.amazonaws.com/hakim-static/reveal-js/reveal-parallax-1.jpg',
                // parallaxBackgroundSize: '2100px 900px',

                // Optional libraries used to extend on reveal.js
                dependencies: [
                    { src: 'reveal.js/lib/js/classList.js', condition: function() { return !document.body.classList; } },
                    { src: 'reveal.js/plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
                    { src: 'reveal.js/plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
                    { src: 'reveal.js/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
                    { src: 'reveal.js/plugin/zoom-js/zoom.js', async: true, condition: function() { return !!document.body.classList; } },
                    { src: 'reveal.js/plugin/notes/notes.js', async: true, condition: function() { return !!document.body.classList; } }
                ]
            });

        </script>

    </body>
</html>
