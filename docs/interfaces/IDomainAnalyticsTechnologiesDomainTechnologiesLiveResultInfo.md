[**Documentation**](../README.md)

***

[Documentation](../README.md) / IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo

# Interface: IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo

Defined in: main.ts:99989

## Indexable

\[`key`: `string`\]: `any`

## Properties

### content\_language\_code?

> `optional` **content\_language\_code**: `string`

Defined in: main.ts:100016

content language
code of the language that content on the target domain is written in

***

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

Defined in: main.ts:100010

domain ISO code
ISO code of the country that the target domain is determined to belong to

***

### description?

> `optional` **description**: `string`

Defined in: main.ts:99997

domain meta description

***

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:99993

specified domain name

***

### domain\_rank?

> `optional` **domain\_rank**: `string`

Defined in: main.ts:100002

backlink rank of the target domain
learn more about the metric and how it is calculated in this help center article

***

### emails?

> `optional` **emails**: `string`[]

Defined in: main.ts:100022

emails of the target
emails indicated on the target website

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:100013

domain language
code of the language that the target domain is determined to be associated with

***

### last\_visited?

> `optional` **last\_visited**: `string`

Defined in: main.ts:100007

most recent date when our crawler visited the domain
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2022-10-10 12:57:46 +00:00

***

### meta\_keywords?

> `optional` **meta\_keywords**: `string`[]

Defined in: main.ts:99999

domain meta keywords

***

### phone\_numbers?

> `optional` **phone\_numbers**: `string`[]

Defined in: main.ts:100019

phone numbers of the target
contact phone numbers indicated on the target website

***

### social\_graph\_urls?

> `optional` **social\_graph\_urls**: `string`[]

Defined in: main.ts:100025

social media links and handles
social media URLs detected in the social graphs of the target website

***

### technologies?

> `optional` **technologies**: [`TechnologiesInfo`](../classes/TechnologiesInfo.md)

Defined in: main.ts:100029

technologies used by target domain
contains objects with the names of technologies used on the website
see the full list of available technologies structured by groups and categories

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:99995

domain meta title

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:99991

type of element
