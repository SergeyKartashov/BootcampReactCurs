import axios from "axios";

class TableData {
    static async getAll(url, limit = 5, page_number = 1) {
        const response = await axios.get(url, { params: { _limit: limit, _page: page_number } }); // url=https://jsonplaceholder.typicode.com/users
        return response;
    }
}

export default TableData;