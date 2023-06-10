import { FC, ReactNode } from "react"

import { Global, ThemeProvider } from "@emotion/react"

import { globalCss, reset, theme } from "./styles"

export interface ProvidersProps {
	children: ReactNode
}

export const Providers: FC<ProvidersProps> = ({ children }) => {
	return (
		<ThemeProvider theme={theme}>
			<Global styles={[reset, globalCss]} />
			{children}
		</ThemeProvider>
	)
}
