import React from "react";
import PropTypes from "prop-types";

const TextComponent = (props) => {
    const { tag, content, styleClass } = props;
    const TagName = tag;
    return (
        <TagName className={styleClass}>{content}</TagName>
    );
};

TextComponent.propTypes = {
    tag: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    styleClass: PropTypes.string,
};

export default TextComponent;