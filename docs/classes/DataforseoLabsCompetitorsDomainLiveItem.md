[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsCompetitorsDomainLiveItem

# Class: DataforseoLabsCompetitorsDomainLiveItem

Defined in: main.ts:113492

## Implements

- [`IDataforseoLabsCompetitorsDomainLiveItem`](../interfaces/IDataforseoLabsCompetitorsDomainLiveItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new DataforseoLabsCompetitorsDomainLiveItem**(`data`?): `DataforseoLabsCompetitorsDomainLiveItem`

Defined in: main.ts:113521

#### Parameters

##### data?

[`IDataforseoLabsCompetitorsDomainLiveItem`](../interfaces/IDataforseoLabsCompetitorsDomainLiveItem.md)

#### Returns

`DataforseoLabsCompetitorsDomainLiveItem`

## Properties

### avg\_position?

> `optional` **avg\_position**: `number`

Defined in: main.ts:113500

average position of the domain in SERP
Note: average position is calculated for intersected keywords only;
the value for a given domain may differ when combined with different target websites

#### Implementation of

[`IDataforseoLabsCompetitorsDomainLiveItem`](../interfaces/IDataforseoLabsCompetitorsDomainLiveItem.md).[`avg_position`](../interfaces/IDataforseoLabsCompetitorsDomainLiveItem.md#avg_position)

***

### competitor\_metrics?

> `optional` **competitor\_metrics**: `object`

Defined in: main.ts:113517

metrics for intersecting keywords
ranking and traffic data relevant to the keywords that the provided domain shares with the target domain
note: in this array ranking and traffic data is provided for the returned competitor’s domain

#### Index Signature

\[`key`: `string`\]: [`DataforseoLabsMetricsInfo`](DataforseoLabsMetricsInfo.md)

#### Implementation of

[`IDataforseoLabsCompetitorsDomainLiveItem`](../interfaces/IDataforseoLabsCompetitorsDomainLiveItem.md).[`competitor_metrics`](../interfaces/IDataforseoLabsCompetitorsDomainLiveItem.md#competitor_metrics)

***

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:113496

domain name

#### Implementation of

[`IDataforseoLabsCompetitorsDomainLiveItem`](../interfaces/IDataforseoLabsCompetitorsDomainLiveItem.md).[`domain`](../interfaces/IDataforseoLabsCompetitorsDomainLiveItem.md#domain)

***

### full\_domain\_metrics?

> `optional` **full\_domain\_metrics**: `object`

Defined in: main.ts:113509

metrics for all keywords of the domain
full overview of ranking and traffic data relevant to all keywords that the provided domain is ranking for

#### Index Signature

\[`key`: `string`\]: [`DataforseoLabsMetricsInfo`](DataforseoLabsMetricsInfo.md)

#### Implementation of

[`IDataforseoLabsCompetitorsDomainLiveItem`](../interfaces/IDataforseoLabsCompetitorsDomainLiveItem.md).[`full_domain_metrics`](../interfaces/IDataforseoLabsCompetitorsDomainLiveItem.md#full_domain_metrics)

***

### intersections?

> `optional` **intersections**: `number`

Defined in: main.ts:113506

number of intersecting keywords

#### Implementation of

[`IDataforseoLabsCompetitorsDomainLiveItem`](../interfaces/IDataforseoLabsCompetitorsDomainLiveItem.md).[`intersections`](../interfaces/IDataforseoLabsCompetitorsDomainLiveItem.md#intersections)

***

### metrics?

> `optional` **metrics**: `object`

Defined in: main.ts:113513

metrics for intersecting keywords
ranking and traffic data relevant to the keywords that the provided domain shares with the target domain
note: in this array ranking and traffic data is provided for the target considering the keywords target shares in search with the competitor’s domain

#### Index Signature

\[`key`: `string`\]: [`DataforseoLabsMetricsInfo`](DataforseoLabsMetricsInfo.md)

#### Implementation of

[`IDataforseoLabsCompetitorsDomainLiveItem`](../interfaces/IDataforseoLabsCompetitorsDomainLiveItem.md).[`metrics`](../interfaces/IDataforseoLabsCompetitorsDomainLiveItem.md#metrics)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:113494

search engine type

#### Implementation of

[`IDataforseoLabsCompetitorsDomainLiveItem`](../interfaces/IDataforseoLabsCompetitorsDomainLiveItem.md).[`se_type`](../interfaces/IDataforseoLabsCompetitorsDomainLiveItem.md#se_type)

***

### sum\_position?

> `optional` **sum\_position**: `number`

Defined in: main.ts:113504

sum of all domain positions in SERP
Note: average position is calculated for intersected keywords only;
the value for a given domain may differ when combined with different target websites

#### Implementation of

[`IDataforseoLabsCompetitorsDomainLiveItem`](../interfaces/IDataforseoLabsCompetitorsDomainLiveItem.md).[`sum_position`](../interfaces/IDataforseoLabsCompetitorsDomainLiveItem.md#sum_position)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:113530

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:113572

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `DataforseoLabsCompetitorsDomainLiveItem`

Defined in: main.ts:113565

#### Parameters

##### data

`any`

#### Returns

`DataforseoLabsCompetitorsDomainLiveItem`
