[**Documentation**](../README.md)

***

[Documentation](../README.md) / MerchantAmazonAsinTaskGetAdvancedResultInfo

# Class: MerchantAmazonAsinTaskGetAdvancedResultInfo

Defined in: main.ts:207250

## Implements

- [`IMerchantAmazonAsinTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonAsinTaskGetAdvancedResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new MerchantAmazonAsinTaskGetAdvancedResultInfo**(`data?`): `MerchantAmazonAsinTaskGetAdvancedResultInfo`

Defined in: main.ts:207283

#### Parameters

##### data?

[`IMerchantAmazonAsinTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonAsinTaskGetAdvancedResultInfo.md)

#### Returns

`MerchantAmazonAsinTaskGetAdvancedResultInfo`

## Properties

### asin?

> `optional` **asin**: `string`

Defined in: main.ts:207254

ASIN received in a POST array
the unique product identifier in Amazon (ASIN) received in a POST array
learn more about the identified in this help center guide

#### Implementation of

[`IMerchantAmazonAsinTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonAsinTaskGetAdvancedResultInfo.md).[`asin`](../interfaces/IMerchantAmazonAsinTaskGetAdvancedResultInfo.md#asin)

***

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:207265

direct URL to Amazon results
you can use it to make sure that we provided accurate results

#### Implementation of

[`IMerchantAmazonAsinTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonAsinTaskGetAdvancedResultInfo.md).[`check_url`](../interfaces/IMerchantAmazonAsinTaskGetAdvancedResultInfo.md#check_url)

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:207270

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IMerchantAmazonAsinTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonAsinTaskGetAdvancedResultInfo.md).[`datetime`](../interfaces/IMerchantAmazonAsinTaskGetAdvancedResultInfo.md#datetime)

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:207275

types of search results found on Amazon
contains types of all search results (items) found in the returned SERP
possible item types:
amazon_product_info

#### Implementation of

[`IMerchantAmazonAsinTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonAsinTaskGetAdvancedResultInfo.md).[`item_types`](../interfaces/IMerchantAmazonAsinTaskGetAdvancedResultInfo.md#item_types)

***

### items?

> `optional` **items**: [`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md)[]

Defined in: main.ts:207279

Amazon product info items

#### Implementation of

[`IMerchantAmazonAsinTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonAsinTaskGetAdvancedResultInfo.md).[`items`](../interfaces/IMerchantAmazonAsinTaskGetAdvancedResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:207277

the number of results returned in the items array

#### Implementation of

[`IMerchantAmazonAsinTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonAsinTaskGetAdvancedResultInfo.md).[`items_count`](../interfaces/IMerchantAmazonAsinTaskGetAdvancedResultInfo.md#items_count)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:207262

language code in a POST array

#### Implementation of

[`IMerchantAmazonAsinTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonAsinTaskGetAdvancedResultInfo.md).[`language_code`](../interfaces/IMerchantAmazonAsinTaskGetAdvancedResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:207260

location code in a POST array

#### Implementation of

[`IMerchantAmazonAsinTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonAsinTaskGetAdvancedResultInfo.md).[`location_code`](../interfaces/IMerchantAmazonAsinTaskGetAdvancedResultInfo.md#location_code)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:207258

Amazon domain in a POST array

#### Implementation of

[`IMerchantAmazonAsinTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonAsinTaskGetAdvancedResultInfo.md).[`se_domain`](../interfaces/IMerchantAmazonAsinTaskGetAdvancedResultInfo.md#se_domain)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:207256

type of element

#### Implementation of

[`IMerchantAmazonAsinTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonAsinTaskGetAdvancedResultInfo.md).[`type`](../interfaces/IMerchantAmazonAsinTaskGetAdvancedResultInfo.md#type)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:207292

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:207326

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `MerchantAmazonAsinTaskGetAdvancedResultInfo`

Defined in: main.ts:207319

#### Parameters

##### data

`any`

#### Returns

`MerchantAmazonAsinTaskGetAdvancedResultInfo`
