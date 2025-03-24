[**Documentation**](../README.md)

***

[Documentation](../README.md) / History

# Class: History

Defined in: main.ts:122786

## Implements

- [`IHistory`](../interfaces/IHistory.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new History**(`data`?): `History`

Defined in: main.ts:122796

#### Parameters

##### data?

[`IHistory`](../interfaces/IHistory.md)

#### Returns

`History`

## Properties

### keyword\_info?

> `optional` **keyword\_info**: [`KeywordInfo`](KeywordInfo.md)

Defined in: main.ts:122792

historical data for the keyword

#### Implementation of

[`IHistory`](../interfaces/IHistory.md).[`keyword_info`](../interfaces/IHistory.md#keyword_info)

***

### month?

> `optional` **month**: `number`

Defined in: main.ts:122790

month

#### Implementation of

[`IHistory`](../interfaces/IHistory.md).[`month`](../interfaces/IHistory.md#month)

***

### year?

> `optional` **year**: `number`

Defined in: main.ts:122788

year

#### Implementation of

[`IHistory`](../interfaces/IHistory.md).[`year`](../interfaces/IHistory.md#year)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:122805

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:122824

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `History`

Defined in: main.ts:122817

#### Parameters

##### data

`any`

#### Returns

`History`
