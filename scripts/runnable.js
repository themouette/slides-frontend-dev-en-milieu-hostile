// Add runnable capabilities to a code block.
//
// Simply  declare code block as the following:
//
// ``` html
// <code class="javascript runnable" data-runnable-output="console"></code>
// ```
//
function initRunnables() {
    var runnables = document.querySelectorAll('code.runnable');
    runnables = Array.prototype.slice.call(runnables);
    runnables.forEach(function (runnable) {
        var pre = runnable.parentElement;
        var btn = document.createElement('button');
        btn.innerHTML = 'Run';
        btn.className = 'runnable-run';
        btn.addEventListener('click', function onRunnableClick(e) {
            var result = eval(runnable.innerHTML.replace(/<[^>]*>/g, ""));
            outputResult(runnable, result);
            btn.blur();
        });
        pre.appendChild(btn);
    });
}

// a set of possible output for eval'd script.
//
// Just add a data-runnable-output attribute with selected output:
//
// <pre><code class="javascript runnable" data-runnable-output="console"></code></pre>
// <pre><code class="javascript runnable" data-runnable-output="alert"></code></pre>
var availableOutputs = {
    // display result into an alert box
    "alert": function (result) {
        alert(result);
    },
    // log result in console
    "console": function (result) {
        console.log(result);
    },
    // log to a dom node
    "selector": function (result, runnable) {
        if (!runnable.hasAttribute('data-runnable-output-selector')) {
            console.error('Missing data-runnable-output-selector attribute on', runnable);
            throw new Error('Missing data-runnable-output-selector attribute');
        }
        var selector = runnable.getAttribute('data-runnable-output-selector');
        // find containing section
        var slide = runnable;
        while (slide.tagName !== 'section') {
            slide = slide.parentElement;
        }
        var output = slide.querySelector(selector);
        if (!output) {
            throw new Error('Unable to find node ' + attr);
        }

        output.innerHTML = escapeHTML(result);
    },
    // alert JSON encoded result
    "jsonalert": function (result) {
        alert(JSON.stringify(result));
    }
};

function outputResult(runnable, result) {
    var outputType = runnable.getAttribute('data-runnable-output');

    if (outputType && availableOutputs[outputType]) {
        availableOutputs[outputType](result, runnable);
    }
}

function escapeHTML( string )
{
    var pre = document.createElement('pre');
    var text = document.createTextNode( string );
    pre.appendChild(text);
    return pre.innerHTML;
}

setTimeout(initRunnables, 1000);
