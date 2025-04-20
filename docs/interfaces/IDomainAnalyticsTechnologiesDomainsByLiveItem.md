[**Documentation**](../README.md)

***

[Documentation](../README.md) / IDomainAnalyticsTechnologiesDomainsByLiveItem

# Interface: IDomainAnalyticsTechnologiesDomainsByLiveItem

Defined in: main.ts:99223

items array

## Indexable

\[`key`: `string`\]: `any`

## Properties

### content\_language\_code?

> `optional` **content\_language\_code**: `string`

Defined in: main.ts:99250

content language
code of the language that content on the target domain is written with

***

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

Defined in: main.ts:99244

domain ISO code
ISO code of the country that target domain is determined to belong to

***

### description?

> `optional` **description**: `string`

Defined in: main.ts:99231

domain meta description

***

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:99227

specified domain name

***

### domain\_rank?

> `optional` **domain\_rank**: `string`

Defined in: main.ts:99236

backlink rank of the target domain
learn more about the metric and how it is calculated in this help center article

***

### emails?

> `optional` **emails**: `string`[]

Defined in: main.ts:99256

emails of the target
emails indicated on the target website

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:99247

domain language
code of the language that target domain is determined to be associated with

***

### last\_visited?

> `optional` **last\_visited**: `string`

Defined in: main.ts:99241

most recent date when our crawler visited the domain
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2022-10-10 12:57:46 +00:00

***

### meta\_keywords?

> `optional` **meta\_keywords**: `string`[]

Defined in: main.ts:99233

domain meta keywords

***

### phone\_numbers?

> `optional` **phone\_numbers**: `string`[]

Defined in: main.ts:99253

phone numbers of the target
contact phone numbers indicated on the target website

***

### social\_graph\_urls?

> `optional` **social\_graph\_urls**: `string`[]

Defined in: main.ts:99259

social media links and handles
social media URLs detected in the social graphs of the target website

***

### technologies?

> `optional` **technologies**: [`TechnologiesInfo`](../classes/TechnologiesInfo.md)

Defined in: main.ts:99263

technologies used by target domain
contains objects with the names of technologies used on the website;
to get a full list of technologies and their structure, refer to the technologies endpoint

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:99229

domain meta title

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:99225

type of element
