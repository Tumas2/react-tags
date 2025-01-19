import React from 'react'

function Tag(props) {
	return (
		<button type='button' className={props.classNames.selectedTag} title={props.removeButtonText} onClick={props.onDelete}>
			<span className={props.classNames.selectedTagName}>{props.tag.name}</span>
			{props.tagIcon && <span className={props.classNames.selectedTagIcon}>{props.tagIcon}</span>}
		</button>
	)
}

export default Tag
