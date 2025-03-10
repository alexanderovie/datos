[**Documentation**](../README.md)

***

[Documentation](../README.md) / DatasetDescription

# Class: DatasetDescription

Defined in: main.ts:60209

## Implements

- [`IDatasetDescription`](../interfaces/IDatasetDescription.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DatasetDescription()

> **new DatasetDescription**(`data`?): [`DatasetDescription`](DatasetDescription.md)

Defined in: main.ts:60217

#### Parameters

##### data?

[`IDatasetDescription`](../interfaces/IDatasetDescription.md)

#### Returns

[`DatasetDescription`](DatasetDescription.md)

## Properties

### links?

> `optional` **links**: [`LinkElement`](LinkElement.md)[]

Defined in: main.ts:60213

links featured in the ‘dataset_description’

#### Implementation of

[`IDatasetDescription`](../interfaces/IDatasetDescription.md).[`links`](../interfaces/IDatasetDescription.md#links)

***

### text?

> `optional` **text**: `string`

Defined in: main.ts:60211

text of the description

#### Implementation of

[`IDatasetDescription`](../interfaces/IDatasetDescription.md).[`text`](../interfaces/IDatasetDescription.md#text)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:60226

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:60248

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DatasetDescription`](DatasetDescription.md)

Defined in: main.ts:60241

#### Parameters

##### data

`any`

#### Returns

[`DatasetDescription`](DatasetDescription.md)
