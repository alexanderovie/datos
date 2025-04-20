[**Documentation**](../README.md)

***

[Documentation](../README.md) / ContentGenerationApi

# Class: ContentGenerationApi

Defined in: main.ts:15721

## Constructors

### Constructor

> **new ContentGenerationApi**(`baseUrl?`, `http?`): `ContentGenerationApi`

Defined in: main.ts:15726

#### Parameters

##### baseUrl?

`string`

##### http?

###### fetch

#### Returns

`ContentGenerationApi`

## Properties

### jsonParseReviver()

> `protected` **jsonParseReviver**: (`key`, `value`) => `any` = `undefined`

Defined in: main.ts:15724

#### Parameters

##### key

`string`

##### value

`any`

#### Returns

`any`

## Methods

### checkGrammarLive()

> **checkGrammarLive**(`body`): `Promise`\<[`ContentGenerationCheckGrammarLiveResponseInfo`](ContentGenerationCheckGrammarLiveResponseInfo.md)\>

Defined in: main.ts:15945

#### Parameters

##### body

[`ContentGenerationCheckGrammarLiveRequestInfo`](ContentGenerationCheckGrammarLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`ContentGenerationCheckGrammarLiveResponseInfo`](ContentGenerationCheckGrammarLiveResponseInfo.md)\>

Successful operation

***

### contentGenerationCheckGrammarLanguages()

> **contentGenerationCheckGrammarLanguages**(): `Promise`\<[`ContentGenerationCheckGrammarLanguagesResponseInfo`](ContentGenerationCheckGrammarLanguagesResponseInfo.md)\>

Defined in: main.ts:15986

#### Returns

`Promise`\<[`ContentGenerationCheckGrammarLanguagesResponseInfo`](ContentGenerationCheckGrammarLanguagesResponseInfo.md)\>

Successful operation

***

### contentGenerationTextSummaryLanguages()

> **contentGenerationTextSummaryLanguages**(): `Promise`\<[`ContentGenerationTextSummaryLanguagesResponseInfo`](ContentGenerationTextSummaryLanguagesResponseInfo.md)\>

Defined in: main.ts:16102

#### Returns

`Promise`\<[`ContentGenerationTextSummaryLanguagesResponseInfo`](ContentGenerationTextSummaryLanguagesResponseInfo.md)\>

Successful operation

***

### generateLive()

> **generateLive**(`body`): `Promise`\<[`ContentGenerationGenerateLiveResponseInfo`](ContentGenerationGenerateLiveResponseInfo.md)\>

Defined in: main.ts:15735

#### Parameters

##### body

[`ContentGenerationGenerateLiveRequestInfo`](ContentGenerationGenerateLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`ContentGenerationGenerateLiveResponseInfo`](ContentGenerationGenerateLiveResponseInfo.md)\>

Successful operation

***

### generateMetaTagsLive()

> **generateMetaTagsLive**(`body`): `Promise`\<[`ContentGenerationGenerateMetaTagsLiveResponseInfo`](ContentGenerationGenerateMetaTagsLiveResponseInfo.md)\>

Defined in: main.ts:15819

#### Parameters

##### body

[`ContentGenerationGenerateMetaTagsLiveRequestInfo`](ContentGenerationGenerateMetaTagsLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`ContentGenerationGenerateMetaTagsLiveResponseInfo`](ContentGenerationGenerateMetaTagsLiveResponseInfo.md)\>

Successful operation

***

### generateSubTopicsLive()

> **generateSubTopicsLive**(`body`): `Promise`\<[`ContentGenerationGenerateSubTopicsLiveResponseInfo`](ContentGenerationGenerateSubTopicsLiveResponseInfo.md)\>

Defined in: main.ts:15861

#### Parameters

##### body

[`ContentGenerationGenerateSubTopicsLiveRequestInfo`](ContentGenerationGenerateSubTopicsLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`ContentGenerationGenerateSubTopicsLiveResponseInfo`](ContentGenerationGenerateSubTopicsLiveResponseInfo.md)\>

Successful operation

***

### generateTextLive()

> **generateTextLive**(`body`): `Promise`\<[`ContentGenerationGenerateTextLiveResponseInfo`](ContentGenerationGenerateTextLiveResponseInfo.md)\>

Defined in: main.ts:15777

#### Parameters

##### body

[`ContentGenerationGenerateTextLiveRequestInfo`](ContentGenerationGenerateTextLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`ContentGenerationGenerateTextLiveResponseInfo`](ContentGenerationGenerateTextLiveResponseInfo.md)\>

Successful operation

***

### grammarRules()

> **grammarRules**(): `Promise`\<[`ContentGenerationGrammarRulesResponseInfo`](ContentGenerationGrammarRulesResponseInfo.md)\>

Defined in: main.ts:16023

#### Returns

`Promise`\<[`ContentGenerationGrammarRulesResponseInfo`](ContentGenerationGrammarRulesResponseInfo.md)\>

Successful operation

***

### paraphraseLive()

> **paraphraseLive**(`body`): `Promise`\<[`ContentGenerationParaphraseLiveResponseInfo`](ContentGenerationParaphraseLiveResponseInfo.md)\>

Defined in: main.ts:15903

#### Parameters

##### body

[`ContentGenerationParaphraseLiveRequestInfo`](ContentGenerationParaphraseLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`ContentGenerationParaphraseLiveResponseInfo`](ContentGenerationParaphraseLiveResponseInfo.md)\>

Successful operation

***

### processCheckGrammarLive()

> `protected` **processCheckGrammarLive**(`response`): `Promise`\<[`ContentGenerationCheckGrammarLiveResponseInfo`](ContentGenerationCheckGrammarLiveResponseInfo.md)\>

Defined in: main.ts:15965

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`ContentGenerationCheckGrammarLiveResponseInfo`](ContentGenerationCheckGrammarLiveResponseInfo.md)\>

***

### processContentGenerationCheckGrammarLanguages()

> `protected` **processContentGenerationCheckGrammarLanguages**(`response`): `Promise`\<[`ContentGenerationCheckGrammarLanguagesResponseInfo`](ContentGenerationCheckGrammarLanguagesResponseInfo.md)\>

Defined in: main.ts:16002

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`ContentGenerationCheckGrammarLanguagesResponseInfo`](ContentGenerationCheckGrammarLanguagesResponseInfo.md)\>

***

### processContentGenerationTextSummaryLanguages()

> `protected` **processContentGenerationTextSummaryLanguages**(`response`): `Promise`\<[`ContentGenerationTextSummaryLanguagesResponseInfo`](ContentGenerationTextSummaryLanguagesResponseInfo.md)\>

Defined in: main.ts:16118

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`ContentGenerationTextSummaryLanguagesResponseInfo`](ContentGenerationTextSummaryLanguagesResponseInfo.md)\>

***

### processGenerateLive()

> `protected` **processGenerateLive**(`response`): `Promise`\<[`ContentGenerationGenerateLiveResponseInfo`](ContentGenerationGenerateLiveResponseInfo.md)\>

Defined in: main.ts:15755

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`ContentGenerationGenerateLiveResponseInfo`](ContentGenerationGenerateLiveResponseInfo.md)\>

***

### processGenerateMetaTagsLive()

> `protected` **processGenerateMetaTagsLive**(`response`): `Promise`\<[`ContentGenerationGenerateMetaTagsLiveResponseInfo`](ContentGenerationGenerateMetaTagsLiveResponseInfo.md)\>

Defined in: main.ts:15839

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`ContentGenerationGenerateMetaTagsLiveResponseInfo`](ContentGenerationGenerateMetaTagsLiveResponseInfo.md)\>

***

### processGenerateSubTopicsLive()

> `protected` **processGenerateSubTopicsLive**(`response`): `Promise`\<[`ContentGenerationGenerateSubTopicsLiveResponseInfo`](ContentGenerationGenerateSubTopicsLiveResponseInfo.md)\>

Defined in: main.ts:15881

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`ContentGenerationGenerateSubTopicsLiveResponseInfo`](ContentGenerationGenerateSubTopicsLiveResponseInfo.md)\>

***

### processGenerateTextLive()

> `protected` **processGenerateTextLive**(`response`): `Promise`\<[`ContentGenerationGenerateTextLiveResponseInfo`](ContentGenerationGenerateTextLiveResponseInfo.md)\>

Defined in: main.ts:15797

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`ContentGenerationGenerateTextLiveResponseInfo`](ContentGenerationGenerateTextLiveResponseInfo.md)\>

***

### processGrammarRules()

> `protected` **processGrammarRules**(`response`): `Promise`\<[`ContentGenerationGrammarRulesResponseInfo`](ContentGenerationGrammarRulesResponseInfo.md)\>

Defined in: main.ts:16039

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`ContentGenerationGrammarRulesResponseInfo`](ContentGenerationGrammarRulesResponseInfo.md)\>

***

### processParaphraseLive()

> `protected` **processParaphraseLive**(`response`): `Promise`\<[`ContentGenerationParaphraseLiveResponseInfo`](ContentGenerationParaphraseLiveResponseInfo.md)\>

Defined in: main.ts:15923

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`ContentGenerationParaphraseLiveResponseInfo`](ContentGenerationParaphraseLiveResponseInfo.md)\>

***

### processTextSummaryLive()

> `protected` **processTextSummaryLive**(`response`): `Promise`\<[`ContentGenerationTextSummaryLiveResponseInfo`](ContentGenerationTextSummaryLiveResponseInfo.md)\>

Defined in: main.ts:16081

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`ContentGenerationTextSummaryLiveResponseInfo`](ContentGenerationTextSummaryLiveResponseInfo.md)\>

***

### textSummaryLive()

> **textSummaryLive**(`body`): `Promise`\<[`ContentGenerationTextSummaryLiveResponseInfo`](ContentGenerationTextSummaryLiveResponseInfo.md)\>

Defined in: main.ts:16061

#### Parameters

##### body

[`ContentGenerationTextSummaryLiveRequestInfo`](ContentGenerationTextSummaryLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`ContentGenerationTextSummaryLiveResponseInfo`](ContentGenerationTextSummaryLiveResponseInfo.md)\>

Successful operation
