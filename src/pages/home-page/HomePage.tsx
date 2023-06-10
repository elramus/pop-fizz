import { useEffect, useMemo, useState } from "react"

import { css } from "@emotion/react"

import { BigButton, MainContent } from "./components"

export const HomePage = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [isReady, setIsReady] = useState(false)

	useEffect(() => {
		// Wait a tick before showing the button.
		// Could make this wait for images to load.
		const timer = setTimeout(() => {
			setIsReady(true)
		}, 500)

		return () => {
			clearTimeout(timer)
		}
	}, [])

	const contentContainerCss = useMemo(() => {
		return css`
			position: absolute;
			pointer-events: ${isOpen ? undefined : "none"};
		`
	}, [isOpen])

	return (
		<div css={outerContainerCss}>
			<div css={innerContainerCss}>
				<BigButton isReady={isReady} isOpen={isOpen} setIsOpen={setIsOpen} />

				<div css={contentContainerCss}>
					<MainContent isOpen={isOpen} setIsOpen={setIsOpen} />
				</div>
			</div>
			<p css={copyrightCss}>&copy; {new Date().getFullYear()} D. Luke Ramus</p>
		</div>
	)
}

const outerContainerCss = css`
	display: grid;
	grid-template-rows: 1fr auto;
	align-items: center;
	justify-content: center;
	min-height: 100vh;
`
const innerContainerCss = css`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
`
const copyrightCss = css`
	padding: 1rem;
	opacity: 0.5;
	font-size: 12px;
	text-transform: uppercase;
	letter-spacing: 0.5px;
`
