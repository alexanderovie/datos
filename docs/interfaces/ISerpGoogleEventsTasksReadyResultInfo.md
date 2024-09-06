[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / ISerpGoogleEventsTasksReadyResultInfo

# Interface: ISerpGoogleEventsTasksReadyResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Defined in

main.ts:45590

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:45598

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:45601

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:45595

***

### id?

> `optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Defined in

main.ts:45583

***

### se?

> `optional` **se**: `string`

search engine specified when setting the task

#### Defined in

main.ts:45585

***

### se\_type?

> `optional` **se\_type**: `string`

type of search engine
example: events

#### Defined in

main.ts:45588

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier

#### Defined in

main.ts:45592
