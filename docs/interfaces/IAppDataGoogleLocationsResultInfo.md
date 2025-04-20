[**Documentation**](../README.md)

***

[Documentation](../README.md) / IAppDataGoogleLocationsResultInfo

# Interface: IAppDataGoogleLocationsResultInfo

Defined in: main.ts:211077

## Indexable

\[`key`: `string`\]: `any`

## Properties

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

Defined in: main.ts:211091

ISO country code of the location

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:211079

location code

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:211081

full name of the location

***

### location\_name\_parent?

> `optional` **location\_name\_parent**: `string`

Defined in: main.ts:211089

the name of the superordinate location
example:
"location_code": 1006473,
"location_name": "Altrincham,England,United Kingdom",
"location_name_parent": "England,United Kingdom", where location_name_parent corresponds to:
"location_code": 20339,
"location_name": "England,United Kingdom"

***

### location\_type?

> `optional` **location\_type**: `string`

Defined in: main.ts:211093

location type
