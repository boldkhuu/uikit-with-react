# Uikit with React

Uikit components built with React

## Setup

Add Uikit css to your project. It enables people can use their own custom Uikit library.

- Uikit on Github: https://github.com/uikit/uikit
- Compiled version: https://github.com/uikit/bower-uikit

Then:

```
$ npm install uikit-with-react
```

```
import UikitReact from 'uikit-with-react';

const { Button, ButtonGroup, Dropdown, Glyph, Grid, Height, Table, Width } = UikitReact;
```

## Documentation

Comprehensive documentations are coming soon.

## Components

### Button

```
// button
<Button
    type="button"
    colorStyle="primary"
    size="small"
    onclick={this._yourCustomHandler}
    className="your-custom-class">
    Click me!
</Button>

// a
<Button
    href="http://domain.com/"
    colorStyle="primary"
    size="small"
    className="your-custom-class">
    Click me!
</Button>
```

- type: 'button' | 'submit'
- colorStyle: 'primary' | 'success' | 'danger' | 'link'
- size: 'mini' | 'small' | 'large'

### ButtonGroup

```
<ButtonGroup className="your-custom-class">
    ...
</ButtonGroup>
```

### Dropdown

```
<Dropdown
    mode="click"
    toggler={<YourToggleComponent>Maybe button</YourToggleComponent>}
    small
    className="your-custom-class">
    <a href="#">Item 1</a>
    <a href="#">Item 2</a>
    ...
</Dropdown>
```

- mode: 'hover' - default | 'click'
- small: false - default | true

### Glyph

```
<Glyph icon="cog" className="your-custom-class" />
```

### Grid

```
<Grid
    gutter="collapse"
    divider>
    ...
</Grid>
```

- gutter: 'medium' | 'small' | 'collapse'
- divider: false - default | true

### Height

```
<Height className="your-custom-class">
    ...
</Height>
```

### Width

```
<Width
    all="1-2"
    small="1-3"
    medium="1-4"
    large="1-2"
    className="your-custom-class">
    ...
</Width>
```

### Table

```
<Table className="your-custom-class">
    <thead></thead>
    <tbody>
        <tr>
            <td>Cell</td>
        </tr>
        ...
    </tbody>
</Table>
```
