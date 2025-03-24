[**Documentation**](../README.md)

***

[Documentation](../README.md) / ContentGenerationCheckGrammarLiveItem

# Class: ContentGenerationCheckGrammarLiveItem

Defined in: main.ts:194434

## Implements

- [`IContentGenerationCheckGrammarLiveItem`](../interfaces/IContentGenerationCheckGrammarLiveItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new ContentGenerationCheckGrammarLiveItem**(`data`?): `ContentGenerationCheckGrammarLiveItem`

Defined in: main.ts:194461

#### Parameters

##### data?

[`IContentGenerationCheckGrammarLiveItem`](../interfaces/IContentGenerationCheckGrammarLiveItem.md)

#### Returns

`ContentGenerationCheckGrammarLiveItem`

## Properties

### description?

> `optional` **description**: `string`

Defined in: main.ts:194438

description of the grammar or spelling error

#### Implementation of

[`IContentGenerationCheckGrammarLiveItem`](../interfaces/IContentGenerationCheckGrammarLiveItem.md).[`description`](../interfaces/IContentGenerationCheckGrammarLiveItem.md#description)

***

### length?

> `optional` **length**: `number`

Defined in: main.ts:194444

offset token for subsequent requests

#### Implementation of

[`IContentGenerationCheckGrammarLiveItem`](../interfaces/IContentGenerationCheckGrammarLiveItem.md).[`length`](../interfaces/IContentGenerationCheckGrammarLiveItem.md#length)

***

### message?

> `optional` **message**: `string`

Defined in: main.ts:194436

message of the grammar or spelling error

#### Implementation of

[`IContentGenerationCheckGrammarLiveItem`](../interfaces/IContentGenerationCheckGrammarLiveItem.md).[`message`](../interfaces/IContentGenerationCheckGrammarLiveItem.md#message)

***

### offset?

> `optional` **offset**: `number`

Defined in: main.ts:194442

offset token for subsequent requests

#### Implementation of

[`IContentGenerationCheckGrammarLiveItem`](../interfaces/IContentGenerationCheckGrammarLiveItem.md).[`offset`](../interfaces/IContentGenerationCheckGrammarLiveItem.md#offset)

***

### rule\_category\_id?

> `optional` **rule\_category\_id**: `string`

Defined in: main.ts:194455

id of the rule category

#### Implementation of

[`IContentGenerationCheckGrammarLiveItem`](../interfaces/IContentGenerationCheckGrammarLiveItem.md).[`rule_category_id`](../interfaces/IContentGenerationCheckGrammarLiveItem.md#rule_category_id)

***

### rule\_category\_name?

> `optional` **rule\_category\_name**: `string`

Defined in: main.ts:194457

name of the rule category

#### Implementation of

[`IContentGenerationCheckGrammarLiveItem`](../interfaces/IContentGenerationCheckGrammarLiveItem.md).[`rule_category_name`](../interfaces/IContentGenerationCheckGrammarLiveItem.md#rule_category_name)

***

### rule\_description?

> `optional` **rule\_description**: `string`

Defined in: main.ts:194451

description of the grammar or spelling rule

#### Implementation of

[`IContentGenerationCheckGrammarLiveItem`](../interfaces/IContentGenerationCheckGrammarLiveItem.md).[`rule_description`](../interfaces/IContentGenerationCheckGrammarLiveItem.md#rule_description)

***

### rule\_id?

> `optional` **rule\_id**: `string`

Defined in: main.ts:194449

id of the grammar or spelling rule
see the List of Grammar Rules for Content Generation API

#### Implementation of

[`IContentGenerationCheckGrammarLiveItem`](../interfaces/IContentGenerationCheckGrammarLiveItem.md).[`rule_id`](../interfaces/IContentGenerationCheckGrammarLiveItem.md#rule_id)

***

### rule\_issue\_type?

> `optional` **rule\_issue\_type**: `string`

Defined in: main.ts:194453

type of the issue found by the relevant rule

#### Implementation of

[`IContentGenerationCheckGrammarLiveItem`](../interfaces/IContentGenerationCheckGrammarLiveItem.md).[`rule_issue_type`](../interfaces/IContentGenerationCheckGrammarLiveItem.md#rule_issue_type)

***

### suggestions?

> `optional` **suggestions**: `string`[]

Defined in: main.ts:194440

suggested corrections

#### Implementation of

[`IContentGenerationCheckGrammarLiveItem`](../interfaces/IContentGenerationCheckGrammarLiveItem.md).[`suggestions`](../interfaces/IContentGenerationCheckGrammarLiveItem.md#suggestions)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:194446

type of element

#### Implementation of

[`IContentGenerationCheckGrammarLiveItem`](../interfaces/IContentGenerationCheckGrammarLiveItem.md).[`type`](../interfaces/IContentGenerationCheckGrammarLiveItem.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:194470

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:194501

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `ContentGenerationCheckGrammarLiveItem`

Defined in: main.ts:194494

#### Parameters

##### data

`any`

#### Returns

`ContentGenerationCheckGrammarLiveItem`
