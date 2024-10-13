import {Table} from './component/Table/Table.js';

customElements.define("styled-table", Table);

const newData = [
    ["1234", "dcode", "Australia"],
    ["4563", "red.square", "United Satate"],
];

/**
 * @type {Table}
 */
const usersTable = document.getElementById("users");
usersTable.data = newData;