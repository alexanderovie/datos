[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataBingAudienceEstimationLiveResultInfo

# Class: KeywordsDataBingAudienceEstimationLiveResultInfo

Defined in: main.ts:150725

## Implements

- [`IKeywordsDataBingAudienceEstimationLiveResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataBingAudienceEstimationLiveResultInfo()

> **new KeywordsDataBingAudienceEstimationLiveResultInfo**(`data`?): [`KeywordsDataBingAudienceEstimationLiveResultInfo`](KeywordsDataBingAudienceEstimationLiveResultInfo.md)

Defined in: main.ts:150756

#### Parameters

##### data?

[`IKeywordsDataBingAudienceEstimationLiveResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md)

#### Returns

[`KeywordsDataBingAudienceEstimationLiveResultInfo`](KeywordsDataBingAudienceEstimationLiveResultInfo.md)

## Properties

### currency?

> `optional` **currency**: `string`

Defined in: main.ts:150752

currency name
example: USDollar

#### Implementation of

[`IKeywordsDataBingAudienceEstimationLiveResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md).[`currency`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md#currency)

***

### est\_audience\_size?

> `optional` **est\_audience\_size**: [`EstInfo`](EstInfo.md)

Defined in: main.ts:150729

monthly estimated reach user count range

#### Implementation of

[`IKeywordsDataBingAudienceEstimationLiveResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md).[`est_audience_size`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md#est_audience_size)

***

### est\_clicks?

> `optional` **est\_clicks**: [`EstInfo`](EstInfo.md)

Defined in: main.ts:150731

monthly estimated click count range

#### Implementation of

[`IKeywordsDataBingAudienceEstimationLiveResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md).[`est_clicks`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md#est_clicks)

***

### est\_cost\_per\_event?

> `optional` **est\_cost\_per\_event**: [`EstCInfo`](EstCInfo.md)

Defined in: main.ts:150735

indicates the estimated cost per event with range result

#### Implementation of

[`IKeywordsDataBingAudienceEstimationLiveResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md).[`est_cost_per_event`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md#est_cost_per_event)

***

### est\_ctr?

> `optional` **est\_ctr**: [`EstCInfo`](EstCInfo.md)

Defined in: main.ts:150737

estimated click-through rate range

#### Implementation of

[`IKeywordsDataBingAudienceEstimationLiveResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md).[`est_ctr`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md#est_ctr)

***

### est\_impressions?

> `optional` **est\_impressions**: [`EstInfo`](EstInfo.md)

Defined in: main.ts:150727

monthly estimated impressions range

#### Implementation of

[`IKeywordsDataBingAudienceEstimationLiveResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md).[`est_impressions`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md#est_impressions)

***

### est\_reach\_audience\_size?

> `optional` **est\_reach\_audience\_size**: `number`

Defined in: main.ts:150747

monthly estimated user count

#### Implementation of

[`IKeywordsDataBingAudienceEstimationLiveResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md).[`est_reach_audience_size`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md#est_reach_audience_size)

***

### est\_reach\_impressions?

> `optional` **est\_reach\_impressions**: `number`

Defined in: main.ts:150749

monthly estimated impressions

#### Implementation of

[`IKeywordsDataBingAudienceEstimationLiveResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md).[`est_reach_impressions`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md#est_reach_impressions)

***

### est\_spend?

> `optional` **est\_spend**: [`EstInfo`](EstInfo.md)

Defined in: main.ts:150733

monthly estimated spending range

#### Implementation of

[`IKeywordsDataBingAudienceEstimationLiveResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md).[`est_spend`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md#est_spend)

***

### events\_lost\_to\_bid?

> `optional` **events\_lost\_to\_bid**: `number`

Defined in: main.ts:150743

indicates event lost count due to insufficient input bid

#### Implementation of

[`IKeywordsDataBingAudienceEstimationLiveResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md).[`events_lost_to_bid`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md#events_lost_to_bid)

***

### events\_lost\_to\_budget?

> `optional` **events\_lost\_to\_budget**: `number`

Defined in: main.ts:150745

indicates the event lost count due to insufficient input budget

#### Implementation of

[`IKeywordsDataBingAudienceEstimationLiveResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md).[`events_lost_to_budget`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md#events_lost_to_budget)

***

### suggested\_bid?

> `optional` **suggested\_bid**: `number`

Defined in: main.ts:150739

suggested bid value under the current targeting

#### Implementation of

[`IKeywordsDataBingAudienceEstimationLiveResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md).[`suggested_bid`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md#suggested_bid)

***

### suggested\_budget?

> `optional` **suggested\_budget**: `number`

Defined in: main.ts:150741

suggested daily budget value under the current targeting and bid

#### Implementation of

[`IKeywordsDataBingAudienceEstimationLiveResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md).[`suggested_budget`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md#suggested_budget)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:150765

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:150794

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataBingAudienceEstimationLiveResultInfo`](KeywordsDataBingAudienceEstimationLiveResultInfo.md)

Defined in: main.ts:150787

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataBingAudienceEstimationLiveResultInfo`](KeywordsDataBingAudienceEstimationLiveResultInfo.md)
