import app from 'flarum/common/app';
import { extend, override } from 'flarum/extend';
import IndexPage from 'flarum/components/IndexPage';

export default function () {

    extend(IndexPage.prototype, 'sidebarItems', function (items) {
        console.log(items);
    })

}