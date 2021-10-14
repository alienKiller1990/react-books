import { Menu } from 'semantic-ui-react'
import React from 'react'

const MenuComponent = ({ totalPrice, count }) => {
    return (
        <Menu>
            <Menu.Item
                name='browse'
            // onClick={this.handleItemClick}
            >
                Магазин книг
            </Menu.Item>

            <Menu.Menu position='right'>
                <Menu.Item
                    name='signup'
                // onClick={this.handleItemClick}
                >
                    Итого: &nbsp; <b>{totalPrice}</b>&nbsp; руб.
                </Menu.Item>

                <Menu.Item
                    name='help'
                // onClick={this.handleItemClick}
                >
                    Корзина ( <b>{count}</b> )
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    )
}

export default MenuComponent
