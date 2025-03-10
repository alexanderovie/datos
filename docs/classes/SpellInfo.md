[**Documentation**](../README.md)

***

[Documentation](../README.md) / SpellInfo

# Class: SpellInfo

Defined in: main.ts:25183

## Implements

- [`ISpellInfo`](../interfaces/ISpellInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SpellInfo()

> **new SpellInfo**(`data`?): [`SpellInfo`](SpellInfo.md)

Defined in: main.ts:25196

#### Parameters

##### data?

[`ISpellInfo`](../interfaces/ISpellInfo.md)

#### Returns

[`SpellInfo`](SpellInfo.md)

## Properties

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:25186

keyword obtained as a result of search engine autocorrection
the results will be provided for the corrected keyword

#### Implementation of

[`ISpellInfo`](../interfaces/ISpellInfo.md).[`keyword`](../interfaces/ISpellInfo.md#keyword)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:25192

type of autocorrection
possible values:
did_you_mean, showing_results_for, no_results_found_for, including_results_for
note: Yahoo and Yandex support only the following autocorrection type:
including_results_for

#### Implementation of

[`ISpellInfo`](../interfaces/ISpellInfo.md).[`type`](../interfaces/ISpellInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:25205

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:25223

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SpellInfo`](SpellInfo.md)

Defined in: main.ts:25216

#### Parameters

##### data

`any`

#### Returns

[`SpellInfo`](SpellInfo.md)
