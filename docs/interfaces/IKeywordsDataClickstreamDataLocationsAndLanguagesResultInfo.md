[**Documentation**](../README.md)

***

[Documentation](../README.md) / IKeywordsDataClickstreamDataLocationsAndLanguagesResultInfo

# Interface: IKeywordsDataClickstreamDataLocationsAndLanguagesResultInfo

Defined in: main.ts:159527

## Indexable

\[`key`: `string`\]: `any`

## Properties

### available\_languages?

> `optional` **available\_languages**: [`AvailableLanguages`](../classes/AvailableLanguages.md)[]

Defined in: main.ts:159543

supported languages
contains the languages which are supported for a specific location

***

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

Defined in: main.ts:159536

ISO country code of the location

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:159529

location code

***

### location\_code\_parent?

> `optional` **location\_code\_parent**: `number`

Defined in: main.ts:159534

the code of the superordinate location
the value will be null as Country is the only supported location_type for this API

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:159531

full name of the location

***

### location\_type?

> `optional` **location\_type**: `string`

Defined in: main.ts:159540

location type
possible values:
Country
