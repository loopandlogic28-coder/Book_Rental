

// import Rental from '../models/rentalModel.js';

// export const createRental = async (req, res) => {
//   try {
//     const rental = new Rental(req.body);
//     await rental.save();
//     res.status(201).json({ success: true, message: "Rental created", rental });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, message: "Failed to create rental" });
//   }
// };

// export const getUserRentals = async (req, res) => {
//   try {
//     const rentals = await Rental.find({ userId: req.params.userId }).populate('productId');
//     res.json(rentals);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching rentals" });
//   }
// };

// export const getAllRentals = async (req, res) => {
//   try {
//     const rentals = await Rental.find().populate('userId').populate('productId');
//     res.json(rentals);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching all rentals" });
//   }
// };

// export const updateRentalStatus = async (req, res) => {
//   try {
//     const rental = await Rental.findById(req.params.rentalId);
//     if (!rental) return res.status(404).json({ message: "Rental not found" });

//     rental.status = req.body.status;
//     if (req.body.status === "Delivered") rental.deliveredDate = new Date();
//     if (req.body.status === "Returned") rental.returnedDate = new Date();

//     await rental.save();
//     res.json(rental);
//   } catch (error) {
//     res.status(500).json({ message: "Error updating status" });
//   }
// };

// export const cancelRental = async (req, res) => {
//   try {
//     const rental = await Rental.findById(req.params.rentalId);
//     if (!rental) return res.status(404).json({ message: "Rental not found" });

//     rental.status = "Cancelled";
//     await rental.save();

//     res.json({ success: true, message: "Rental cancelled", rental });
//   } catch (error) {
//     res.status(500).json({ message: "Error cancelling rental" });
//   }
// };

import Rental from '../models/rentalModel.js';

// ✅ Create rental
export const createRental = async (req, res) => {
  try {
    // userId comes from JWT
    const userId = req.user.id;

    const rental = new Rental({
      ...req.body,
      userId, // ✅ set automatically
      status: "order_placed", // default initial status
    });

    await rental.save();
    res.status(201).json({ success: true, message: "Rental created", rental });
  } catch (error) {
    console.error("Error creating rental:", error);
    res.status(500).json({ success: false, message: "Failed to create rental" });
  }
};

// ✅ Fetch rentals for logged-in user
export const getUserRentals = async (req, res) => {
  try {
    console.log("Fetching rentals for user:", req.user); // 👈 Add this

    const rentals = await Rental.find({ userId: req.user._id }) // ✅ use _id, not id
      .populate('productId')
      .sort({ createdAt: -1 });

    res.status(200).json({ success: true, data: rentals });
  } catch (error) {
    console.error("Error fetching rentals:", error);
    res.status(500).json({ success: false, message: "Error fetching rentals" });
  }
};

// ✅ Fetch all rentals (admin)
export const getAllRentals = async (req, res) => {
  try {
    const rentals = await Rental.find()
      .populate('userId')
      .populate('productId')
      .sort({ createdAt: -1 });

    res.status(200).json({ success: true, data: rentals });
  } catch (error) {
    console.error("Error fetching all rentals:", error);
    res.status(500).json({ message: "Error fetching all rentals" });
  }
};

// ✅ Update status (admin)
export const updateRentalStatus = async (req, res) => {
  try {
    const rental = await Rental.findById(req.params.rentalId);
    if (!rental) return res.status(404).json({ message: "Rental not found" });

    rental.status = req.body.status;
    if (req.body.status === "Delivered") rental.deliveredDate = new Date();
    if (req.body.status === "Returned") rental.returnedDate = new Date();

    await rental.save();
    res.json({ success: true, message: "Status updated", rental });
  } catch (error) {
    console.error("Error updating status:", error);
    res.status(500).json({ message: "Error updating status" });
  }
};

// ✅ Cancel rental (user)
export const cancelRental = async (req, res) => {
  try {
    const rental = await Rental.findById(req.params.rentalId);
    if (!rental) return res.status(404).json({ message: "Rental not found" });

    // ✅ lowercase matches enum
    rental.status = "cancelled";
    rental.cancelledBy = req.user?.role === "admin" ? "admin" : "user";

    await rental.save();

    res.json({ success: true, message: "Rental cancelled", rental });
  } catch (error) {
    console.error("Error cancelling rental:", error);
    res.status(500).json({ message: "Error cancelling rental" });
  }
};

