[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataTripadvisorSearchTaskGetResultInfo

# Class: BusinessDataTripadvisorSearchTaskGetResultInfo

Defined in: main.ts:237647

## Implements

- [`IBusinessDataTripadvisorSearchTaskGetResultInfo`](../interfaces/IBusinessDataTripadvisorSearchTaskGetResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BusinessDataTripadvisorSearchTaskGetResultInfo()

> **new BusinessDataTripadvisorSearchTaskGetResultInfo**(`data`?): [`BusinessDataTripadvisorSearchTaskGetResultInfo`](BusinessDataTripadvisorSearchTaskGetResultInfo.md)

Defined in: main.ts:237679

#### Parameters

##### data?

[`IBusinessDataTripadvisorSearchTaskGetResultInfo`](../interfaces/IBusinessDataTripadvisorSearchTaskGetResultInfo.md)

#### Returns

[`BusinessDataTripadvisorSearchTaskGetResultInfo`](BusinessDataTripadvisorSearchTaskGetResultInfo.md)

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:237659

direct URL to Tripadvisor results
you can use it to make sure that we provided accurate results

#### Implementation of

[`IBusinessDataTripadvisorSearchTaskGetResultInfo`](../interfaces/IBusinessDataTripadvisorSearchTaskGetResultInfo.md).[`check_url`](../interfaces/IBusinessDataTripadvisorSearchTaskGetResultInfo.md#check_url)

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:237664

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IBusinessDataTripadvisorSearchTaskGetResultInfo`](../interfaces/IBusinessDataTripadvisorSearchTaskGetResultInfo.md).[`datetime`](../interfaces/IBusinessDataTripadvisorSearchTaskGetResultInfo.md#datetime)

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:237667

item types encountered in the result
possible item types: tripadvisor_search_organic

#### Implementation of

[`IBusinessDataTripadvisorSearchTaskGetResultInfo`](../interfaces/IBusinessDataTripadvisorSearchTaskGetResultInfo.md).[`item_types`](../interfaces/IBusinessDataTripadvisorSearchTaskGetResultInfo.md#item_types)

***

### items?

> `optional` **items**: [`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md)[]

Defined in: main.ts:237675

Tripadvisor search listing results
you can get more results by using the depth parameter when setting a task

#### Implementation of

[`IBusinessDataTripadvisorSearchTaskGetResultInfo`](../interfaces/IBusinessDataTripadvisorSearchTaskGetResultInfo.md).[`items`](../interfaces/IBusinessDataTripadvisorSearchTaskGetResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:237672

the number of items in the results array
you can get more results by using the depth parameter when setting a task

#### Implementation of

[`IBusinessDataTripadvisorSearchTaskGetResultInfo`](../interfaces/IBusinessDataTripadvisorSearchTaskGetResultInfo.md).[`items_count`](../interfaces/IBusinessDataTripadvisorSearchTaskGetResultInfo.md#items_count)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:237650

keyword received in a POST array
this field will contain the alias parameter if it was specified in a POST array

#### Implementation of

[`IBusinessDataTripadvisorSearchTaskGetResultInfo`](../interfaces/IBusinessDataTripadvisorSearchTaskGetResultInfo.md).[`keyword`](../interfaces/IBusinessDataTripadvisorSearchTaskGetResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:237656

language code in a POST array

#### Implementation of

[`IBusinessDataTripadvisorSearchTaskGetResultInfo`](../interfaces/IBusinessDataTripadvisorSearchTaskGetResultInfo.md).[`language_code`](../interfaces/IBusinessDataTripadvisorSearchTaskGetResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `string`

Defined in: main.ts:237654

location code in a POST array

#### Implementation of

[`IBusinessDataTripadvisorSearchTaskGetResultInfo`](../interfaces/IBusinessDataTripadvisorSearchTaskGetResultInfo.md).[`location_code`](../interfaces/IBusinessDataTripadvisorSearchTaskGetResultInfo.md#location_code)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:237652

search engine domain in a POST array

#### Implementation of

[`IBusinessDataTripadvisorSearchTaskGetResultInfo`](../interfaces/IBusinessDataTripadvisorSearchTaskGetResultInfo.md).[`se_domain`](../interfaces/IBusinessDataTripadvisorSearchTaskGetResultInfo.md#se_domain)

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

Defined in: main.ts:237669

the total number of results

#### Implementation of

[`IBusinessDataTripadvisorSearchTaskGetResultInfo`](../interfaces/IBusinessDataTripadvisorSearchTaskGetResultInfo.md).[`se_results_count`](../interfaces/IBusinessDataTripadvisorSearchTaskGetResultInfo.md#se_results_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:237688

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:237722

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataTripadvisorSearchTaskGetResultInfo`](BusinessDataTripadvisorSearchTaskGetResultInfo.md)

Defined in: main.ts:237715

#### Parameters

##### data

`any`

#### Returns

[`BusinessDataTripadvisorSearchTaskGetResultInfo`](BusinessDataTripadvisorSearchTaskGetResultInfo.md)
