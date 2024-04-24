import './css/styles.css';
import { Menubar } from 'primereact/menubar';

const Header = () => {
        const items = [
            {
                label: 'Home',
                icon: 'pi pi-home'
            },
            {
                label: 'Contact',
                icon: 'pi pi-envelope'
            }
        ];
        return (
            <div className="card">
                <Menubar model={items} />
            </div>
        )
};

export default Header;
