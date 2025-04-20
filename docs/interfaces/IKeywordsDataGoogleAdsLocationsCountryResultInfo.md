[**Documentation**](../README.md)

***

[Documentation](../README.md) / IKeywordsDataGoogleAdsLocationsCountryResultInfo

# Interface: IKeywordsDataGoogleAdsLocationsCountryResultInfo

Defined in: main.ts:138405

## Indexable

\[`key`: `string`\]: `any`

## Properties

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

Defined in: main.ts:138420

ISO country code of the location

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:138407

location code

***

### location\_code\_parent?

> `optional` **location\_code\_parent**: `number`

Defined in: main.ts:138418

the code of the superordinate location
example:
"location_code": 9041134,
"location_name": "Vienna International Airport,Lower Austria,Austria",
"location_code_parent": 20044
where location_code_parent corresponds to:
"location_code": 20044,
"location_name": "Lower Austria,Austria"

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:138409

full name of the location

***

### location\_type?

> `optional` **location\_type**: `string`

Defined in: main.ts:138423

location type
possible values according to Google’s target types
