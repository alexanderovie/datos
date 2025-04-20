[**Documentation**](../README.md)

***

[Documentation](../README.md) / IDataforseoTrendsDemographyInfo

# Interface: IDataforseoTrendsDemographyInfo

Defined in: main.ts:149522

## Indexable

\[`key`: `string`\]: `any`

## Properties

### demography?

> `optional` **demography**: [`Demography`](../classes/Demography.md)

Defined in: main.ts:149533

demographic breakdown of keyword popularity data per each specified term
conains keyword popularity data by age and gender

***

### demography\_comparison?

> `optional` **demography\_comparison**: [`DemographyComparisonInfo`](../classes/DemographyComparisonInfo.md)

Defined in: main.ts:149537

comparison of demographic data on keyword popularity for the specified parameters
conains keyword popularity data by age and gender
if you specified a single keyword, the value will be null

***

### keywords?

> `optional` **keywords**: `string`[]

Defined in: main.ts:149530

relevant keywords
the data included in the demography and demography_comparison is based on the keywords listed in this array

***

### position?

> `optional` **position**: `number`

Defined in: main.ts:149525

the alignment of the element
can take the following values: 1, 2, 3, 4, etc.

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:149527

type of element
