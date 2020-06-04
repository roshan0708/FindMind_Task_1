let users = [];

const loader = $("#loader");

const showLoader = () => {
    loader.className = "show";
    setTimeout(()=>{
        loader.className = loader.className.replace("show","");
    },5000);
}

const hideLoader = () => {
    $("#loader").css("display", "none");
    $(' html, body').css({ overflow: 'auto' });
}

const fetchData = () => {
    showLoader();
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://picsum.photos/v2/list";
    fetch(proxyurl + url)
    .then(res => {
        if(!res.ok){
            alert('something went wrong!!!');
        }
        return res.json();
    })
    .then(data => {
        users = data;
        users.length=7;
        for (let i = 1; i < users.length; i++) {
            const imgUrl = users[i].download_url;
            const name = users[i].author;
            $('.t' + i).html(name);
            $('#image-' + i).attr("src", imgUrl);
            $(".button-" + i).attr("href", imgUrl);
        }
        setTimeout(() => {
            hideLoader();
        },2000);
    })
    .catch(err => console.log(err));
}
fetchData();


