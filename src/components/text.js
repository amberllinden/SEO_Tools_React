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
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    styleClass: PropTypes.string,
};

export default TextComponent;