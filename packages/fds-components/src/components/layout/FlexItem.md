### Shrinking & growing a `FlexItem`
By default, all `FlexItem` components will grow to fill remaining space within the parent
`Flex`. The boolean prop `shrink` will cause a `FlexItem` to shrink to its content size.

```js
<Flex align="center" className="debug--boxModel">
  <FlexItem shrink>
    <img src="https://place-hold.it/60x32/a02385/fff&text=shrink" />
  </FlexItem>
  <FlexItem>
    <img src="https://place-hold.it/60x32/a02385/fff&text=default" />
  </FlexItem>
  <FlexItem>
    <img src="https://place-hold.it/60x32/a02385/fff&text=default" />
  </FlexItem>
  <FlexItem shrink>
    <img src="https://place-hold.it/60x32/a02385/fff&text=shrink" />
  </FlexItem>
</Flex>
```

### Controlling alignment/justification
You can use the same `align` and `justify` prop interface from `Flex` to control alignment and justification of individual `FlexItem` components.

```js
<Flex className="debug--boxModel">
  <FlexItem shrink>
    <img src="https://place-hold.it/60x80/a02385/fff&text=default" />
  </FlexItem>
  <FlexItem shrink align="end">
    <img src="https://place-hold.it/60x32/a02385/fff&text=end" />
  </FlexItem>
  <FlexItem shrink align="start">
    <img src="https://place-hold.it/60x32/a02385/fff&text=start" />
  </FlexItem>
  <FlexItem shrink>
    <img src="https://place-hold.it/60x80/a02385/fff&text=default" />
  </FlexItem>
</Flex>
```

## Flex & FlexItem patterns

### Auto-sized content area with fixed footer
Within a fixed height container, this `Flex` creates a fixed height header and footer and allows the content area to expand to fill the remaining space.

```js
<div style={{ height: '400px' }}>
  <Flex direction="column" align="stretch" className="debug--boxModel">
    <FlexItem shrink>
      <p>This is the header, set to <code>shrink</code>.</p>
    </FlexItem>
    <FlexItem>
      <p>This is the content area. It grows to fill remaining space regardless of how much content this <code>FlexItem</code> contains.</p>
    </FlexItem>
    <FlexItem shrink>
      <p>This is the footer, set to <code>shrink</code>.</p>
    </FlexItem>
  </Flex>
</div>
```

### Comment block
Basic layout of comments in the CB Insights platform. This pattern uses a nested `Flex`.

```js
<Flex>
  <FlexItem shrink>
    <img src="https://place-hold.it/48x48/a02385/fff" />
  </FlexItem>
  <FlexItem>
    <Flex direction="column" noGutters>
      <FlexItem>
        <div style={{ 
          border: '1px solid #d6d4d4', 
          padding: '0.5rem', 
          borderRadius: '6px' 
        }}>
          <p><strong>A dog</strong></p>
          <p>bark bark bork buff boark bork bark berk woof</p>
        </div>
      </FlexItem>
      <FlexItem shrink>
        <p><a href="#">Reply</a> &middot; <a href="#">Delete</a></p>
      </FlexItem>
    </Flex>
  </FlexItem>
</Flex>
```
