const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const secret = process.env.JWT_SECRET;

exports.signup = async (req, res) => {
  try {
    const { email, password, name, country } = req.body;
    if (!email || !password) return res.status(400).json({ msg: 'Email & password required' });

    const hash = bcrypt.hashSync(password, 10);
    await User.create({ email, password: hash, name, country });
    res.status(201).json({ msg: 'User created' });
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(401).json({ msg: 'User not found' });

    const match = bcrypt.compareSync(password, user.password);
    if (!match) return res.status(401).json({ msg: 'Invalid credentials' });

    const token = jwt.sign({ id: user.id, email: user.email }, secret, { expiresIn: '1d' });
    res.json({ token });
  } catch (err) {
    res.status(500).json(err);
  }
};