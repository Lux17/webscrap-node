const fetch = require('node-fetch');
const cheerio= require('cheerio');

const getDataProduct = () => new Promise((resolve, reject) =>{
    fetch('https://www.tokopedia.com/miniso-official/miniso-bantalan-kapas-wajah-lembut-kapas-penghapus-riasan-1000pcs-putih',{
        method: 'GET',
        headers: {
            'user-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Mobile Safari/537.36'
        }

    })
        .then(res => res.text())
        .then(result => {
            const $ = cheerio.load(result)
            const produkName = $('h1[data-testid=pdpProductName]').text();
            // const produkvalue = $('input.unf-searchbar__input').attr('data-unify');
            resolve(produkName)
        })
        .catch(err => reject(err))
});


(async ()=>{
    const detailProduct = await getDataProduct()
    console.log(detailProduct)
})();