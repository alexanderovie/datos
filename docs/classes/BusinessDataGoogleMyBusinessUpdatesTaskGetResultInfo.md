[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo

# Class: BusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo

Defined in: main.ts:227586

## Implements

- [`IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new BusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo**(`data`?): `BusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo`

Defined in: main.ts:227631

#### Parameters

##### data?

[`IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md)

#### Returns

`BusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo`

## Properties

### business\_updates\_id?

> `optional` **business\_updates\_id**: `string`

Defined in: main.ts:227609

identifier of the business updates element in SERP

#### Implementation of

[`IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md).[`business_updates_id`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md#business_updates_id)

***

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:227602

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md).[`check_url`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md#check_url)

***

### cid?

> `optional` **cid**: `string`

Defined in: main.ts:227613

google-defined client id
unique id of a local establishment
learn more about the cid identifier in this help center article

#### Implementation of

[`IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md).[`cid`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md#cid)

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:227607

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md).[`datetime`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md#datetime)

***

### feature\_id?

> `optional` **feature\_id**: `string`

Defined in: main.ts:227616

the unique identifier of the element in SERP
learn more about the identifier in this help center article

#### Implementation of

[`IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md).[`feature_id`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md#feature_id)

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:227620

item types
types of search engine results encountered in the items array;
possible item types: google_business_post

#### Implementation of

[`IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md).[`item_types`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md#item_types)

***

### items?

> `optional` **items**: [`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md)[]

Defined in: main.ts:227627

encountered item types
types of search engine results encountered in the items array;
possible item types: google_business_post

#### Implementation of

[`IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md).[`items`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:227623

item types
the number of items in the items array

#### Implementation of

[`IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md).[`items_count`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md#items_count)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:227593

keyword received in a POST array
keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character)
this field will contain the cid parameter if you specified it in the keyword field when setting a task;
example:
cid:2946633002421908862
learn more about the parameter in this help center article

#### Implementation of

[`IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md).[`keyword`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:227599

language code in a POST array

#### Implementation of

[`IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md).[`language_code`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:227597

location code in a POST array

#### Implementation of

[`IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md).[`location_code`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md#location_code)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:227595

search engine domain as specified in a POST array

#### Implementation of

[`IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md).[`se_domain`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md#se_domain)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:227640

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:227676

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `BusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo`

Defined in: main.ts:227669

#### Parameters

##### data

`any`

#### Returns

`BusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo`
