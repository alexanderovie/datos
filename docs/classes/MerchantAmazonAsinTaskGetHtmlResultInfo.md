[**Documentation**](../README.md)

***

[Documentation](../README.md) / MerchantAmazonAsinTaskGetHtmlResultInfo

# Class: MerchantAmazonAsinTaskGetHtmlResultInfo

Defined in: main.ts:206968

## Implements

- [`IMerchantAmazonAsinTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonAsinTaskGetHtmlResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new MerchantAmazonAsinTaskGetHtmlResultInfo**(`data`?): `MerchantAmazonAsinTaskGetHtmlResultInfo`

Defined in: main.ts:206991

#### Parameters

##### data?

[`IMerchantAmazonAsinTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonAsinTaskGetHtmlResultInfo.md)

#### Returns

`MerchantAmazonAsinTaskGetHtmlResultInfo`

## Properties

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:206983

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IMerchantAmazonAsinTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonAsinTaskGetHtmlResultInfo.md).[`datetime`](../interfaces/IMerchantAmazonAsinTaskGetHtmlResultInfo.md#datetime)

***

### items?

> `optional` **items**: [`HtmlItem`](HtmlItem.md)[]

Defined in: main.ts:206987

HTML pages and related data

#### Implementation of

[`IMerchantAmazonAsinTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonAsinTaskGetHtmlResultInfo.md).[`items`](../interfaces/IMerchantAmazonAsinTaskGetHtmlResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:206985

the number of results returned in the items array

#### Implementation of

[`IMerchantAmazonAsinTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonAsinTaskGetHtmlResultInfo.md).[`items_count`](../interfaces/IMerchantAmazonAsinTaskGetHtmlResultInfo.md#items_count)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:206978

language code in a POST array

#### Implementation of

[`IMerchantAmazonAsinTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonAsinTaskGetHtmlResultInfo.md).[`language_code`](../interfaces/IMerchantAmazonAsinTaskGetHtmlResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:206976

location code in a POST array

#### Implementation of

[`IMerchantAmazonAsinTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonAsinTaskGetHtmlResultInfo.md).[`location_code`](../interfaces/IMerchantAmazonAsinTaskGetHtmlResultInfo.md#location_code)

***

### product\_id?

> `optional` **product\_id**: `string`

Defined in: main.ts:206970

ASIN received in a POST array

#### Implementation of

[`IMerchantAmazonAsinTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonAsinTaskGetHtmlResultInfo.md).[`product_id`](../interfaces/IMerchantAmazonAsinTaskGetHtmlResultInfo.md#product_id)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:206974

search engine domain in a POST array

#### Implementation of

[`IMerchantAmazonAsinTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonAsinTaskGetHtmlResultInfo.md).[`se_domain`](../interfaces/IMerchantAmazonAsinTaskGetHtmlResultInfo.md#se_domain)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:206972

type of element

#### Implementation of

[`IMerchantAmazonAsinTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonAsinTaskGetHtmlResultInfo.md).[`type`](../interfaces/IMerchantAmazonAsinTaskGetHtmlResultInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:207000

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:207028

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `MerchantAmazonAsinTaskGetHtmlResultInfo`

Defined in: main.ts:207021

#### Parameters

##### data

`any`

#### Returns

`MerchantAmazonAsinTaskGetHtmlResultInfo`
