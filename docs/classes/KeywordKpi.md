[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordKpi

# Class: KeywordKpi

Defined in: main.ts:157028

## Implements

- [`IKeywordKpi`](../interfaces/IKeywordKpi.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new KeywordKpi**(`data`?): `KeywordKpi`

Defined in: main.ts:157041

#### Parameters

##### data?

[`IKeywordKpi`](../interfaces/IKeywordKpi.md)

#### Returns

`KeywordKpi`

## Properties

### desktop?

> `optional` **desktop**: [`KeywordKpiInfo`](KeywordKpiInfo.md)[]

Defined in: main.ts:157031

keyword data aggregated for desktop devices
if there is no data, then the value is null

#### Implementation of

[`IKeywordKpi`](../interfaces/IKeywordKpi.md).[`desktop`](../interfaces/IKeywordKpi.md#desktop)

***

### mobile?

> `optional` **mobile**: [`KeywordKpiInfo`](KeywordKpiInfo.md)[]

Defined in: main.ts:157034

keyword data aggregated for mobile devices
if there is no data, then the value is null

#### Implementation of

[`IKeywordKpi`](../interfaces/IKeywordKpi.md).[`mobile`](../interfaces/IKeywordKpi.md#mobile)

***

### tablet?

> `optional` **tablet**: [`KeywordKpiInfo`](KeywordKpiInfo.md)[]

Defined in: main.ts:157037

keyword data aggregated for tablet devices
if there is no data, then the value is null

#### Implementation of

[`IKeywordKpi`](../interfaces/IKeywordKpi.md).[`tablet`](../interfaces/IKeywordKpi.md#tablet)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:157050

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:157081

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `KeywordKpi`

Defined in: main.ts:157074

#### Parameters

##### data

`any`

#### Returns

`KeywordKpi`
