import * as React from 'react';

export interface IMiniNavProps {
}

export function MiniNav (props: IMiniNavProps) {
  return (
    <div className="cs-top-header js-top-header">
        <div className="cs-top-header__content-wr">
            <ul className="cs-top-header__links">
                <li className="cs-top-header__links-item"><a href="contact-me.html">FAQ</a></li>
                <li className="cs-top-header__links-item"><a href="contact-us.html">CONTACT</a></li>
                <li className="cs-top-header__links-item"><a href="tel:+390245332287">+3902 45 33 22 87</a></li>
            </ul>
            <div className="cs-top-header__desc">
                <p>MON - FRI: 08:00 - 05:00 PM</p>
            </div>
        </div>
    </div>
  );
}
