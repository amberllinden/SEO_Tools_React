import React, { useState } from "react";
import TextComponent from "./text";
import Button from "./button";

const Counter = () => {
    const [ urlList, setUrlList ] = useState('');
    const [ resultList, setResultList ] = useState([]);

    const getResutList = urlList => {
        const counts = {};
        const initialUrlArray = urlList.trim().split('\n');
        const Exp = /(http:\/\/|https:\/\/)?(www.)?[A-z]*(.com|.org|.net|.ru)/gim;
        const interimArray = initialUrlArray.map(item => item.match(Exp)[0]);
        interimArray.forEach(function (a) {
            counts[a] = counts[a] + 1 || 1;
        });

        let sortableUrl = [];
        for (var count in counts) {
            sortableUrl.push([count, counts[count]]);
        }
        sortableUrl.sort(function (a, b) {
            return b[1] - a[1];
        });

        const result = sortableUrl.map(url => `${url[0]} встречается ${url[1]} раз`);
        setResultList(result);
    }

    return (
        <div className="application-url_counter">
            <TextComponent
                tag="h2"
                content="Встречаемость домена в топ-10"
            />
            <TextComponent
                tag="div"
                content="С помощью инструмента можно посчитать сколько раз домен встречается в списке (топ-5, 10, 20 и тд.)."
            />
            <TextComponent
                tag="div"
                content="Подходит для зон .ru, .com, .org, .net."
            />
            <TextComponent
                tag="div"
                content="Каждый элемент списка вводите с новой строки без запятых и лишних пробелов."
            />
            <textarea
                placeholder="Список url"
                rows="20"
                value={urlList}
                onChange={(e) => setUrlList(e.target.value)}
            />
            <Button
                content="Подсчитать"
                onClickFuntion={() => getResutList(urlList)}
            />
            {resultList && resultList.map((item, i) => (
                <TextComponent
                    key={i}
                    tag="div"
                    content={item}
                />
            ))}
        </div>
    )
}

export default Counter;