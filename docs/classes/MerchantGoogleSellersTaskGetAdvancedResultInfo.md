[**Documentation**](../README.md)

***

[Documentation](../README.md) / MerchantGoogleSellersTaskGetAdvancedResultInfo

# Class: MerchantGoogleSellersTaskGetAdvancedResultInfo

Defined in: main.ts:199870

## Implements

- [`IMerchantGoogleSellersTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new MerchantGoogleSellersTaskGetAdvancedResultInfo**(`data`?): `MerchantGoogleSellersTaskGetAdvancedResultInfo`

Defined in: main.ts:199911

#### Parameters

##### data?

[`IMerchantGoogleSellersTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md)

#### Returns

`MerchantGoogleSellersTaskGetAdvancedResultInfo`

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:199884

direct URL to Google Shopping results
you can use it to make sure that we provided accurate results

#### Implementation of

[`IMerchantGoogleSellersTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md).[`check_url`](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md#check_url)

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:199889

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IMerchantGoogleSellersTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md).[`datetime`](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md#datetime)

***

### image\_url?

> `optional` **image\_url**: `string`

Defined in: main.ts:199895

URL to the product image

#### Implementation of

[`IMerchantGoogleSellersTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md).[`image_url`](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md#image_url)

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:199903

types of search results found in Google Shopping SERP
contains types of all search results (items) found in the returned SERP
possible item types:
shops_list, buy_on_google

#### Implementation of

[`IMerchantGoogleSellersTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md).[`item_types`](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md#item_types)

***

### items?

> `optional` **items**: [`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md)[]

Defined in: main.ts:199907

items in SERP

#### Implementation of

[`IMerchantGoogleSellersTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md).[`items`](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:199905

the number of results returned in the items array

#### Implementation of

[`IMerchantGoogleSellersTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md).[`items_count`](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md#items_count)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:199881

language code in a POST array

#### Implementation of

[`IMerchantGoogleSellersTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md).[`language_code`](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:199879

location code in a POST array

#### Implementation of

[`IMerchantGoogleSellersTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md).[`location_code`](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md#location_code)

***

### product\_id?

> `optional` **product\_id**: `string`

Defined in: main.ts:199873

product_id received in a POST array
learn more about the parameter in this help center guide

#### Implementation of

[`IMerchantGoogleSellersTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md).[`product_id`](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md#product_id)

***

### rating?

> `optional` **rating**: [`RatingElement`](RatingElement.md)

Defined in: main.ts:199898

product rating
the product popularity rate based on product reviews

#### Implementation of

[`IMerchantGoogleSellersTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md).[`rating`](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md#rating)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:199877

search engine domain in a POST array

#### Implementation of

[`IMerchantGoogleSellersTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md).[`se_domain`](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md#se_domain)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:199891

title of the product

#### Implementation of

[`IMerchantGoogleSellersTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md).[`title`](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:199875

type of element

#### Implementation of

[`IMerchantGoogleSellersTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md).[`type`](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:199893

URL to the product page

#### Implementation of

[`IMerchantGoogleSellersTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md).[`url`](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:199920

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:199958

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `MerchantGoogleSellersTaskGetAdvancedResultInfo`

Defined in: main.ts:199951

#### Parameters

##### data

`any`

#### Returns

`MerchantGoogleSellersTaskGetAdvancedResultInfo`
