const Reservation = require('../models/Reservation');

const createReservation = async (req, res) => {
  try {
    
    const reservation = new Reservation({ ...req.body, user: req.body.userId });
    
    await reservation.save();
    res.status(201).json(reservation);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create reservation' ,msj:error});
  }
};

const getReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find().populate('user', 'name email').populate('boat', 'id name image owner');
    res.status(200).json(reservations);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get reservations' });
  }
};

const getReservationById = async (req, res) => {
  try {
    const reservation = await Reservation.findById(req.params.id).populate('user', 'name email');
    if (!reservation) return res.status(404).json({ error: 'Reservation not found' });
    res.status(200).json(reservation);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get reservation' });
  }
};

const updateReservation = async (req, res) => {
  try {
    const reservation = await Reservation.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!reservation) return res.status(404).json({ error: 'Reservation not found' });
    res.status(200).json(reservation);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update reservation' });
  }
};

const deleteReservation = async (req, res) => {
  try {
    const reservation = await Reservation.findByIdAndDelete(req.params.id);
    if (!reservation) return res.status(404).json({ error: 'Reservation not found' });
    res.status(200).json({ message: 'Reservation deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete reservation' });
  }
};

module.exports = {
  createReservation,
  getReservations,
  getReservationById,
  updateReservation,
  deleteReservation
};
