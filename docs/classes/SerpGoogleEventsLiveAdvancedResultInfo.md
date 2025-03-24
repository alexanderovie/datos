[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleEventsLiveAdvancedResultInfo

# Class: SerpGoogleEventsLiveAdvancedResultInfo

Defined in: main.ts:52443

## Implements

- [`ISerpGoogleEventsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleEventsLiveAdvancedResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SerpGoogleEventsLiveAdvancedResultInfo**(`data`?): `SerpGoogleEventsLiveAdvancedResultInfo`

Defined in: main.ts:52483

#### Parameters

##### data?

[`ISerpGoogleEventsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleEventsLiveAdvancedResultInfo.md)

#### Returns

`SerpGoogleEventsLiveAdvancedResultInfo`

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:52457

direct URL to search engine results

#### Implementation of

[`ISerpGoogleEventsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleEventsLiveAdvancedResultInfo.md).[`check_url`](../interfaces/ISerpGoogleEventsLiveAdvancedResultInfo.md#check_url)

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:52462

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpGoogleEventsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleEventsLiveAdvancedResultInfo.md).[`datetime`](../interfaces/ISerpGoogleEventsLiveAdvancedResultInfo.md#datetime)

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:52471

types of search results found in SERP
possible item types:
event_item

#### Implementation of

[`ISerpGoogleEventsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleEventsLiveAdvancedResultInfo.md).[`item_types`](../interfaces/ISerpGoogleEventsLiveAdvancedResultInfo.md#item_types)

***

### items?

> `optional` **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

Defined in: main.ts:52479

items of the element

#### Implementation of

[`ISerpGoogleEventsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleEventsLiveAdvancedResultInfo.md).[`items`](../interfaces/ISerpGoogleEventsLiveAdvancedResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:52477

the number of results returned in the items array

#### Implementation of

[`ISerpGoogleEventsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleEventsLiveAdvancedResultInfo.md).[`items_count`](../interfaces/ISerpGoogleEventsLiveAdvancedResultInfo.md#items_count)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:52446

keyword received in a POST array
keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpGoogleEventsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleEventsLiveAdvancedResultInfo.md).[`keyword`](../interfaces/ISerpGoogleEventsLiveAdvancedResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:52455

language code
in this case, the value will be null

#### Implementation of

[`ISerpGoogleEventsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleEventsLiveAdvancedResultInfo.md).[`language_code`](../interfaces/ISerpGoogleEventsLiveAdvancedResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:52452

location code in a POST array

#### Implementation of

[`ISerpGoogleEventsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleEventsLiveAdvancedResultInfo.md).[`location_code`](../interfaces/ISerpGoogleEventsLiveAdvancedResultInfo.md#location_code)

***

### refinement\_chips?

> `optional` **refinement\_chips**: [`RefinementChipsInfo`](RefinementChipsInfo.md)

Defined in: main.ts:52467

search refinement chips

#### Implementation of

[`ISerpGoogleEventsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleEventsLiveAdvancedResultInfo.md).[`refinement_chips`](../interfaces/ISerpGoogleEventsLiveAdvancedResultInfo.md#refinement_chips)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:52450

search engine domain in a POST array

#### Implementation of

[`ISerpGoogleEventsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleEventsLiveAdvancedResultInfo.md).[`se_domain`](../interfaces/ISerpGoogleEventsLiveAdvancedResultInfo.md#se_domain)

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

Defined in: main.ts:52475

total number of results in SERP
in this case, the value will be 0
this search engine does not indicate the total number of results

#### Implementation of

[`ISerpGoogleEventsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleEventsLiveAdvancedResultInfo.md).[`se_results_count`](../interfaces/ISerpGoogleEventsLiveAdvancedResultInfo.md#se_results_count)

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

Defined in: main.ts:52465

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpGoogleEventsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleEventsLiveAdvancedResultInfo.md).[`spell`](../interfaces/ISerpGoogleEventsLiveAdvancedResultInfo.md#spell)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:52448

type of element

#### Implementation of

[`ISerpGoogleEventsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleEventsLiveAdvancedResultInfo.md).[`type`](../interfaces/ISerpGoogleEventsLiveAdvancedResultInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:52492

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:52529

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `SerpGoogleEventsLiveAdvancedResultInfo`

Defined in: main.ts:52522

#### Parameters

##### data

`any`

#### Returns

`SerpGoogleEventsLiveAdvancedResultInfo`
