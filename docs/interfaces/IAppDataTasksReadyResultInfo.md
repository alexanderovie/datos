[**Documentation**](../README.md)

***

[Documentation](../README.md) / IAppDataTasksReadyResultInfo

# Interface: IAppDataTasksReadyResultInfo

Defined in: main.ts:212181

## Indexable

\[`key`: `string`\]: `any`

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:212190

date when the task was posted (in the UTC format)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:212194

URL for collecting the results of the Apple app_reviews task

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:212197

URL for collecting the results of the Apple app_reviews HTML task
if HTML tasks are not supported in the specified endpoint, the value will be null

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:212184

task identifier of the completed task
unique task identifier in our system in the UUID format

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:212186

search engine specified when setting the task

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:212188

search engine type

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:212192

user-defined task identifier
