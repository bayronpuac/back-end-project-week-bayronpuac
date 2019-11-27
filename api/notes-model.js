const db = require('../database/dbConfig');

module.exports ={
    get,
    getById,
    insert,
    update, 
    remove,
};

function get() {
    console.log('made it to the get')
    return db('notes');
}

function getById(id) {
    return db('notes')
    .where({ id})
    .first();
}

function insert (notes) {
    return db('notes')
    .insert(notes)
    .then(ids => {
        return getById(ids[0]);
    });
}

function update(id, changes) {
    return db('notes')
    .where({ id })
    .update(changes);
}

function remove(id) {
    return db('notes')
    .where('id', id)
    .del();
}