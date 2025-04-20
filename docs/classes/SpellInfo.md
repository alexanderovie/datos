[**Documentation**](../README.md)

***

[Documentation](../README.md) / SpellInfo

# Class: SpellInfo

Defined in: main.ts:25530

## Implements

- [`ISpellInfo`](../interfaces/ISpellInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SpellInfo**(`data?`): `SpellInfo`

Defined in: main.ts:25543

#### Parameters

##### data?

[`ISpellInfo`](../interfaces/ISpellInfo.md)

#### Returns

`SpellInfo`

## Properties

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:25533

keyword obtained as a result of search engine autocorrection
the results will be provided for the corrected keyword

#### Implementation of

[`ISpellInfo`](../interfaces/ISpellInfo.md).[`keyword`](../interfaces/ISpellInfo.md#keyword)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:25539

type of autocorrection
possible values:
did_you_mean, showing_results_for, no_results_found_for, including_results_for
note: Yahoo and Yandex support only the following autocorrection type:
including_results_for

#### Implementation of

[`ISpellInfo`](../interfaces/ISpellInfo.md).[`type`](../interfaces/ISpellInfo.md#type)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:25552

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:25570

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `SpellInfo`

Defined in: main.ts:25563

#### Parameters

##### data

`any`

#### Returns

`SpellInfo`
