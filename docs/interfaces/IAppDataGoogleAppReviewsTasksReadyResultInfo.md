[**Documentation**](../README.md)

***

[Documentation](../README.md) / IAppDataGoogleAppReviewsTasksReadyResultInfo

# Interface: IAppDataGoogleAppReviewsTasksReadyResultInfo

Defined in: main.ts:214993

## Indexable

\[`key`: `string`\]: `any`

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:215002

date when the task was posted (in the UTC format)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:215006

URL for collecting the results of the Google App Reviews task

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:215009

URL for collecting the results of the Google App Reviews HTML task
if HTML tasks are not supported in the specified endpoint, the value will be null

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:214996

task identifier of the completed task
unique task identifier in our system in the UUID format

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:214998

search engine specified when setting the task

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:215000

search engine type

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:215004

user-defined task identifier
