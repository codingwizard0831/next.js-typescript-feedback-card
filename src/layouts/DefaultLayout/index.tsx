
import React, { ReactNode } from 'react';
import Link from 'next/link';
import styles from './DefaultLayout.module.css';

type DefaultLayoutProps = {
	children: ReactNode;
};

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
	return (
		<div className={styles.layout}>
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