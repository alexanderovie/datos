[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBacklinksTimeseriesNewLostSummaryLiveItem

# Interface: IBacklinksTimeseriesNewLostSummaryLiveItem

Defined in: main.ts:169535

## Indexable

\[`key`: `string`\]: `any`

## Properties

### date?

> `optional` **date**: `string`

Defined in: main.ts:169542

date and time when the data for the target was stored
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

***

### lost\_backlinks?

> `optional` **lost\_backlinks**: `number`

Defined in: main.ts:169548

number of lost backlinks
number of lost backlinks of the target

***

### lost\_referring\_domains?

> `optional` **lost\_referring\_domains**: `number`

Defined in: main.ts:169554

number of lost referring domains
number of lost referring domains of the target

***

### lost\_referring\_main\_domains?

> `optional` **lost\_referring\_main\_domains**: `number`

Defined in: main.ts:169560

number of lost referring main domains
number of lost referring main domains of the target

***

### new\_backlinks?

> `optional` **new\_backlinks**: `number`

Defined in: main.ts:169545

number of new backlinks
number of new backlinks pointing to the target

***

### new\_referring\_domains?

> `optional` **new\_referring\_domains**: `number`

Defined in: main.ts:169551

number of new referring domains
number of new referring domains pointing to the target

***

### new\_referring\_main\_domains?

> `optional` **new\_referring\_main\_domains**: `number`

Defined in: main.ts:169557

number of new referring main domains
number of new referring main domains pointing to the target

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:169537

type of element
