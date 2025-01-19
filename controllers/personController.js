const Person = require('../models/person');

const searchPeople = async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) {
      return res.status(400).json({ message: 'Query parameter is required' });
    }

    const people = await Person.find({ first_name: new RegExp(query, 'i') });
    res.status(200).json({ success: true, data: people });
  } catch (error) {
    console.error('Error searching people:', error.message);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

module.exports = { searchPeople };
