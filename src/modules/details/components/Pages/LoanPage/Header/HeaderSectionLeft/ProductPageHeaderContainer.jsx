import classes from "./styles.module.css"
import { PageTitle } from './PageTitle.jsx';
import { Breadcrumbs } from './Breadcrumbs.jsx';

const title = "Продукт: Равномерное распределение ОД";

const breadcrumbItems = [
    { label: 'Договор или продукт', link: '#' },
    { label: 'Кредит', link: '#' },
];

export function ProductPageHeaderContainer() {
    return (
        <div className={classes.ProductPageHeaderContainer}>
            <Breadcrumbs items={breadcrumbItems} />
            <PageTitle title={title} />
        </div>)
}