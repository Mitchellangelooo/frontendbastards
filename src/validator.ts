
/**
 * Returns a boolean after validation of schema compared to object is done.
 *
 * @param {object} objectToValidate - Object thats needs to validated.
 * @returns {boolean} - Validation results true / false.
 * 
 */

interface Schema {
  [key: string]: string;
}

// we first check if the schemaObject attribute has the value of 'array' or 'object' and we would then 
// evaulate if the mapped value from the objectToValidate is actually an Array.
// if not we can use typeof to match the rest of the mapped values and their types 
// except for Array objects typeof will result in true therefor the extra check for 'object'.

function validateSchema(objectToValidate: {}, schema: Schema) {
  return Object.keys(objectToValidate).every((key: string) => {
    return schema[key] === 'array' ?
      Array.isArray(objectToValidate[key])
      : schema[key] === 'object'
        ? !Array.isArray(objectToValidate[key])
        : typeof objectToValidate[key] === schema[key];
  });
}


export function validate(objectToValidate, schema) {
  return validateSchema(objectToValidate, schema);
}


