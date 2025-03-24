[**Documentation**](../README.md)

***

[Documentation](../README.md) / MerchantAmazonReviewsTaskGetHtmlResultInfo

# Class: MerchantAmazonReviewsTaskGetHtmlResultInfo

Defined in: main.ts:209408

## Implements

- [`IMerchantAmazonReviewsTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonReviewsTaskGetHtmlResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new MerchantAmazonReviewsTaskGetHtmlResultInfo**(`data`?): `MerchantAmazonReviewsTaskGetHtmlResultInfo`

Defined in: main.ts:209431

#### Parameters

##### data?

[`IMerchantAmazonReviewsTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonReviewsTaskGetHtmlResultInfo.md)

#### Returns

`MerchantAmazonReviewsTaskGetHtmlResultInfo`

## Properties

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:209423

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IMerchantAmazonReviewsTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonReviewsTaskGetHtmlResultInfo.md).[`datetime`](../interfaces/IMerchantAmazonReviewsTaskGetHtmlResultInfo.md#datetime)

***

### items?

> `optional` **items**: [`HtmlItem`](HtmlItem.md)[]

Defined in: main.ts:209427

HTML pages and related data

#### Implementation of

[`IMerchantAmazonReviewsTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonReviewsTaskGetHtmlResultInfo.md).[`items`](../interfaces/IMerchantAmazonReviewsTaskGetHtmlResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:209425

the number of results returned in the items array

#### Implementation of

[`IMerchantAmazonReviewsTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonReviewsTaskGetHtmlResultInfo.md).[`items_count`](../interfaces/IMerchantAmazonReviewsTaskGetHtmlResultInfo.md#items_count)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:209418

language code in a POST array

#### Implementation of

[`IMerchantAmazonReviewsTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonReviewsTaskGetHtmlResultInfo.md).[`language_code`](../interfaces/IMerchantAmazonReviewsTaskGetHtmlResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:209416

location code in a POST array

#### Implementation of

[`IMerchantAmazonReviewsTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonReviewsTaskGetHtmlResultInfo.md).[`location_code`](../interfaces/IMerchantAmazonReviewsTaskGetHtmlResultInfo.md#location_code)

***

### product\_id?

> `optional` **product\_id**: `string`

Defined in: main.ts:209410

ASIN received in a POST array

#### Implementation of

[`IMerchantAmazonReviewsTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonReviewsTaskGetHtmlResultInfo.md).[`product_id`](../interfaces/IMerchantAmazonReviewsTaskGetHtmlResultInfo.md#product_id)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:209414

search engine domain in a POST array

#### Implementation of

[`IMerchantAmazonReviewsTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonReviewsTaskGetHtmlResultInfo.md).[`se_domain`](../interfaces/IMerchantAmazonReviewsTaskGetHtmlResultInfo.md#se_domain)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:209412

type of element

#### Implementation of

[`IMerchantAmazonReviewsTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonReviewsTaskGetHtmlResultInfo.md).[`type`](../interfaces/IMerchantAmazonReviewsTaskGetHtmlResultInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:209440

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:209468

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `MerchantAmazonReviewsTaskGetHtmlResultInfo`

Defined in: main.ts:209461

#### Parameters

##### data

`any`

#### Returns

`MerchantAmazonReviewsTaskGetHtmlResultInfo`
