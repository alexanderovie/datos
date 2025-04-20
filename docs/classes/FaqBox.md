[**Documentation**](../README.md)

***

[Documentation](../README.md) / FaqBox

# Class: FaqBox

Defined in: main.ts:33369

## Implements

- [`IFaqBox`](../interfaces/IFaqBox.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new FaqBox**(`data?`): `FaqBox`

Defined in: main.ts:33378

#### Parameters

##### data?

[`IFaqBox`](../interfaces/IFaqBox.md)

#### Returns

`FaqBox`

## Properties

### items?

> `optional` **items**: [`FaqBoxElement`](FaqBoxElement.md)[]

Defined in: main.ts:33374

additional items present in the element
if there are none, equals null

#### Implementation of

[`IFaqBox`](../interfaces/IFaqBox.md).[`items`](../interfaces/IFaqBox.md#items)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:33371

type of element

#### Implementation of

[`IFaqBox`](../interfaces/IFaqBox.md).[`type`](../interfaces/IFaqBox.md#type)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:33387

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:33409

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `FaqBox`

Defined in: main.ts:33402

#### Parameters

##### data

`any`

#### Returns

`FaqBox`
