import {Router} from 'express'

import ArtistController from '../controllers/artistsController'

 class ArtistRoutes {
     router: Router;

     constructor (){
        this.router = Router();
        this.routes();
     }

      routes(){
        this.router.get('/', ArtistController.getArtists);
        this.router.get('/:id', ArtistController.getArtist);
        this.router.post('/', ArtistController.createArtist);
        this.router.put('/:id', ArtistController.updateArtist);
        this.router.delete('/:id', ArtistController.deleteArtist);
        this.router.post('/find', ArtistController.findArtist);
        
     }
 }

const artistRoutes = new ArtistRoutes();
export default artistRoutes.router;