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
    }
]

export default menu;
