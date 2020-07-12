"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const artistsController_1 = __importDefault(require("../controllers/artistsController"));
class ArtistRoutes {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    routes() {
        this.router.get('/', artistsController_1.default.getArtists);
        this.router.get('/:id', artistsController_1.default.getArtist);
        this.router.post('/', artistsController_1.default.createArtist);
        this.router.put('/:id', artistsController_1.default.updateArtist);
        this.router.delete('/:id', artistsController_1.default.deleteArtist);
        this.router.post('/find', artistsController_1.default.findArtist);
    }
}
const artistRoutes = new ArtistRoutes();
exports.default = artistRoutes.router;
