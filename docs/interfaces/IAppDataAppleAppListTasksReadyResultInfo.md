[**Documentation**](../README.md)

***

[Documentation](../README.md) / IAppDataAppleAppListTasksReadyResultInfo

# Interface: IAppDataAppleAppListTasksReadyResultInfo

Defined in: main.ts:219749

## Indexable

\[`key`: `string`\]: `any`

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:219758

date when the task was posted (in the UTC format)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:219762

URL for collecting the results of the Apple app_list task

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:219765

URL for collecting the results of the Apple app_list HTML task
if HTML tasks are not supported in the specified endpoint, the value will be null

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:219752

task identifier of the completed task
unique task identifier in our system in the UUID format

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:219754

search engine specified when setting the task

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:219756

search engine type

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:219760

user-defined task identifier
