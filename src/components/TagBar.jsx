import Tag from "./Tag"

const WRAPPER_STYLES = {
  display: "flex",
  flexWrap: "wrap",
}

export default function TagBar({ tags, onTagSelect, marginTop }) {
  return (
    <div style={WRAPPER_STYLES}>
      {tags.map(tag => {
        return (
          <Tag
            marginTop={marginTop}
            key={tag.name}
            tag={tag}
            onTagSelect={onTagSelect}
          />
        )
      })}
    </div>
  )
}
