function timeout() {
    setTimeout(function() {
    location.reload(true);
    timeout();
    }, 5000);
}