[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataBingAudienceEstimationLiveResultInfo

# Class: KeywordsDataBingAudienceEstimationLiveResultInfo

Defined in: main.ts:153134

## Implements

- [`IKeywordsDataBingAudienceEstimationLiveResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new KeywordsDataBingAudienceEstimationLiveResultInfo**(`data`?): `KeywordsDataBingAudienceEstimationLiveResultInfo`

Defined in: main.ts:153165

#### Parameters

##### data?

[`IKeywordsDataBingAudienceEstimationLiveResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md)

#### Returns

`KeywordsDataBingAudienceEstimationLiveResultInfo`

## Properties

### currency?

> `optional` **currency**: `string`

Defined in: main.ts:153161

currency name
example: USDollar

#### Implementation of

[`IKeywordsDataBingAudienceEstimationLiveResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md).[`currency`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md#currency)

***

### est\_audience\_size?

> `optional` **est\_audience\_size**: [`EstInfo`](EstInfo.md)

Defined in: main.ts:153138

monthly estimated reach user count range

#### Implementation of

[`IKeywordsDataBingAudienceEstimationLiveResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md).[`est_audience_size`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md#est_audience_size)

***

### est\_clicks?

> `optional` **est\_clicks**: [`EstInfo`](EstInfo.md)

Defined in: main.ts:153140

monthly estimated click count range

#### Implementation of

[`IKeywordsDataBingAudienceEstimationLiveResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md).[`est_clicks`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md#est_clicks)

***

### est\_cost\_per\_event?

> `optional` **est\_cost\_per\_event**: [`EstCInfo`](EstCInfo.md)

Defined in: main.ts:153144

indicates the estimated cost per event with range result

#### Implementation of

[`IKeywordsDataBingAudienceEstimationLiveResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md).[`est_cost_per_event`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md#est_cost_per_event)

***

### est\_ctr?

> `optional` **est\_ctr**: [`EstCInfo`](EstCInfo.md)

Defined in: main.ts:153146

estimated click-through rate range

#### Implementation of

[`IKeywordsDataBingAudienceEstimationLiveResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md).[`est_ctr`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md#est_ctr)

***

### est\_impressions?

> `optional` **est\_impressions**: [`EstInfo`](EstInfo.md)

Defined in: main.ts:153136

monthly estimated impressions range

#### Implementation of

[`IKeywordsDataBingAudienceEstimationLiveResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md).[`est_impressions`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md#est_impressions)

***

### est\_reach\_audience\_size?

> `optional` **est\_reach\_audience\_size**: `number`

Defined in: main.ts:153156

monthly estimated user count

#### Implementation of

[`IKeywordsDataBingAudienceEstimationLiveResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md).[`est_reach_audience_size`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md#est_reach_audience_size)

***

### est\_reach\_impressions?

> `optional` **est\_reach\_impressions**: `number`

Defined in: main.ts:153158

monthly estimated impressions

#### Implementation of

[`IKeywordsDataBingAudienceEstimationLiveResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md).[`est_reach_impressions`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md#est_reach_impressions)

***

### est\_spend?

> `optional` **est\_spend**: [`EstInfo`](EstInfo.md)

Defined in: main.ts:153142

monthly estimated spending range

#### Implementation of

[`IKeywordsDataBingAudienceEstimationLiveResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md).[`est_spend`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md#est_spend)

***

### events\_lost\_to\_bid?

> `optional` **events\_lost\_to\_bid**: `number`

Defined in: main.ts:153152

indicates event lost count due to insufficient input bid

#### Implementation of

[`IKeywordsDataBingAudienceEstimationLiveResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md).[`events_lost_to_bid`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md#events_lost_to_bid)

***

### events\_lost\_to\_budget?

> `optional` **events\_lost\_to\_budget**: `number`

Defined in: main.ts:153154

indicates the event lost count due to insufficient input budget

#### Implementation of

[`IKeywordsDataBingAudienceEstimationLiveResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md).[`events_lost_to_budget`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md#events_lost_to_budget)

***

### suggested\_bid?

> `optional` **suggested\_bid**: `number`

Defined in: main.ts:153148

suggested bid value under the current targeting

#### Implementation of

[`IKeywordsDataBingAudienceEstimationLiveResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md).[`suggested_bid`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md#suggested_bid)

***

### suggested\_budget?

> `optional` **suggested\_budget**: `number`

Defined in: main.ts:153150

suggested daily budget value under the current targeting and bid

#### Implementation of

[`IKeywordsDataBingAudienceEstimationLiveResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md).[`suggested_budget`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md#suggested_budget)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:153174

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:153203

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `KeywordsDataBingAudienceEstimationLiveResultInfo`

Defined in: main.ts:153196

#### Parameters

##### data

`any`

#### Returns

`KeywordsDataBingAudienceEstimationLiveResultInfo`
