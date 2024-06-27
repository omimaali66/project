window.onscroll = function () {
    let value = scrollY;
    stars1.style.left = value + 'px';
    moon2.style.top = value * 4 + 'px';
    mountains3.style.top = value * 2 + 'px';
    mountains4.style.top = value * 1.5 + 'px';
    river5.style.top = value + 'px';
    boat6.style.left = value * 3 + 'px';
    boat6.style.top = value + 'px';
    Omima.style.fontSize = value + 'px';
    if (screenY >= 67) {
        Omima.style.fontSize = 67 + 'px';
        Omima.style.position = 'fixed';
        if (screenY >= 478) {
            Omima.style.display = 'none';
        } else {
            Omima.style.display = 'block';
        }
        if (screenY >= 127) {
            document.querySelector('.main').style.background = 'linear-gradient(#376281 , #10001f)';
        }
        else {

            document.querySelector('.main').style.background = 'linear-gradient( #200016 , #10001f)';
        }
    }
};
