function initRunnables() {
    var runnables = document.querySelectorAll('code.runnable');
    runnables = Array.prototype.slice.call(runnables);
    runnables.forEach(function (runnable) {
        var pre = runnable.parentElement;
        var btn = document.createElement('button');
        btn.innerHTML = 'Run';
        btn.className = 'runnable-run';
        btn.addEventListener('click', function onRunnableClick(e) {
            eval(runnable.innerHTML.replace(/<[^>]*>/g, ""));
            btn.blur();
        });
        pre.appendChild(btn);
    });
}

setTimeout(initRunnables, 1000);
