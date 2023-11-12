fetch('https://cloudflare.com/cdn-cgi/trace')
.then(t => t.text())
.then(text => {
    if(text.includes('warp=on'))
    document.querySelector('h1').innerHTML = 'Bạn <span style="color: red;">đang có</span> bật <span style="color: red;">1.1.1.1</span>';
    else 
    document.querySelector('h1').innerHTML = 'Bạn <span style="color: red;">không</span> bật <span style="color: red;">1.1.1.1</span>';
})