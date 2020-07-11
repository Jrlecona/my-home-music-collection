"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const albumsController_1 = __importDefault(require("../controllers/albumsController"));
class AlbumRoutes {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    routes() {
        this.router.get('/', albumsController_1.default.getAlbums);
        this.router.get('/:id', albumsController_1.default.getAlbum);
        this.router.post('/', albumsController_1.default.createAlbum);
        this.router.put('/:id', albumsController_1.default.updateAlbum);
        this.router.delete('/:id', albumsController_1.default.deleteAlbum);
    }
}
const albumRoutes = new AlbumRoutes();
exports.default = albumRoutes.router;
