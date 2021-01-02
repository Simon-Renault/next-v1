import css from './footer.module.scss';
import Img from '@/components/image/image';
const Footer = (): JSX.Element => (
	<footer className={css.footer}>
		<div className={css.top}>
			<Img className={css.image} src="https://simonr.s3.eu-west-2.amazonaws.com/top.jpeg" />
		</div>
		<div className={css.inner}>
			<div className={css.col}>
				<div>
					<div className={css.title}>Newsletter</div>
					<p className={css.p}>
						Subscribe to my newsletter to get news about new projects, events and exhibitions. No spam, no
						junkmail, that is a promise.
					</p>
					<div className={css.input}>
						<input type="text" />
						<button>Subscribe</button>
					</div>
				</div>
			</div>
			<div className={css.col}>
				<a href="#">Tweeter</a>
				<a href="#">Instagram</a>
				<a href="#">Facebook</a>
				<a href="#">Tumblr</a>
			</div>
		</div>
	</footer>
);

export default Footer;
