import {  Divider, Link } from '@nextui-org/react';

export default function Footer() {
  return (
    <>
        <footer
        className="text-center  lg:text-left">
            <Divider/>
            <div className="p-4 text-center">
                © 2023 Copyright: 
                <a
                href="#"
                > Globalish</a>
            </div>
        </footer>
    </>
  );
}
