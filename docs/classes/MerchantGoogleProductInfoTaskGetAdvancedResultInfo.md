[**Documentation**](../README.md)

***

[Documentation](../README.md) / MerchantGoogleProductInfoTaskGetAdvancedResultInfo

# Class: MerchantGoogleProductInfoTaskGetAdvancedResultInfo

Defined in: main.ts:202412

## Implements

- [`IMerchantGoogleProductInfoTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new MerchantGoogleProductInfoTaskGetAdvancedResultInfo**(`data`?): `MerchantGoogleProductInfoTaskGetAdvancedResultInfo`

Defined in: main.ts:202444

#### Parameters

##### data?

[`IMerchantGoogleProductInfoTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedResultInfo.md)

#### Returns

`MerchantGoogleProductInfoTaskGetAdvancedResultInfo`

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:202426

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`IMerchantGoogleProductInfoTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedResultInfo.md).[`check_url`](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedResultInfo.md#check_url)

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:202431

date and time when the result was received
in the format: “year-month-date:minutes:UTC_difference_hours:UTC_difference_minutes”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IMerchantGoogleProductInfoTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedResultInfo.md).[`datetime`](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedResultInfo.md#datetime)

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:202435

types of items found on the product specification page
possible item types:
product_info_element

#### Implementation of

[`IMerchantGoogleProductInfoTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedResultInfo.md).[`item_types`](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedResultInfo.md#item_types)

***

### items?

> `optional` **items**: [`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md)[]

Defined in: main.ts:202440

items on the product page
contains all product attributes and related data listed on the product page

#### Implementation of

[`IMerchantGoogleProductInfoTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedResultInfo.md).[`items`](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:202437

the number of results returned in the items array

#### Implementation of

[`IMerchantGoogleProductInfoTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedResultInfo.md).[`items_count`](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedResultInfo.md#items_count)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:202423

language code in a POST array

#### Implementation of

[`IMerchantGoogleProductInfoTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedResultInfo.md).[`language_code`](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:202421

location code in a POST array

#### Implementation of

[`IMerchantGoogleProductInfoTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedResultInfo.md).[`location_code`](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedResultInfo.md#location_code)

***

### product\_id?

> `optional` **product\_id**: `string`

Defined in: main.ts:202415

product ID in a POST array
learn more about the parameter in this help center guide

#### Implementation of

[`IMerchantGoogleProductInfoTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedResultInfo.md).[`product_id`](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedResultInfo.md#product_id)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:202419

search engine domain in a POST array

#### Implementation of

[`IMerchantGoogleProductInfoTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedResultInfo.md).[`se_domain`](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedResultInfo.md#se_domain)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:202417

type of element

#### Implementation of

[`IMerchantGoogleProductInfoTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedResultInfo.md).[`type`](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedResultInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:202453

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:202487

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `MerchantGoogleProductInfoTaskGetAdvancedResultInfo`

Defined in: main.ts:202480

#### Parameters

##### data

`any`

#### Returns

`MerchantGoogleProductInfoTaskGetAdvancedResultInfo`
