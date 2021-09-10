import { Link } from 'gatsby';
import * as React from 'react';

export interface IAboutProps {
}

export default function About (props: IAboutProps) {

    const [Count, setCount ] = React.useState<number>(0);
        
    return (
        <div>
            <p>About me for all time!</p>
            <Link to='/'>Return Home Dud!!</Link>

            <h1>{`Counter : ${Count}`}</h1>
            <button onClick={() => setCount(Count +1)}>Click me for up to +1 to counter</button>
        </div>
    );
}
