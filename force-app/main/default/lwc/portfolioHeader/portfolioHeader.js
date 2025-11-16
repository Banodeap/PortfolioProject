import { LightningElement, track } from 'lwc';
import Navbar from "@salesforce/resourceUrl/navbar";

export default class PortfolioHeader extends LightningElement {
    @track isMenuOpen = false;
    navbar= Navbar;

    navItems = [
        { id: 'home', label: 'Home', className: 'nav-item active' },
        { id: 'experience', label: 'Experience', className: 'nav-item' },
        { id: 'projects', label: 'Projects', className: 'nav-item' },
        { id: 'skills', label: 'Skills', className: 'nav-item' },
        { id: 'educationAchivements', label: 'Education & Achievements', className: 'nav-item' },
        { id: 'contact', label: 'Contact Me', className: 'nav-item' }
    ];

    get menuClass() {
        return this.isMenuOpen ? 'nav-menu open' : 'nav-menu';
    }

    get menuIcon() {
        return this.isMenuOpen ? true : false;
    }

    toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
    }

    handleNavClick(event) {
        const selectedId = event.currentTarget.dataset.id;
        this.navItems = this.navItems.map(item => ({
            ...item,
            className: item.id === selectedId ? 'nav-item active' : 'nav-item'
        }));

        // Close menu automatically after selection (on mobile)
        this.isMenuOpen = false;

        // Fire event for section change
        this.dispatchEvent(
            new CustomEvent('sectionchangehandle', { detail: selectedId })
        );
    }
}