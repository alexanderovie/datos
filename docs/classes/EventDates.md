[**Documentation**](../README.md)

***

[Documentation](../README.md) / EventDates

# Class: EventDates

Defined in: main.ts:51689

## Implements

- [`IEventDates`](../interfaces/IEventDates.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new EventDates**(`data?`): `EventDates`

Defined in: main.ts:51715

#### Parameters

##### data?

[`IEventDates`](../interfaces/IEventDates.md)

#### Returns

`EventDates`

## Properties

### displayed\_dates?

> `optional` **displayed\_dates**: `string`

Defined in: main.ts:51711

date or date range as it is displayed in SERP

#### Implementation of

[`IEventDates`](../interfaces/IEventDates.md).[`displayed_dates`](../interfaces/IEventDates.md#displayed_dates)

***

### end\_datetime?

> `optional` **end\_datetime**: `string`

Defined in: main.ts:51709

date and time when the event ends
if time zone is specified in the event, value will be returned in the UTC format:
“yyyy-mm-ddThh-mm-ss+00:00”
example:
2019-11-15T12:57:46+00:00
if time zone is not specified in the event, unspecified local time will be returned in the following format:
“yyyy-mm-ddThh-mm-ss”
example:
2019-11-15T12:57:46

#### Implementation of

[`IEventDates`](../interfaces/IEventDates.md).[`end_datetime`](../interfaces/IEventDates.md#end_datetime)

***

### start\_datetime?

> `optional` **start\_datetime**: `string`

Defined in: main.ts:51699

date and time when the event starts
if time zone is specified in the event, value will be returned in the UTC format:
“yyyy-mm-ddThh-mm-ss+00:00”
example:
2019-11-15T12:57:46+00:00
if time zone is not specified in the event, unspecified local time will be returned in the following format:
“yyyy-mm-ddThh-mm-ss”
example:
2019-11-15T12:57:46

#### Implementation of

[`IEventDates`](../interfaces/IEventDates.md).[`start_datetime`](../interfaces/IEventDates.md#start_datetime)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:51724

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:51743

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `EventDates`

Defined in: main.ts:51736

#### Parameters

##### data

`any`

#### Returns

`EventDates`
