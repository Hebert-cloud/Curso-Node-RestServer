const { response, request } = require('express');

const UGet = (req=request, res = response) => {
    const {q, nombre, apikey, page= 1} = req.query;
    res.json({
        msg:'GET - Controll',
        q,
        nombre,
        apikey,
        page
    })
}

const UPut = (req, res = response) => {
    const {id} = req.params;
    res.json({
        msg:'PUT - Controll',
        id
    });
}

const UPost = (req, res = response) => {
    const {nombre, edad, nacimiento} = req.body;
    res.json({
        msg:'POST - Controll',
        nombre,
        edad,
        nacimiento
    });
}

const UDelete = (req, res = response) => {
    res.json({
        msg:'DELETE - Controll'
    });
}

module.exports = {
    UGet,
    UPut,
    UPost,
    UDelete
}
