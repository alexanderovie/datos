[**Documentation**](../README.md)

***

[Documentation](../README.md) / StoresCountInfo

# Class: StoresCountInfo

Defined in: main.ts:197802

## Implements

- [`IStoresCountInfo`](../interfaces/IStoresCountInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new StoresCountInfo**(`data`?): `StoresCountInfo`

Defined in: main.ts:197816

#### Parameters

##### data?

[`IStoresCountInfo`](../interfaces/IStoresCountInfo.md)

#### Returns

`StoresCountInfo`

## Properties

### count?

> `optional` **count**: `string`

Defined in: main.ts:197804

number of stores that offer the product

#### Implementation of

[`IStoresCountInfo`](../interfaces/IStoresCountInfo.md).[`count`](../interfaces/IStoresCountInfo.md#count)

***

### count\_from\_text?

> `optional` **count\_from\_text**: `boolean`

Defined in: main.ts:197812

whether the number of stores is taken from text
indicates whether the number of stores is taken from displayed_text;
if the API finds the exact number of stores in the HTML code of the Google Shopping page, this parameter is false;
if the API cannot find the number of stores in the HTML code of the page, it takes the number from the displayed_text;
in this case, the parameter is true

#### Implementation of

[`IStoresCountInfo`](../interfaces/IStoresCountInfo.md).[`count_from_text`](../interfaces/IStoresCountInfo.md#count_from_text)

***

### displayed\_text?

> `optional` **displayed\_text**: `string`

Defined in: main.ts:197806

text displayed on the Google Shopping page

#### Implementation of

[`IStoresCountInfo`](../interfaces/IStoresCountInfo.md).[`displayed_text`](../interfaces/IStoresCountInfo.md#displayed_text)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:197825

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:197844

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `StoresCountInfo`

Defined in: main.ts:197837

#### Parameters

##### data

`any`

#### Returns

`StoresCountInfo`
