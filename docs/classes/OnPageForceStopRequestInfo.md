[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPageForceStopRequestInfo

# Class: OnPageForceStopRequestInfo

Defined in: main.ts:175602

## Implements

- [`IOnPageForceStopRequestInfo`](../interfaces/IOnPageForceStopRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new OnPageForceStopRequestInfo**(`data`?): `OnPageForceStopRequestInfo`

Defined in: main.ts:175613

#### Parameters

##### data?

[`IOnPageForceStopRequestInfo`](../interfaces/IOnPageForceStopRequestInfo.md)

#### Returns

`OnPageForceStopRequestInfo`

## Properties

### id?

> `optional` **id**: `string`

Defined in: main.ts:175609

ID of the task
required field
you can get this ID in the response of the Task POST endpoint
example:
“07131248-1535-0216-1000-17384017ad04”
note: you can set up to 1000 id values as separate objects in the POST array

#### Implementation of

[`IOnPageForceStopRequestInfo`](../interfaces/IOnPageForceStopRequestInfo.md).[`id`](../interfaces/IOnPageForceStopRequestInfo.md#id)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:175622

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:175639

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `OnPageForceStopRequestInfo`

Defined in: main.ts:175632

#### Parameters

##### data

`any`

#### Returns

`OnPageForceStopRequestInfo`
