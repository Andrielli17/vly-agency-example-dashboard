import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
<div style={{
        flex: '0 0 50px',
        background: 'red',
        display: 'flex',
      }}>
        <span style={{
          flex: '0 0 10%',

        }}>LOGO</span>
        <ul style={{
          listStyleType: 'none',
          marginLeft: 'auto'

        }}>
          <li style={{
            display: 'inline-block'
          }}>Item 1</li>
          <li style={{
            display: 'inline-block'
          }}>Item 1</li>
          <li style={{
            display: 'inline-block'
          }}>Item 1</li>
          <li style={{
            display: 'inline-block'
          }}>Item 1</li>
        </ul>
      </div>
    )
  }
}
