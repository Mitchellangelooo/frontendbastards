import { validate } from '../src/validator';

interface Schema {
  [key: string]: string;
}

describe('Validator Test functions', () => {
  it('should validate Cars', () => {

    const carSchema: Schema = {
      brand: 'string',
      type: 'string',
      milage: 'number',
      extras: 'array',
    };

    const carTrue = {
      brand: 'Mazda',
      type: 'MX5 NB 1.8',
      milage: 199999.99,
      extras: [
        '2001 Special Edition'
      ],
    };

    expect(validate(carTrue, carSchema)).toBe(true);
  });

  it('should invalidate Cars', () => {
    const carSchema: Schema = {
      brand: 'string',
      type: 'string',
      milage: 'number',
      extras: 'array',
    };

    const carObjF = {
      brand: 'BMW',
      type: '335',
      milage: '100000', // < No number
      extras: [
        'LCI',
        'KW Coilovers',
      ],
    };

    expect(validate(carObjF, carSchema)).toBe(false);
  });

  it('should validate Bars', () => {

    const barSchema: Schema = {
      name: 'string',
      address: 'string',
      drinks: 'object',
    };

    const barObj = {
      name: 'Jimmys drinks',
      address: 'Somewhere over the rainbow',
      drinks: {
        beer: ['Straffe Hendrik', 'Rochefort', 'St Bernard'],
      },
    };

    expect(validate(barObj, barSchema)).toBe(true);
  });

  it('should Invalidate Bars', () => {
    const barSchema: Schema = {
      name: 'string',
      address: 'string',
      drinks: 'object',
    };

    const barObjF = {
      name: 'Sjonnies',
      address: 'Centrum 001',
      drinks: [ // < No object
        'Heineken',
      ]
    };

    expect(validate(barObjF, barSchema)).toBe(false);
  });

  it('should validate Persons', () => {

    const personSchema: Schema = {
      name: 'string',
      age: 'number',
      siblings: 'array',
      metaData: 'object',
      active: 'boolean',
    };

    const personObj = {
      name: 'James',
      age: 25,
      siblings: ['Johnnathan'],
      metaData: {},
      active: true,
    };

    expect(validate(personObj, personSchema)).toBe(true);
  });

  it('should Invalidate Persons', () => {
    const personSchema: Schema = {
      name: 'string',
      age: 'number',
      siblings: 'array',
      metaData: 'object',
      active: 'boolean',
    };

    const personObjF = {
      name: 'Sjonnies',
      address: 'Centrum 001',
      drinks: [ // < No object
        'Heineken',
      ]
    };

    expect(validate(personObjF, personSchema)).toBe(false);
  });

});
