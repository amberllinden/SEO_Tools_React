import React, { useState } from "react";
import TextComponent from "./text";
import Button from "./button";

const Comparison = () => {
    const [ fistArray, setFistArray ] = useState('');
    const [ secondArray, setSecondArray ] = useState('');
    const [ resultArray, setResultArray ] = useState([]);

    const changeResultArray = (fistArray, secondArray) => {
        const commonString = fistArray + '\n' + secondArray;
        const uniqueArray = new Set(commonString.split('\n'));
        const result = [...uniqueArray];
        setResultArray(result);
    }

    return (
        <>
            <TextComponent
                tag='h2'
                content='Сравнение списков и удаление дубликатов'
                styleClass='application-array_comparison-title'
           />
            <TextComponent
                tag='p'
                content={
                    <>
                        Инструмент сравнит два списка и выведет единый без дубликатов. Регистр букв в элементе списка не учитывается.
                        <br />
                        Каждый элемент списка вводите с новой строки без запятых и лишних пробелов.
                    </>
                }
                styleClass='application-array_comparison-text'
            />
            <div className="application-array_comparison-inputs">
                <textarea 
                    className="application-array_comparison-textarea"
                    placeholder='Первый массив'
                    rows="20"
                    cols="25"
                    value={fistArray}
                    onChange={(e) => setFistArray(e.target.value)}
                />
                <textarea 
                    className="application-array_comparison-textarea"
                    placeholder='Второй массив'
                    rows="20"
                    cols="25"
                    value={secondArray}
                    onChange={(e) => setSecondArray(e.target.value)}
                />
            </div>
            <Button
                content='Сравнить'
                onClickFuntion={() => changeResultArray(fistArray, secondArray)}
                styleClass='application-array_comparison-button'
            />
            {resultArray && resultArray.map((item, i) => (
                <TextComponent
                    key={i}
                    tag='div'
                    content={item}
                    styleClass="application-array_comparison-result"
                />
            ))}
        </>
    )
}

export default Comparison;