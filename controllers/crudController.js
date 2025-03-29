exports.listItems = (req, res) => {
    // Listar items
    // Ejemplo: renderizar vista dashboard.ejs pasando la información del usuario
    res.render('dashboard', { user: req.user });
  };
  
  exports.createItem = (req, res) => {
    // Solo Admin puede crear
    if (req.user.role !== 'Admin') {
      return res.status(403).json({ message: 'Solo Admin puede crear items' });
    }
    // Crear un item
    res.json({ message: 'Item creado exitosamente' });
  };
  
  exports.updateItem = (req, res) => {
    // Solo Admin puede actualizar
    if (req.user.role !== 'Admin') {
      return res.status(403).json({ message: 'Solo Admin puede actualizar items' });
    }
    // Actualizar un item
    res.json({ message: 'Item actualizado exitosamente' });
  };
  
  exports.deleteItem = (req, res) => {
    // Solo Admin puede eliminar
    if (req.user.role !== 'Admin') {
      return res.status(403).json({ message: 'Solo Admin puede eliminar items' });
    }
    // Eliminar un item
    res.json({ message: 'Item eliminado exitosamente' });
  };
  