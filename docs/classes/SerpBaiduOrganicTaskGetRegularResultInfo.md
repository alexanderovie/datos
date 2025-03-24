[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpBaiduOrganicTaskGetRegularResultInfo

# Class: SerpBaiduOrganicTaskGetRegularResultInfo

Defined in: main.ts:82614

## Implements

- [`ISerpBaiduOrganicTaskGetRegularResultInfo`](../interfaces/ISerpBaiduOrganicTaskGetRegularResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SerpBaiduOrganicTaskGetRegularResultInfo**(`data`?): `SerpBaiduOrganicTaskGetRegularResultInfo`

Defined in: main.ts:82654

#### Parameters

##### data?

[`ISerpBaiduOrganicTaskGetRegularResultInfo`](../interfaces/ISerpBaiduOrganicTaskGetRegularResultInfo.md)

#### Returns

`SerpBaiduOrganicTaskGetRegularResultInfo`

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:82628

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`ISerpBaiduOrganicTaskGetRegularResultInfo`](../interfaces/ISerpBaiduOrganicTaskGetRegularResultInfo.md).[`check_url`](../interfaces/ISerpBaiduOrganicTaskGetRegularResultInfo.md#check_url)

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:82633

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpBaiduOrganicTaskGetRegularResultInfo`](../interfaces/ISerpBaiduOrganicTaskGetRegularResultInfo.md).[`datetime`](../interfaces/ISerpBaiduOrganicTaskGetRegularResultInfo.md#datetime)

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:82644

types of search results found in SERP
contains types of all search results (items) found in the returned SERP
possible item types:
organic, paid

#### Implementation of

[`ISerpBaiduOrganicTaskGetRegularResultInfo`](../interfaces/ISerpBaiduOrganicTaskGetRegularResultInfo.md).[`item_types`](../interfaces/ISerpBaiduOrganicTaskGetRegularResultInfo.md#item_types)

***

### items?

> `optional` **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

Defined in: main.ts:82650

items in SERP

#### Implementation of

[`ISerpBaiduOrganicTaskGetRegularResultInfo`](../interfaces/ISerpBaiduOrganicTaskGetRegularResultInfo.md).[`items`](../interfaces/ISerpBaiduOrganicTaskGetRegularResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:82648

the number of results returned in the items array

#### Implementation of

[`ISerpBaiduOrganicTaskGetRegularResultInfo`](../interfaces/ISerpBaiduOrganicTaskGetRegularResultInfo.md).[`items_count`](../interfaces/ISerpBaiduOrganicTaskGetRegularResultInfo.md#items_count)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:82617

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpBaiduOrganicTaskGetRegularResultInfo`](../interfaces/ISerpBaiduOrganicTaskGetRegularResultInfo.md).[`keyword`](../interfaces/ISerpBaiduOrganicTaskGetRegularResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:82625

language code in a POST array

#### Implementation of

[`ISerpBaiduOrganicTaskGetRegularResultInfo`](../interfaces/ISerpBaiduOrganicTaskGetRegularResultInfo.md).[`language_code`](../interfaces/ISerpBaiduOrganicTaskGetRegularResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:82623

location code in a POST array

#### Implementation of

[`ISerpBaiduOrganicTaskGetRegularResultInfo`](../interfaces/ISerpBaiduOrganicTaskGetRegularResultInfo.md).[`location_code`](../interfaces/ISerpBaiduOrganicTaskGetRegularResultInfo.md#location_code)

***

### refinement\_chips?

> `optional` **refinement\_chips**: [`RefinementChipsInfo`](RefinementChipsInfo.md)

Defined in: main.ts:82639

search refinement chips
equals null

#### Implementation of

[`ISerpBaiduOrganicTaskGetRegularResultInfo`](../interfaces/ISerpBaiduOrganicTaskGetRegularResultInfo.md).[`refinement_chips`](../interfaces/ISerpBaiduOrganicTaskGetRegularResultInfo.md#refinement_chips)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:82621

search engine domain in a POST array

#### Implementation of

[`ISerpBaiduOrganicTaskGetRegularResultInfo`](../interfaces/ISerpBaiduOrganicTaskGetRegularResultInfo.md).[`se_domain`](../interfaces/ISerpBaiduOrganicTaskGetRegularResultInfo.md#se_domain)

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

Defined in: main.ts:82646

total number of results in SERP

#### Implementation of

[`ISerpBaiduOrganicTaskGetRegularResultInfo`](../interfaces/ISerpBaiduOrganicTaskGetRegularResultInfo.md).[`se_results_count`](../interfaces/ISerpBaiduOrganicTaskGetRegularResultInfo.md#se_results_count)

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

Defined in: main.ts:82636

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpBaiduOrganicTaskGetRegularResultInfo`](../interfaces/ISerpBaiduOrganicTaskGetRegularResultInfo.md).[`spell`](../interfaces/ISerpBaiduOrganicTaskGetRegularResultInfo.md#spell)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:82619

type of element

#### Implementation of

[`ISerpBaiduOrganicTaskGetRegularResultInfo`](../interfaces/ISerpBaiduOrganicTaskGetRegularResultInfo.md).[`type`](../interfaces/ISerpBaiduOrganicTaskGetRegularResultInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:82663

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:82700

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `SerpBaiduOrganicTaskGetRegularResultInfo`

Defined in: main.ts:82693

#### Parameters

##### data

`any`

#### Returns

`SerpBaiduOrganicTaskGetRegularResultInfo`
