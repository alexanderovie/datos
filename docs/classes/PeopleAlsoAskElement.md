[**Documentation**](../README.md)

***

[Documentation](../README.md) / PeopleAlsoAskElement

# Class: PeopleAlsoAskElement

Defined in: main.ts:33955

## Implements

- [`IPeopleAlsoAskElement`](../interfaces/IPeopleAlsoAskElement.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new PeopleAlsoAskElement**(`data`?): `PeopleAlsoAskElement`

Defined in: main.ts:33969

#### Parameters

##### data?

[`IPeopleAlsoAskElement`](../interfaces/IPeopleAlsoAskElement.md)

#### Returns

`PeopleAlsoAskElement`

## Properties

### expanded\_element?

> `optional` **expanded\_element**: [`PeopleAlsoAskExpandedElement`](PeopleAlsoAskExpandedElement.md)[]

Defined in: main.ts:33965

expanded element

#### Implementation of

[`IPeopleAlsoAskElement`](../interfaces/IPeopleAlsoAskElement.md).[`expanded_element`](../interfaces/IPeopleAlsoAskElement.md#expanded_element)

***

### seed\_question?

> `optional` **seed\_question**: `string`

Defined in: main.ts:33961

question that triggered additional expanded elements

#### Implementation of

[`IPeopleAlsoAskElement`](../interfaces/IPeopleAlsoAskElement.md).[`seed_question`](../interfaces/IPeopleAlsoAskElement.md#seed_question)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:33959

title of a given link element

#### Implementation of

[`IPeopleAlsoAskElement`](../interfaces/IPeopleAlsoAskElement.md).[`title`](../interfaces/IPeopleAlsoAskElement.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:33957

type of element

#### Implementation of

[`IPeopleAlsoAskElement`](../interfaces/IPeopleAlsoAskElement.md).[`type`](../interfaces/IPeopleAlsoAskElement.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:33963

the XPath of the element

#### Implementation of

[`IPeopleAlsoAskElement`](../interfaces/IPeopleAlsoAskElement.md).[`xpath`](../interfaces/IPeopleAlsoAskElement.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:33978

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:34003

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `PeopleAlsoAskElement`

Defined in: main.ts:33996

#### Parameters

##### data

`any`

#### Returns

`PeopleAlsoAskElement`
