import {Router} from 'express'

import AlbumController from '../controllers/albumsController'

 class AlbumRoutes {
     router: Router;

     constructor (){
        this.router = Router();
        this.routes();
     }

      routes(){
        this.router.get('/', AlbumController.getAlbums);
        this.router.get('/:id', AlbumController.getAlbum);
        this.router.post('/', AlbumController.createAlbum);
        this.router.put('/:id', AlbumController.updateAlbum);
        this.router.delete('/:id', AlbumController.deleteAlbum);
     }
 }

const albumRoutes = new AlbumRoutes();
export default albumRoutes.router;