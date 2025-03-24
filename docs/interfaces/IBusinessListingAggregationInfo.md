[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBusinessListingAggregationInfo

# Interface: IBusinessListingAggregationInfo

Defined in: main.ts:223909

## Indexable

\[`key`: `string`\]: `any`

## Properties

### count?

> `optional` **count**: `number`

Defined in: main.ts:223919

number of unique entities

***

### top\_attributes?

> `optional` **top\_attributes**: `object`

Defined in: main.ts:223922

the most mentioned service details
service details of a business entity displayed in a form of checks and the number of entities mentioning each attribute

#### Index Signature

\[`key`: `string`\]: `number`

***

### top\_categories?

> `optional` **top\_categories**: `object`

Defined in: main.ts:223912

the most mentioned related categories
top categories displayed with the number of businesses in each category

#### Index Signature

\[`key`: `string`\]: `number`

***

### top\_countries?

> `optional` **top\_countries**: `object`

Defined in: main.ts:223915

the most mentioned counties
country codes with the biggest number of businesses in the category

#### Index Signature

\[`key`: `string`\]: `number`

***

### top\_place\_topics?

> `optional` **top\_place\_topics**: `object`

Defined in: main.ts:223925

top keywords mentioned in customer reviews
contains most popular keywords related to products/services mentioned in customer reviews of a business entity and the number of reviews mentioning each keyword

#### Index Signature

\[`key`: `string`\]: `number`

***

### websites\_count?

> `optional` **websites\_count**: `number`

Defined in: main.ts:223917

number of unique websites
