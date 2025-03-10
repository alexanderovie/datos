[**Documentation**](../README.md)

***

[Documentation](../README.md) / IProductConsiderationsExpandedElement

# Interface: IProductConsiderationsExpandedElement

Defined in: main.ts:38882

## Indexable

\[`key`: `string`\]: `any`

## Properties

### about\_this\_result?

> `optional` **about\_this\_result**: [`AboutThisResultElement`](../classes/AboutThisResultElement.md)

Defined in: main.ts:38907

contains information from the ‘About this result’ panel
‘About this result’ panel provides additional context about why Google returned this result for the given query;
this feature appears after clicking on the three dots next to most results

***

### breadcrumb?

> `optional` **breadcrumb**: `string`

Defined in: main.ts:38890

breadcrumb of the Ad element in SERP

***

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:38894

domain where a link points

***

### featured\_title?

> `optional` **featured\_title**: `string`

Defined in: main.ts:38888

the title of the featured snippets source page

***

### related\_searches?

> `optional` **related\_searches**: `string`[]

Defined in: main.ts:38903

search queries related to the elment

***

### snippet?

> `optional` **snippet**: `string`

Defined in: main.ts:38892

text alongside the link title

***

### timestamp?

> `optional` **timestamp**: `string`

Defined in: main.ts:38901

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:38886

title of the carousel item

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:38884

type of element

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:38896

URL of element
