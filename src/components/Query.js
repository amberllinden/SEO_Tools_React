import React, { useState } from "react";
import TextComponent from "./text";
import Button from "./button";

const Query = () => {
    const [ firstKeys, setFirstKeys ] = useState('');
    const [ secondKeys, setSecondKeys ] = useState('');
    const [ resultArray, setResultArray ] = useState([]);

    const getKeywordArray = (firstKeys, secondKeys) => {
        const firstArray = firstKeys.split(',');
        const secondArray = secondKeys.split(',');
        const results = firstArray.map(keyword => secondArray.map(key => `${keyword} ${key}`)).flat();
        setResultArray(results);
    }

    return (
        <div className="application-query_processing">
            <TextComponent
                tag='h2'
                content='Дополнение списка ключевых запросов'
            />
            <TextComponent
                tag='div'
                content='Поместив в левое поле основные запросы, а во правое - дополнительные, вы получите итоговый список запросов. Вводите запросы через запятую.'
            />
            <TextComponent
                tag='div'
                content='Например, есть запросы "кирпичи, красные кирпичи, желтые кирпичи" и слова "купить, в москве, недорого", использовав инструмент, вы получите "кирпичи купить, кирпичи в москве, кирпичи недорого" и тд для всех слов в первой группе.'
            />
            <div className="application-query_processing-textarea_container">
                <textarea
                    placeholder='Запросы для обработки'
                    rows='15'
                    cols='25'
                    value={firstKeys}
                    onChange={(e) => setFirstKeys(e.target.value)}
                />
                <textarea
                    placeholder='Запросы для дополнения'
                    rows='15'
                    cols='25'
                    value={secondKeys}
                    onChange={(e) => setSecondKeys(e.target.value)}
                />
            </div>
            <Button
                content='Получить список'
                onClickFuntion={() => getKeywordArray(firstKeys, secondKeys)}
            />
            {resultArray && resultArray.map((item, i) => (
                <TextComponent
                    key={i}
                    tag='div'
                    content={item}
                />
            ))}
        </div>
    )
}

export default Query;