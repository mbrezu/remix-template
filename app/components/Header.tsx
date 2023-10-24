import { Link } from "@remix-run/react";

export default function Header() {
    return (<div>
        <h1>Hello world!</h1>

        <p><Link to="/about">About</Link></p>
    </div>);
}
