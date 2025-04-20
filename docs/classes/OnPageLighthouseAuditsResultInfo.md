[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPageLighthouseAuditsResultInfo

# Class: OnPageLighthouseAuditsResultInfo

Defined in: main.ts:187122

## Implements

- [`IOnPageLighthouseAuditsResultInfo`](../interfaces/IOnPageLighthouseAuditsResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new OnPageLighthouseAuditsResultInfo**(`data?`): `OnPageLighthouseAuditsResultInfo`

Defined in: main.ts:187130

#### Parameters

##### data?

[`IOnPageLighthouseAuditsResultInfo`](../interfaces/IOnPageLighthouseAuditsResultInfo.md)

#### Returns

`OnPageLighthouseAuditsResultInfo`

## Properties

### audits?

> `optional` **audits**: `string`[]

Defined in: main.ts:187126

the list of available lighthouse audits
an array containing the titles of available audits
Note: the titles can change depending on if the audit passed or failed and may contain markdown code

#### Implementation of

[`IOnPageLighthouseAuditsResultInfo`](../interfaces/IOnPageLighthouseAuditsResultInfo.md).[`audits`](../interfaces/IOnPageLighthouseAuditsResultInfo.md#audits)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:187139

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:187160

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `OnPageLighthouseAuditsResultInfo`

Defined in: main.ts:187153

#### Parameters

##### data

`any`

#### Returns

`OnPageLighthouseAuditsResultInfo`
