import { Router } from 'express';
const router = Router();
import { bookTicket, getTickets } from '../Controllers/ticketController.js'

 router.post('/book',bookTicket);
 router.get('/getTickets',getTickets);



//  module.exports = router;
export default router;