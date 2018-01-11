import { Location } from 'vue-router'

export interface Menu {
    title: String
    route: Location
}

const menu: Menu[] = [
    {
        title: 'Клиенты',
        route: { name: 'clients' }
    },
    {
        title: 'Button',
        route: { name: 'button' }
    },
    {
        title: 'Checkbox',
        route: { name: 'checkbox' }
    }
]

export default menu;
