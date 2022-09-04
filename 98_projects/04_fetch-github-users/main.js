let btn_fetch = document.getElementById('btn-fetch');
btn_fetch.addEventListener('click', load)

function load() {

    let xhr = new XMLHttpRequest();
    let url = 'https://api.github.com/users';

    xhr.open('GET', url, true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            let json = JSON.parse(xhr.response);
            console.log(json);
            let html = '';
            let i = 1;
            for (const x of json) {
                html += `
                        <li class="user" id="user-${i}">
                            <div class="img-div">
                                <img src="${x.avatar_url}" alt="avatar_url_${i}">
                            </div>
                            <div class="user-info-div">
                                <p>Name - ${x.login}</p>
                                <p>id - ${x.id}</p>
                                <p>node_id - ${x.node_id}</p>
                            </div>
                        </li>
                        `
                i++;
            }
            document.getElementById('user-ul').innerHTML = html;
        }
        else{
            console.log('ERROR');
        }
    }

    xhr.send();
}