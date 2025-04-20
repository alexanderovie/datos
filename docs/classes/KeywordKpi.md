[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordKpi

# Class: KeywordKpi

Defined in: main.ts:157152

## Implements

- [`IKeywordKpi`](../interfaces/IKeywordKpi.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new KeywordKpi**(`data?`): `KeywordKpi`

Defined in: main.ts:157165

#### Parameters

##### data?

[`IKeywordKpi`](../interfaces/IKeywordKpi.md)

#### Returns

`KeywordKpi`

## Properties

### desktop?

> `optional` **desktop**: [`KeywordKpiInfo`](KeywordKpiInfo.md)[]

Defined in: main.ts:157155

keyword data aggregated for desktop devices
if there is no data, then the value is null

#### Implementation of

[`IKeywordKpi`](../interfaces/IKeywordKpi.md).[`desktop`](../interfaces/IKeywordKpi.md#desktop)

***

### mobile?

> `optional` **mobile**: [`KeywordKpiInfo`](KeywordKpiInfo.md)[]

Defined in: main.ts:157158

keyword data aggregated for mobile devices
if there is no data, then the value is null

#### Implementation of

[`IKeywordKpi`](../interfaces/IKeywordKpi.md).[`mobile`](../interfaces/IKeywordKpi.md#mobile)

***

### tablet?

> `optional` **tablet**: [`KeywordKpiInfo`](KeywordKpiInfo.md)[]

Defined in: main.ts:157161

keyword data aggregated for tablet devices
if there is no data, then the value is null

#### Implementation of

[`IKeywordKpi`](../interfaces/IKeywordKpi.md).[`tablet`](../interfaces/IKeywordKpi.md#tablet)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:157174

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:157205

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `KeywordKpi`

Defined in: main.ts:157198

#### Parameters

##### data

`any`

#### Returns

`KeywordKpi`
