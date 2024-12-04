import { vgField } from 'vega-lite/build/src/channeldef';

// Define a field specification
const fieldDef = {
  field: 'temperature',
  type: 'quantitative'
};

// Options for vgField
const options = {
  expr: 'datum' // Specify that the field should be accessed from a datum object
};

// Generate the Vega-compatible field reference
const as = vgField(fieldDef, options);

console.log(as); // Output: "datum['temperature']"
