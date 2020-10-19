import React, { useState } from "react";
import TextComponent from "./text";
import Button from "./button";
import Input from "./input";

const Processor = () => {
    const [ keyString, setKeyString ] = useState('');
    const [ resultKey, setResultKey ] = useState('');

    const getResultString = (mutableString) => {
        const resultString = `"!${mutableString.trim()}"`.replace(/ /g, ' !');
        setResultKey(resultString);
    }

    return (
        <div className="application-word_processor">
            <TextComponent
                tag="h2"
                content="Расстановка операторов для WordStat"
                styleClass="application-word_processor-title"
            />
            <TextComponent
                tag="div"
                content="Введите в форму ниже ключевой запрос. Избегайте пробелов в начале фразы и в конце, лишних пробелов между словами."
                styleClass="application-word_processor-text"
            />
            <Input
                value={keyString}
                onChangeFunc={(e) => setKeyString(e.target.value)}
                isWrapped={false}
                inputType="text"
                styleClass="application-word_processor-input"
                placeholder="Ввести фразу"
            />
            <Button
                content="Получить результат"
                onClickFuntion={() => getResultString(keyString)}
                styleClass="application-word_processor-button"
            />
            <TextComponent
                tag="div"
                content="Вот, что у нас получилось:"
                styleClass="application-word_processor-text"
            />
            {resultKey && 
                <TextComponent
                    tag="div"
                    content={resultKey}
                    styleClass="application-word_processor-text" 
                />
            }
        </div>
    )
}

export default Processor;
