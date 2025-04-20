[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordIntentInfo

# Class: KeywordIntentInfo

Defined in: main.ts:107312

## Implements

- [`IKeywordIntentInfo`](../interfaces/IKeywordIntentInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new KeywordIntentInfo**(`data?`): `KeywordIntentInfo`

Defined in: main.ts:107322

#### Parameters

##### data?

[`IKeywordIntentInfo`](../interfaces/IKeywordIntentInfo.md)

#### Returns

`KeywordIntentInfo`

## Properties

### label?

> `optional` **label**: `string`

Defined in: main.ts:107315

search intent name
possible values: informational, navigational, commercial, transactional

#### Implementation of

[`IKeywordIntentInfo`](../interfaces/IKeywordIntentInfo.md).[`label`](../interfaces/IKeywordIntentInfo.md#label)

***

### probability?

> `optional` **probability**: `number`

Defined in: main.ts:107318

search intent probability
1 indicates the highest probability

#### Implementation of

[`IKeywordIntentInfo`](../interfaces/IKeywordIntentInfo.md).[`probability`](../interfaces/IKeywordIntentInfo.md#probability)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:107331

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:107349

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `KeywordIntentInfo`

Defined in: main.ts:107342

#### Parameters

##### data

`any`

#### Returns

`KeywordIntentInfo`
