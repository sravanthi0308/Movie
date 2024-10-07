import { Router } from 'express';
const router = Router();
import { addMovie, viewAllMovies } from '../Controllers/movieController.js';

 router.post('/add',addMovie);
 router.get('/all',viewAllMovies);


//  module.exports = router;
export default router;