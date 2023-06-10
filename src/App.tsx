import { css } from "@emotion/react"
import { library } from "@fortawesome/fontawesome-svg-core"

import { HomePage } from "./pages"
import { faIcons } from "./util"

library.add(...faIcons)

export const App = () => {
	return (
		<div css={appContainerCss}>
			<HomePage />
		</div>
	)
}

const appContainerCss = css`
	min-height: 100vh;
	background: #fafafa;
`
