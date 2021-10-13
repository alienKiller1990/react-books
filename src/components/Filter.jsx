import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'

class Filter extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Menu secondary>
                <Menu.Item
                    name='all'
                    active={activeItem === 'all'}
                    onClick={this.handleItemClick}>
                    Все
                </Menu.Item>
                <Menu.Item
                    name='popular'
                    active={activeItem === 'popular'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='price_high'
                    active={activeItem === 'price_high'}
                    onClick={this.handleItemClick}>
                    Популярные
                </Menu.Item>
                <Menu.Item
                    name='price_low'
                    active={activeItem === 'price_low'}
                    onClick={this.handleItemClick}>
                    Цена(Дешевые)
                </Menu.Item>
                <Menu.Item
                    name='author'
                    active={activeItem === 'author'}
                    onClick={this.handleItemClick}>
                    Цена(Дорогие)
                </Menu.Item>

            </Menu>
        )
    }
}

export default Filter
