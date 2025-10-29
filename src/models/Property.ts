import { Schema, model, models } from "mongoose";

const PropertySchema = new Schema({
  title: { type: String, required: true },
  location: { type: String, required: true },
  price: { type: String, required: true },
  size: { type: String, required: true },
  status: { type: String, required: true },
  imgSrc: { type: String, required: true },
  hasVideo: { type: Boolean, default: false },
  photosCount: { type: Number, default: 0 }, 
});

const Property = models.Property || model("Property", PropertySchema);

export default Property;
