const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const register = async (req, res) => {
 
  const { name, email, password, role } = req.body;

  let user = await User.findOne({ email });
  if (user) return res.status(400).json({ error: 'User already registered.' });

  user = new User({ name, email, password, role });
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);

  await user.save();

  const token = jwt.sign({ _id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.header('Authorization', token).json({ token });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    // Kullanıcı bulunamazsa veya şifre eşleşmezse hata döndürülür
    if (!user) {
      return res.status(400).json({ error: 'Invalid email or password.' });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).json({ error: 'Invalid email or password.' });
    }

    // Kullanıcı bilgileriyle bir JWT oluşturulur
    const token = jwt.sign({ _id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Token header'a eklenir ve kullanıcıya gönderilir
    res.header('Authorization', token).json({ token , user: { id: user._id, name: user.name, email: user.email, role: user.role }});
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
module.exports = { register, login };
