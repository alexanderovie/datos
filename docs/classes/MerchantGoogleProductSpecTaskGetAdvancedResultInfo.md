[**Documentation**](../README.md)

***

[Documentation](../README.md) / MerchantGoogleProductSpecTaskGetAdvancedResultInfo

# Class: MerchantGoogleProductSpecTaskGetAdvancedResultInfo

Defined in: main.ts:201028

## Implements

- [`IMerchantGoogleProductSpecTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new MerchantGoogleProductSpecTaskGetAdvancedResultInfo**(`data`?): `MerchantGoogleProductSpecTaskGetAdvancedResultInfo`

Defined in: main.ts:201068

#### Parameters

##### data?

[`IMerchantGoogleProductSpecTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResultInfo.md)

#### Returns

`MerchantGoogleProductSpecTaskGetAdvancedResultInfo`

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:201050

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`IMerchantGoogleProductSpecTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResultInfo.md).[`check_url`](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResultInfo.md#check_url)

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:201055

date and time when the result was received
in the format: “year-month-date:minutes:UTC_difference_hours:UTC_difference_minutes”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IMerchantGoogleProductSpecTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResultInfo.md).[`datetime`](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResultInfo.md#datetime)

***

### description?

> `optional` **description**: `string`

Defined in: main.ts:201043

description of the product

#### Implementation of

[`IMerchantGoogleProductSpecTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResultInfo.md).[`description`](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResultInfo.md#description)

***

### image\_url?

> `optional` **image\_url**: `string`

Defined in: main.ts:201045

URL of the product image

#### Implementation of

[`IMerchantGoogleProductSpecTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResultInfo.md).[`image_url`](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResultInfo.md#image_url)

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:201059

types of items found on the product specification page
possible item types:
shopping_specification

#### Implementation of

[`IMerchantGoogleProductSpecTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResultInfo.md).[`item_types`](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResultInfo.md#item_types)

***

### items?

> `optional` **items**: [`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md)[]

Defined in: main.ts:201064

items on the product specification page
contains all product attributes and related data listed on the product specification page

#### Implementation of

[`IMerchantGoogleProductSpecTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResultInfo.md).[`items`](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:201061

the number of results returned in the items array

#### Implementation of

[`IMerchantGoogleProductSpecTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResultInfo.md).[`items_count`](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResultInfo.md#items_count)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:201039

language code in a POST array

#### Implementation of

[`IMerchantGoogleProductSpecTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResultInfo.md).[`language_code`](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:201037

location code in a POST array

#### Implementation of

[`IMerchantGoogleProductSpecTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResultInfo.md).[`location_code`](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResultInfo.md#location_code)

***

### product\_id?

> `optional` **product\_id**: `string`

Defined in: main.ts:201031

product ID in a POST array
learn more about the parameter in this help center guide

#### Implementation of

[`IMerchantGoogleProductSpecTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResultInfo.md).[`product_id`](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResultInfo.md#product_id)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:201035

search engine domain in a POST array

#### Implementation of

[`IMerchantGoogleProductSpecTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResultInfo.md).[`se_domain`](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResultInfo.md#se_domain)

***

### tags?

> `optional` **tags**: `string`[]

Defined in: main.ts:201047

tags of the product

#### Implementation of

[`IMerchantGoogleProductSpecTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResultInfo.md).[`tags`](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResultInfo.md#tags)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:201041

title of the product

#### Implementation of

[`IMerchantGoogleProductSpecTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResultInfo.md).[`title`](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResultInfo.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:201033

type of element

#### Implementation of

[`IMerchantGoogleProductSpecTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResultInfo.md).[`type`](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResultInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:201077

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:201119

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `MerchantGoogleProductSpecTaskGetAdvancedResultInfo`

Defined in: main.ts:201112

#### Parameters

##### data

`any`

#### Returns

`MerchantGoogleProductSpecTaskGetAdvancedResultInfo`
