[**Documentation**](../README.md)

***

[Documentation](../README.md) / PeriodCovered

# Class: PeriodCovered

Defined in: main.ts:60558

## Implements

- [`IPeriodCovered`](../interfaces/IPeriodCovered.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new PeriodCovered**(`data`?): `PeriodCovered`

Defined in: main.ts:60576

#### Parameters

##### data?

[`IPeriodCovered`](../interfaces/IPeriodCovered.md)

#### Returns

`PeriodCovered`

## Properties

### displayed\_date?

> `optional` **displayed\_date**: `string`

Defined in: main.ts:60572

period displayed in SERP
example:
Mar 2, 2020 - Dec 9, 2022

#### Implementation of

[`IPeriodCovered`](../interfaces/IPeriodCovered.md).[`displayed_date`](../interfaces/IPeriodCovered.md#displayed_date)

***

### end\_date?

> `optional` **end\_date**: `string`

Defined in: main.ts:60568

date and time when the period ends
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2022-12-09 02:00:00 +00:00

#### Implementation of

[`IPeriodCovered`](../interfaces/IPeriodCovered.md).[`end_date`](../interfaces/IPeriodCovered.md#end_date)

***

### start\_date?

> `optional` **start\_date**: `string`

Defined in: main.ts:60563

date and time when the period starts
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2020-03-02 02:00:00 +00:00

#### Implementation of

[`IPeriodCovered`](../interfaces/IPeriodCovered.md).[`start_date`](../interfaces/IPeriodCovered.md#start_date)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:60585

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:60604

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `PeriodCovered`

Defined in: main.ts:60597

#### Parameters

##### data

`any`

#### Returns

`PeriodCovered`
