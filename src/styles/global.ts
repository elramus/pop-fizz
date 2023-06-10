import { css } from "@emotion/react"
import { shade } from "polished"

import { colors } from "./"

export const globalCss = css`
	body {
		font-family: "Source Code Pro", monospace;
		color: ${colors.text};
	}

	button {
		cursor: pointer;
	}

	p {
		line-height: 1.6;
	}

	a {
		color: ${colors.rose};
		font-weight: bold;
		transition: color 0.15s ease-out;
		&:hover {
			color: ${shade(0.15, colors.rose)};
		}
	}
`
