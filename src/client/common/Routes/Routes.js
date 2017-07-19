import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { ListContainer, DetailContainer } from '../../containers'

const RedirectWithStatus = ({ from, to, status }) => {
	console.log('RedirectWithStatus', from, to, status)
	return (
		<Route render={({ staticContext }) => {
			// there is no `staticContext` on the client, so
			// we need to guard against that here
			if (staticContext) { staticContext.status = status }
			return <Redirect from={from} to={to} />
		}}
		/>
	)
}

export const Routes = () => (
	<Switch>
		<Route exact path="/home" component={ListContainer} />
		<Route exact path="/home/news" component={ListContainer} />
		<Route exact path="/home/news/:articleId" component={DetailContainer} />
	</Switch>
)

Routes.displayName = 'Routes'

export default Routes
