[**Documentation**](../README.md)

***

[Documentation](../README.md) / Contacts

# Class: Contacts

Defined in: main.ts:185050

## Implements

- [`IContacts`](../interfaces/IContacts.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new Contacts**(`data`?): `Contacts`

Defined in: main.ts:185056

#### Parameters

##### data?

[`IContacts`](../interfaces/IContacts.md)

#### Returns

`Contacts`

## Properties

### telephones?

> `optional` **telephones**: `string`[]

Defined in: main.ts:185052

array of telephone numbers

#### Implementation of

[`IContacts`](../interfaces/IContacts.md).[`telephones`](../interfaces/IContacts.md#telephones)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:185065

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:185086

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `Contacts`

Defined in: main.ts:185079

#### Parameters

##### data

`any`

#### Returns

`Contacts`
