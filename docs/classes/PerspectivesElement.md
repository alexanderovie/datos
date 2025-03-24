[**Documentation**](../README.md)

***

[Documentation](../README.md) / PerspectivesElement

# Class: PerspectivesElement

Defined in: main.ts:40101

## Implements

- [`IPerspectivesElement`](../interfaces/IPerspectivesElement.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new PerspectivesElement**(`data`?): `PerspectivesElement`

Defined in: main.ts:40125

#### Parameters

##### data?

[`IPerspectivesElement`](../interfaces/IPerspectivesElement.md)

#### Returns

`PerspectivesElement`

## Properties

### date?

> `optional` **date**: `string`

Defined in: main.ts:40113

the date when the page source of the element was published

#### Implementation of

[`IPerspectivesElement`](../interfaces/IPerspectivesElement.md).[`date`](../interfaces/IPerspectivesElement.md#date)

***

### description?

> `optional` **description**: `string`

Defined in: main.ts:40107

description

#### Implementation of

[`IPerspectivesElement`](../interfaces/IPerspectivesElement.md).[`description`](../interfaces/IPerspectivesElement.md#description)

***

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:40111

website domain

#### Implementation of

[`IPerspectivesElement`](../interfaces/IPerspectivesElement.md).[`domain`](../interfaces/IPerspectivesElement.md#domain)

***

### source?

> `optional` **source**: `string`

Defined in: main.ts:40116

source of the element
indicates the source of information included in the top_stories_element

#### Implementation of

[`IPerspectivesElement`](../interfaces/IPerspectivesElement.md).[`source`](../interfaces/IPerspectivesElement.md#source)

***

### timestamp?

> `optional` **timestamp**: `string`

Defined in: main.ts:40121

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IPerspectivesElement`](../interfaces/IPerspectivesElement.md).[`timestamp`](../interfaces/IPerspectivesElement.md#timestamp)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:40105

title of a given link element

#### Implementation of

[`IPerspectivesElement`](../interfaces/IPerspectivesElement.md).[`title`](../interfaces/IPerspectivesElement.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:40103

type of element

#### Implementation of

[`IPerspectivesElement`](../interfaces/IPerspectivesElement.md).[`type`](../interfaces/IPerspectivesElement.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:40109

URL

#### Implementation of

[`IPerspectivesElement`](../interfaces/IPerspectivesElement.md).[`url`](../interfaces/IPerspectivesElement.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:40134

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:40158

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `PerspectivesElement`

Defined in: main.ts:40151

#### Parameters

##### data

`any`

#### Returns

`PerspectivesElement`
