[**Documentation**](../README.md)

***

[Documentation](../README.md) / LocalPackDataforseoLabsSerpElementItem

# Class: LocalPackDataforseoLabsSerpElementItem

Defined in: main.ts:118075

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`ILocalPackDataforseoLabsSerpElementItem`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new LocalPackDataforseoLabsSerpElementItem**(`data?`): `LocalPackDataforseoLabsSerpElementItem`

Defined in: main.ts:118122

#### Parameters

##### data?

[`ILocalPackDataforseoLabsSerpElementItem`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md)

#### Returns

`LocalPackDataforseoLabsSerpElementItem`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructor)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:22577

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

***

### clickstream\_etv?

> `optional` **clickstream\_etv**: `number`

Defined in: main.ts:118118

estimated traffic volume based on clickstream data
calculated as the product of click-through-rate and clickstream search volume values of all keywords the domain ranks for
to retrieve results for this field, the parameter include_clickstream_data must be set to true
learn more about how the metric is calculated in this help center article https://dataforseo.com/help-center/whats-clickstream-estimated-traffic-volume-and-how-is-it-calculated

#### Implementation of

[`ILocalPackDataforseoLabsSerpElementItem`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md).[`clickstream_etv`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md#clickstream_etv)

***

### description?

> `optional` **description**: `string`

Defined in: main.ts:118079

description of the results element in SERP

#### Implementation of

[`ILocalPackDataforseoLabsSerpElementItem`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md).[`description`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md#description)

***

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:118081

domain where a link points

#### Implementation of

[`ILocalPackDataforseoLabsSerpElementItem`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md).[`domain`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md#domain)

***

### estimated\_paid\_traffic\_cost?

> `optional` **estimated\_paid\_traffic\_cost**: `number`

Defined in: main.ts:118109

estimated cost of converting organic search traffic into paid
represents the estimated monthly cost of running ads for the returned keyword
the metric is calculated as the product of organic etv and paid cpc values and indicates the cost of driving the estimated volume of monthly organic traffic through PPC advertising in Google Search
learn more about how the metric is calculated in this help center article

#### Implementation of

[`ILocalPackDataforseoLabsSerpElementItem`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md).[`estimated_paid_traffic_cost`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md#estimated_paid_traffic_cost)

***

### etv?

> `optional` **etv**: `number`

Defined in: main.ts:118099

estimated traffic volume
estimated organic monthly traffic to the domain
calculated as the product of CTR (click-through-rate) and search volume values of the returned keyword
learn more about how the metric is calculated in this help center article

#### Implementation of

[`ILocalPackDataforseoLabsSerpElementItem`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md).[`etv`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md#etv)

***

### impressions\_etv?

> `optional` **impressions\_etv**: `number`

Defined in: main.ts:118104

estimated traffic volume based on impressions
estimated organic monthly traffic to the domain
calculated as the product of CTR (click-through-rate) and impressions values of the returned keyword
learn more about how the metric is calculated in this help center article

#### Implementation of

[`ILocalPackDataforseoLabsSerpElementItem`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md).[`impressions_etv`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md#impressions_etv)

***

### is\_paid?

> `optional` **is\_paid**: `boolean`

Defined in: main.ts:118087

indicates whether the element is an ad

#### Implementation of

[`ILocalPackDataforseoLabsSerpElementItem`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md).[`is_paid`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md#is_paid)

***

### main\_domain?

> `optional` **main\_domain**: `string`

Defined in: main.ts:118092

primary domain name in SERP

#### Implementation of

[`ILocalPackDataforseoLabsSerpElementItem`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md).[`main_domain`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md#main_domain)

***

### phone?

> `optional` **phone**: `string`

Defined in: main.ts:118083

phone number

#### Implementation of

[`ILocalPackDataforseoLabsSerpElementItem`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md).[`phone`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md#phone)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:22573

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`ILocalPackDataforseoLabsSerpElementItem`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md).[`position`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md#position)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`position`](BaseDataforseoLabsSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:22569

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`ILocalPackDataforseoLabsSerpElementItem`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_absolute`](BaseDataforseoLabsSerpElementItem.md#rank_absolute)

***

### rank\_changes?

> `optional` **rank\_changes**: [`RankChanges`](RankChanges.md)

Defined in: main.ts:118113

changes in rankings
ranking changes of the SERP element compared to the preceding month;
Note: the changes are calculated even if the preceding month is not included in a POST request

#### Implementation of

[`ILocalPackDataforseoLabsSerpElementItem`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md).[`rank_changes`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md#rank_changes)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:22566

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`ILocalPackDataforseoLabsSerpElementItem`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md#rank_group)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_group`](BaseDataforseoLabsSerpElementItem.md#rank_group)

***

### rating?

> `optional` **rating**: [`RatingInfo`](RatingInfo.md)

Defined in: main.ts:118090

the item’s rating 
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[`ILocalPackDataforseoLabsSerpElementItem`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md).[`rating`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md#rating)

***

### relative\_url?

> `optional` **relative\_url**: `string`

Defined in: main.ts:118094

URL in SERP that does not specify the HTTPs protocol and domain name

#### Implementation of

[`ILocalPackDataforseoLabsSerpElementItem`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md).[`relative_url`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md#relative_url)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:118077

title of the result in SERP

#### Implementation of

[`ILocalPackDataforseoLabsSerpElementItem`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md).[`title`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:22563

type of element

#### Implementation of

[`ILocalPackDataforseoLabsSerpElementItem`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md).[`type`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md#type)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`type`](BaseDataforseoLabsSerpElementItem.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:118085

relevant URL

#### Implementation of

[`ILocalPackDataforseoLabsSerpElementItem`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md).[`url`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md#url)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:22575

the XPath of the element

#### Implementation of

[`ILocalPackDataforseoLabsSerpElementItem`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md#xpath)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`xpath`](BaseDataforseoLabsSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:118127

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`init`](BaseDataforseoLabsSerpElementItem.md#init)

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:118158

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`toJSON`](BaseDataforseoLabsSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `LocalPackDataforseoLabsSerpElementItem`

Defined in: main.ts:118151

#### Parameters

##### data

`any`

#### Returns

`LocalPackDataforseoLabsSerpElementItem`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)
