import Link from "next/link";

export default () => {
	return (
		<>
			<h1>Components</h1>
			<ul>
				<li>
					<Link href="/avatar">Avatar</Link>
				</li>
				<li>
					<span className="comingsoon">Avatar Group</span>
				</li>
				<li>
					<span className="comingsoon">Badge</span>
				</li>
				<li>
					<Link href="/breadcrumb">Breadcrumb</Link>
				</li>
				<li>
					<Link href="/button">Button</Link>
				</li>
				<li>
					<Link href="/checkbox">Checkbox</Link>
				</li>
				<li>
					<Link href="/dialog">Dialog</Link>
				</li>
				<li>
					<span className="comingsoon">Drawer</span>
				</li>
				<li>
					<Link href="/input">Input</Link>
				</li>
				<li>
					<span className="comingsoon">Menu</span>
				</li>
				<li>
					<Link href="/message">Message</Link>
				</li>
				<li>
					<span className="comingsoon">Popover</span>
				</li>
				<li>
					<span className="comingsoon">Prompt</span>
				</li>
				<li>
					<span className="comingsoon">Radio</span>
				</li>
				<li>
					<Link href="/select">Select</Link>
				</li>
				<li>
					<span className="comingsoon">Select Menu</span>
				</li>
				<li>
					<Link href="/snippet">Snippet</Link>
				</li>
				<li>
					<Link href="/spinner">Spinner</Link>
				</li>
				<li>
					<Link href="/switch">Switch</Link>
				</li>
				<li>
					<span className="comingsoon">Tabs</span>
				</li>
				<li>
					<Link href="/textarea">Textarea</Link>
				</li>
				<li>
					<span className="comingsoon">Toaster</span>
				</li>
				<li>
					<Link href="/toggle">Toggle</Link>
				</li>
				<li>
					<span className="comingsoon">Toggle Group</span>
				</li>
				<li>
					<Link href="/tooltip">Tooltip</Link>
				</li>
			</ul>

			<h1>Examples</h1>
			<ul>
				<li>
					<Link href="/samples/shell">Application Shell</Link>
				</li>
				<li>
					<Link href="/samples/login">Login</Link>
				</li>
				<li>
					<Link href="/samples/register">Register</Link>
				</li>
			</ul>
		</>
	);
};
