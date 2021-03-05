'use strict'
const fetch = require('node-fetch');

var controller = {
    getProducts: (req, res) => {
        var query = req.query.q;
        const q_limit = 4;
        const api_url = `https://api.mercadolibre.com/sites/MLA/search?q=${query}&limit=${q_limit}`;

        (async function () {
            try {
                const response = await fetch(api_url);
                const jsonResp = await response.json();

                if (jsonResp.results.length > 0) {
                    //Autor
                    const author = {
                        name: 'Camilo',
                        lastname: 'Blanco'
                    }

                    //Categorias
                    const categories = jsonResp.filters.length ? (
                        jsonResp.filters[0].values[0].path_from_root.map((category)=> category.name)
                    ) : [];

                    //Productos
                    const products = jsonResp.results.map((product) => {
                        const {id, title, currency_id, thumbnail, condition} = product;
                        const free_shipping = product.shipping.free_shipping;
                        const [amount, decimals] = product.price.toString().split('.');

                        const items = {
                            id, 
                            title, 
                            price: {
                                currency: currency_id,
                                amount,
                                decimals
                            },
                            picture: thumbnail.replace("I.jpg", "W.webp"),
                            condition,
                            free_shipping
                        }
                        return(items)
                    });

                    const items = {
                        items: products
                    }

                    const jsonResult = {
                        author,
                        categories,
                        items: products
                    }
                    return res.status(200).send(jsonResult);
                } else {
                    return res.status(200).send('');
                }
            } catch (e) {
                return res.status(500).send(e);
            }
        })()
    },


    getProductDetail: (req, res) => {
        var query = req.params.id;
        const api_url = `https://api.mercadolibre.com/items/${query}`;
        const api_url_descrip = `https://api.mercadolibre.com/items/${query}/description`;

        (async function () {
            try {
                const response = await fetch(api_url);
                const response_descrip = await fetch(api_url_descrip);

                const jsonResp = await response.json();                
                const jsonResp_descrip = await response_descrip.json();
                
                if (jsonResp.id.length > 0) {
                    //Autor
                    const author = {
                        name: 'Camilo',
                        lastname: 'Blanco'
                    }

                    //Items
                    const {id, title, price, currency_id, condition, sold_quantity} = jsonResp;
                    const free_shipping = jsonResp.shipping.free_shipping;
                    const [amount, decimals] = jsonResp.price.toString().split('.');
                    const picture = jsonResp.pictures[0].url;
                    const description = jsonResp_descrip.plain_text;                    

                    const item = {
                        id, 
                        title, 
                        price: {
                            currency: currency_id,
                            amount,
                            decimals
                        },
                        picture,
                        condition,
                        free_shipping,
                        sold_quantity,
                        description
                    }

                    const jsonResult = {
                        author,
                        item
                    }
                    return res.status(200).send(jsonResult);
                } else {
                    return res.status(200).send('');
                }
            } catch (e) {
                return res.status(500).send(e);
            }
        })()
    }
}

module.exports = controller;