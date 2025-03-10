[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordKpi

# Class: KeywordKpi

Defined in: main.ts:154619

## Implements

- [`IKeywordKpi`](../interfaces/IKeywordKpi.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KeywordKpi()

> **new KeywordKpi**(`data`?): [`KeywordKpi`](KeywordKpi.md)

Defined in: main.ts:154632

#### Parameters

##### data?

[`IKeywordKpi`](../interfaces/IKeywordKpi.md)

#### Returns

[`KeywordKpi`](KeywordKpi.md)

## Properties

### desktop?

> `optional` **desktop**: [`KeywordKpiInfo`](KeywordKpiInfo.md)[]

Defined in: main.ts:154622

keyword data aggregated for desktop devices
if there is no data, then the value is null

#### Implementation of

[`IKeywordKpi`](../interfaces/IKeywordKpi.md).[`desktop`](../interfaces/IKeywordKpi.md#desktop)

***

### mobile?

> `optional` **mobile**: [`KeywordKpiInfo`](KeywordKpiInfo.md)[]

Defined in: main.ts:154625

keyword data aggregated for mobile devices
if there is no data, then the value is null

#### Implementation of

[`IKeywordKpi`](../interfaces/IKeywordKpi.md).[`mobile`](../interfaces/IKeywordKpi.md#mobile)

***

### tablet?

> `optional` **tablet**: [`KeywordKpiInfo`](KeywordKpiInfo.md)[]

Defined in: main.ts:154628

keyword data aggregated for tablet devices
if there is no data, then the value is null

#### Implementation of

[`IKeywordKpi`](../interfaces/IKeywordKpi.md).[`tablet`](../interfaces/IKeywordKpi.md#tablet)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:154641

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:154672

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordKpi`](KeywordKpi.md)

Defined in: main.ts:154665

#### Parameters

##### data

`any`

#### Returns

[`KeywordKpi`](KeywordKpi.md)
