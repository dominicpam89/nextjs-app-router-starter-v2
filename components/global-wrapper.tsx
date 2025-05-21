'use client';
import { ThemeProvider } from './ui/theme-provider';

interface Props {
	children: React.ReactNode;
}

export default function GlobalWrapper({ children }: Props) {
	return (
		<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
			{children}
		</ThemeProvider>
	);
}
