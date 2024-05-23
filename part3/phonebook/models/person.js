const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

const url = process.env.MONGODB_URI;

console.log('connecting to', url);

mongoose
  .connect(url)
  .then((result) => {
    console.log('connected to MongoDB');
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message);
  });

const personSchema = new mongoose.Schema({
  name: { type: String, required: true, minLength: 3 },
  number: {
    type: String,
    required: true,
    minLength: 8,
    validate: {
      validator: (v) => {
        return /^\d{2,3}-\d+$/.test(v);
      },
      message: (props) =>
        `${props.value} is not a valid phone number! Number must be in the format: 123-4567 or 12-34567.`,
    },
  },
});

personSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model('Person', personSchema);
