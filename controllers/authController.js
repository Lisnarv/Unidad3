const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user'); // Modelo que representa a los usuarios

exports.login = async (req, res) => {
  const { username, password } = req.body;

  // Validar que se reciban todos los datos necesarios
  if (!username || !password) {
    return res.status(400).json({ message: 'Faltan datos obligatorios' });
  }

  try {
    // Buscar usuario en la base de datos
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(401).json({ message: 'Credenciales incorrectas' });
    }

    // Comparar la contraseña usando bcrypt
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).json({ message: 'Credenciales incorrectas' });
    }

    // Generar un token JWT (expira en 1 hora)
    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Enviar el token al cliente o redirigir a una vista protegida
    return res.json({ message: 'Autenticación exitosa', token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error en el servidor' });
  }
};
