[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsDomainIntersectionLiveItem

# Class: DataforseoLabsDomainIntersectionLiveItem

Defined in: main.ts:114300

## Implements

- [`IDataforseoLabsDomainIntersectionLiveItem`](../interfaces/IDataforseoLabsDomainIntersectionLiveItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new DataforseoLabsDomainIntersectionLiveItem**(`data?`): `DataforseoLabsDomainIntersectionLiveItem`

Defined in: main.ts:114314

#### Parameters

##### data?

[`IDataforseoLabsDomainIntersectionLiveItem`](../interfaces/IDataforseoLabsDomainIntersectionLiveItem.md)

#### Returns

`DataforseoLabsDomainIntersectionLiveItem`

## Properties

### first\_domain\_serp\_element?

> `optional` **first\_domain\_serp\_element**: [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

Defined in: main.ts:114307

contains data on the first domain’s SERP element found for the returned keyword
the list of supported SERP elements can be found below

#### Implementation of

[`IDataforseoLabsDomainIntersectionLiveItem`](../interfaces/IDataforseoLabsDomainIntersectionLiveItem.md).[`first_domain_serp_element`](../interfaces/IDataforseoLabsDomainIntersectionLiveItem.md#first_domain_serp_element)

***

### keyword\_data?

> `optional` **keyword\_data**: [`KeywordDataInfo`](KeywordDataInfo.md)

Defined in: main.ts:114304

keyword data for the returned keyword

#### Implementation of

[`IDataforseoLabsDomainIntersectionLiveItem`](../interfaces/IDataforseoLabsDomainIntersectionLiveItem.md).[`keyword_data`](../interfaces/IDataforseoLabsDomainIntersectionLiveItem.md#keyword_data)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:114302

search engine type

#### Implementation of

[`IDataforseoLabsDomainIntersectionLiveItem`](../interfaces/IDataforseoLabsDomainIntersectionLiveItem.md).[`se_type`](../interfaces/IDataforseoLabsDomainIntersectionLiveItem.md#se_type)

***

### second\_domain\_serp\_element?

> `optional` **second\_domain\_serp\_element**: [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

Defined in: main.ts:114310

contains data on the second domain’s SERP element found for the returned keyword
the list of supported SERP elements can be found below

#### Implementation of

[`IDataforseoLabsDomainIntersectionLiveItem`](../interfaces/IDataforseoLabsDomainIntersectionLiveItem.md).[`second_domain_serp_element`](../interfaces/IDataforseoLabsDomainIntersectionLiveItem.md#second_domain_serp_element)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:114323

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:114343

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `DataforseoLabsDomainIntersectionLiveItem`

Defined in: main.ts:114336

#### Parameters

##### data

`any`

#### Returns

`DataforseoLabsDomainIntersectionLiveItem`
