[**Documentation**](../README.md)

***

[Documentation](../README.md) / ISerpGoogleLocalFinderTasksReadyResultInfo

# Interface: ISerpGoogleLocalFinderTasksReadyResultInfo

Defined in: main.ts:46187

## Indexable

\[`key`: `string`\]: `any`

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:46197

date when the task was posted (in the UTC format)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:46205

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:46208

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

Defined in: main.ts:46202

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:46190

task identifier of the completed task
unique task identifier in our system in the UUID format

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:46192

search engine specified when setting the task

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:46195

type of search engine
example: local_finder

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:46199

user-defined task identifier
