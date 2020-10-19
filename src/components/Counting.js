import React, { useState } from "react";
import TextComponent from "./text";
import Button from "./button";

const Counting = () => {
    const [ text, setText ] = useState('');
    const [ simbolsCount, setSimbolsCount ] = useState({ withSpace: 0, withoutSpace: 0 });

    const getSimbolsCounts = text => {
        const withSpace = text.length;
        const withoutSpace = text.replace(/\s+/g, '').replace(/\n/g, '').length;
        setSimbolsCount({ withSpace, withoutSpace });
    }

    return (
        <div className="application-counting_characters">
            <TextComponent
                tag='h2'
                content='Подсчет количества символов'
                styleClass='application-counting_characters-title'
            />
            <TextComponent
                tag='div'
                content='С помощью инструмента вы подсчитаете количество символов в тексте: полных, а так же без пробелов и переводов строки.'
                styleClass='application-counting_characters-text'
            />
            <div className="application-counting_characters-container">
                <textarea
                    className="application-counting_characters-textarea"
                    placeholder='Вставить текст'
                    rows="40"
                    cols="55"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <Button
                    content='Подсчитать'
                    onClickFuntion={() => getSimbolsCounts(text)}
                    styleClass='application-counting_characters-button'
                />
            </div>
            <div className="application-counting_characters-container_text">
                <TextComponent
                    tag='div'
                    content={`С пробелами: ${simbolsCount.withSpace}`}
                    styleClass='application-counting_characters-text_bordered'
                />
                <TextComponent
                    tag='div'
                    content={`Без пробелов: ${simbolsCount.withoutSpace}`}
                    styleClass='application-counting_characters-text_bordered'
                />
            </div>
        </div>
    )
}

export default Counting;