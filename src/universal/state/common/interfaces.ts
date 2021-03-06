import { Article, Country } from '../../model'

export type ArticleState = {
	readonly language: string
	readonly country: Country
	readonly sources: ReadonlyArray<string>
	readonly articles: ReadonlyArray<Article>
	readonly fetched: boolean
	readonly fetching: boolean
	readonly error?: string | Error | null
	readonly total: number
}

export type RootState = {
	article: ArticleState
}
