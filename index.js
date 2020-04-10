const URL = 'http://35.240.201.155:3000/'
fetch(`${URL}api/v1/wanderlink/show/idn/destination`)
    .then(res => {
        return res.json()
    })
    .then(data => {
        console.log(data);
        dataWonderLink = data;
        for (let i = 0; i < 9; i++) {
            addWonderLink(data[i]);
        }
        // for(let x = 28; x < 30; x++){
        //     addContent(data[x])
        // }
        addContent(data[29])
        addGambar(data[30])
    })
let dataWonderLink =[]

const addGambar = item =>{
    const {
        destinationName,
            address,
            city,
            images,
            description
        } = item
    const gambarHTML = `<div class="content1">
    <div class="row my-5 mx-3">
        <div class="col-lg-6 col-md-6">
            <h2 class="pb-3">${destinationName}</h2>
            <p>
                Alamat : ${address}
            </p>
            <p>
                Kota : ${city}
            </p>
            <p>
                ${description}
            </p>
            <a href="#" class="btn btn-dark">Learn More</a>
        </div>
        <div class="col-lg-6 col-md-6">
        <img src="${URL}${images && images[0]}">
        </div>
    </div>
</div>`;
    document.getElementById('content1').innerHTML += gambarHTML;
}

const addContent = item =>{
        const {
            destinationName,
            address,
            city,
            images,
            description
        } = item
        const contentHTML = `<div class="content1">
        <div class="row my-5 mx-3">
            <div class="col-lg-6 col-md-6">
            <img src="${URL}${images && images[0]}">
            </div>
            <div class="col-lg-6 col-md-6">
                <h2 class="pb-3">${destinationName}</h2>
                <p>
                    Alamat : ${address}
                </p>
                <p>
                    Kota : ${city}
                </p>
                <p>
                    ${description}
                </p>
                <a href="#" class="btn btn-outline-dark">Learn More</a>
            </div>
        </div>
    </div>`;
    document.getElementById('content2').innerHTML = contentHTML;
}
const addWonderLink = item => {
    const {
        destinationName,
        address,
        city,
        images
    } = item
    const stringHTML = `
                <div class="card">
                    <img src="${URL}${images && images[0]}">
                    ${destinationName}
                    <br>
                    ${address}
                    <br>
                    ${city}
                </div>`;
    document.getElementById('card').innerHTML += stringHTML;
}