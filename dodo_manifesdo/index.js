
function init() {

    let bkg = document.getElementById('bkg-container'),
        colors = ['#00C1FF', '#FF8700', '#9D4FFF', '#8EF217', '#FF87EF', '33FFD6', '#F8E71C'];

    bkg.addEventListener('click', function () {
        color = colors.shift();
        colors.push(color);

        bkg.style.backgroundColor = color;
    });

    // function switch() {
    //     color = colors.shift();
    //     colors.push(color);

    //     bkg.style.backgroundColor = color;
    // }
}

window.addEventListener('load', init);

