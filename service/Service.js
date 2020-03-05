'use strict';

const mongoose = require('mongoose');

class Service {
    
    constructor (db) {
        this.db = db;
    }

    findAll() {
        return this.db.find();
    }
    
    findById(id) {
        return this.db.findById(id);
    }

    create(data) {
        return this.db.create(data);
    }
    
    update(data) {
        return this.db.findByIdAndUpdate(this.data.id, data);
    }
    
    delete(id) {
        return Author.findByIdAndDelete(id);
    }

}

module.exports = Service;