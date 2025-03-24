[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleCategoriesForDomainLiveItem

# Class: DataforseoLabsGoogleCategoriesForDomainLiveItem

Defined in: main.ts:108224

## Implements

- [`IDataforseoLabsGoogleCategoriesForDomainLiveItem`](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new DataforseoLabsGoogleCategoriesForDomainLiveItem**(`data`?): `DataforseoLabsGoogleCategoriesForDomainLiveItem`

Defined in: main.ts:108235

#### Parameters

##### data?

[`IDataforseoLabsGoogleCategoriesForDomainLiveItem`](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveItem.md)

#### Returns

`DataforseoLabsGoogleCategoriesForDomainLiveItem`

## Properties

### categories?

> `optional` **categories**: `number`[]

Defined in: main.ts:108229

product and service categories
you can download the full list of possible categories

#### Implementation of

[`IDataforseoLabsGoogleCategoriesForDomainLiveItem`](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveItem.md).[`categories`](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveItem.md#categories)

***

### metrics?

> `optional` **metrics**: `object`

Defined in: main.ts:108231

ranking data relevant to the specified domain or subdomain

#### Index Signature

\[`key`: `string`\]: [`DataforseoLabsMetricsInfo`](DataforseoLabsMetricsInfo.md)

#### Implementation of

[`IDataforseoLabsGoogleCategoriesForDomainLiveItem`](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveItem.md).[`metrics`](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveItem.md#metrics)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:108226

search engine type

#### Implementation of

[`IDataforseoLabsGoogleCategoriesForDomainLiveItem`](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveItem.md).[`se_type`](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveItem.md#se_type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:108244

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:108273

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `DataforseoLabsGoogleCategoriesForDomainLiveItem`

Defined in: main.ts:108266

#### Parameters

##### data

`any`

#### Returns

`DataforseoLabsGoogleCategoriesForDomainLiveItem`
