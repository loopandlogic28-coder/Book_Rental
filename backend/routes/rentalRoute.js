
import express from 'express';
import {
  createRental,
  getUserRentals,
  getAllRentals,
  updateRentalStatus,
  cancelRental
} from '../controllers/rentalController.js';
import authMiddleware from '../middleware/auth.js'; // ✅ Correct import

const router = express.Router();

// create new rental (requires login)
router.post('/', authMiddleware, createRental);

// fetch rentals of logged-in user
router.get('/my', authMiddleware, getUserRentals);

// admin: fetch all rentals
router.get('/all', getAllRentals);

// admin: update rental status
router.put('/:rentalId/status', updateRentalStatus);

// user/admin: cancel rental
router.put('/:rentalId/cancel', cancelRental);

export default router;
