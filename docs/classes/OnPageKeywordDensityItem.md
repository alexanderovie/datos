[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPageKeywordDensityItem

# Class: OnPageKeywordDensityItem

Defined in: main.ts:183618

## Implements

- [`IOnPageKeywordDensityItem`](../interfaces/IOnPageKeywordDensityItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new OnPageKeywordDensityItem**(`data?`): `OnPageKeywordDensityItem`

Defined in: main.ts:183630

#### Parameters

##### data?

[`IOnPageKeywordDensityItem`](../interfaces/IOnPageKeywordDensityItem.md)

#### Returns

`OnPageKeywordDensityItem`

## Properties

### density?

> `optional` **density**: `number`

Defined in: main.ts:183626

keyword density
calculated as a ratio of frequency to the total count of keywords with the set keyword_length on the web page or website

#### Implementation of

[`IOnPageKeywordDensityItem`](../interfaces/IOnPageKeywordDensityItem.md).[`density`](../interfaces/IOnPageKeywordDensityItem.md#density)

***

### frequency?

> `optional` **frequency**: `number`

Defined in: main.ts:183623

keyword frequency
number of times the keyword appears on the website (or webpage if you specified a url)

#### Implementation of

[`IOnPageKeywordDensityItem`](../interfaces/IOnPageKeywordDensityItem.md).[`frequency`](../interfaces/IOnPageKeywordDensityItem.md#frequency)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:183620

returned keyword

#### Implementation of

[`IOnPageKeywordDensityItem`](../interfaces/IOnPageKeywordDensityItem.md).[`keyword`](../interfaces/IOnPageKeywordDensityItem.md#keyword)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:183639

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:183658

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `OnPageKeywordDensityItem`

Defined in: main.ts:183651

#### Parameters

##### data

`any`

#### Returns

`OnPageKeywordDensityItem`
