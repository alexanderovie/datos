[**Documentation**](../README.md)

***

[Documentation](../README.md) / IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem

# Interface: IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem

Defined in: main.ts:108643

## Indexable

\[`key`: `string`\]: `any`

## Properties

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:108659

domain found for the specified category

***

### main\_domain?

> `optional` **main\_domain**: `string`

Defined in: main.ts:108661

primary domain

***

### metrics\_difference?

> `optional` **metrics\_difference**: `object`

Defined in: main.ts:108666

metrics difference between first_date and second_date
calculated by subtracting domain metrics as of the greater date from domain metrics as of the smaller date

#### Index Signature

\[`key`: `string`\]: [`DataforseoLabsMetricsInfo`](../classes/DataforseoLabsMetricsInfo.md)

***

### metrics\_history?

> `optional` **metrics\_history**: `object`

Defined in: main.ts:108663

historical ranking and traffic data of the domain

#### Index Signature

\[`key`: `string`\]: `object`

***

### organic\_count?

> `optional` **organic\_count**: `number`

Defined in: main.ts:108651

current total count of organic SERPs that contain the domain

***

### organic\_etv?

> `optional` **organic\_etv**: `number`

Defined in: main.ts:108649

current organic ETV of the domain

***

### organic\_is\_lost?

> `optional` **organic\_is\_lost**: `number`

Defined in: main.ts:108654

current number of lost ranked elements
indicates how many ranked elements of the domain were previously presented in SERPs, but weren’t found during the last check

***

### organic\_is\_new?

> `optional` **organic\_is\_new**: `number`

Defined in: main.ts:108657

current number of new ranked elements
indicates how many new ranked elements were found for the domain

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:108645

search engine type

***

### top\_categories?

> `optional` **top\_categories**: `number`[]

Defined in: main.ts:108647

categories for which domains are collected
