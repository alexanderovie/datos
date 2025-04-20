[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataGoogleReviewsTaskGetResultInfo

# Class: BusinessDataGoogleReviewsTaskGetResultInfo

Defined in: main.ts:234650

## Implements

- [`IBusinessDataGoogleReviewsTaskGetResultInfo`](../interfaces/IBusinessDataGoogleReviewsTaskGetResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new BusinessDataGoogleReviewsTaskGetResultInfo**(`data?`): `BusinessDataGoogleReviewsTaskGetResultInfo`

Defined in: main.ts:234700

#### Parameters

##### data?

[`IBusinessDataGoogleReviewsTaskGetResultInfo`](../interfaces/IBusinessDataGoogleReviewsTaskGetResultInfo.md)

#### Returns

`BusinessDataGoogleReviewsTaskGetResultInfo`

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:234664

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`IBusinessDataGoogleReviewsTaskGetResultInfo`](../interfaces/IBusinessDataGoogleReviewsTaskGetResultInfo.md).[`check_url`](../interfaces/IBusinessDataGoogleReviewsTaskGetResultInfo.md#check_url)

***

### cid?

> `optional` **cid**: `string`

Defined in: main.ts:234688

google-defined client id
unique id of a local establishment
learn more about the identifier in this help center article

#### Implementation of

[`IBusinessDataGoogleReviewsTaskGetResultInfo`](../interfaces/IBusinessDataGoogleReviewsTaskGetResultInfo.md).[`cid`](../interfaces/IBusinessDataGoogleReviewsTaskGetResultInfo.md#cid)

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:234669

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IBusinessDataGoogleReviewsTaskGetResultInfo`](../interfaces/IBusinessDataGoogleReviewsTaskGetResultInfo.md).[`datetime`](../interfaces/IBusinessDataGoogleReviewsTaskGetResultInfo.md#datetime)

***

### feature\_id?

> `optional` **feature\_id**: `string`

Defined in: main.ts:234681

the unique identifier of the ‘reviews’ element in SERP
learn more about the identifier in this help center article

#### Implementation of

[`IBusinessDataGoogleReviewsTaskGetResultInfo`](../interfaces/IBusinessDataGoogleReviewsTaskGetResultInfo.md).[`feature_id`](../interfaces/IBusinessDataGoogleReviewsTaskGetResultInfo.md#feature_id)

***

### items?

> `optional` **items**: [`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md)[]

Defined in: main.ts:234696

found reviews
you can get more results by using the depth parameter when setting a task

#### Implementation of

[`IBusinessDataGoogleReviewsTaskGetResultInfo`](../interfaces/IBusinessDataGoogleReviewsTaskGetResultInfo.md).[`items`](../interfaces/IBusinessDataGoogleReviewsTaskGetResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:234693

the number of reviews items in the results array
you can get more results by using the depth parameter when setting a task

#### Implementation of

[`IBusinessDataGoogleReviewsTaskGetResultInfo`](../interfaces/IBusinessDataGoogleReviewsTaskGetResultInfo.md).[`items_count`](../interfaces/IBusinessDataGoogleReviewsTaskGetResultInfo.md#items_count)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:234653

keyword received in a POST array
keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character)

#### Implementation of

[`IBusinessDataGoogleReviewsTaskGetResultInfo`](../interfaces/IBusinessDataGoogleReviewsTaskGetResultInfo.md).[`keyword`](../interfaces/IBusinessDataGoogleReviewsTaskGetResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:234661

language code in a POST array

#### Implementation of

[`IBusinessDataGoogleReviewsTaskGetResultInfo`](../interfaces/IBusinessDataGoogleReviewsTaskGetResultInfo.md).[`language_code`](../interfaces/IBusinessDataGoogleReviewsTaskGetResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:234659

location code in a POST array

#### Implementation of

[`IBusinessDataGoogleReviewsTaskGetResultInfo`](../interfaces/IBusinessDataGoogleReviewsTaskGetResultInfo.md).[`location_code`](../interfaces/IBusinessDataGoogleReviewsTaskGetResultInfo.md#location_code)

***

### place\_id?

> `optional` **place\_id**: `string`

Defined in: main.ts:234684

unique identifier of a business location assigned by Google
learn more about the identifier in this help center article

#### Implementation of

[`IBusinessDataGoogleReviewsTaskGetResultInfo`](../interfaces/IBusinessDataGoogleReviewsTaskGetResultInfo.md).[`place_id`](../interfaces/IBusinessDataGoogleReviewsTaskGetResultInfo.md#place_id)

***

### rating?

> `optional` **rating**: [`RatingInfo`](RatingInfo.md)

Defined in: main.ts:234678

rating of the corresponding local establishment
popularity rate based on reviews and displayed in SERP

#### Implementation of

[`IBusinessDataGoogleReviewsTaskGetResultInfo`](../interfaces/IBusinessDataGoogleReviewsTaskGetResultInfo.md).[`rating`](../interfaces/IBusinessDataGoogleReviewsTaskGetResultInfo.md#rating)

***

### reviews\_count?

> `optional` **reviews\_count**: `number`

Defined in: main.ts:234690

the total number of reviews

#### Implementation of

[`IBusinessDataGoogleReviewsTaskGetResultInfo`](../interfaces/IBusinessDataGoogleReviewsTaskGetResultInfo.md).[`reviews_count`](../interfaces/IBusinessDataGoogleReviewsTaskGetResultInfo.md#reviews_count)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:234657

search engine domain in a POST array

#### Implementation of

[`IBusinessDataGoogleReviewsTaskGetResultInfo`](../interfaces/IBusinessDataGoogleReviewsTaskGetResultInfo.md).[`se_domain`](../interfaces/IBusinessDataGoogleReviewsTaskGetResultInfo.md#se_domain)

***

### sub\_title?

> `optional` **sub\_title**: `string`

Defined in: main.ts:234675

subtitle of the ‘reviews’ element in SERP
additional information (e.g., address) on the ‘reviews’ element for which the reviews are collected

#### Implementation of

[`IBusinessDataGoogleReviewsTaskGetResultInfo`](../interfaces/IBusinessDataGoogleReviewsTaskGetResultInfo.md).[`sub_title`](../interfaces/IBusinessDataGoogleReviewsTaskGetResultInfo.md#sub_title)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:234672

title of the ‘reviews’ element in SERP
the name of the local establishment for which the reviews are collected

#### Implementation of

[`IBusinessDataGoogleReviewsTaskGetResultInfo`](../interfaces/IBusinessDataGoogleReviewsTaskGetResultInfo.md).[`title`](../interfaces/IBusinessDataGoogleReviewsTaskGetResultInfo.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:234655

type of element

#### Implementation of

[`IBusinessDataGoogleReviewsTaskGetResultInfo`](../interfaces/IBusinessDataGoogleReviewsTaskGetResultInfo.md).[`type`](../interfaces/IBusinessDataGoogleReviewsTaskGetResultInfo.md#type)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:234709

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:234745

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `BusinessDataGoogleReviewsTaskGetResultInfo`

Defined in: main.ts:234738

#### Parameters

##### data

`any`

#### Returns

`BusinessDataGoogleReviewsTaskGetResultInfo`
