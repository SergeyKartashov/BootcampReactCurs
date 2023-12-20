import { Fetch } from "@api/fetch_data.js"

export function getMainMenuData() {
    const data = [
        {
            label: 'Кредиты', level: 1, values: [], marked: 0
        },
        {
            label: 'Согласования договоров', level: 1,
            values: [
                {
                    label: 'Отдел юридических вопросов', level: 2,
                    values: [
                        { label: 'Реестр договоров', level: 3, values: [], marked: 0 },
                        { label: 'Реестр приложений', level: 3, values: [], marked: 1 },
                        { label: 'Отчеты', level: 3, values: [], marked: 1 },
                        { label: 'Выписки', level: 3, values: [], marked: 0 },
                    ], marked: 0
                },
                { label: 'Отдел сопровождения сделок', level: 2, values: [], marked: 0 },
                { label: 'Отдел безопасности', level: 2, values: [], marked: 0 },
            ], marked: 0
        },
        {
            label: 'Карточные продукты', level: 1, values: [], marked: 0
        },
    ];
    return Fetch({ 'data': data, });
}