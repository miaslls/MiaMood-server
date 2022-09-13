import mongoose from 'mongoose';

const ListEntrySchema = new mongoose.Schema(
  {
    list: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'List',
      required: true,
    },
    text: { type: String, required: true },
    dateTime: { type: String, required: true },
    starred: { type: Boolean, required: true },
    completed: { type: Boolean, required: true },
  },
  { versionKey: false },
);

const ListEntry = mongoose.model('ListEntry', ListEntrySchema, 'list-entries');

export default ListEntry;
