import { AiOptimizationChatGptLlmResponsesModelsResponseInfo } from "./../models/AiOptimizationChatGptLlmResponsesModelsResponseInfo";
import { AiOptimizationChatGptLlmResponsesLiveRequestInfo } from "./../models/AiOptimizationChatGptLlmResponsesLiveRequestInfo";
import { LlmMessageChainItem } from "./../models/LlmMessageChainItem";
import { AiOptimizationChatGptLlmResponsesLiveResponseInfo } from "./../models/AiOptimizationChatGptLlmResponsesLiveResponseInfo";
import { AiOptimizationChatGptLlmResponsesTaskPostRequestInfo } from "./../models/AiOptimizationChatGptLlmResponsesTaskPostRequestInfo";
import { AiOptimizationChatGptLlmResponsesTaskPostResponseInfo } from "./../models/AiOptimizationChatGptLlmResponsesTaskPostResponseInfo";
import { AiOptimizationChatGptLlmResponsesTasksReadyResponseInfo } from "./../models/AiOptimizationChatGptLlmResponsesTasksReadyResponseInfo";
import { AiOptimizationChatGptLlmResponsesTaskGetResponseInfo } from "./../models/AiOptimizationChatGptLlmResponsesTaskGetResponseInfo";
import { AiOptimizationClaudeLlmResponsesModelsResponseInfo } from "./../models/AiOptimizationClaudeLlmResponsesModelsResponseInfo";
import { AiOptimizationClaudeLlmResponsesLiveRequestInfo } from "./../models/AiOptimizationClaudeLlmResponsesLiveRequestInfo";
import { AiOptimizationClaudeLlmResponsesLiveResponseInfo } from "./../models/AiOptimizationClaudeLlmResponsesLiveResponseInfo";
import { AiOptimizationClaudeLlmResponsesTaskPostRequestInfo } from "./../models/AiOptimizationClaudeLlmResponsesTaskPostRequestInfo";
import { AiOptimizationClaudeLlmResponsesTaskPostResponseInfo } from "./../models/AiOptimizationClaudeLlmResponsesTaskPostResponseInfo";
import { AiOptimizationClaudeLlmResponsesTasksReadyResponseInfo } from "./../models/AiOptimizationClaudeLlmResponsesTasksReadyResponseInfo";
import { AiOptimizationClaudeLlmResponsesTaskGetResponseInfo } from "./../models/AiOptimizationClaudeLlmResponsesTaskGetResponseInfo";
import { AiOptimizationGeminiLlmResponsesModelsResponseInfo } from "./../models/AiOptimizationGeminiLlmResponsesModelsResponseInfo";
import { AiOptimizationGeminiLlmResponsesLiveRequestInfo } from "./../models/AiOptimizationGeminiLlmResponsesLiveRequestInfo";
import { AiOptimizationGeminiLlmResponsesLiveResponseInfo } from "./../models/AiOptimizationGeminiLlmResponsesLiveResponseInfo";
import { AiOptimizationPerplexityLlmResponsesModelsResponseInfo } from "./../models/AiOptimizationPerplexityLlmResponsesModelsResponseInfo";
import { AiOptimizationPerplexityLlmResponsesLiveRequestInfo } from "./../models/AiOptimizationPerplexityLlmResponsesLiveRequestInfo";
import { AiOptimizationPerplexityLlmResponsesLiveResponseInfo } from "./../models/AiOptimizationPerplexityLlmResponsesLiveResponseInfo";
import { AiOptimizationAiKeywordDataAvailableFiltersResponseInfo } from "./../models/AiOptimizationAiKeywordDataAvailableFiltersResponseInfo";
import { AiOptimizationAiKeywordDataLocationsAndLanguagesResponseInfo } from "./../models/AiOptimizationAiKeywordDataLocationsAndLanguagesResponseInfo";
import { AiOptimizationAiKeywordDataKeywordsSearchVolumeLiveRequestInfo } from "./../models/AiOptimizationAiKeywordDataKeywordsSearchVolumeLiveRequestInfo";
import { AiOptimizationAiKeywordDataKeywordsSearchVolumeLiveResponseInfo } from "./../models/AiOptimizationAiKeywordDataKeywordsSearchVolumeLiveResponseInfo";
import { ApiException, throwException } from "./../models/ApiException"

export class AiOptimizationApi {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        this.http = http ? http : window as any;
        this.baseUrl = baseUrl ?? "https://";
    }

    chatGptLlmResponsesModels(): Promise<AiOptimizationChatGptLlmResponsesModelsResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/ai_optimization/chat_gpt/llm_responses/models";
        url_ = url_.replace(/[?&]$/, "");
        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.5",
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processChatGptLlmResponsesModels(_response);
        });
    }

    protected processChatGptLlmResponsesModels(response: Response): Promise<AiOptimizationChatGptLlmResponsesModelsResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? AiOptimizationChatGptLlmResponsesModelsResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<AiOptimizationChatGptLlmResponsesModelsResponseInfo | null>(null as any);
    }
    chatGptLlmResponsesLive(body: AiOptimizationChatGptLlmResponsesLiveRequestInfo[]): Promise<AiOptimizationChatGptLlmResponsesLiveResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/ai_optimization/chat_gpt/llm_responses/live";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body);
        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.5",
            }
        };
        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processChatGptLlmResponsesLive(_response);
        });
    }

    protected processChatGptLlmResponsesLive(response: Response): Promise<AiOptimizationChatGptLlmResponsesLiveResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? AiOptimizationChatGptLlmResponsesLiveResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<AiOptimizationChatGptLlmResponsesLiveResponseInfo | null>(null as any);
    }
    chatGptLlmResponsesTaskPost(body: AiOptimizationChatGptLlmResponsesTaskPostRequestInfo[]): Promise<AiOptimizationChatGptLlmResponsesTaskPostResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/ai_optimization/chat_gpt/llm_responses/task_post";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body);
        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.5",
            }
        };
        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processChatGptLlmResponsesTaskPost(_response);
        });
    }

    protected processChatGptLlmResponsesTaskPost(response: Response): Promise<AiOptimizationChatGptLlmResponsesTaskPostResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? AiOptimizationChatGptLlmResponsesTaskPostResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<AiOptimizationChatGptLlmResponsesTaskPostResponseInfo | null>(null as any);
    }
    chatGptLlmResponsesTasksReady(): Promise<AiOptimizationChatGptLlmResponsesTasksReadyResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/ai_optimization/chat_gpt/llm_responses/tasks_ready";
        url_ = url_.replace(/[?&]$/, "");
        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.5",
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processChatGptLlmResponsesTasksReady(_response);
        });
    }

    protected processChatGptLlmResponsesTasksReady(response: Response): Promise<AiOptimizationChatGptLlmResponsesTasksReadyResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? AiOptimizationChatGptLlmResponsesTasksReadyResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<AiOptimizationChatGptLlmResponsesTasksReadyResponseInfo | null>(null as any);
    }
    chatGptLlmResponsesTaskGet(id: string): Promise<AiOptimizationChatGptLlmResponsesTaskGetResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/ai_optimization/chat_gpt/llm_responses/task_get/{id}";
        url_ = url_.replace(/[?&]$/, "");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.5",
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processChatGptLlmResponsesTaskGet(_response);
        });
    }

    protected processChatGptLlmResponsesTaskGet(response: Response): Promise<AiOptimizationChatGptLlmResponsesTaskGetResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? AiOptimizationChatGptLlmResponsesTaskGetResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<AiOptimizationChatGptLlmResponsesTaskGetResponseInfo | null>(null as any);
    }
    claudeLlmResponsesModels(): Promise<AiOptimizationClaudeLlmResponsesModelsResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/ai_optimization/claude/llm_responses/models";
        url_ = url_.replace(/[?&]$/, "");
        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.5",
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processClaudeLlmResponsesModels(_response);
        });
    }

    protected processClaudeLlmResponsesModels(response: Response): Promise<AiOptimizationClaudeLlmResponsesModelsResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? AiOptimizationClaudeLlmResponsesModelsResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<AiOptimizationClaudeLlmResponsesModelsResponseInfo | null>(null as any);
    }
    claudeLlmResponsesLive(body: AiOptimizationClaudeLlmResponsesLiveRequestInfo[]): Promise<AiOptimizationClaudeLlmResponsesLiveResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/ai_optimization/claude/llm_responses/live";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body);
        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.5",
            }
        };
        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processClaudeLlmResponsesLive(_response);
        });
    }

    protected processClaudeLlmResponsesLive(response: Response): Promise<AiOptimizationClaudeLlmResponsesLiveResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? AiOptimizationClaudeLlmResponsesLiveResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<AiOptimizationClaudeLlmResponsesLiveResponseInfo | null>(null as any);
    }
    claudeLlmResponsesTaskPost(body: AiOptimizationClaudeLlmResponsesTaskPostRequestInfo[]): Promise<AiOptimizationClaudeLlmResponsesTaskPostResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/ai_optimization/claude/llm_responses/task_post";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body);
        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.5",
            }
        };
        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processClaudeLlmResponsesTaskPost(_response);
        });
    }

    protected processClaudeLlmResponsesTaskPost(response: Response): Promise<AiOptimizationClaudeLlmResponsesTaskPostResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? AiOptimizationClaudeLlmResponsesTaskPostResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<AiOptimizationClaudeLlmResponsesTaskPostResponseInfo | null>(null as any);
    }
    claudeLlmResponsesTasksReady(): Promise<AiOptimizationClaudeLlmResponsesTasksReadyResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/ai_optimization/claude/llm_responses/tasks_ready";
        url_ = url_.replace(/[?&]$/, "");
        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.5",
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processClaudeLlmResponsesTasksReady(_response);
        });
    }

    protected processClaudeLlmResponsesTasksReady(response: Response): Promise<AiOptimizationClaudeLlmResponsesTasksReadyResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? AiOptimizationClaudeLlmResponsesTasksReadyResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<AiOptimizationClaudeLlmResponsesTasksReadyResponseInfo | null>(null as any);
    }
    claudeLlmResponsesTaskGet(id: string): Promise<AiOptimizationClaudeLlmResponsesTaskGetResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/ai_optimization/claude/llm_responses/task_get/{id}";
        url_ = url_.replace(/[?&]$/, "");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.5",
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processClaudeLlmResponsesTaskGet(_response);
        });
    }

    protected processClaudeLlmResponsesTaskGet(response: Response): Promise<AiOptimizationClaudeLlmResponsesTaskGetResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? AiOptimizationClaudeLlmResponsesTaskGetResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<AiOptimizationClaudeLlmResponsesTaskGetResponseInfo | null>(null as any);
    }
    geminiLlmResponsesModels(): Promise<AiOptimizationGeminiLlmResponsesModelsResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/ai_optimization/gemini/llm_responses/models";
        url_ = url_.replace(/[?&]$/, "");
        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.5",
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGeminiLlmResponsesModels(_response);
        });
    }

    protected processGeminiLlmResponsesModels(response: Response): Promise<AiOptimizationGeminiLlmResponsesModelsResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? AiOptimizationGeminiLlmResponsesModelsResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<AiOptimizationGeminiLlmResponsesModelsResponseInfo | null>(null as any);
    }
    geminiLlmResponsesLive(body: AiOptimizationGeminiLlmResponsesLiveRequestInfo[]): Promise<AiOptimizationGeminiLlmResponsesLiveResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/ai_optimization/gemini/llm_responses/live";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body);
        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.5",
            }
        };
        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGeminiLlmResponsesLive(_response);
        });
    }

    protected processGeminiLlmResponsesLive(response: Response): Promise<AiOptimizationGeminiLlmResponsesLiveResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? AiOptimizationGeminiLlmResponsesLiveResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<AiOptimizationGeminiLlmResponsesLiveResponseInfo | null>(null as any);
    }
    perplexityLlmResponsesModels(): Promise<AiOptimizationPerplexityLlmResponsesModelsResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/ai_optimization/perplexity/llm_responses/models";
        url_ = url_.replace(/[?&]$/, "");
        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.5",
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processPerplexityLlmResponsesModels(_response);
        });
    }

    protected processPerplexityLlmResponsesModels(response: Response): Promise<AiOptimizationPerplexityLlmResponsesModelsResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? AiOptimizationPerplexityLlmResponsesModelsResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<AiOptimizationPerplexityLlmResponsesModelsResponseInfo | null>(null as any);
    }
    perplexityLlmResponsesLive(body: AiOptimizationPerplexityLlmResponsesLiveRequestInfo[]): Promise<AiOptimizationPerplexityLlmResponsesLiveResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/ai_optimization/perplexity/llm_responses/live";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body);
        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.5",
            }
        };
        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processPerplexityLlmResponsesLive(_response);
        });
    }

    protected processPerplexityLlmResponsesLive(response: Response): Promise<AiOptimizationPerplexityLlmResponsesLiveResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? AiOptimizationPerplexityLlmResponsesLiveResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<AiOptimizationPerplexityLlmResponsesLiveResponseInfo | null>(null as any);
    }
    aiKeywordDataAvailableFilters(): Promise<AiOptimizationAiKeywordDataAvailableFiltersResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/ai_optimization/ai_keyword_data/available_filters";
        url_ = url_.replace(/[?&]$/, "");
        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.5",
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processAiKeywordDataAvailableFilters(_response);
        });
    }

    protected processAiKeywordDataAvailableFilters(response: Response): Promise<AiOptimizationAiKeywordDataAvailableFiltersResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? AiOptimizationAiKeywordDataAvailableFiltersResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<AiOptimizationAiKeywordDataAvailableFiltersResponseInfo | null>(null as any);
    }
    aiOptimizationAiKeywordDataLocationsAndLanguages(): Promise<AiOptimizationAiKeywordDataLocationsAndLanguagesResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/ai_optimization/ai_keyword_data/locations_and_languages";
        url_ = url_.replace(/[?&]$/, "");
        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.5",
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processAiOptimizationAiKeywordDataLocationsAndLanguages(_response);
        });
    }

    protected processAiOptimizationAiKeywordDataLocationsAndLanguages(response: Response): Promise<AiOptimizationAiKeywordDataLocationsAndLanguagesResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? AiOptimizationAiKeywordDataLocationsAndLanguagesResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<AiOptimizationAiKeywordDataLocationsAndLanguagesResponseInfo | null>(null as any);
    }
    aiKeywordDataKeywordsSearchVolumeLive(body: AiOptimizationAiKeywordDataKeywordsSearchVolumeLiveRequestInfo[]): Promise<AiOptimizationAiKeywordDataKeywordsSearchVolumeLiveResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/ai_optimization/ai_keyword_data/keywords_search_volume/live";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body);
        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.5",
            }
        };
        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processAiKeywordDataKeywordsSearchVolumeLive(_response);
        });
    }

    protected processAiKeywordDataKeywordsSearchVolumeLive(response: Response): Promise<AiOptimizationAiKeywordDataKeywordsSearchVolumeLiveResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? AiOptimizationAiKeywordDataKeywordsSearchVolumeLiveResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<AiOptimizationAiKeywordDataKeywordsSearchVolumeLiveResponseInfo | null>(null as any);
    }
}