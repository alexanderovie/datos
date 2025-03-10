[**Documentation**](../README.md)

***

[Documentation](../README.md) / Contacts

# Class: Contacts

Defined in: main.ts:182641

## Implements

- [`IContacts`](../interfaces/IContacts.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new Contacts()

> **new Contacts**(`data`?): [`Contacts`](Contacts.md)

Defined in: main.ts:182647

#### Parameters

##### data?

[`IContacts`](../interfaces/IContacts.md)

#### Returns

[`Contacts`](Contacts.md)

## Properties

### telephones?

> `optional` **telephones**: `string`[]

Defined in: main.ts:182643

array of telephone numbers

#### Implementation of

[`IContacts`](../interfaces/IContacts.md).[`telephones`](../interfaces/IContacts.md#telephones)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:182656

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:182677

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`Contacts`](Contacts.md)

Defined in: main.ts:182670

#### Parameters

##### data

`any`

#### Returns

[`Contacts`](Contacts.md)
