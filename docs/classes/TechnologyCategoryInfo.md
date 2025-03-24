[**Documentation**](../README.md)

***

[Documentation](../README.md) / TechnologyCategoryInfo

# Class: TechnologyCategoryInfo

Defined in: main.ts:96810

## Implements

- [`ITechnologyCategoryInfo`](../interfaces/ITechnologyCategoryInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new TechnologyCategoryInfo**(`data`?): `TechnologyCategoryInfo`

Defined in: main.ts:96828

#### Parameters

##### data?

[`ITechnologyCategoryInfo`](../interfaces/ITechnologyCategoryInfo.md)

#### Returns

`TechnologyCategoryInfo`

## Properties

### id?

> `optional` **id**: `string`

Defined in: main.ts:96814

id of the technology category
example:
crm, cart_abandonment

#### Implementation of

[`ITechnologyCategoryInfo`](../interfaces/ITechnologyCategoryInfo.md).[`id`](../interfaces/ITechnologyCategoryInfo.md#id)

***

### path?

> `optional` **path**: `string`

Defined in: main.ts:96818

path to the technology category
example:
user_generated_content.content_curation

#### Implementation of

[`ITechnologyCategoryInfo`](../interfaces/ITechnologyCategoryInfo.md).[`path`](../interfaces/ITechnologyCategoryInfo.md#path)

***

### technologies?

> `optional` **technologies**: `string`[]

Defined in: main.ts:96824

list of technologies in this category
example:
"Salesforce", "CareCart"

#### Implementation of

[`ITechnologyCategoryInfo`](../interfaces/ITechnologyCategoryInfo.md).[`technologies`](../interfaces/ITechnologyCategoryInfo.md#technologies)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:96820

title of the technology category

#### Implementation of

[`ITechnologyCategoryInfo`](../interfaces/ITechnologyCategoryInfo.md).[`title`](../interfaces/ITechnologyCategoryInfo.md#title)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:96837

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:96861

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `TechnologyCategoryInfo`

Defined in: main.ts:96854

#### Parameters

##### data

`any`

#### Returns

`TechnologyCategoryInfo`
