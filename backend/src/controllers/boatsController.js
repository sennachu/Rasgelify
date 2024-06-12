const Boat = require('../models/Boat');

exports.getBoats = async (req, res) => {
  try {
    const boats = await Boat.find().populate('owner', 'name email');;
    res.json(boats);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.createBoat = async (req, res) => {
  const { name, type, address, country, bedrooms, bathrooms, surface, price, image,owner } = req.body;

  try {
    const newBoat = new Boat({
      name,
      type,
      address,
      country,
      bedrooms,
      bathrooms,
      surface,
      price,
      image, owner,
    });

    const boat = await newBoat.save();
    res.json(boat);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.getBoatById = async (req, res) => {
  try {
    const boat = await Boat.findById(req.body.id).populate('owner', 'name email');
   
    if (!boat) {
      return res.status(404).json({ msg: 'Boat not found' });
    }
    res.json(boat);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.updateBoat = async (req, res) => {
  const { name, type, address, country, bedrooms, bathrooms, surface, price, image } = req.body;

  const boatFields = {};
  if (name) boatFields.name = name;
  if (type) boatFields.type = type;
  if (address) boatFields.address = address;
  if (country) boatFields.country = country;
  if (bedrooms) boatFields.bedrooms = bedrooms;
  if (bathrooms) boatFields.bathrooms = bathrooms;
  if (surface) boatFields.surface = surface;
  if (price) boatFields.price = price;
  if (image) boatFields.image = image;

  try {
    let boat = await Boat.findById(req.params.id);
    if (!boat) return res.status(404).json({ msg: 'Boat not found' });

    // Sadece geminin sahibi olan kullanıcı güncelleme yapabilir
    if (boat.owner.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }

    boat = await Boat.findByIdAndUpdate(
      req.params.id,
      { $set: boatFields },
      { new: true }
    );

    res.json(boat);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.deleteBoat = async (req, res) => {
  try {
    
    const boatid = (req.params.id); 
    console.log("id",boatid);
    const boat = await Boat.findById(boatid);
    
    if (!boat) {
      return res.status(404).json({ msg: 'Boat not found' });
    }
   

    // Sadece geminin sahibi olan kullanıcı silme yapabilir
    /*if (boat.owner.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }
*/
    await Boat.findByIdAndDelete(boatid);

    res.json({ msg: 'Boat removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
