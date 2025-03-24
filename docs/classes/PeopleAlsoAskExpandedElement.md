[**Documentation**](../README.md)

***

[Documentation](../README.md) / PeopleAlsoAskExpandedElement

# Class: PeopleAlsoAskExpandedElement

Defined in: main.ts:33841

## Implements

- [`IPeopleAlsoAskExpandedElement`](../interfaces/IPeopleAlsoAskExpandedElement.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new PeopleAlsoAskExpandedElement**(`data`?): `PeopleAlsoAskExpandedElement`

Defined in: main.ts:33867

#### Parameters

##### data?

[`IPeopleAlsoAskExpandedElement`](../interfaces/IPeopleAlsoAskExpandedElement.md)

#### Returns

`PeopleAlsoAskExpandedElement`

## Properties

### description?

> `optional` **description**: `string`

Defined in: main.ts:33853

description of the results element in SERP

#### Implementation of

[`IPeopleAlsoAskExpandedElement`](../interfaces/IPeopleAlsoAskExpandedElement.md).[`description`](../interfaces/IPeopleAlsoAskExpandedElement.md#description)

***

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:33849

domain where a link points

#### Implementation of

[`IPeopleAlsoAskExpandedElement`](../interfaces/IPeopleAlsoAskExpandedElement.md).[`domain`](../interfaces/IPeopleAlsoAskExpandedElement.md#domain)

***

### featured\_title?

> `optional` **featured\_title**: `string`

Defined in: main.ts:33845

the title of the featured snippets source page

#### Implementation of

[`IPeopleAlsoAskExpandedElement`](../interfaces/IPeopleAlsoAskExpandedElement.md).[`featured_title`](../interfaces/IPeopleAlsoAskExpandedElement.md#featured_title)

***

### images?

> `optional` **images**: [`ImagesElement`](ImagesElement.md)[]

Defined in: main.ts:33855

images of the element

#### Implementation of

[`IPeopleAlsoAskExpandedElement`](../interfaces/IPeopleAlsoAskExpandedElement.md).[`images`](../interfaces/IPeopleAlsoAskExpandedElement.md#images)

***

### table?

> `optional` **table**: [`Table`](Table.md)

Defined in: main.ts:33863

results table
if there are none, equals null

#### Implementation of

[`IPeopleAlsoAskExpandedElement`](../interfaces/IPeopleAlsoAskExpandedElement.md).[`table`](../interfaces/IPeopleAlsoAskExpandedElement.md#table)

***

### timestamp?

> `optional` **timestamp**: `string`

Defined in: main.ts:33860

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IPeopleAlsoAskExpandedElement`](../interfaces/IPeopleAlsoAskExpandedElement.md).[`timestamp`](../interfaces/IPeopleAlsoAskExpandedElement.md#timestamp)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:33851

title of the carousel item

#### Implementation of

[`IPeopleAlsoAskExpandedElement`](../interfaces/IPeopleAlsoAskExpandedElement.md).[`title`](../interfaces/IPeopleAlsoAskExpandedElement.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:33843

type of element

#### Implementation of

[`IPeopleAlsoAskExpandedElement`](../interfaces/IPeopleAlsoAskExpandedElement.md).[`type`](../interfaces/IPeopleAlsoAskExpandedElement.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:33847

URL of element

#### Implementation of

[`IPeopleAlsoAskExpandedElement`](../interfaces/IPeopleAlsoAskExpandedElement.md).[`url`](../interfaces/IPeopleAlsoAskExpandedElement.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:33876

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:33905

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `PeopleAlsoAskExpandedElement`

Defined in: main.ts:33898

#### Parameters

##### data

`any`

#### Returns

`PeopleAlsoAskExpandedElement`
