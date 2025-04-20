[**Documentation**](../README.md)

***

[Documentation](../README.md) / ContentAnalysisSentimentAnalysisLiveResultInfo

# Class: ContentAnalysisSentimentAnalysisLiveResultInfo

Defined in: main.ts:191408

## Implements

- [`IContentAnalysisSentimentAnalysisLiveResultInfo`](../interfaces/IContentAnalysisSentimentAnalysisLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new ContentAnalysisSentimentAnalysisLiveResultInfo**(`data?`): `ContentAnalysisSentimentAnalysisLiveResultInfo`

Defined in: main.ts:191422

#### Parameters

##### data?

[`IContentAnalysisSentimentAnalysisLiveResultInfo`](../interfaces/IContentAnalysisSentimentAnalysisLiveResultInfo.md)

#### Returns

`ContentAnalysisSentimentAnalysisLiveResultInfo`

## Properties

### positive\_connotation\_distribution?

> `optional` **positive\_connotation\_distribution**: [`PositiveConnotationDistribution`](PositiveConnotationDistribution.md)

Defined in: main.ts:191414

citation distribution by sentiment connotation types
contains objects with citation counts and relevant data distributed by types of sentiments (sentiment polarity);
possible sentiment connotation types: positive, negative, neutral

#### Implementation of

[`IContentAnalysisSentimentAnalysisLiveResultInfo`](../interfaces/IContentAnalysisSentimentAnalysisLiveResultInfo.md).[`positive_connotation_distribution`](../interfaces/IContentAnalysisSentimentAnalysisLiveResultInfo.md#positive_connotation_distribution)

***

### sentiment\_connotation\_distribution?

> `optional` **sentiment\_connotation\_distribution**: [`SentimentConnotationDistribution`](SentimentConnotationDistribution.md)

Defined in: main.ts:191418

citation distribution by sentiment connotations
contains objects with citation counts and relevant data distributed by sentiments (emotional reactions);
possible sentiment connotation types: anger, happiness, love, sadness, share, fun

#### Implementation of

[`IContentAnalysisSentimentAnalysisLiveResultInfo`](../interfaces/IContentAnalysisSentimentAnalysisLiveResultInfo.md).[`sentiment_connotation_distribution`](../interfaces/IContentAnalysisSentimentAnalysisLiveResultInfo.md#sentiment_connotation_distribution)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:191410

type of element

#### Implementation of

[`IContentAnalysisSentimentAnalysisLiveResultInfo`](../interfaces/IContentAnalysisSentimentAnalysisLiveResultInfo.md).[`type`](../interfaces/IContentAnalysisSentimentAnalysisLiveResultInfo.md#type)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:191431

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:191450

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `ContentAnalysisSentimentAnalysisLiveResultInfo`

Defined in: main.ts:191443

#### Parameters

##### data

`any`

#### Returns

`ContentAnalysisSentimentAnalysisLiveResultInfo`
