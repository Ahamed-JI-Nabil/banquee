import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer class="footer p-10">
                <div>
                    <a href='/' className="btn btn-ghost text-2xl normal-case text-accent ">banquee.</a>
                </div>
                <div>
                    <span class="footer-title opacity-100">About</span>
                    <a href='/' class="link link-hover opacity-50">Features</a>
                    <a href='/' class="link link-hover opacity-50">Pricing</a>
                    <a href='/' class="link link-hover opacity-50">Support</a>
                </div>
                <div>
                    <span class="footer-title opacity-100">Blog</span>
                    <a href='/' class="link link-hover opacity-50">Products</a>
                    <a href='/' class="link link-hover opacity-50">Technology</a>
                    <a href='/' class="link link-hover opacity-50">Crypto</a>
                </div>
                <div>
                    <span class="footer-title opacity-100">Webflow</span>
                    <a href='/' class="link link-hover opacity-50">Styleguide</a>
                    <a href='/' class="link link-hover opacity-50">Licensing</a>
                    <a href='/' class="link link-hover opacity-50">Changelog</a>
                </div>
                <div>
                    <span class="footer-title opacity-100">Social Media</span>
                    <a href='/' class="link link-hover opacity-50">Twitter</a>
                    <a href='/' class="link link-hover opacity-50">Facebook</a>
                    <a href='/' class="link link-hover opacity-50">Instagram</a>
                </div>
            </footer>
            <hr className="mx-44" />
            <footer class="footer px-44 py-4 text-slate-400">
                <div class="items-center grid-flow-col">
                    <p className=''>&copy; Made by <span className='text-accent'>Pawel Gola</span> - Powered by <span className='text-accent'>Webflow</span></p>
                </div>
                <div class="md:place-self-center md:justify-self-end">
                    <div class="grid grid-flow-col gap-4">
                        <p>Impressum</p>
                        <p>Datenschutz</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;