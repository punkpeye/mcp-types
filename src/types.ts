type AudioContent = {
    _meta?: Record<string, unknown> | undefined;
    data: string;
    mimeType: string;
    type: "audio";
};

export { AudioContent };

type BaseMetadata = {
    name: string;
    title?: string | undefined;
};

export { BaseMetadata };

type BlobResourceContents = {
    _meta?: Record<string, unknown> | undefined;
    blob: string;
    mimeType?: string | undefined;
    uri: string;
};

export { BlobResourceContents };

type BooleanSchema = {
    default?: boolean | undefined;
    description?: string | undefined;
    title?: string | undefined;
    type: "boolean";
};

export { BooleanSchema };

type CallToolRequest = {
    method: "tools/call";
    params: {
        _meta?: {
            progressToken?: ProgressToken | undefined;
        } | undefined;
        arguments?: Record<string, unknown> | undefined;
        name: string;
    };
};

export { CallToolRequest };

type CallToolResult = {
    _meta?: Record<string, unknown> | undefined;
    content: ContentBlock[];
    isError?: boolean | undefined;
    structuredContent?: Record<string, unknown> | undefined;
};

export { CallToolResult };

type CancelledNotification = {
    method: "notifications/cancelled";
    params: {
        _meta?: Record<string, unknown> | undefined;
        reason?: string | undefined;
        requestId: RequestId;
    };
};

export { CancelledNotification };

type ClientCapabilities = {
    elicitation?: Record<string, unknown> | undefined;
    experimental?: Record<string, unknown> | undefined;
    roots?: {
        listChanged?: boolean | undefined;
    } | undefined;
    sampling?: Record<string, unknown> | undefined;
};

export { ClientCapabilities };

type ClientNotification = CancelledNotification | InitializedNotification | ProgressNotification | RootsListChangedNotification;

export { ClientNotification };

type ClientRequest = CallToolRequest | CompleteRequest | GetPromptRequest | InitializeRequest | ListPromptsRequest | ListResourcesRequest | ListResourceTemplatesRequest | ListToolsRequest | PingRequest | ReadResourceRequest | SetLevelRequest | SubscribeRequest | UnsubscribeRequest;

export { ClientRequest };

type ClientResult = CreateMessageResult | ElicitResult | EmptyResult | ListRootsResult;

export { ClientResult };

type CompatibilityCallToolResult = {
    _meta?: Record<string, unknown> | undefined;
    toolResult: unknown;
} | CallToolResult;

export { CompatibilityCallToolResult };

type CompleteRequest = {
    method: "completion/complete";
    params: {
        _meta?: {
            progressToken?: ProgressToken | undefined;
        } | undefined;
        argument: {
            name: string;
            value: string;
        };
        context?: {
            arguments?: Record<string, string> | undefined;
        } | undefined;
        ref: PromptReference | ResourceTemplateReference;
    };
};

export { CompleteRequest };

type CompleteResult = {
    _meta?: Record<string, unknown> | undefined;
    completion: {
        hasMore?: boolean | undefined;
        total?: number | undefined;
        values: string[];
    };
};

export { CompleteResult };

type ContentBlock = AudioContent | EmbeddedResource | ImageContent | ResourceLink | TextContent;

export { ContentBlock };

type CreateMessageRequest = {
    method: "sampling/createMessage";
    params: {
        _meta?: {
            progressToken?: ProgressToken | undefined;
        } | undefined;
        includeContext?: ("allServers" | "none" | "thisServer") | undefined;
        maxTokens: number;
        messages: SamplingMessage[];
        metadata?: Record<string, unknown> | undefined;
        modelPreferences?: ModelPreferences | undefined;
        stopSequences?: string[] | undefined;
        systemPrompt?: string | undefined;
        temperature?: number | undefined;
    };
};

export { CreateMessageRequest };

type CreateMessageResult = {
    _meta?: Record<string, unknown> | undefined;
    content: AudioContent | ImageContent | TextContent;
    model: string;
    role: "assistant" | "user";
    stopReason?: (("endTurn" | "maxTokens" | "stopSequence") | string) | undefined;
};

export { CreateMessageResult };

type Cursor = string;

export { Cursor };

type ElicitRequest = {
    method: "elicitation/create";
    params: {
        _meta?: {
            progressToken?: ProgressToken | undefined;
        } | undefined;
        message: string;
        requestedSchema: {
            properties: Record<string, PrimitiveDefinitionSchema>;
            required?: string[] | undefined;
            type: "object";
        };
    };
};

export { ElicitRequest };

type ElicitResult = {
    _meta?: Record<string, unknown> | undefined;
    action: "accept" | "cancel" | "decline";
    content?: Record<string, unknown> | undefined;
};

export { ElicitResult };

type EmbeddedResource = {
    _meta?: Record<string, unknown> | undefined;
    resource: BlobResourceContents | TextResourceContents;
    type: "resource";
};

export { EmbeddedResource };

type EmptyResult = {
    _meta?: Record<string, unknown> | undefined;
};

export { EmptyResult };

type EnumSchema = {
    description?: string | undefined;
    enum: string[];
    enumNames?: string[] | undefined;
    title?: string | undefined;
    type: "string";
};

export { EnumSchema };

type GetPromptRequest = {
    method: "prompts/get";
    params: {
        _meta?: {
            progressToken?: ProgressToken | undefined;
        } | undefined;
        arguments?: Record<string, string> | undefined;
        name: string;
    };
};

export { GetPromptRequest };

type GetPromptResult = {
    _meta?: Record<string, unknown> | undefined;
    description?: string | undefined;
    messages: PromptMessage[];
};

export { GetPromptResult };

type ImageContent = {
    _meta?: Record<string, unknown> | undefined;
    data: string;
    mimeType: string;
    type: "image";
};

export { ImageContent };

type Implementation = {
    name: string;
    title?: string | undefined;
    version: string;
};

export { Implementation };

type InitializedNotification = {
    method: "notifications/initialized";
    params?: {
        _meta?: Record<string, unknown> | undefined;
    } | undefined;
};

export { InitializeRequest };

type InitializeRequest = {
    method: "initialize";
    params: {
        _meta?: {
            progressToken?: ProgressToken | undefined;
        } | undefined;
        capabilities: ClientCapabilities;
        clientInfo: Implementation;
        protocolVersion: string;
    };
};

export { InitializeResult };

type InitializeResult = {
    _meta?: Record<string, unknown> | undefined;
    capabilities: ServerCapabilities;
    instructions?: string | undefined;
    protocolVersion: string;
    serverInfo: Implementation;
};

export { InitializedNotification };

type JSONRPCError = {
    error: {
        code: number;
        data?: undefined | unknown;
        message: string;
    };
    id: RequestId;
    jsonrpc: "2.0";
};

export { JSONRPCError };

type JSONRPCMessage = JSONRPCError | JSONRPCNotification | JSONRPCRequest | JSONRPCResponse;

export { JSONRPCMessage };

type JSONRPCNotification = {
    jsonrpc: "2.0";
    method: string;
    params?: {
        _meta?: Record<string, unknown> | undefined;
    } | undefined;
};

export { JSONRPCNotification };

type JSONRPCRequest = {
    id: RequestId;
    jsonrpc: "2.0";
    method: string;
    params?: {
        _meta?: {
            progressToken?: ProgressToken | undefined;
        } | undefined;
    } | undefined;
};

export { JSONRPCRequest };

type JSONRPCResponse = {
    id: RequestId;
    jsonrpc: "2.0";
    result: Result;
};

export { JSONRPCResponse };

type ListPromptsRequest = {
    method: "prompts/list";
    params?: {
        _meta?: {
            progressToken?: ProgressToken | undefined;
        } | undefined;
        cursor?: Cursor | undefined;
    } | undefined;
};

export { ListPromptsRequest };

type ListPromptsResult = {
    _meta?: Record<string, unknown> | undefined;
    nextCursor?: Cursor | undefined;
    prompts: Prompt[];
};

export { ListPromptsResult };

type ListResourcesRequest = {
    method: "resources/list";
    params?: {
        _meta?: {
            progressToken?: ProgressToken | undefined;
        } | undefined;
        cursor?: Cursor | undefined;
    } | undefined;
};

export { ListResourceTemplatesRequest };

type ListResourcesResult = {
    _meta?: Record<string, unknown> | undefined;
    nextCursor?: Cursor | undefined;
    resources: Resource[];
};

export { ListResourceTemplatesResult };

type ListResourceTemplatesRequest = {
    method: "resources/templates/list";
    params?: {
        _meta?: {
            progressToken?: ProgressToken | undefined;
        } | undefined;
        cursor?: Cursor | undefined;
    } | undefined;
};

export { ListResourcesRequest };

type ListResourceTemplatesResult = {
    _meta?: Record<string, unknown> | undefined;
    nextCursor?: Cursor | undefined;
    resourceTemplates: ResourceTemplate[];
};

export { ListResourcesResult };

type ListRootsRequest = {
    method: "roots/list";
    params?: {
        _meta?: {
            progressToken?: ProgressToken | undefined;
        } | undefined;
    } | undefined;
};

export { ListRootsRequest };

type ListRootsResult = {
    _meta?: Record<string, unknown> | undefined;
    roots: Root[];
};

export { ListRootsResult };

type ListToolsRequest = {
    method: "tools/list";
    params?: {
        _meta?: {
            progressToken?: ProgressToken | undefined;
        } | undefined;
        cursor?: Cursor | undefined;
    } | undefined;
};

export { ListToolsRequest };

type ListToolsResult = {
    _meta?: Record<string, unknown> | undefined;
    nextCursor?: Cursor | undefined;
    tools: Tool[];
};

export { ListToolsResult };

type LoggingLevel = "alert" | "critical" | "debug" | "emergency" | "error" | "info" | "notice" | "warning";

export { LoggingLevel };

type LoggingMessageNotification = {
    method: "notifications/message";
    params: {
        _meta?: Record<string, unknown> | undefined;
        data: unknown;
        level: LoggingLevel;
        logger?: string | undefined;
    };
};

export { LoggingMessageNotification };

type ModelHint = {
    name?: string | undefined;
};

export { ModelHint };

type ModelPreferences = {
    costPriority?: number | undefined;
    hints?: ModelHint[] | undefined;
    intelligencePriority?: number | undefined;
    speedPriority?: number | undefined;
};

export { ModelPreferences };

type Notification = {
    method: string;
    params?: {
        _meta?: Record<string, unknown> | undefined;
    } | undefined;
};

export { Notification };

type NumberSchema = {
    description?: string | undefined;
    maximum?: number | undefined;
    minimum?: number | undefined;
    title?: string | undefined;
    type: "integer" | "number";
};

export { NumberSchema };

type PaginatedRequest = {
    method: string;
    params?: {
        _meta?: {
            progressToken?: ProgressToken | undefined;
        } | undefined;
        cursor?: Cursor | undefined;
    } | undefined;
};

export { PaginatedRequest };

type PaginatedResult = {
    _meta?: Record<string, unknown> | undefined;
    nextCursor?: Cursor | undefined;
};

export { PaginatedResult };

type PingRequest = {
    method: "ping";
    params?: {
        _meta?: {
            progressToken?: ProgressToken | undefined;
        } | undefined;
    } | undefined;
};

export { PingRequest };

type PrimitiveDefinitionSchema = BooleanSchema | EnumSchema | NumberSchema | StringSchema;

export { PrimitiveDefinitionSchema };

type Progress = {
    message?: string | undefined;
    progress: number;
    total?: number | undefined;
};

export { ProgressNotification };

type ProgressNotification = {
    method: "notifications/progress";
    params: {
        _meta?: Record<string, unknown> | undefined;
        message?: string | undefined;
        progress: number;
        progressToken: ProgressToken;
        total?: number | undefined;
    };
};

export { Progress };

type ProgressToken = number | string;

export { ProgressToken };

type Prompt = {
    _meta?: Record<string, unknown> | undefined;
    arguments?: PromptArgument[] | undefined;
    description?: string | undefined;
    name: string;
    title?: string | undefined;
};

export { PromptArgument };

type PromptArgument = {
    description?: string | undefined;
    name: string;
    required?: boolean | undefined;
};

export { PromptListChangedNotification };

type PromptListChangedNotification = {
    method: "notifications/prompts/list_changed";
    params?: {
        _meta?: Record<string, unknown> | undefined;
    } | undefined;
};

export { PromptMessage };

type PromptMessage = {
    content: ContentBlock;
    role: "assistant" | "user";
};

export { PromptReference };

type PromptReference = {
    name: string;
    type: "ref/prompt";
};

export { Prompt };

type ReadResourceRequest = {
    method: "resources/read";
    params: {
        _meta?: {
            progressToken?: ProgressToken | undefined;
        } | undefined;
        uri: string;
    };
};

export { ReadResourceRequest };

type ReadResourceResult = {
    _meta?: Record<string, unknown> | undefined;
    contents: (BlobResourceContents | TextResourceContents)[];
};

export { ReadResourceResult };

type Request = {
    method: string;
    params?: {
        _meta?: {
            progressToken?: ProgressToken | undefined;
        } | undefined;
    } | undefined;
};

export { RequestId };

type RequestId = number | string;

export { Request };

type Resource = {
    _meta?: Record<string, unknown> | undefined;
    description?: string | undefined;
    mimeType?: string | undefined;
    name: string;
    title?: string | undefined;
    uri: string;
};

export { ResourceContents };

type ResourceContents = {
    _meta?: Record<string, unknown> | undefined;
    mimeType?: string | undefined;
    uri: string;
};

export { ResourceLink };

type ResourceLink = {
    _meta?: Record<string, unknown> | undefined;
    description?: string | undefined;
    mimeType?: string | undefined;
    name: string;
    title?: string | undefined;
    type: "resource_link";
    uri: string;
};

export { ResourceListChangedNotification };

type ResourceListChangedNotification = {
    method: "notifications/resources/list_changed";
    params?: {
        _meta?: Record<string, unknown> | undefined;
    } | undefined;
};

export { ResourceTemplateReference };

type ResourceTemplate = {
    _meta?: Record<string, unknown> | undefined;
    description?: string | undefined;
    mimeType?: string | undefined;
    name: string;
    title?: string | undefined;
    uriTemplate: string;
};

export { Resource };

type ResourceTemplateReference = {
    type: "ref/resource";
    uri: string;
};

export { ResourceTemplate };

type ResourceUpdatedNotification = {
    method: "notifications/resources/updated";
    params: {
        _meta?: Record<string, unknown> | undefined;
        uri: string;
    };
};

export { ResourceUpdatedNotification };

type Result = {
    _meta?: Record<string, unknown> | undefined;
};

export { Result };

type Root = {
    _meta?: Record<string, unknown> | undefined;
    name?: string | undefined;
    uri: string;
};

export { Root };

type RootsListChangedNotification = {
    method: "notifications/roots/list_changed";
    params?: {
        _meta?: Record<string, unknown> | undefined;
    } | undefined;
};

export { RootsListChangedNotification };

type SamplingMessage = {
    content: AudioContent | ImageContent | TextContent;
    role: "assistant" | "user";
};

export { SamplingMessage };

type ServerCapabilities = {
    completions?: Record<string, unknown> | undefined;
    experimental?: Record<string, unknown> | undefined;
    logging?: Record<string, unknown> | undefined;
    prompts?: {
        listChanged?: boolean | undefined;
    } | undefined;
    resources?: {
        listChanged?: boolean | undefined;
        subscribe?: boolean | undefined;
    } | undefined;
    tools?: {
        listChanged?: boolean | undefined;
    } | undefined;
};

export { ServerCapabilities };

type ServerNotification = CancelledNotification | LoggingMessageNotification | ProgressNotification | PromptListChangedNotification | ResourceListChangedNotification | ResourceUpdatedNotification | ToolListChangedNotification;

export { ServerNotification };

type ServerRequest = CreateMessageRequest | ElicitRequest | ListRootsRequest | PingRequest;

export { ServerRequest };

type ServerResult = CallToolResult | CompleteResult | EmptyResult | GetPromptResult | InitializeResult | ListPromptsResult | ListResourcesResult | ListResourceTemplatesResult | ListToolsResult | ReadResourceResult;

export { ServerResult };

type SetLevelRequest = {
    method: "logging/setLevel";
    params: {
        _meta?: {
            progressToken?: ProgressToken | undefined;
        } | undefined;
        level: LoggingLevel;
    };
};

export { SetLevelRequest };

type StringSchema = {
    description?: string | undefined;
    format?: ("date-time" | "date" | "email" | "uri") | undefined;
    maxLength?: number | undefined;
    minLength?: number | undefined;
    title?: string | undefined;
    type: "string";
};

export { StringSchema };

type SubscribeRequest = {
    method: "resources/subscribe";
    params: {
        _meta?: {
            progressToken?: ProgressToken | undefined;
        } | undefined;
        uri: string;
    };
};

export { SubscribeRequest };

type TextContent = {
    _meta?: Record<string, unknown> | undefined;
    text: string;
    type: "text";
};

export { TextContent };

type TextResourceContents = {
    _meta?: Record<string, unknown> | undefined;
    mimeType?: string | undefined;
    text: string;
    uri: string;
};

export { TextResourceContents };

type Tool = {
    _meta?: Record<string, unknown> | undefined;
    annotations?: ToolAnnotations | undefined;
    description?: string | undefined;
    inputSchema: {
        properties?: Record<string, unknown> | undefined;
        required?: string[] | undefined;
        type: "object";
    };
    name: string;
    outputSchema?: {
        properties?: Record<string, unknown> | undefined;
        required?: string[] | undefined;
        type: "object";
    } | undefined;
    title?: string | undefined;
};

export { ToolAnnotations };

type ToolAnnotations = {
    destructiveHint?: boolean | undefined;
    idempotentHint?: boolean | undefined;
    openWorldHint?: boolean | undefined;
    readOnlyHint?: boolean | undefined;
    title?: string | undefined;
};

export { ToolListChangedNotification };

type ToolListChangedNotification = {
    method: "notifications/tools/list_changed";
    params?: {
        _meta?: Record<string, unknown> | undefined;
    } | undefined;
};

export { Tool };

type UnsubscribeRequest = {
    method: "resources/unsubscribe";
    params: {
        _meta?: {
            progressToken?: ProgressToken | undefined;
        } | undefined;
        uri: string;
    };
};

export { UnsubscribeRequest };