import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { createSelector } from 'reselect'
import { requestTopHeadlines } from '../../store/article/actions'
import { requestSources } from '../../store/source/actions'

const selector = createSelector(
	store => store.article.get('articles').toArray(),
	store => store.source.get('sources').toArray(),
	store => store.article.getIn(['headlines', 'top', 'articles']).toArray(),
	(articles, sources, topHeadlines) => {
		const categories = [...new Set(sources.map(source => source.category))]
		return {
			articles,
			sources,
			categories,
			topHeadlines
		}
	}
)

export const mapStateToProps = (store) => {
	return selector(store)
}

export const mapDispatchToProps = (dispatch) => {
	return {
		onLoad: () => {
			dispatch(requestSources())
			dispatch(requestTopHeadlines())
		}
	}
}

export default (component) => withRouter(connect(mapStateToProps, mapDispatchToProps)(component))
