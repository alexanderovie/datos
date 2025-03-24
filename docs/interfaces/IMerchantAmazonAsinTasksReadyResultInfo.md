[**Documentation**](../README.md)

***

[Documentation](../README.md) / IMerchantAmazonAsinTasksReadyResultInfo

# Interface: IMerchantAmazonAsinTasksReadyResultInfo

Defined in: main.ts:205571

## Indexable

\[`key`: `string`\]: `any`

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:205581

date when the task was posted (in the UTC format)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:205585

URL for collecting the results of the Amazon ASIN Advanced task

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:205587

URL for collecting the results of the Amazon ASIN HTML task

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:205574

task identifier of the completed task
unique task identifier in our system in the UUID format

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:205576

search engine specified when setting the task

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:205579

type of search engine
can take the following values: shopping

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:205583

user-defined task identifier
