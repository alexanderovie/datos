[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo

# Interface: IBusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo

Defined in: main.ts:236543

## Indexable

\[`key`: `string`\]: `any`

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:236553

date when the task was posted (in the UTC format)

***

### endpoint?

> `optional` **endpoint**: `string`

Defined in: main.ts:236557

URL for collecting the results of the task

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:236546

task identifier of the completed task
unique task identifier in our system in the UUID format

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:236549

search engine specified when setting the task
can take the following values: google

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:236551

search engine type

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:236555

user-defined task identifier
