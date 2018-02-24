import { Article, Source } from '../../model'

export enum ResponseStatuses {
	ok = 'ok',
	error = 'error'
}

export type ResponseStatus = {
	readonly status: ResponseStatuses
}

export type ResponseCode = {
	readonly code: string
}

export type ResponseMessage = {
	readonly message: string
}

export type ErrorResponse = ResponseStatus & ResponseCode & ResponseMessage

export type ArticleResponse = ResponseStatus & {
	readonly totalResults: number,
	readonly articles: Article[]
}

export type SourcesResponse = ResponseStatus & {
	readonly totalResults: number,
	readonly sources: Source[]
}
