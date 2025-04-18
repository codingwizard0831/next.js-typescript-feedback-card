
import React, { ReactNode } from 'react';
import Link from 'next/link';
import styles from './DefaultLayout.module.css';
import BackgroundGradientAnimation from '../../components/BackgroundGradientAnimation';

type DefaultLayoutProps = {
	children: ReactNode;
};

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
	// Background gradient settings - you can adjust these as needed
	const backgroundSettings = {
		gradientBackgroundStart: 'rgb(20, 0, 30)',
		gradientBackgroundEnd: 'rgb(0, 3, 15)',
		firstColor: '4, 21, 47',
		secondColor: '51, 13, 47',
		thirdColor: '18, 41, 47',
		fourthColor: '37, 9, 9',
		fifthColor: '33, 43, 9',
		pointerColor: '26, 18, 47',
		size: '80%',
		blendingValue: 'hard-light',
		interactive: true,
	};

	return (
		<div className={styles.layout}>
			{/* Background Animation */}
			<BackgroundGradientAnimation {...backgroundSettings} />

			<nav className={styles.nav}>
				<div className={styles.navContent}>
					<Link href="/">
						<span className={styles.logo}>Logo</span>
					</Link>
					<div className={styles.navLinks}>
						<Link href="/experience">
							<span className={styles.navLink}>Experiences</span>
						</Link>
						<Link href="/feedback">
							<span className={styles.navLink}>Leave Feedback</span>
						</Link>
					</div>
				</div>
			</nav>
			<main className={styles.main}>{children}</main>
			<footer className={styles.footer}>
				<div className={styles.footerContent}>
					&copy; {new Date().getFullYear()} YourBrand. All rights reserved.
				</div>
			</footer>
		</div>
	);
};

export default DefaultLayout;